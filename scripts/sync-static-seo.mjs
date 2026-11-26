import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const siteConfig = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src/config/site.json'), 'utf-8')
);
const publicDir = path.join(rootDir, 'public');
fs.mkdirSync(publicDir, { recursive: true });

const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');
const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap-index.xml\n`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');

const key = String(siteConfig.indexNowKey || '').trim();
if (key && !key.startsWith('replace-with') && /^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  fs.writeFileSync(path.join(publicDir, `${key}.txt`), key + '\n', 'utf-8');
  console.log(`[sync-seo] Synced robots.txt and generated public/${key}.txt`);
} else {
  console.log('[sync-seo] Synced robots.txt (IndexNow key not configured yet)');
}
