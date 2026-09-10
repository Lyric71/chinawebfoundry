#!/usr/bin/env node
/**
 * Guide title guard.
 *
 * House ceiling: a guide article <title> is at most 52 characters. The guide
 * layout enforces it at render time; this walks the built output as well,
 * because the layout cannot see a page rendered by a different layout.
 *
 * HTML entities are decoded before counting. Astro escapes an apostrophe to
 * &#39;, which is 4 characters longer than the character a reader sees.
 *
 *   node scripts/check-titles.mjs
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CEILING = 52;

// The adapter writes a static build here; dist/ is the fallback for a plain
// `astro build` without the Vercel adapter.
const OUT = ['.vercel/output/static', 'dist'].find(existsSync);

const GUIDE_DIRS = {
  en: 'resources/china-web-guide',
  fr: 'fr/ressources/guide-web-chine',
  es: 'es/recursos/guia-web-china',
  de: 'de/ressourcen/china-web-leitfaden',
};

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

if (!OUT) {
  console.error('[check-titles] No build output found. Run the build first.');
  process.exit(1);
}

const failures = [];
let checked = 0;

for (const [locale, dir] of Object.entries(GUIDE_DIRS)) {
  const root = join(OUT, dir);
  if (!existsSync(root)) {
    console.error(`[check-titles] Missing guide directory for ${locale}: ${root}`);
    process.exit(1);
  }
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue; // the index page is not an article
    const file = join(root, entry.name, 'index.html');
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    const raw = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    if (raw === undefined) {
      failures.push({ locale, slug: entry.name, length: 0, title: '(no <title> element)' });
      continue;
    }
    const title = decode(raw);
    checked++;
    if (title.length > CEILING) {
      failures.push({ locale, slug: entry.name, length: title.length, title });
    }
    if (/China Web Guide|Guide du web chinois|Guía de la web china|China-Web-Leitfaden/.test(title)) {
      failures.push({ locale, slug: entry.name, length: title.length, title: `suffix still present: ${title}` });
    }
  }
}

if (failures.length) {
  console.error(`\n[check-titles] ${failures.length} guide title(s) failed, ${checked} checked.\n`);
  for (const f of failures) {
    console.error(`  ${f.locale}  ${String(f.length).padStart(3)}  ${f.slug}`);
    console.error(`        ${f.title}`);
  }
  console.error(`\nCeiling is ${CEILING} characters. Shorten "title" in the guide's frontmatter.\n`);
  process.exit(1);
}

console.log(`[check-titles] ${checked} guide titles, all within ${CEILING} characters.`);
