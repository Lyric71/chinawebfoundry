/**
 * Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam) by hand. Google does
 * not read IndexNow.
 *
 * Deploys need nothing from this script: .github/workflows/indexnow.yml runs
 * scripts/indexnow-deploy.mjs after every successful production deploy and
 * submits only the new and changed pages.
 *
 *   node scripts/submit-indexnow.mjs <url> [<url> ...]   # explicit URLs
 *   node scripts/submit-indexnow.mjs --all                # every live sitemap URL, rarely
 *
 * Add --dry-run to print the list without submitting. The key file
 * public/<KEY>.txt must be live at https://www.chinawebfoundry.com/<KEY>.txt.
 */
const HOST = 'www.chinawebfoundry.com';
const KEY = '87df4664821355d5ac0f7fd61aa4383e';
const SITEMAP_INDEX = `https://${HOST}/sitemap-index.xml`;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
let urlList = args.filter((a) => /^https?:\/\//.test(a));

/** @param {string} url */
async function get(url) {
  const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
  if (!res.ok) throw new Error(`GET ${url} -> HTTP ${res.status}`);
  return res.text();
}

if (!urlList.length && args.includes('--all')) {
  const index = await get(SITEMAP_INDEX);
  for (const [, child] of index.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const xml = await get(child);
    urlList.push(...[...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
}
if (!urlList.length) {
  console.error('[indexnow] Pass explicit URLs, or --all.');
  process.exit(1);
}

urlList = urlList.filter((u) => new URL(u).host === HOST);
console.log(`[indexnow] ${urlList.length} URL(s) to submit${dryRun ? ' (dry run)' : ''}`);
for (const u of urlList) console.log(`  ${u}`);
if (dryRun) process.exit(0);

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
