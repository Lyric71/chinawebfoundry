import fs from 'fs';
let t = fs.readFileSync(process.argv[2], 'utf8');
t = t.replace(/^---[\s\S]*?\n---\n/, '').replace(/<!--[\s\S]*?-->/g, '');
const lines = t.split('\n');
let narr = 0, quote = 0, table = 0, head = 0;
const wc = s => (s.match(/[A-Za-z0-9一-鿿][^\s]*/g) || []).length;
for (const l of lines) {
  if (/^\|/.test(l)) { if (!/^\|[-| ]+\|$/.test(l)) table += wc(l.replace(/\|/g, ' ')); }
  else if (/^>/.test(l)) quote += wc(l.slice(1));
  else if (/^#/.test(l)) head += wc(l.replace(/^#+/, ''));
  else if (/^CTA:/.test(l)) {}
  else narr += wc(l);
}
console.log({ narrative_incl_headings: narr + head, headings: head, blockquote: quote, table, prose_total: narr + head + quote, body_with_tables: narr + head + quote + table });
