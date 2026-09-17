import fs from 'node:fs';

// Applies the T6-05 change list to one locale file.
// Edits run bottom up so the line numbers from the change list stay valid.
const [file, subtitle, change3File, change4File] = process.argv.slice(2);

const lines = fs.readFileSync(file, 'utf8').split('\n');
const change3 = fs.readFileSync(change3File, 'utf8').replace(/\n+$/, '').split('\n');
const change4 = fs.readFileSync(change4File, 'utf8').replace(/\n+$/, '').split('\n');

const before = {
  l3: lines[2], l9: lines[8], l140: lines[139], l166: lines[165], count: lines.length,
};

if (!before.l3.startsWith('subtitle:')) throw new Error(`${file}: line 3 is not subtitle`);
if (!before.l9.startsWith('updatedAt:')) throw new Error(`${file}: line 9 is not updatedAt`);
if (before.l140.trim() === '' ) throw new Error(`${file}: line 140 is blank`);
if (before.l166.trim() === '' ) throw new Error(`${file}: line 166 is blank`);

lines.splice(165, 1, ...change4);   // CHANGE 4
lines.splice(139, 1, ...change3);   // CHANGE 3
lines[8] = 'updatedAt: 2026-09-18'; // CHANGE 2
lines[2] = subtitle;                // CHANGE 1

fs.writeFileSync(file, lines.join('\n'));
console.log(`${file}: ${before.count} -> ${lines.length} lines`);
console.log(`  removed L140 (${before.l140.split(/\s+/).length} words), L166 (${before.l166.split(/\s+/).length} words)`);
