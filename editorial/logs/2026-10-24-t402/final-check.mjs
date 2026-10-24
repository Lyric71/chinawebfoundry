import fs from 'node:fs';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import {execFileSync} from 'node:child_process';
const dir='editorial/logs/2026-10-24-t402';
const draft='editorial/output/china-latency-vantage-point-study.md';
const s=fs.readFileSync(draft,'utf8');
const log=fs.readFileSync('editorial/logs/2026-10-24.md','utf8');
assert(!log.includes('[ ]'));
for(let i=1;i<=13;i++)assert(fs.existsSync(`${dir}/ca-v${String(i).padStart(2,'0')}.md`));
for(let i=1;i<=18;i++)assert(fs.existsSync(`${dir}/cq-v${String(i).padStart(2,'0')}.md`));
assert.equal(s,fs.readFileSync(`${dir}/cq-vFinal.md`,'utf8'));
for(const loc of ['fr','es','de'])for(let p=1;p<=3;p++){
 assert(fs.existsSync(`${dir}/${loc}-v${p}.md`));
 assert(fs.existsSync(`${dir}/${loc}-supplement-v${p}.md`));
}
for(const loc of ['','-fr','-es','-de']){
 const file=`src/content/guides${loc}/is-wordpress-blocked-in-china.md`;
 const t=fs.readFileSync(file,'utf8');
 assert(t.includes('updatedAt: 2026-10-24'));
 assert(!t.split('\n').some(l=>l.startsWith('|')&&l.includes('Stripe')&&l.includes('PayPal')));
 assert(!/23[.,]4/.test(t));
 const rows=t.split('\n').filter(l=>l.startsWith('| www.google.com'));
 assert.equal(rows.length,2);
 assert(rows[0].includes('/recaptcha')&& !rows[1].includes('/recaptcha'));
}
for(const file of ['src/content/guides/google-fonts-china.md','src/content/guides/china-dependency-index-2026-10.md','src/content/services/strategy-audit.md','public/data/china-dependency-index-2026-10.json'])assert(fs.existsSync(file));
const panel=JSON.parse(fs.readFileSync('public/data/china-dependency-index-2026-10.json','utf8'));
for(const id of ['google-fonts-css','google-fonts-files','google-tag-manager','recaptcha','jsdelivr'])assert(panel.entries.some(e=>e.id===id));
for(const id of ['stripe','typeform-embed']){
 const e=panel.entries.find(e=>e.id===id||e.host===(id==='stripe'?'js.stripe.com':'embed.typeform.com'));
 assert(e&&e.verdict==='untested');
}
const img='public/images/guides/china-latency-vantage-point-study.webp';
const meta=await sharp(img).metadata();
assert(meta.format==='webp'&&meta.width<=1050&&fs.statSync(img).size<350*1024);
const before=execFileSync('git',['show','HEAD:editorial/schedule.csv'],{encoding:'utf8'}).split(/\r?\n/);
const after=fs.readFileSync('editorial/schedule.csv','utf8').split(/\r?\n/);
assert.equal(before.length,after.length);
const changed=after.filter((l,i)=>l!==before[i]);
assert.equal(changed.length,2);
assert(changed.some(l=>l.includes(',T3-04,'))&&changed.some(l=>l.includes(',T4-02,')));
const row=after.find(l=>l.includes(',T4-02,'));
assert(row.includes(',image_ready,2026-10-24,2026-10-24,2026-10-24,'));
assert(row.includes('corrected live pages:'));
console.log('Final checks passed: all pass artifacts, unchanged final draft, four corrected locales, five host IDs, four link targets, image limits, 78-row schedule with only T4-02 plus preserved T3-04 changed.');
console.log(JSON.stringify({image:img,width:meta.width,height:meta.height,bytes:fs.statSync(img).size}));
