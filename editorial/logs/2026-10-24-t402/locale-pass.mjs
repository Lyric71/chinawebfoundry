import fs from 'node:fs';
const [locale,pass,summary]=process.argv.slice(2);
const base='editorial/logs/2026-10-24-t402';
const target=`src/content/guides-${locale}/is-wordpress-blocked-in-china.md`;
const replacement=fs.readFileSync(`${base}/${locale}-pass${pass}.txt`,'utf8').trim();
let source=fs.readFileSync(target,'utf8');
let before;
if(pass==='1'){
 const begins={fr:'Lisez ensemble',es:'Lea juntas',de:'Lesen Sie die beiden'}[locale];
 const a=source.indexOf(begins), b=source.indexOf('\n\n',a);
 if(a<0||b<0)throw new Error('Missing paragraph');
 before=source.slice(a,b);
 source=source.slice(0,a)+replacement+source.slice(b);
 source=source.replace('updatedAt: 2026-10-20','updatedAt: 2026-10-24');
 const label={fr:'www.google.com (hôte reCAPTCHA)',es:'www.google.com (servidor de reCAPTCHA)',de:'www.google.com (reCAPTCHA-Host)'}[locale];
 source=source.split('\n').map(l=>l.startsWith('| www.google.com/recaptcha |')&&!l.includes('cn-zhangjiakou')?l.replace('www.google.com/recaptcha',label):l).join('\n');
}else{
 before=fs.readFileSync(`${base}/${locale}-pass${Number(pass)-1}.txt`,'utf8').trim();
 if(!source.includes(before))throw new Error('Previous pass missing');
 source=source.replace(before,replacement);
}
fs.writeFileSync(target,source);
fs.copyFileSync(target,`${base}/${locale}-v${pass}.md`);
const entry=`\n### Deep-translate ${locale.toUpperCase()} pass ${pass}: complete\n\n${summary}\n\nBefore:\n\n${before}\n\nAfter:\n\n${replacement}\n\nFull artifact: ${base}/${locale}-v${pass}.md\n`;
fs.appendFileSync('editorial/logs/2026-10-24.md',entry);
console.log(entry);
