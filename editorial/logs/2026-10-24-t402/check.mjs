import fs from 'node:fs';
const file = 'editorial/output/china-latency-vantage-point-study.md';
const s = fs.readFileSync(file, 'utf8');
const body = s.replace(/^---[\s\S]*?---/, '').replace(/<!--[\s\S]*?-->/g, '');
const words = v => v.trim().split(/\s+/).filter(Boolean).length;
const lines = body.split('\n');
const metadata = Object.fromEntries(['title','description','excerpt'].map(k => {
  const v = s.match(new RegExp(`^${k}: "(.*)"`, 'm'))[1];
  return [k, {characters: v.length, words: words(v)}];
}));
console.log(JSON.stringify({metadata,
  narrative: words(lines.filter(l => !/^\s*[>|]/.test(l)).join(' ')),
  citations: words(lines.filter(l => /^>/.test(l)).map(l => l.slice(1)).join(' ')),
  tableWords: words(lines.filter(l => /^\|/.test(l) && !/^\|[-|]+\|$/.test(l)).join(' ').replace(/\|/g,' ')),
  bodyWithTables: words(lines.filter(l => !/^\|[-|]+\|$/.test(l)).join('\n').replace(/[>|]/g,' ')),
  emDashes: (s.match(/\u2014/g)||[]).length,
  exclamations: (s.match(/!/g)||[]).length - (s.match(/<!--/g)||[]).length,
  headings: lines.filter(l => /^## /.test(l))},null,2));
