import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function walk(d) {
  let r = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) r = r.concat(walk(p));
    else if (e.name.endsWith('.md') || e.name.endsWith('.astro') || e.name.endsWith('.ts')) r.push(p);
  }
  return r;
}

const dirs = ['src/content', 'src/components', 'src/layouts', 'src/pages', 'src/data', 'src/i18n'];
let any = false;
for (const d of dirs) {
  if (!existsSync(d)) continue;
  for (const f of walk(d)) {
    const c = readFileSync(f, 'utf8');
    if (c.includes('—')) {
      any = true;
      const lines = c.split(/\r?\n/);
      lines.forEach((l, i) => {
        if (l.includes('—')) console.log(`${f.replace(/\\/g, '/')}:${i + 1}: ${l.trim().slice(0, 160)}`);
      });
    }
  }
}
if (!any) console.log('No em dashes anywhere in src/.');
