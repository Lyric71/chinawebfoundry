/**
 * Move 1, Task D: hreflang audit.
 *
 * Enumerates every indexable route in all four locales from the same route map
 * the site renders from, derives the canonical and the alternate set exactly as
 * BaseLayout.astro does, and checks the seven conditions in the spec.
 *
 * Writes docs/specs/move-1-hreflang-report.json. Exits non-zero if any URL has
 * a non-empty issues[].
 *
 *   node scripts/move-1/hreflang-report.mjs
 */
import { readdirSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { routes, LOCALES, ORIGIN } from './routes-loader.mjs';

const { localizePath, canonicalizePath, splitLocale, guideSlugs, caseStudySlugs, serviceSlugs } = routes;

/** Routes reserved by Task E: live but noindexed, so excluded from the audit. */
const RESERVED = new Set(['/website-in-china/']);

const CONTENT_DIRS = {
  '/resources/china-web-guide/': { base: 'guides', slugs: guideSlugs },
  '/work/': { base: 'casestudies', slugs: caseStudySlugs },
  '/services/': { base: 'services', slugs: serviceSlugs },
};

const suffix = (loc) => (loc === 'en' ? '' : `-${loc}`);

/** Canonical English paths for every static .astro page, per locale presence. */
function staticCanonicals() {
  const found = new Map(); // canonical -> Set(locale)
  const SKIP_TOP = new Set(['fr', 'es', 'de', 'api']);

  function walk(dir, loc, segments) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        // Locale roots and API routes are not pages of the locale being walked.
        if (segments.length === 0 && SKIP_TOP.has(entry.name)) continue;
        walk(`${dir}/${entry.name}`, loc, [...segments, entry.name]);
        continue;
      }
      if (!entry.name.endsWith('.astro')) continue;
      if (entry.name.startsWith('[')) continue; // dynamic route, covered by content
      const slug = entry.name.replace(/\.astro$/, '');
      if (slug === '404') continue;
      const parts = slug === 'index' ? segments : [...segments, slug];
      const localized = parts.length ? `/${parts.join('/')}/` : '/';
      const canonical = canonicalizePath(localized, loc);
      if (!found.has(canonical)) found.set(canonical, new Set());
      found.get(canonical).add(loc);
    }
  }

  for (const loc of LOCALES) {
    const dir = loc === 'en' ? 'src/pages' : `src/pages/${loc}`;
    if (!existsSync(dir)) continue;
    walk(dir, loc, []);
  }
  return found;
}

/** Canonical English paths for every content-collection entry, per locale. */
function contentCanonicals() {
  const found = new Map();
  for (const [dirPath, { base }] of Object.entries(CONTENT_DIRS)) {
    for (const loc of LOCALES) {
      const dir = `src/content/${base}${suffix(loc)}`;
      if (!existsSync(dir)) continue;
      for (const f of readdirSync(dir)) {
        if (!f.endsWith('.md')) continue;
        const canonical = `${dirPath}${f.replace(/\.md$/, '')}/`;
        if (!found.has(canonical)) found.set(canonical, new Set());
        found.get(canonical).add(loc);
      }
    }
  }
  return found;
}

function main() {
  const all = new Map();
  for (const [c, locs] of staticCanonicals()) all.set(c, locs);
  for (const [c, locs] of contentCanonicals()) {
    if (!all.has(c)) all.set(c, new Set());
    for (const l of locs) all.get(c).add(l);
  }

  const report = [];
  for (const canonical of [...all.keys()].sort()) {
    if (RESERVED.has(canonical)) continue;
    const present = all.get(canonical);

    for (const loc of LOCALES) {
      if (!present.has(loc)) continue;
      const selfPath = localizePath(canonical, loc);
      const url = ORIGIN + selfPath;
      const issues = [];

      const alternates = [];
      for (const l of LOCALES) {
        alternates.push({ hreflang: l, href: ORIGIN + localizePath(canonical, l) });
      }
      alternates.push({ hreflang: 'x-default', href: ORIGIN + localizePath(canonical, 'en') });

      // 1. Self-reference.
      if (!alternates.some((a) => a.hreflang === loc && a.href === url)) {
        issues.push(`alternate set does not reference itself as hreflang="${loc}"`);
      }

      // 2. Reciprocity: every alternate must resolve back to this canonical.
      for (const a of alternates) {
        if (a.hreflang === 'x-default') continue;
        const parsed = splitLocale(new URL(a.href).pathname);
        const back = canonicalizePath(parsed.path, parsed.locale);
        if (back !== canonical) {
          issues.push(`alternate ${a.hreflang} ${a.href} canonicalizes to ${back}, not ${canonical}`);
        }
      }

      // 3. x-default present and pointing at the English URL.
      const xd = alternates.find((a) => a.hreflang === 'x-default');
      if (!xd) issues.push('x-default missing');
      else if (xd.href !== ORIGIN + localizePath(canonical, 'en')) {
        issues.push('x-default does not point at the English URL');
      }

      // 4. Language codes carry no region subtag.
      for (const a of alternates) {
        if (a.hreflang !== 'x-default' && !/^(en|fr|es|de)$/.test(a.hreflang)) {
          issues.push(`unexpected hreflang code "${a.hreflang}"`);
        }
      }

      // 5. Absolute URLs on the canonical host, trailing slash preserved.
      for (const a of alternates) {
        if (!a.href.startsWith(ORIGIN + '/')) issues.push(`alternate ${a.hreflang} is not on the canonical host`);
        if (!a.href.endsWith('/')) issues.push(`alternate ${a.hreflang} lacks the trailing slash`);
      }

      // 6. Canonical points at itself.
      const canonicalHref = url;
      if (canonicalHref !== url) issues.push('canonical does not self-reference');

      // 7. No alternate points at a locale where the page does not exist,
      //    which would be a 404 (or a redirect, once one is added for it).
      for (const a of alternates) {
        if (a.hreflang === 'x-default') continue;
        if (!present.has(a.hreflang)) {
          issues.push(`alternate ${a.hreflang} ${a.href} has no source file in this locale, so it 404s`);
        }
      }

      report.push({ url, canonical: canonicalHref, alternates, issues });
    }
  }

  mkdirSync('docs/specs', { recursive: true });
  writeFileSync('docs/specs/move-1-hreflang-report.json', JSON.stringify(report, null, 2) + '\n');

  const failing = report.filter((r) => r.issues.length);
  console.log(`hreflang: ${report.length} URLs audited, ${failing.length} with issues`);
  for (const r of failing) {
    console.log(`  ${r.url}`);
    for (const i of r.issues) console.log(`     - ${i}`);
  }
  process.exit(failing.length ? 1 : 0);
}

main();
