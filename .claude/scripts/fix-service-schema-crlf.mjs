/**
 * Fix the 7 FR service pages where the previous injection script failed
 * because the files use CRLF line endings and the regex was anchored on `\n---\n`.
 *
 * For each broken file (has `jsonLd={pageLd}` but no `const pageLd =`):
 *   1. Add `import { serviceSchema } from '...'` after the first import (if missing).
 *   2. Add `const serviceLd = ...; const pageLd = [...serviceLd, faqLd];`
 *      right before the closing `---` (CRLF-aware).
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const dirs = ['src/pages/services', 'src/pages/fr/services'];
const skip = new Set(['index.astro', '[slug].astro']);

let fixed = 0;
let already = 0;

for (const d of dirs) {
  for (const name of readdirSync(d)) {
    if (skip.has(name) || !name.endsWith('.astro')) continue;
    const full = join(d, name);
    let src = readFileSync(full, 'utf8');

    const usesPageLd = /jsonLd=\{pageLd\}/.test(src);
    const definesPageLd = /const\s+pageLd\s*=/.test(src);

    if (!usesPageLd) continue;
    if (definesPageLd) { already++; continue; }

    // Need to inject. Detect line ending in this file.
    const eol = src.includes('\r\n') ? '\r\n' : '\n';

    // Add import if missing.
    if (!src.includes("from '../../lib/schema'") && !src.includes("from '../../../lib/schema'")) {
      const fromDir = dirname(full);
      let rel = relative(fromDir, 'src/lib/schema').replace(/\\/g, '/');
      if (!rel.startsWith('.')) rel = './' + rel;
      // Add after the first import line.
      src = src.replace(
        /^(---(?:\r?\n)import [^\n]+\n)/,
        `$1import { serviceSchema } from '${rel}';${eol}`,
      );
    }

    const hasFaq = /\bconst\s+faqLd\s*=/.test(src);
    const insertion =
      `${eol}const serviceLd = serviceSchema(Astro.url, Astro.site, service.data);${eol}` +
      `const pageLd = [${hasFaq ? '...serviceLd, faqLd' : '...serviceLd'}];${eol}`;

    // Find the closing `---` of the frontmatter (the SECOND `---` line).
    // Find all positions of `---` followed by newline at line start.
    const closeMatch = src.match(/(?:^|\r?\n)---(?:\r?\n)/g);
    if (!closeMatch || closeMatch.length < 2) {
      console.log(`SKIP (cannot find closing ---): ${full}`);
      continue;
    }
    // Locate the index of the second match.
    const re = /(?:^|\r?\n)---(?:\r?\n)/g;
    let m;
    let count = 0;
    let secondIdx = -1;
    while ((m = re.exec(src)) !== null) {
      count++;
      if (count === 2) { secondIdx = m.index + (m[0].startsWith('\n') || m[0].startsWith('\r') ? (m[0].startsWith('\r\n') ? 2 : 1) : 0); break; }
    }
    if (secondIdx < 0) {
      console.log(`SKIP (regex match failed): ${full}`);
      continue;
    }

    // Insert just before the second `---`.
    src = src.slice(0, secondIdx) + insertion + src.slice(secondIdx);

    writeFileSync(full, src, 'utf8');
    console.log(`FIXED: ${full}`);
    fixed++;
  }
}

console.log(`\nDone. Fixed: ${fixed}. Already wired: ${already}.`);
