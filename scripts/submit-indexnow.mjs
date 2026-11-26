import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteConfig = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../src/config/site.json'), 'utf-8')
);
const modelsData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../src/data/models.json'), 'utf-8')
);

async function main() {
  const key = siteConfig.indexNowKey;
  if (!key || key.startsWith('replace-with')) {
    console.log('[indexnow] Skipping IndexNow submission: indexNowKey not configured in src/config/site.json yet.');
    return;
  }

  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const host = new URL(base).host;

  const urlList = [
    `${base}/`,
    `${base}/tools/token-counter/`,
    `${base}/tools/ai-voice-cost-calculator/`,
    `${base}/tools/gpu-vs-api-calculator/`,
    `${base}/tools/ai-saas-stack-calculator/`,
    `${base}/compare/`,
    `${base}/zh/`,
    `${base}/ja/`,
    `${base}/de/`,
    `${base}/es/`,
    `${base}/fr/`,
    ...modelsData.models.slice(0, 40).map((m) => `${base}/models/${m.slug}/`),
    ...modelsData.comparisons.slice(0, 40).map((c) => `${base}/compare/${c.slug}/`)
  ];

  const payload = {
    host,
    key,
    keyLocation: `${base}/${key}.txt`,
    urlList
  };

  console.log(`[indexnow] Submitting ${urlList.length} URLs for ${host}...`);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload)
  });

  console.log(`[indexnow] Response status: ${res.status}`);
  if (!res.ok) {
    const text = await res.text();
    console.warn(`[indexnow] Non-2xx response (non-fatal): ${text}`);
  }
}

main().catch((err) => {
  console.warn('[indexnow] Warning:', err.message);
});
