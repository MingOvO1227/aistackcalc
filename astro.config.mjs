import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';

const siteConfig = JSON.parse(
  fs.readFileSync(new URL('./src/config/site.json', import.meta.url), 'utf-8')
);

export default defineConfig({
  site: siteConfig.siteUrl,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-Hans',
          ja: 'ja',
          de: 'de',
          es: 'es',
          fr: 'fr'
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
