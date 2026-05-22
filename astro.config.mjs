// @ts-check
import { defineConfig } from 'astro/config';
import { existsSync, statSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Map a sitemap URL pathname to the most likely on-disk source file.
// Returns the first existing candidate so we can use its mtime as lastmod.
function sourceFileForPath(pathname) {
  const localeMatch = pathname.match(/^\/(fr|es)(?:\/|$)/);
  const locale = localeMatch ? localeMatch[1] : 'en';
  const enPath = locale === 'en'
    ? pathname
    : (pathname.replace(new RegExp(`^/${locale}`), '') || '/');
  const contentSuffix = locale === 'en' ? '' : `-${locale}`;
  const pageDir = locale === 'en' ? '' : `/${locale}`;
  const trim = (s) => s.replace(/^\//, '').replace(/\/$/, '');

  const candidates = [];

  // Home pages
  if (enPath === '/' || enPath === '') {
    candidates.push(`./src/pages${pageDir}/index.astro`);
  }

  // Service detail
  const svcMatch = enPath.match(/^\/services\/([^/]+)\/?$/);
  if (svcMatch) {
    candidates.push(`./src/content/services${contentSuffix}/${svcMatch[1]}.md`);
  }

  // Case study detail
  const workMatch = enPath.match(/^\/work\/([^/]+)\/?$/);
  if (workMatch) {
    candidates.push(`./src/content/casestudies${contentSuffix}/${workMatch[1]}.md`);
  }

  // Guide article
  const guideMatch = enPath.match(/^\/resources\/china-web-guide\/([^/]+)\/?$/);
  if (guideMatch) {
    candidates.push(`./src/content/guides${contentSuffix}/${guideMatch[1]}.md`);
  }

  // Top-level static pages (single-segment paths)
  const slug = trim(enPath);
  if (slug && !slug.includes('/')) {
    candidates.push(`./src/pages${pageDir}/${slug}.astro`);
  }

  // Index pages for sections that exist as folders
  candidates.push(`./src/pages${pageDir}${enPath.endsWith('/') ? enPath : enPath + '/'}index.astro`);

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
      // Per-route priority + per-file lastmod from source mtime + x-default hreflang.
      serialize(item) {
        const path = new URL(item.url).pathname;

        // Priority by route type. (Google ignores priority/changefreq, but Bing
        // and other engines still read them. Cheap to set, no downside.)
        if (path === '/' || path === '/fr/' || path === '/es/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/^\/(?:fr\/|es\/)?services\/?$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/(?:fr\/|es\/)?services\/[^/]+\/?$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/(?:fr\/|es\/)?work(\/|$)/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(?:fr\/|es\/)?resources\/china-web-guide\/[^/]+\/?$/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(?:fr\/|es\/)?(who-we-are|wordpress|astro|wechat|china-site-scanner|contact)\/?$/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (/^\/(?:fr\/|es\/)?(privacy-policy|terms-of-service|cookie-policy)\/?$/.test(path)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }

        // Per-file lastmod: use source file mtime when we can locate it.
        // Honest signal beats a uniform build timestamp on every URL.
        const src = sourceFileForPath(path);
        if (src) {
          item.lastmod = statSync(src).mtime;
        } else {
          delete item.lastmod;
        }

        // Add x-default hreflang pointing to the EN canonical for this page.
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
