import fs from 'node:fs';
import assert from 'node:assert/strict';
const results=[];
for (const l of ['', '-fr', '-es', '-de']) {
 const p=`src/content/guides${l}/cloudflare-china.md`;
 const s=fs.readFileSync(p,'utf8');
 const field=k=>s.match(new RegExp(`^${k}: "(.*)"$`,'m'))[1];
 const counts={locale:l||'en',title:field('title').length,summary:field('summary').length,subtitle:field('subtitle').split(/\s+/).length,headings:(s.match(/^## /gm)||[]).length,links:(s.match(/\]\(\//g)||[]).length,banned:/[\u2013\u2014!]/.test(s)};
 console.log(counts); results.push(counts);
 assert(counts.title<=52 && counts.summary<=152 && counts.subtitle<=25);
 assert(counts.headings===4 && counts.links===3 && !counts.banned);
 assert(s.includes('reviewBy: 2026-11-26'));
 for(const u of [...s.matchAll(/https:\/\/\S+/g)].map(x=>x[0])) assert(fs.readFileSync('editorial/output/cloudflare-china.md','utf8').includes(u));
}
fs.writeFileSync('editorial/logs/2026-10-20-cloudflare-china/publish-validation.json',JSON.stringify(results,null,2)+'\n');
