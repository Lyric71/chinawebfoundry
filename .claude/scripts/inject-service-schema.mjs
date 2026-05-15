/**
 * Inject Service + BreadcrumbList JSON-LD into every explicit service page
 * (src/pages/services/*.astro and src/pages/fr/services/*.astro).
 *
 * For each file:
 *   1. Add `import { serviceSchema } from '<relative>/lib/schema';` after the first import.
 *   2. Add `const serviceLd = serviceSchema(Astro.url, Astro.site, service.data);` before the closing `---`.
 *   3. Update `<PageLayout ...>` to include `jsonLd={[...serviceLd, faqLd]}` (or just `[...serviceLd]`).
 *
 * Idempotent: skips files that already import serviceSchema.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const dirs = ['src/pages/services', 'src/pages/fr/services'];
const skip = new Set(['index.astro', '[slug].astro']);

let touched = 0;
let skipped = 0;

for (const d of dirs) {
  for (const name of readdirSync(d)) {
    if (skip.has(name) || !name.endsWith('.astro')) continue;
    const full = join(d, name);
    let src = readFileSync(full, 'utf8');

    if (src.includes('serviceSchema')) {
      console.log(`SKIP (already wired): ${full}`);
      skipped++;
      continue;
    }

    // Compute the relative import path from this file's directory to src/lib/schema.
    const fromDir = dirname(full);
    let rel = relative(fromDir, 'src/lib/schema').replace(/\\/g, '/');
    if (!rel.startsWith('.')) rel = './' + rel;

    // 1. Add the import after the FIRST import line in the frontmatter.
    src = src.replace(
      /^(---\s*\nimport [^\n]+\n)/,
      `$1import { serviceSchema } from '${rel}';\n`,
    );

    // 2. Add the const right before the closing `---`.
    // Detect whether `faqLd` is also defined. If so, merge into the jsonLd array.
    const hasFaq = /\bconst\s+faqLd\s*=/.test(src);
    const insertion = hasFaq
      ? `\nconst serviceLd = serviceSchema(Astro.url, Astro.site, service.data);\nconst pageLd = [...serviceLd, faqLd];\n`
      : `\nconst serviceLd = serviceSchema(Astro.url, Astro.site, service.data);\nconst pageLd = [...serviceLd];\n`;

    // Insert just before the second `---` (end of frontmatter).
    // Match the FIRST occurrence of `\n---\n` after the opening `---\n`.
    src = src.replace(/\n---\n/, `${insertion}---\n`);

    // 3. Update <PageLayout> to include jsonLd={pageLd}.
    // Cover both EN (no lang) and FR (lang="fr") variants.
    if (/<PageLayout\s+[^>]*\bjsonLd=/.test(src)) {
      // Already had a jsonLd prop (e.g. {[faqLd]}) — replace it with our merged pageLd.
      src = src.replace(/\bjsonLd=\{[^}]+\}/, 'jsonLd={pageLd}');
    } else {
      src = src.replace(/<PageLayout\s+([^>]*)>/, '<PageLayout $1 jsonLd={pageLd}>');
    }

    writeFileSync(full, src, 'utf8');
    console.log(`UPDATED: ${full}`);
    touched++;
  }
}

console.log(`\nDone. Touched: ${touched}. Skipped (already wired): ${skipped}.`);
