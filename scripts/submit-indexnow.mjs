/**
 * Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam). Google does not read
 * IndexNow.
 *
 * Production runs this automatically: .github/workflows/indexnow.yml calls it
 * with --changed after every successful Vercel production deploy. It reads the
 * live sitemap, compares it with the snapshot left by the previous run, and
 * submits only the URLs that are new or carry a newer <lastmod>. IndexNow asks
 * for changed URLs only; resubmitting the whole site on every deploy is what
 * gets a host's submissions ignored.
 *
 *   node scripts/submit-indexnow.mjs --changed --snapshot <file>
 *   node scripts/submit-indexnow.mjs <url> [<url> ...]   # explicit URLs
 *   node scripts/submit-indexnow.mjs --all                # every sitemap URL, rarely
 *
 * Add --dry-run to print the list without submitting. The key file
 * public/<KEY>.txt must be live at https://www.chinawebfoundry.com/<KEY>.txt.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const HOST = 'www.chinawebfoundry.com';
const KEY = '87df4664821355d5ac0f7fd61aa4383e';
const SITEMAP_INDEX = `https://${HOST}/sitemap-index.xml`;
// With no snapshot (first run, or the Actions cache expired after 7 days
// without a deploy), submit what changed in this window instead of nothing.
const SEED_WINDOW_MS = 48 * 60 * 60 * 1000;

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const dryRun = flag('--dry-run');
const snapshotPath = option('--snapshot');
const explicit = args.filter((a, i) => /^https?:\/\//.test(a) && args[i - 1] !== '--snapshot');

/** @param {string} url */
async function get(url) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
    if (res.ok) return res.text();
    if (attempt === 3) throw new Error(`GET ${url} -> HTTP ${res.status}`);
    await new Promise((r) => setTimeout(r, 5000 * attempt));
  }
}

/** Live sitemap as { url: lastmod-or-empty }. */
async function readLiveSitemap() {
  const index = await get(SITEMAP_INDEX);
  const children = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  /** @type {Record<string, string>} */
  const entries = {};
  for (const child of children) {
    const xml = await get(child);
    for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
      if (loc) entries[loc] = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '';
    }
  }
  return entries;
}

/** @param {string} s */
const time = (s) => (s ? Date.parse(s) : NaN);

let urlList;
/** @type {Record<string, string> | undefined} */
let live;

if (explicit.length) {
  urlList = explicit;
} else if (flag('--all')) {
  live = await readLiveSitemap();
  urlList = Object.keys(live);
} else if (flag('--changed')) {
  if (!snapshotPath) {
    console.error('[indexnow] --changed needs --snapshot <file>.');
    process.exit(1);
  }
  live = await readLiveSitemap();
  const previous = existsSync(snapshotPath) ? JSON.parse(readFileSync(snapshotPath, 'utf8')) : null;
  if (previous) {
    // New URL, or a lastmod strictly newer than last time. A lastmod that went
    // older or disappeared is the shallow-clone fallback in src/lib/gitLastmod.mjs,
    // not an edit, so it is not submitted.
    urlList = Object.entries(live)
      .filter(([url, lastmod]) => !(url in previous) || time(lastmod) > time(previous[url]))
      .map(([url]) => url);
  } else {
    const since = Date.now() - SEED_WINDOW_MS;
    urlList = Object.entries(live)
      .filter(([, lastmod]) => time(lastmod) >= since)
      .map(([url]) => url);
    console.log(`[indexnow] No snapshot at ${snapshotPath}; seeding, submitting URLs changed in the last 48 hours.`);
  }
} else {
  console.error('[indexnow] Pass --changed --snapshot <file>, explicit URLs, or --all.');
  process.exit(1);
}

urlList = urlList.filter((u) => new URL(u).host === HOST);
console.log(`[indexnow] ${urlList.length} URL(s) to submit${dryRun ? ' (dry run)' : ''}`);
for (const u of urlList) console.log(`  ${u}`);

if (urlList.length && !dryRun) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  console.log(`[indexnow] Submitted ${urlList.length} URL(s) -> HTTP ${res.status} ${res.statusText}`);
  // 200 or 202 = accepted. 422 = key/URL mismatch. 403 = key not found at keyLocation.
  if (![200, 202].includes(res.status)) {
    console.error('[indexnow] Submission not accepted. Check the key file is live at keyLocation.');
    process.exit(1);
  }
}

// The snapshot only moves forward after a successful submission, so a failed
// run is retried in full by the next deploy.
if (snapshotPath && live && !dryRun) {
  mkdirSync(dirname(snapshotPath), { recursive: true });
  writeFileSync(snapshotPath, JSON.stringify(live, null, 2));
}
