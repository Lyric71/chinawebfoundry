import fs from 'node:fs';
const [locale,pass,note] = process.argv.slice(2);
const root='editorial/logs/2026-10-20-cloudflare-china';
const file=`src/content/guides-${locale}/cloudflare-china.md`;
const current=fs.readFileSync(file,'utf8');
const prior=Number(pass)>1?fs.readFileSync(`${root}/${locale}-pass-${Number(pass)-1}.md`,'utf8'):'';
fs.writeFileSync(`${root}/${locale}-pass-${pass}.md`,current);
const sections = s => s.split(/(?=^## )/m);
let output=`\n### ${locale.toUpperCase()} pass ${pass} complete\n\n${note}\n`;
sections(current).forEach((s,i)=>{
 const prev=sections(prior)[i]||'(New locale: no prior section)';
 output+=`\nSection ${i+1}\n${prev===s?'Kept as-is after native review.':`Before:\n${prev}\nAfter:\n${s}`}\n`;
});
fs.appendFileSync(`${root}/publish-decisions.md`,output);
fs.appendFileSync('editorial/logs/runs/2026-10-20-publish.txt',output);
console.log(`${locale.toUpperCase()} pass ${pass} complete; full output and section comparison recorded. ${note}`);
