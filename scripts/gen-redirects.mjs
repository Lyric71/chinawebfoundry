/**
 * Regenerate the `redirects` array in vercel.json from the canonical routing
 * table in src/i18n/routes.ts.
 *
 * For every non-English locale we redirect any historically-indexed URL variant
 * to the one canonical localized URL. Two failure modes exist because the site
 * localized directories and slugs in separate deploys, so Google indexed
 * intermediate combinations:
 *   1. English directory + English slug   (/es/services/strategy-audit/)
 *   2. Localized directory + English slug (/es/servicios/strategy-audit/)
 *   3. English directory + localized slug (/es/services/estrategia-auditoria/)
 * All three collapse to: localized directory + localized slug.
 *
 * Run: node scripts/gen-redirects.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  staticRoutes,
  serviceSlugs,
  caseStudySlugs,
  guideSlugs,
  localizePath,
} from '../src/i18n/routes.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const locales = ['fr', 'es', 'de'];

const contentSections = [
  { dir: '/services/', slugs: serviceSlugs },
  { dir: '/work/', slugs: caseStudySlugs },
  { dir: '/resources/china-web-guide/', slugs: guideSlugs },
];

// Collect { source -> destination }, de-duplicated, source !== destination.
const map = new Map();
const add = (source, destination) => {
  if (source === destination) return;
  if (!map.has(source)) map.set(source, destination);
};

// Bare-locale and un-slashed convenience redirects (kept from the prior file).
for (const l of locales) add(`/${l}`, `/${l}/`);
add('/services', '/services/');

for (const locale of locales) {
  const prefix = `/${locale}`;

  // Static pages: English path under the locale -> localized path.
  for (const canonical of Object.keys(staticRoutes)) {
    const dest = localizePath(canonical, locale); // includes prefix
    add(prefix + canonical, dest);
  }

  // Content detail pages: every wrong dir/slug combination -> canonical.
  for (const { dir, slugs } of contentSections) {
    const localizedDir = staticRoutes[dir]?.[locale] ?? dir; // e.g. /leistungen/
    for (const [id, trans] of Object.entries(slugs)) {
      const localizedSlug = trans[locale];
      const dest = `${prefix}${localizedDir}${localizedSlug}/`;
      add(`${prefix}${dir}${id}/`, dest); // English dir + English slug
      add(`${prefix}${localizedDir}${id}/`, dest); // localized dir + English slug
      add(`${prefix}${dir}${localizedSlug}/`, dest); // English dir + localized slug
    }
  }
}

const redirects = [...map.entries()].map(([source, destination]) => ({
  source,
  destination,
  permanent: true,
}));

const vercelPath = join(root, 'vercel.json');
const vercel = JSON.parse(readFileSync(vercelPath, 'utf8'));
vercel.redirects = redirects;
writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n');

console.log(`Wrote ${redirects.length} redirects to vercel.json`);
