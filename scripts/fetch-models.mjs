import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/models.json');

const OPENROUTER_API = 'https://openrouter.ai/api/v1/models';

const PROVIDER_META = {
  openai: { label: 'OpenAI', openWeight: false, priority: 1 },
  anthropic: { label: 'Anthropic', openWeight: false, priority: 1 },
  google: { label: 'Google', openWeight: false, priority: 1 },
  deepseek: { label: 'DeepSeek', openWeight: true, priority: 1 },
  'x-ai': { label: 'xAI', openWeight: false, priority: 2 },
  'meta-llama': { label: 'Meta Llama', openWeight: true, priority: 2 },
  qwen: { label: 'Qwen', openWeight: true, priority: 2 },
  mistralai: { label: 'Mistral', openWeight: true, priority: 2 },
  cohere: { label: 'Cohere', openWeight: false, priority: 3 },
  perplexity: { label: 'Perplexity', openWeight: false, priority: 3 },
  amazon: { label: 'Amazon Nova', openWeight: false, priority: 3 },
  moonshotai: { label: 'Moonshot', openWeight: true, priority: 3 },
  minimax: { label: 'MiniMax', openWeight: true, priority: 3 },
  'z-ai': { label: 'Z.AI', openWeight: true, priority: 3 }
};

const EXCLUDED_SUFFIXES = [
  ':free',
  ':extended',
  ':nitro',
  ':floor',
  ':online',
  ':batch',
  ':beta',
  ':thinking',
  ':exacto'
];

function slugify(id) {
  return id
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanDisplayName(rawName, providerLabel) {
  let name = (rawName || '').trim();
  const prefixIdx = name.indexOf(': ');
  if (prefixIdx > 0 && prefixIdx < 24) {
    name = name.slice(prefixIdx + 2).trim();
  }
  return name || providerLabel;
}

function cleanDescription(rawDesc) {
  const plain = String(rawDesc || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~#>]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length <= 220) return plain;
  const slice = plain.slice(0, 220);
  const lastPeriod = slice.lastIndexOf('. ');
  if (lastPeriod >= 100) return slice.slice(0, lastPeriod + 1);
  const lastSpace = slice.lastIndexOf(' ');
  return (lastSpace >= 80 ? slice.slice(0, lastSpace) : slice).replace(/[,:;.\-\s]+$/, '') + '…';
}

function roundPrice(num) {
  if (!Number.isFinite(num) || num < 0) return 0;
  if (num >= 1) return Math.round(num * 100) / 100;
  if (num >= 0.01) return Math.round(num * 1000) / 1000;
  return Math.round(num * 10000) / 10000;
}

function classifyTier(inputPerM, outputPerM, id) {
  const blended = (inputPerM * 3 + outputPerM) / 4;
  const lower = id.toLowerCase();
  if (lower.includes('reason') || lower.includes('r1') || lower.includes('o1') || lower.includes('o3') || lower.includes('o4') || lower.includes('think')) {
    return 'reasoning';
  }
  if (blended <= 0.6) return 'budget';
  if (blended >= 4.0) return 'flagship';
  return 'balanced';
}

async function main() {
  console.log('[fetch-models] Fetching live pricing from OpenRouter...');
  const res = await fetch(OPENROUTER_API, {
    headers: { 'User-Agent': 'AIStackCalc-AutoUpdater/1.0' }
  });
  if (!res.ok) {
    throw new Error(`OpenRouter API returned HTTP ${res.status}`);
  }
  const payload = await res.json();
  const rawModels = Array.isArray(payload?.data) ? payload.data : [];
  console.log(`[fetch-models] Received ${rawModels.length} raw models.`);

  const byProvider = new Map();

  for (const m of rawModels) {
    const id = String(m?.id || '');
    if (!id.includes('/')) continue;
    if (EXCLUDED_SUFFIXES.some((s) => id.endsWith(s))) continue;
    if (
      id.includes('(free)') ||
      id.includes('preview-0') ||
      id.includes('audio-preview') ||
      id.includes('realtime') ||
      id.includes('guard') ||
      id.includes('moderation') ||
      id.includes('embed') ||
      /-\d{4}$/.test(id)
    ) continue;

    const [providerKey] = id.split('/');
    const pMeta = PROVIDER_META[providerKey];
    if (!pMeta) continue;

    const promptPerTok = Number.parseFloat(m?.pricing?.prompt ?? '-1');
    const completionPerTok = Number.parseFloat(m?.pricing?.completion ?? '-1');
    if (!Number.isFinite(promptPerTok) || !Number.isFinite(completionPerTok)) continue;
    if (promptPerTok <= 0 || completionPerTok <= 0) continue;

    const inputPerM = roundPrice(promptPerTok * 1_000_000);
    const outputPerM = roundPrice(completionPerTok * 1_000_000);
    if (inputPerM <= 0 || outputPerM <= 0 || inputPerM > 200 || outputPerM > 600) continue;

    const contextLength = Number(m?.context_length || 0);
    if (contextLength < 8000) continue;

    const created = Number(m?.created || 0);
    const displayName = cleanDisplayName(m?.name, pMeta.label);
    const slug = slugify(id);

    const record = {
      id,
      slug,
      name: displayName,
      providerKey,
      provider: pMeta.label,
      openWeight: pMeta.openWeight,
      inputPerM,
      outputPerM,
      blendedPerM: roundPrice((inputPerM * 3 + outputPerM) / 4),
      contextLength,
      tier: classifyTier(inputPerM, outputPerM, id),
      created,
      priority: pMeta.priority,
      description: cleanDescription(m?.description)
    };

    if (!byProvider.has(providerKey)) byProvider.set(providerKey, []);
    byProvider.get(providerKey).push(record);
  }

  // Keep the freshest & highest-signal models per provider so the catalog stays fast, clean, and SEO-focused
  const perProviderLimit = {
    openai: 10,
    anthropic: 8,
    google: 8,
    deepseek: 6,
    'x-ai': 5,
    'meta-llama': 6,
    qwen: 6,
    mistralai: 6,
    cohere: 3,
    perplexity: 3,
    amazon: 3,
    moonshotai: 3,
    minimax: 3,
    'z-ai': 3
  };

  const curated = [];
  const seenSlugs = new Set();

  for (const [providerKey, list] of byProvider.entries()) {
    list.sort((a, b) => b.created - a.created || b.contextLength - a.contextLength);
    const limit = perProviderLimit[providerKey] || 4;
    let count = 0;
    for (const item of list) {
      if (seenSlugs.has(item.slug)) continue;
      seenSlugs.add(item.slug);
      curated.push(item);
      count++;
      if (count >= limit) break;
    }
  }

  // Sort globally: tier-1 providers first, then newest first
  curated.sort((a, b) => a.priority - b.priority || b.created - a.created || a.blendedPerM - b.blendedPerM);

  if (curated.length < 20) {
    throw new Error(`Safety abort: only ${curated.length} models passed filters (expected >= 20). Keeping existing models.json intact.`);
  }

  // Build top cross-provider comparison pairs automatically from the newest flagship/budget models of top providers
  const topForCompare = [];
  const compareProviders = ['openai', 'anthropic', 'google', 'deepseek', 'x-ai', 'qwen', 'meta-llama', 'mistralai'];
  for (const p of compareProviders) {
    const pModels = curated.filter((m) => m.providerKey === p).slice(0, 2);
    topForCompare.push(...pModels);
  }

  const comparisons = [];
  const seenPairs = new Set();
  for (let i = 0; i < topForCompare.length; i++) {
    for (let j = i + 1; j < topForCompare.length; j++) {
      const a = topForCompare[i];
      const b = topForCompare[j];
      if (a.providerKey === b.providerKey) continue;
      const pairSlug = `${a.slug}-vs-${b.slug}`;
      if (seenPairs.has(pairSlug)) continue;
      seenPairs.add(pairSlug);
      comparisons.push({
        slug: pairSlug,
        modelA: a.slug,
        modelB: b.slug,
        title: `${a.name} vs ${b.name}`
      });
      if (comparisons.length >= 48) break;
    }
    if (comparisons.length >= 48) break;
  }

  const output = {
    updatedAt: new Date().toISOString(),
    source: 'OpenRouter Public Pricing API',
    totalRawModels: rawModels.length,
    models: curated,
    comparisons
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf-8');
  console.log(`[fetch-models] Saved ${curated.length} curated models and ${comparisons.length} comparisons to src/data/models.json`);
}

main().catch((err) => {
  console.error('[fetch-models] Failed:', err);
  process.exit(1);
});
