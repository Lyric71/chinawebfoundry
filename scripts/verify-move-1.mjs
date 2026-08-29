#!/usr/bin/env node
/**
 * Move 1 verification. Runs against a deployed preview and exits non-zero on
 * any failure.
 *
 *   node scripts/verify-move-1.mjs https://<preview>.vercel.app
 *
 * Covers the seven checks in docs/specs (redirects, orphans, slug collision,
 * internal links, hreflang, reserved routes, metadata ceilings).
 *
 * Check 7 reports metadata ceiling violations on pages this spec did not touch.
 * Those are printed and handed back, not failed on, per the spec.
 */
import { routes, LOCALES, ORIGIN } from './move-1/routes-loader.mjs';

const { localizePath, splitLocale } = routes;

const BASE = (process.argv[2] || process.env.PREVIEW_URL || '').replace(/\/$/, '');
if (!BASE) {
  console.error('usage: node scripts/verify-move-1.mjs <preview-base-url>');
  process.exit(2);
}

const failures = [];
const notes = [];
const fail = (check, msg) => failures.push(`[${check}] ${msg}`);

// ---------------------------------------------------------------- fixtures --

/** Task A + Task B: the eight moved paths. */
const REDIRECTS = [
  ['/wordpress/', '/wordpress-in-china/'],
  ['/de/wordpress/', '/de/wordpress-in-china/'],
  ['/es/wordpress/', '/es/wordpress-en-china/'],
  ['/fr/wordpress/', '/fr/wordpress-en-chine/'],
  ['/resources/china-web-guide/wordpress-agency-china/',
   '/resources/china-web-guide/vetting-a-wordpress-agency-china/'],
  ['/de/ressourcen/china-web-leitfaden/wordpress-agentur-china/',
   '/de/ressourcen/china-web-leitfaden/wordpress-agentur-china-pruefen/'],
  ['/es/recursos/guia-web-china/agencia-wordpress-china/',
   '/es/recursos/guia-web-china/elegir-agencia-wordpress-china/'],
  ['/fr/ressources/guide-web-chine/agence-wordpress-chine/',
   '/fr/ressources/guide-web-chine/choisir-agence-wordpress-chine/'],
];

const OLD_PATHS = REDIRECTS.map(([from]) => from);

/** Task E: the four reserved routes. */
const RESERVED = ['/website-in-china/', '/de/website-in-china/',
                  '/es/sitio-web-en-china/', '/fr/site-web-en-chine/'];

/** Task C: article id -> money-page canonical target. */
const GROUP_HEAD = ['baiduspider-firewall', 'china-website-hosting-guide', 'host-website-in-china',
  'great-firewall-what-it-blocks', 'google-analytics-china', 'china-website-localisation',
  'mobile-first-design-china', 'woocommerce-china-store-guide', 'baidu-structured-data',
  'submitting-urls-to-baidu', 'baidu-search-resource-platform', 'baidu-site-verification',
  'baidu-verification-failed', 'baidu-verification-scope', 'baidu-fast-inclusion-gone',
  'china-data-privacy-pipl-dsl'];
const GROUP_WPA = ['icp-licence-filing-foreign-companies', 'baidu-seo-ranking-in-china',
  'china-content-marketing-strategy', 'china-search-landscape-beyond-baidu'];
const GROUP_WEB = ['baidu-keyword-research-tools', 'baidu-index-traffic-data',
  'baidu-account-foreign-company', 'baidu-account-ownership', 'baidu-ads-account-foreign',
  'baidu-aicaigou-b2b', 'baidu-merchant-center', 'baidu-product-feed',
  'baidu-product-data-destinations'];

const ASSIGNMENTS = [
  ...GROUP_HEAD.map((id) => [id, '/wordpress-in-china/']),
  ...GROUP_WPA.map((id) => [id, '/wordpress-agency-china/']),
  ...GROUP_WEB.map((id) => [id, '/web-agency-china/']),
];

// ------------------------------------------------------------------ helpers --

async function head(path, { redirect = 'manual' } = {}) {
  return fetch(BASE + path, { redirect, headers: { 'user-agent': 'move-1-verify' } });
}

async function get(path) {
  const res = await fetch(BASE + path, { headers: { 'user-agent': 'move-1-verify' } });
  return { status: res.status, url: res.url, html: res.ok ? await res.text() : '' };
}

const tag = (html, re) => { const m = html.match(re); return m ? m[1].trim() : null; };
const title = (h) => tag(h, /<title[^>]*>([\s\S]*?)<\/title>/i);
const metaDesc = (h) => tag(h, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
const robots = (h) => tag(h, /<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
const canonicalOf = (h) => tag(h, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);

function alternatesOf(html) {
  const out = [];
  const re = /<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) out.push({ hreflang: m[1], href: m[2] });
  return out;
}

/** Body-scoped internal links, excluding nav and footer chrome. */
function bodyLinks(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const scope = main ? main[1] : html;
  const out = [];
  const re = /<a\s+[^>]*href=["'](\/[^"'#?]*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(scope))) {
    out.push({ href: m[1], anchor: m[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() });
  }
  return out;
}

async function sitemapUrls() {
  const idx = await get('/sitemap-index.xml');
  if (!idx.html) { fail('setup', 'sitemap-index.xml not reachable'); return []; }
  const children = [...idx.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const child of children) {
    const res = await fetch(child.replace(ORIGIN, BASE));
    const xml = await res.text();
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return urls;
}

// ------------------------------------------------------------------- checks --

async function check1Redirects() {
  console.log('\n1. REDIRECTS');
  for (const [from, to] of REDIRECTS) {
    const res = await head(from);
    if (res.status !== 301) { fail('1', `${from} returned ${res.status}, expected 301`); continue; }
    const loc = res.headers.get('location') || '';
    const abs = loc.startsWith('http') ? loc : BASE + loc;
    if (abs !== BASE + to) { fail('1', `${from} -> ${abs}, expected ${BASE + to}`); continue; }
    const hop = await fetch(abs, { redirect: 'manual' });
    if (hop.status !== 200) { fail('1', `${from} is a chain: ${to} returned ${hop.status}`); continue; }
    console.log(`   ok  ${from} -> ${to}`);
  }
}

function check3Collisions(urls) {
  console.log('\n3. COLLISION CLEARED');
  const byLocale = new Map();
  for (const u of urls) {
    const path = new URL(u).pathname;
    const { locale } = splitLocale(path);
    const seg = path.replace(/\/$/, '').split('/').pop();
    if (!seg) continue;
    const key = `${locale}:${seg}`;
    if (!byLocale.has(key)) byLocale.set(key, []);
    byLocale.get(key).push(path);
  }
  let hits = 0;
  for (const [key, paths] of byLocale) {
    if (paths.length > 1) { hits++; fail('3', `slug collision ${key}: ${paths.join(' , ')}`); }
  }
  console.log(`   ${hits} collisions`);
}

async function check4InternalLinks() {
  console.log('\n4. INTERNAL LINKS');
  const anchorsByLocale = new Map(LOCALES.map((l) => [l, new Map()]));
  for (const [id, target] of ASSIGNMENTS) {
    for (const loc of LOCALES) {
      const articlePath = localizePath(`/resources/china-web-guide/${id}/`, loc);
      const targetPath = localizePath(target, loc);
      const page = await get(articlePath);
      if (!page.html) { fail('4', `${articlePath} returned ${page.status}`); continue; }
      const links = bodyLinks(page.html).filter((l) => l.href === targetPath);
      if (links.length !== 1) {
        fail('4', `${articlePath} links ${targetPath} ${links.length} times, expected exactly 1`);
        continue;
      }
      const map = anchorsByLocale.get(loc);
      const key = `${targetPath}\t${links[0].anchor}`;
      map.set(key, (map.get(key) || 0) + 1);
    }
  }
  for (const loc of LOCALES) {
    console.log(`   --- ${loc} anchor distribution ---`);
    const byTarget = new Map();
    for (const [key, n] of anchorsByLocale.get(loc)) {
      const [t, anchor] = key.split('\t');
      if (!byTarget.has(t)) byTarget.set(t, []);
      byTarget.get(t).push([anchor, n]);
      if (n > 3) fail('4', `${loc}: anchor "${anchor}" used ${n} times, max 3`);
    }
    for (const [t, list] of byTarget) {
      console.log(`   ${t}  (${list.length} distinct anchors, ${list.reduce((a, [, n]) => a + n, 0)} links)`);
      for (const [anchor, n] of list.sort()) console.log(`        ${n}x  ${anchor}`);
    }
  }
}

async function check5Hreflang(urls) {
  console.log('\n5. HREFLANG');
  let bad = 0;
  const checked = new Set();
  for (const u of urls) {
    const path = new URL(u).pathname;
    const page = await get(path);
    if (!page.html) continue;
    const can = canonicalOf(page.html);
    const alts = alternatesOf(page.html);
    const self = BASE + path;

    if (can !== self && can !== ORIGIN + path) { bad++; fail('5', `${path} canonical is ${can}`); }
    if (!alts.some((a) => a.hreflang === 'x-default')) { bad++; fail('5', `${path} has no x-default`); }

    const { locale } = splitLocale(path);
    if (!alts.some((a) => a.hreflang === locale && new URL(a.href).pathname === path)) {
      bad++; fail('5', `${path} alternate set does not self-reference as ${locale}`);
    }
    for (const a of alts) {
      if (!/^(en|fr|es|de|x-default)$/.test(a.hreflang)) { bad++; fail('5', `${path} unexpected hreflang ${a.hreflang}`); }
      if (!a.href.endsWith('/')) { bad++; fail('5', `${path} alternate ${a.hreflang} lacks trailing slash`); }
      const altPath = new URL(a.href).pathname;
      if (checked.has(altPath)) continue;
      checked.add(altPath);
      const res = await head(altPath);
      if (res.status !== 200) { bad++; fail('5', `${path} alternate ${a.hreflang} ${altPath} returns ${res.status}`); }
    }
  }
  console.log(`   ${urls.length} sitemap URLs checked, ${bad} hreflang problems`);
}

async function check6Reserved(urls, allBodyLinks) {
  console.log('\n6. RESERVED ROUTES');
  const sitemapPaths = new Set(urls.map((u) => new URL(u).pathname));
  for (const path of RESERVED) {
    const page = await get(path);
    if (page.status !== 200) fail('6', `${path} returned ${page.status}, expected 200`);
    const r = robots(page.html) || '';
    if (!/noindex/i.test(r)) fail('6', `${path} robots is "${r}", expected noindex`);
    if (sitemapPaths.has(path)) fail('6', `${path} appears in the sitemap`);
    if (allBodyLinks.has(path)) fail('6', `${path} has inbound internal links from ${allBodyLinks.get(path).join(', ')}`);
    console.log(`   ok  ${path}  robots="${r}"  sitemap=no  inbound=0`);
  }
}

async function check7Metadata(urls) {
  console.log('\n7. METADATA CEILINGS  (reported, not failed - see spec section 7)');
  const violations = [];
  for (const u of urls) {
    const path = new URL(u).pathname;
    const page = await get(path);
    if (!page.html) continue;
    const t = title(page.html) || '';
    const d = metaDesc(page.html) || '';
    if (t.length > 52 || d.length > 152) {
      violations.push({ path, title: t.length, desc: d.length });
    }
  }
  console.log(`   ${violations.length} of ${urls.length} pages exceed a ceiling`);
  for (const v of violations) {
    console.log(`      ${v.path}  title=${v.title}/52  description=${v.desc}/152`);
  }
  notes.push(`${violations.length} pages exceed a metadata ceiling; out of scope for Move 1, list printed above.`);
}

// --------------------------------------------------------------------- main --

const urls = await sitemapUrls();
console.log(`sitemap: ${urls.length} URLs`);

await check1Redirects();

// Collect body links once for checks 2 and 6.
const allBodyLinks = new Map();
for (const u of urls) {
  const path = new URL(u).pathname;
  const page = await get(path);
  if (!page.html) continue;
  for (const { href } of bodyLinks(page.html)) {
    if (!allBodyLinks.has(href)) allBodyLinks.set(href, []);
    allBodyLinks.get(href).push(path);
  }
}
for (const old of OLD_PATHS) {
  if (allBodyLinks.has(old)) fail('2', `pre-migration path ${old} still linked from ${allBodyLinks.get(old).join(', ')}`);
}
console.log('\n2. NO ORPHANS');
let broken = 0;
for (const href of allBodyLinks.keys()) {
  const res = await head(href);
  if (res.status === 200) continue;
  broken++;
  fail('2', `internal link ${href} returns ${res.status} (from ${allBodyLinks.get(href).slice(0, 3).join(', ')})`);
}
console.log(`   ${allBodyLinks.size} distinct internal link targets, ${broken} not 200`);

check3Collisions(urls);
await check4InternalLinks();
await check5Hreflang(urls);
await check6Reserved(urls, allBodyLinks);
await check7Metadata(urls);

console.log('\n================ RESULT ================');
for (const n of notes) console.log(`note: ${n}`);
if (failures.length) {
  console.log(`\nFAIL: ${failures.length} problems`);
  for (const f of failures) console.log(`  ${f}`);
  process.exit(1);
}
console.log('\nPASS');
