#!/usr/bin/env node
/**
 * Lists what is due for a recheck, so a review date is a mechanism and never
 * a calendar reminder or a TODO in an email (editorial/CLAUDE.md, "No run
 * leaves a TODO behind").
 *
 * Two kinds of review date exist in the repo:
 *   - `reviewBy: YYYY-MM-DD` in the frontmatter of a content file
 *     (the guide schemas in src/content.config.ts carry it, optional)
 *   - `export const reviewBy = 'YYYY-MM-DD'` in src/data/chinaDependencies.ts,
 *     the dataset behind the dependency table on great-firewall-what-it-blocks
 *
 * Every publish run calls this. Anything listed as due is rechecked in that
 * run, as editorial/RUNBOOK.md ("Publishing a reviewed draft") describes.
 *
 *   node editorial/scripts/review-due.mjs                 due today (Shanghai)
 *   node editorial/scripts/review-due.mjs --date 2026-12-29
 *   node editorial/scripts/review-due.mjs --all           every review date, due or not
 *
 * Always exits 0 unless the repo cannot be read; the run decides what to do.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, posix } from 'node:path';

const args = process.argv.slice(2);
const all = args.includes('--all');
const dateArg = args[args.indexOf('--date') + 1];
const today = args.includes('--date') && /^\d{4}-\d{2}-\d{2}$/.test(dateArg ?? '')
  ? dateArg
  : new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });

const items = [];

(function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.mdx?$/.test(entry.name)) {
      const text = readFileSync(full, 'utf8');
      const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const m = fm?.[1].match(/^reviewBy:\s*["']?(\d{4}-\d{2}-\d{2})["']?\s*$/m);
      if (m) items.push({ what: full.split('\\').join(posix.sep), reviewBy: m[1] });
    }
  }
})('src/content');

const DATASET = 'src/data/chinaDependencies.ts';
if (existsSync(DATASET)) {
  const m = readFileSync(DATASET, 'utf8').match(/export const reviewBy\s*=\s*['"](\d{4}-\d{2}-\d{2})['"]/);
  if (m) items.push({ what: `${DATASET} (dependency table, all four great-firewall-what-it-blocks files)`, reviewBy: m[1] });
}

items.sort((a, b) => a.reviewBy.localeCompare(b.reviewBy) || a.what.localeCompare(b.what));
const due = items.filter((i) => i.reviewBy <= today);
const shown = all ? items : due;

if (!shown.length) {
  console.log(`[review-due] Nothing due on ${today}. ${items.length} review date(s) on record${items.length ? `, next ${items[0].reviewBy}` : ''}.`);
} else {
  console.log(`[review-due] ${all ? `${items.length} review date(s) on record` : `${due.length} item(s) due on ${today}`}:`);
  for (const i of shown) console.log(`  ${i.reviewBy}  ${i.reviewBy <= today ? 'DUE ' : '    '} ${i.what}`);
}
