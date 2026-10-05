// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import { existsSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeTableWrapper from './src/lib/rehypeTableWrapper.mjs';
import { lastModFor } from './src/lib/gitLastmod.mjs';
import { splitLocale, canonicalizePath, localizePath, englishOnlyRoutes } from './src/i18n/routes.ts';

// Map a sitemap URL's canonical English path + locale to its on-disk source
// files. Returns every existing candidate; lastmod is the latest of them.
// Content collection files keep English ids; static pages use native slugs.
/**
 * @param {string} canonical
 * @param {import('./src/i18n/ui').Locale} locale
 */
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
  const localized = localizePath(canonical, locale).replace(/^\/(?:fr|es|de)/, '') || '/';
  const slug = localized.replace(/^\//, '').replace(/\/$/, '');
  if (slug && !slug.includes('/')) {
    candidates.push(`./src/pages${pageDir}/${slug}.astro`);
  }
  candidates.push(`./src/pages${pageDir}${localized.endsWith('/') ? localized : localized + '/'}index.astro`);
  // Nested static pages (service detail pages keep their body here, the
  // collection entry above only holds the metadata).
  if (slug.includes('/')) {
    candidates.push(`./src/pages${pageDir}/${slug}.astro`);
  }

  return candidates.filter(existsSync);
}

export default defineConfig({
  site: 'https://www.chinawebfoundry.com',
  output: 'static',
  // imageService: false keeps Vercel's Image Optimization service switched off.
  // It is the adapter default, set explicitly so a future upgrade cannot flip it
  // on and start billing image transforms. See the `image` block below.
  adapter: vercel({ imageService: false }),
  // The site-wide Tailwind bundle is about 240KB. Inlined, it rode inside every
  // page's HTML and was downloaded again on each page view. 'auto' ships it as
  // one hashed file under /_astro/, which the Vercel adapter serves with a
  // one-year immutable cache, and still inlines stylesheets under 4KB.
  build: {
    inlineStylesheets: 'auto',
  },
  // Astro 7 defaults to compressHTML: 'jsx', which strips whitespace between
  // inline elements the way JSX does. The pages were written against the
  // earlier HTML-aware compression, so keep it to leave the rendered text as is.
  compressHTML: true,
  markdown: {
    // Astro 7 renders Markdown with Satteri by default. The remark/rehype
    // pipeline is kept (via @astrojs/markdown-remark) so the rehype plugin
    // below keeps running and the guide HTML stays unchanged.
    // Guide tables get their scroll wrapper in the HTML source, not from a
    // client-side script. See src/lib/rehypeTableWrapper.mjs.
    processor: unified({ rehypePlugins: [rehypeTableWrapper] }),
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de'],
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
          de: 'de',
        },
      },
      // Skip the 404 page. The /website-in-china/ routes rejoined the sitemap on
      // 2026-09-06 when M1 shipped (editorial/PLAN.md, week 1 slot 1).
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
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (/^\/services\/?$/.test(canonical)) {
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (/^\/services\/[^/]+\/?$/.test(canonical)) {
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (/^\/work(\/|$)/.test(canonical)) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (/^\/resources\/china-web-guide\/[^/]+\/?$/.test(canonical)) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (/^\/(who-we-are|wordpress-in-china|astro|wechat|china-site-scanner|contact|web-agency-china|wordpress-agency-china)\/?$/.test(canonical)) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (/^\/(privacy-policy|terms-of-service|cookie-policy)\/?$/.test(canonical)) {
          item.priority = 0.3;
          item.changefreq = ChangeFreqEnum.YEARLY;
        }

        // Per-URL lastmod from git history (see src/lib/gitLastmod.mjs).
        const lastmod = lastModFor(sourceFileForPath(canonical, locale));
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        } else {
          delete item.lastmod;
        }

        // Rebuild the hreflang cluster from the canonical path. Native-language
        // slugs differ per locale, so the plugin cannot pair the URLs itself.
        // English-only pages (englishOnlyRoutes) announce no FR/ES/DE twin.
        const enUrl = `${url.origin}${localizePath(canonical, 'en')}`;
        const others = canonical in englishOnlyRoutes ? [] : /** @type {const} */ (['fr', 'es', 'de']);
        item.links = [
          { lang: 'en', url: enUrl },
          ...others.map((lang) => ({ lang, url: `${url.origin}${localizePath(canonical, lang)}` })),
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
    // Every image is optimised locally before it is committed: WebP, max 1050px,
    // produced by scripts/generate-image.mjs or sharp-cli. Nothing is resized or
    // re-encoded at request time on Vercel.
    //
    // The passthrough service serves images byte-for-byte as they are on disk. It
    // also keeps sharp (a ~40MB native binary) and the /_image transform endpoint
    // out of the Vercel serverless function entirely, so there is no code path
    // left that could optimise on their side.
    //
    // Consequence: <Image /> and getImage() no longer transform anything. Add new
    // images as plain <img> tags pointing at an already-optimised file in public/.
    service: passthroughImageService(),
    // No remote hosts may be transformed either.
    domains: [],
    remotePatterns: [],
  },
});
