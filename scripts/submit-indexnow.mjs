/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 *
 * Run after a deploy is live, so the engines can verify the key file:
 *   node scripts/submit-indexnow.mjs
 *
 * The key file public/<KEY>.txt must be deployed and reachable at
 * https://www.chinawebfoundry.com/<KEY>.txt for submissions to be accepted.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const HOST = 'www.chinawebfoundry.com';
const KEY = '87df4664821355d5ac0f7fd61aa4383e';
const root = new URL('../', import.meta.url);

// Pull URLs from the built sitemap. Falls back to the index if 0.xml is absent.
function readSitemapUrls() {
  for (const name of ['dist/sitemap-0.xml', 'dist/sitemap-index.xml']) {
    try {
      const xml = readFileSync(fileURLToPath(new URL(name, root)), 'utf8');
      const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      if (name.endsWith('index.xml')) continue; // index lists child sitemaps, not pages
      if (locs.length) return locs;
    } catch {
      // try next
    }
  }
  return [];
}

const urlList = readSitemapUrls().filter((u) => u.includes(HOST));
if (urlList.length === 0) {
  console.error('[indexnow] No URLs found in dist/sitemap-0.xml. Build first.');
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

console.log(`[indexnow] Submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
// 200 or 202 = accepted. 422 = key/URL mismatch. 403 = key not found at keyLocation.
if (![200, 202].includes(res.status)) {
  console.error('[indexnow] Submission not accepted. Check the key file is live at keyLocation.');
  process.exit(1);
}
