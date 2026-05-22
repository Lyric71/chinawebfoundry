// @ts-check
import { defineConfig } from 'astro/config';
import { existsSync, statSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { splitLocale, canonicalizePath, localizePath } from './src/i18n/routes.ts';

// Map a sitemap URL's canonical English path + locale to the most likely
// on-disk source file. Returns the first existing candidate, used for lastmod.
// Content collection files keep English ids; static pages use native slugs.
function sourceFileForPath(canonical, locale) {
  const contentSuffix = locale === 'en' ? '' : `-${locale}`;
  const pageDir = locale === 'en' ? '' : `/${locale}`;

  const candidates = [];

  // Home pages
  if (canonical === '/' || canonical === '') {
    candidates.push(`./src/pages${pageDir}/index.astro`);
  }

  // Service detail
  const svcMatch = canonical.match(/^\/services\/([^/]+)\/?$/);
  if (svcMatch) {
    candidates.push(`./src/content/services${contentSuffix}/${svcMatch[1]}.md`);
  }

  // Case study detail
  const workMatch = canonical.match(/^\/work\/([^/]+)\/?$/);
  if (workMatch) {
    candidates.push(`./src/content/casestudies${contentSuffix}/${workMatch[1]}.md`);
  }

  // Guide article
  const guideMatch = canonical.match(/^\/resources\/china-web-guide\/([^/]+)\/?$/);
  if (guideMatch) {
    candidates.push(`./src/content/guides${contentSuffix}/${guideMatch[1]}.md`);
  }

  // Static + section index pages: resolve the localized on-disk path.
  const localized = localizePath(canonical, locale).replace(/^\/(?:fr|es)/, '') || '/';
  const slug = localized.replace(/^\//, '').replace(/\/$/, '');
  if (slug && !slug.includes('/')) {
    candidates.push(`./src/pages${pageDir}/${slug}.astro`);
  }
  candidates.push(`./src/pages${pageDir}${localized.endsWith('/') ? localized : localized + '/'}index.astro`);

  return candidates.find(existsSync);
}

export default defineConfig({
  site: 'https://www.chinawebfoundry.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
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
          es: 'es',
        },
      },
      // Skip 404 page from sitemap.
      filter: (page) => !page.includes('/404'),
      // Per-route priority + per-file lastmod + hreflang cluster.
      serialize(item) {
        const url = new URL(item.url);
        const { locale, path } = splitLocale(url.pathname);
        const canonical = canonicalizePath(path, locale);

        // Priority by route type, keyed on the canonical English path.
        // (Google ignores priority/changefreq, but Bing and others read them.)
        if (canonical === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/^\/services\/?$/.test(canonical)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/services\/[^/]+\/?$/.test(canonical)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/work(\/|$)/.test(canonical)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/resources\/china-web-guide\/[^/]+\/?$/.test(canonical)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(who-we-are|wordpress|astro|wechat|china-site-scanner|contact|web-agency-china)\/?$/.test(canonical)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(privacy-policy|terms-of-service|cookie-policy)\/?$/.test(canonical)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }

        // Per-file lastmod: use source file mtime when we can locate it.
        const src = sourceFileForPath(canonical, locale);
        if (src) {
          item.lastmod = statSync(src).mtime;
        } else {
          delete item.lastmod;
        }

        // Rebuild the hreflang cluster from the canonical path. Native-language
        // slugs differ per locale, so the plugin cannot pair the URLs itself.
        const enUrl = `${url.origin}${localizePath(canonical, 'en')}`;
        item.links = [
          { lang: 'en', url: enUrl },
          { lang: 'fr', url: `${url.origin}${localizePath(canonical, 'fr')}` },
          { lang: 'es', url: `${url.origin}${localizePath(canonical, 'es')}` },
          { lang: 'x-default', url: enUrl },
        ];

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
