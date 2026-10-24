import fs from 'node:fs';
const [locale,pass,summary]=process.argv.slice(2);
const dir='editorial/logs/2026-10-24-t402';
const values=JSON.parse(fs.readFileSync(`${dir}/${locale}-supplement${pass}.json`,'utf8'));
const file=`src/content/guides${locale==='en'?'':'-'+locale}/is-wordpress-blocked-in-china.md`;
let s=fs.readFileSync(file,'utf8');
const answers=[...s.matchAll(/\*\*([^\n]+)\*\*\r?\n\r?\n([^\n]+)/g)];
const astro=answers.find(m=>m[1].includes('Astro'));
const speed=answers.at(-1);
if(!astro||!speed||astro===speed)throw new Error('Missing FAQ');
let report=`\n### Supplemental ${locale.toUpperCase()} pass ${pass}: complete\n\n${summary}\n`;
for(const [key,match] of [['astro',astro],['speed',speed]]){
 s=s.replace(match[2],values[key]);
 report+=`\n${key}, before:\n${match[2]}\n\nAfter:\n${values[key]}\n`;
}
if(pass==='1'){
 const row=s.split('\n').find(l=>l.startsWith('|')&&l.includes('Stripe')&&l.includes('PayPal'));
 if(!row)throw new Error('Missing payment row');
 s=s.replace(row+'\n','');
 report+='\nRemoved the unsupported combined Stripe/PayPal reachability row.\n';
}
s=s.replace(/updatedAt: .*/, 'updatedAt: 2026-10-24');
fs.writeFileSync(file,s);
fs.copyFileSync(file,`${dir}/${locale}-supplement-v${pass}.md`);
fs.appendFileSync('editorial/logs/2026-10-24.md',report);
console.log(report);
