/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 *
 * Run after a deploy is live, so the engines can verify the key file:
 *   node scripts/submit-indexnow.mjs
 *
 * The key file public/<KEY>.txt must be deployed and reachable at
 * https://www.chinawebfoundry.com/<KEY>.txt for submissions to be accepted.
 */
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const HOST = 'www.chinawebfoundry.com';
const KEY = '87df4664821355d5ac0f7fd61aa4383e';
const root = new URL('../', import.meta.url);

// Where the build writes the sitemap. Since the Astro 7 upgrade the Vercel
// adapter writes static output to .vercel/output/static/ and dist/client/,
// not dist/; plain dist/ stays last for a build without the adapter. Reading
// only dist/ made every publish since 10 September skip IndexNow.
const OUTPUT_DIRS = ['.vercel/output/static', 'dist/client', 'dist'];

// Pull page URLs from the built sitemap (sitemap-0.xml; the index file lists
// child sitemaps, not pages).
function readSitemapUrls() {
  for (const dir of OUTPUT_DIRS) {
    const file = fileURLToPath(new URL(`${dir}/sitemap-0.xml`, root));
    if (!existsSync(file)) continue;
    const xml = readFileSync(file, 'utf8');
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (locs.length) return { file: `${dir}/sitemap-0.xml`, locs };
  }
  return { file: null, locs: [] };
}

const sitemap = readSitemapUrls();
const urlList = sitemap.locs.filter((u) => u.includes(HOST));
if (urlList.length === 0) {
  console.error(`[indexnow] No URLs found in sitemap-0.xml under ${OUTPUT_DIRS.join(', ')}. Build first.`);
  process.exit(1);
}
console.log(`[indexnow] Read ${urlList.length} URLs from ${sitemap.file}`);

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
