/**
 * Regenerates the dependency table in the four great-firewall-what-it-blocks
 * guide files from src/data/chinaDependencies.ts, the single source of truth.
 *
 * Usage, from the repo root:
 *   node editorial/scripts/build-dependency-table.mjs          write the files
 *   node editorial/scripts/build-dependency-table.mjs --check  exit 1 if any file is out of date
 *
 * Only the text between the BEGIN and END DEPENDENCY TABLE markers is
 * replaced. Everything around it is hand-written copy and is left alone.
 * The dataset is TypeScript; on Node versions without default type stripping
 * the script reruns itself with --experimental-strip-types.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('../../', import.meta.url);
const dataUrl = new URL('src/data/chinaDependencies.ts', root);

let data;
try {
  data = await import(dataUrl.href);
} catch (err) {
  if (err?.code !== 'ERR_UNKNOWN_FILE_EXTENSION' || process.env.CWF_STRIP_TYPES) throw err;
  const res = spawnSync(
    process.execPath,
    ['--experimental-strip-types', '--no-warnings', fileURLToPath(import.meta.url), ...process.argv.slice(2)],
    { stdio: 'inherit', env: { ...process.env, CWF_STRIP_TYPES: '1' } },
  );
  process.exit(res.status ?? 1);
}

const { dependencies, categoryOrder, copy, rowCells } = data;

const BEGIN = '<!-- BEGIN DEPENDENCY TABLE: GENERATED FROM src/data/chinaDependencies.ts, DO NOT EDIT -->';
const END = '<!-- END DEPENDENCY TABLE: GENERATED -->';

const files = {
  en: 'src/content/guides/great-firewall-what-it-blocks.md',
  fr: 'src/content/guides-fr/great-firewall-what-it-blocks.md',
  es: 'src/content/guides-es/great-firewall-what-it-blocks.md',
  de: 'src/content/guides-de/great-firewall-what-it-blocks.md',
};

const cell = (s) => String(s).replace(/\|/g, '\\|');

function render(locale) {
  const c = copy[locale];
  const seen = new Set();
  const out = [BEGIN, ''];
  for (const category of categoryOrder) {
    const rows = dependencies.filter((r) => r.category === category);
    if (!rows.length) continue;
    const cols = c.columns;
    out.push(`### ${c.categories[category]}`, '');
    out.push(`| ${[cols.service, cols.host, cols.verdict, cols.measured, cols.vantage, cols.source].map(cell).join(' | ')} |`);
    out.push('|---|---|---|---|---|---|');
    for (const row of rows) {
      const r = rowCells(row, locale, seen);
      const host = r.host ? `\`${r.host}\`` : cell(r.hostNote);
      out.push(`| ${[cell(r.service), host, cell(r.verdict), cell(r.measured), cell(r.vantage), cell(r.source)].join(' | ')} |`);
    }
    out.push('');
  }
  out.push(END);
  return out.join('\n');
}

const check = process.argv.includes('--check');
let stale = 0;

for (const [locale, rel] of Object.entries(files)) {
  if (!copy[locale]) {
    console.error(`${rel}: no "${locale}" copy in chinaDependencies.ts, skipped`);
    stale++;
    continue;
  }
  const path = fileURLToPath(new URL(rel, root));
  const src = readFileSync(path, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const text = src.replace(/\r\n/g, '\n');
  const start = text.indexOf(BEGIN);
  const end = text.indexOf(END);
  if (start === -1 || end === -1 || end < start) {
    console.error(`${rel}: markers not found, skipped`);
    stale++;
    continue;
  }
  const next = text.slice(0, start) + render(locale) + text.slice(end + END.length);
  if (next === text) {
    console.log(`${rel}: up to date`);
    continue;
  }
  if (check) {
    console.error(`${rel}: out of date`);
    stale++;
    continue;
  }
  writeFileSync(path, next.replace(/\n/g, eol));
  console.log(`${rel}: written`);
}

if (stale) process.exit(1);
