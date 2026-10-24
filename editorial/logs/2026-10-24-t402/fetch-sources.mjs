import fs from 'node:fs';
import crypto from 'node:crypto';
const check = process.argv[2];
const sources = [
 ['paired-study','https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html',['111','112','660','2026-08-30','30-second']],
 ['greatfire-fonts','https://en.greatfire.org/https/fonts.googleapis.com',['2026-10-15','conclusive']],
 ['mdn-ttfb','https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte',['first byte','2025-07-18']]
];
const results = await Promise.all(sources.map(async ([id,url,terms]) => {
 const r=await fetch(url); const html=await r.text();
 const checks=Object.fromEntries(terms.map(t=>[t,html.toLowerCase().includes(t.toLowerCase())]));
 const record={id,url,status:r.status,checkedAt:new Date().toISOString(),sha256:crypto.createHash('sha256').update(html).digest('hex'),checks};
 fs.writeFileSync(`editorial/logs/runs/2026-10-24-t402-${id}-check${check}.html`,html);
 return record;
}));
fs.writeFileSync(`editorial/logs/2026-10-24-t402/sources-check${check}.json`,JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify(results,null,2));
if(results.some(r=>r.status!==200))process.exitCode=1;
