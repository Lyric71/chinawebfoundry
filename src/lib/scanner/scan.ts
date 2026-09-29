/**
 * China Site Scanner engine. Fetches the page (plus up to two contact pages,
 * where forms and captchas usually live), reads first-party JS and CSS for
 * resources loaded at runtime, classifies every third-party host against
 * rules.ts, weighs each hit by how it loads, and checks where the site is
 * served from.
 */
import { safeFetch } from './fetch';
import { extract, isSameSite, urlsInCss, urlsInText, type ExtractResult, type LoadMode, type Occurrence } from './extract';
import { analyseHosting } from './hosting';
import { FAILING, RULES, matchRule, type Rule, type Severity } from './rules';
import { tldStatus } from './tld';
import type { Finding, FindingOccurrence, InventoryHost, ReadinessItem, ScanReport } from './types';

const LIMITS = {
  pageTimeout: 12_000,
  pageBytes: 3_000_000,
  extraPages: 2,
  extraPageTimeout: 7_000,
  scripts: 14,
  styles: 8,
  assetTimeout: 6_000,
  assetBytes: 1_500_000,
  inventory: 60,
};

const SEVERITY_RANK: Record<Severity, number> = { critical: 4, high: 3, medium: 2, low: 1, info: 0 };
const maxSeverity = (a: Severity, b: Severity): Severity => (SEVERITY_RANK[a] >= SEVERITY_RANK[b] ? a : b);
const capSeverity = (s: Severity, cap: Severity): Severity => (SEVERITY_RANK[s] > SEVERITY_RANK[cap] ? cap : s);

const RENDER_BLOCKING: ReadonlySet<LoadMode> = new Set<LoadMode>(['blocking-script', 'stylesheet']);
/** Modes where the browser really fetches the resource on page load */
const LOADING: ReadonlySet<LoadMode> = new Set<LoadMode>([
  'blocking-script',
  'async-script',
  'stylesheet',
  'deferred-style',
  'preload',
  'iframe',
  'image',
  'media',
  'inline-script',
]);

const MODE_ORDER: LoadMode[] = [
  'blocking-script',
  'stylesheet',
  'iframe',
  'async-script',
  'inline-script',
  'marker',
  'media',
  'image',
  'css-file',
  'preload',
  'deferred-style',
  'plugin',
  'js-file',
  'hint',
];

/**
 * Inline scripts carry config blobs full of profile links (facebook.com/brand).
 * An unmatched URL from an inline script only counts when it looks loadable.
 */
const LOADABLE_PATH = /\.(m?js|css|woff2?|ttf|otf|png|jpe?g|gif|svg|webp|avif|mp4|webm|json)(\?|$)|\/(js|sdk|widget|widgets|embed|tag|tags|loader|pixel|collect)(\/|\.|\?|$)/i;

/** XML namespaces and profile URLs that show up in markup but never load. */
const NON_LOADING_HOSTS = /^(www\.)?(w3\.org|schema\.org|ogp\.me|purl\.org|xmlns\.com|gmpg\.org|json-schema\.org|creativecommons\.org|rdfs\.org|opengraphprotocol\.org|microformats\.org)$/;

function occurrenceSeverity(rule: Rule, mode: LoadMode): Severity | null {
  if (rule.verdict === 'reachable' || rule.verdict === 'domestic') return null;
  if (rule.verdict === 'malicious') return 'critical';
  const failing = FAILING.has(rule.verdict);

  if (mode === 'hint') return failing ? 'low' : null;
  if (mode === 'js-file') return capSeverity(rule.severity, 'low');
  if (rule.key === 'google-other' && mode === 'inline-script') return 'low';

  if (RENDER_BLOCKING.has(mode)) {
    if (failing) return 'critical';
    if (rule.verdict === 'slow') return 'medium';
    if (rule.verdict === 'unverified') return maxSeverity(rule.severity, 'low');
  }
  if (mode === 'inline-script' || mode === 'plugin') return capSeverity(rule.severity, 'high');
  return rule.severity;
}

function detectPlatform(html: string, headers: Headers, x: ExtractResult): string | null {
  const gen = (x.metas.generator ?? '').toLowerCase();
  if (/\/wp-content\/|\/wp-includes\//.test(html) || gen.startsWith('wordpress')) return 'WordPress';
  if (headers.has('x-shopid') || /cdn\.shopify\.com|Shopify\.theme/.test(html)) return 'Shopify';
  if (headers.has('x-wix-request-id') || /static\.parastorage\.com/.test(html)) return 'Wix';
  if (gen.includes('squarespace') || /static1\.squarespace\.com/.test(html)) return 'Squarespace';
  if (/data-wf-site=|website-files\.com/.test(html) || gen.includes('webflow')) return 'Webflow';
  if (gen.includes('drupal') || /\/sites\/default\/files\//.test(html)) return 'Drupal';
  if (gen.includes('joomla')) return 'Joomla';
  if (gen.includes('hubspot') || /\.hs-sites\.com|hubspot\.net\/hub\//.test(html)) return 'HubSpot CMS';
  if (/\/static\/version\d+\/frontend\/|Magento_/.test(html)) return 'Magento';
  if (gen.includes('prestashop')) return 'PrestaShop';
  if (gen.includes('ghost')) return 'Ghost';
  if (gen.includes('astro')) return 'Astro';
  if (gen.includes('hugo')) return 'Hugo';
  if (/__NEXT_DATA__|\/_next\/static\//.test(html)) return 'Next.js';
  if (/__NUXT__|\/_nuxt\//.test(html)) return 'Nuxt';
  if (/___gatsby/.test(html)) return 'Gatsby';
  return null;
}

// Province abbreviations, including the variants seen on filings for
// Sichuan (蜀/川), Guizhou (黔/贵), Gansu (陇/甘) and Yunnan (滇/云).
const PROVINCES = '京津沪渝冀晋蒙辽吉黑苏浙皖闽赣鲁豫鄂湘粤桂琼川蜀贵黔云滇藏陕甘陇青宁新';
const ICP_RE = new RegExp(`[${PROVINCES}]\\s*ICP\\s*[备证]\\s*[0-9]{6,10}\\s*号?(?:\\s*-\\s*[0-9]+[AXK]?)?`);
const PSB_RE = new RegExp(`[${PROVINCES}]\\s*公网安备\\s*[0-9]{14}\\s*号?`);

function readiness(
  pages: { html: string; x: ExtractResult }[],
  hostname: string,
  occurrences: Occurrence[],
  platform: string | null,
): ReadinessItem[] {
  const text = pages.map((p) => p.x.text).join(' ');
  const html = pages.map((p) => p.html).join(' ');
  const home = pages[0].x;
  const items: ReadinessItem[] = [];

  const icp = text.match(ICP_RE)?.[0]?.replace(/\s+/g, '');
  const linked = /beian\.miit\.gov\.cn/i.test(html);
  items.push(
    icp
      ? { key: linked ? 'icp' : 'icp-unlinked', status: linked ? 'pass' : 'warn', value: icp }
      : { key: 'icp', status: 'warn' },
  );

  const psb = text.match(PSB_RE)?.[0]?.replace(/\s+/g, '');
  items.push(psb ? { key: 'psb', status: 'pass', value: psb } : { key: 'psb', status: icp ? 'warn' : 'info' });

  const tld = tldStatus(hostname);
  items.push({
    key: `tld-${tld.status}`,
    status: tld.status === 'eligible' ? 'pass' : tld.status === 'ineligible' ? 'fail' : 'warn',
    value: `.${tld.tld}`,
  });

  const zhPage = home.htmlLang?.startsWith('zh') ?? false;
  const zhAlt = home.hreflangs.find((h) => h.startsWith('zh'));
  items.push(
    zhPage || zhAlt
      ? { key: 'chinese', status: 'pass', value: zhPage ? (home.htmlLang ?? 'zh') : zhAlt }
      : { key: 'chinese', status: 'warn' },
  );

  items.push({ key: 'baidu-verify', status: home.metas['baidu-site-verification'] ? 'pass' : 'info' });

  const tongji = occurrences.some((o) => /\/\/hm\.baidu\.com\//.test(o.url));
  items.push({ key: 'baidu-analytics', status: tongji ? 'pass' : 'info' });

  const shop =
    platform === 'Shopify' || platform === 'Magento' || platform === 'PrestaShop'
      ? platform
      : /\/wp-content\/plugins\/woocommerce\//i.test(html)
        ? 'WooCommerce'
        : /cdn11\.bigcommerce\.com/.test(html)
          ? 'BigCommerce'
          : null;
  if (shop) items.push({ key: 'commerce', status: 'info', value: shop });

  return items;
}

async function fetchText(url: string, accept: string): Promise<string | null> {
  try {
    const res = await safeFetch(url, { timeoutMs: LIMITS.assetTimeout, maxBytes: LIMITS.assetBytes, accept, maxRedirects: 2 });
    return res.body;
  } catch {
    return null;
  }
}

export async function scanSite(inputUrl: string): Promise<ScanReport> {
  const home = await safeFetch(inputUrl, { timeoutMs: LIMITS.pageTimeout, maxBytes: LIMITS.pageBytes, requireHtml: true });
  const finalUrl = new URL(home.url);
  const homeX = extract(home.body, home.url);
  const platform = detectPlatform(home.body, home.headers, homeX);

  const [hosting, extraPages, scripts, styles] = await Promise.all([
    analyseHosting(finalUrl.hostname, home.headers),
    Promise.all(
      homeX.contactLinks.slice(0, LIMITS.extraPages).map(async (url) => {
        try {
          const res = await safeFetch(url, { timeoutMs: LIMITS.extraPageTimeout, maxBytes: LIMITS.pageBytes, requireHtml: true, maxRedirects: 2 });
          return { url, html: res.body, x: extract(res.body, res.url) };
        } catch {
          return { url, html: null, x: null };
        }
      }),
    ),
    Promise.all(homeX.firstPartyScripts.slice(0, LIMITS.scripts).map(async (url) => ({ url, body: await fetchText(url, '*/*') }))),
    Promise.all(homeX.firstPartyStyles.slice(0, LIMITS.styles).map(async (url) => ({ url, body: await fetchText(url, 'text/css,*/*;q=0.1') }))),
  ]);

  const pages: { html: string; x: ExtractResult; path: string }[] = [{ html: home.body, x: homeX, path: finalUrl.pathname }];
  for (const p of extraPages) if (p.html && p.x) pages.push({ html: p.html, x: p.x, path: new URL(p.url).pathname });

  // Every occurrence carries the rule it implies when there is no URL to match (markers, plugins)
  const occurrences: (Occurrence & { rule?: Rule })[] = pages.flatMap((p) => p.x.occurrences);

  for (const s of scripts) {
    if (!s.body) continue;
    const path = new URL(s.url).pathname;
    for (const url of urlsInText(s.body)) occurrences.push({ url, mode: 'js-file', page: path });
  }
  for (const s of styles) {
    if (!s.body) continue;
    const base = new URL(s.url);
    for (const { url, isImport } of urlsInCss(s.body)) {
      try {
        occurrences.push({ url: new URL(url, base).toString(), mode: isImport ? 'stylesheet' : 'css-file', page: base.pathname });
      } catch {
        /* unparseable url() */
      }
    }
  }

  const plugins = new Set(pages.flatMap((p) => p.x.plugins));
  for (const rule of RULES) {
    for (const p of pages) {
      if (rule.markers?.some((re) => re.test(p.html))) occurrences.push({ url: '', mode: 'marker', page: p.path, rule });
    }
    for (const slug of rule.plugins ?? []) {
      if (plugins.has(slug)) occurrences.push({ url: '', mode: 'plugin', page: slug, rule });
    }
  }

  // Classify
  const byRule = new Map<string, { rule: Rule; severity: Severity; occ: FindingOccurrence[]; allJs: boolean }>();
  const inventory = new Map<string, InventoryHost>();

  for (const o of occurrences) {
    let rule: Rule | null = o.rule ?? null;
    if (!rule) {
      let u: URL;
      try {
        u = new URL(o.url);
      } catch {
        continue;
      }
      const host = u.hostname.toLowerCase();
      if (isSameSite(host, finalUrl.hostname) || NON_LOADING_HOSTS.test(host)) continue;
      rule = matchRule(host + u.pathname);
      if (!rule && o.mode === 'inline-script' && !LOADABLE_PATH.test(u.pathname + u.search)) continue;

      if (rule || LOADING.has(o.mode) || o.mode === 'hint') {
        const entry = inventory.get(host) ?? { host, service: rule?.service ?? null, verdict: rule?.verdict ?? 'unknown', modes: [] };
        if (!entry.modes.includes(o.mode)) entry.modes.push(o.mode);
        if (!entry.service && rule) {
          entry.service = rule.service;
          entry.verdict = rule.verdict;
        }
        inventory.set(host, entry);
      }
    }
    if (!rule) continue;

    const sev = occurrenceSeverity(rule, o.mode);
    if (sev === null) continue;
    const bucket = byRule.get(rule.key) ?? { rule, severity: 'info' as Severity, occ: [], allJs: true };
    bucket.severity = maxSeverity(bucket.severity, sev);
    if (o.mode !== 'js-file') bucket.allJs = false;
    if (!bucket.occ.some((x) => x.mode === o.mode && (o.url ? x.url === o.url : x.page === o.page))) {
      bucket.occ.push({ url: o.url, mode: o.mode, page: o.page });
    }
    byRule.set(rule.key, bucket);
  }

  const findings: Finding[] = [...byRule.values()].map(({ rule, severity, occ, allJs }) => ({
    key: rule.key,
    service: rule.service,
    category: rule.category,
    verdict: rule.verdict,
    severity,
    copy: rule.copy,
    fix: rule.key === 'google-fonts' && plugins.has('elementor') ? 'fix-fonts-elementor' : rule.fix,
    evidence: rule.evidence,
    occurrences: occ.sort((a, b) => MODE_ORDER.indexOf(a.mode) - MODE_ORDER.indexOf(b.mode)).slice(0, 6),
    referencedOnly: allJs,
  }));

  findings.sort((a, b) => SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] || a.service.localeCompare(b.service));

  const counts: Record<Severity, number> = { critical: 0, high: 0, medium: 0, low: 0, info: 0 };
  for (const f of findings) counts[f.severity]++;

  // Weighted penalties, hosting included, with caps so one critical problem
  // can never hide behind a long list of passes.
  const WEIGHT: Record<Severity, number> = { critical: 25, high: 10, medium: 4, low: 1, info: 0 };
  const HOSTING_WEIGHT: Record<Severity, number> = { critical: 25, high: 15, medium: 8, low: 3, info: 0 };
  let score = 100 - findings.reduce((sum, f) => sum + WEIGHT[f.severity], 0) - HOSTING_WEIGHT[hosting.severity];
  if (counts.critical > 0) score = Math.min(score, 45);
  else if (counts.high > 0 || hosting.severity === 'high') score = Math.min(score, 75);
  score = Math.max(0, Math.min(100, Math.round(score)));
  const grade = score >= 80 ? 'good' : score >= 50 ? 'work' : 'poor';

  const verdictRank = (h: InventoryHost) => {
    const v = h.verdict;
    if (FAILING.has(v as never)) return 0;
    if (v === 'unverified' || v === 'unknown') return 1;
    if (v === 'slow' || v === 'licensing') return 2;
    return 3;
  };
  const inventoryList = [...inventory.values()].sort((a, b) => verdictRank(a) - verdictRank(b) || a.host.localeCompare(b.host));

  return {
    url: inputUrl,
    finalUrl: home.url,
    timestamp: new Date().toISOString(),
    score,
    grade,
    counts,
    findings,
    hosting,
    readiness: readiness(pages, finalUrl.hostname, occurrences, platform),
    inventory: inventoryList.slice(0, LIMITS.inventory),
    platform,
    pages: [
      { url: home.url, status: 'ok' },
      ...extraPages.map((p) => ({ url: p.url, status: (p.html ? 'ok' : 'failed') as 'ok' | 'failed' })),
    ],
    stats: {
      htmlBytes: home.bytes,
      responseMs: home.ms,
      scriptsScanned: scripts.filter((s) => s.body).length,
      stylesScanned: styles.filter((s) => s.body).length,
      thirdPartyHosts: inventory.size,
    },
  };
}
