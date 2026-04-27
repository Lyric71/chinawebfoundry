// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://chinawebfoundry.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
        },
      },
      // Per-page SEO defaults. Google uses these to prioritise crawl.
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Skip 404 page from sitemap.
      filter: (page) => !page.includes('/404'),
      // Adjust priority by route + add x-default hreflang for the EN canonical.
      serialize(item) {
        const url = item.url;
        const path = new URL(url).pathname;
        const isFr = path.startsWith('/fr/') || path === '/fr';

        // Priority by route type
        if (path === '/' || path === '/fr/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/^\/(fr\/)?services\/?$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/(fr\/)?services\/[^/]+\/?$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/(fr\/)?work(\/|$)/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(fr\/)?resources\/china-web-guide\/[^/]+\/?$/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(fr\/)?(who-we-are|wordpress|astro|wechat|china-site-scanner|contact)\/?$/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(fr\/)?(privacy-policy|terms-of-service|cookie-policy)\/?$/.test(path)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }

        // Add x-default hreflang pointing to the EN canonical for this page.
        // (Google picks x-default when no language preference matches.)
        if (item.links && item.links.length > 0) {
          const enLink = item.links.find((l) => l.lang === 'en');
          if (enLink && !item.links.find((l) => l.lang === 'x-default')) {
            item.links.push({ lang: 'x-default', url: enLink.url });
          }
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
});
