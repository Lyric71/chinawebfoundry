#!/usr/bin/env node
/**
 * Published content guard: no TODO is ever left behind.
 *
 * Standing rule (Cyril, 2 October 2026; editorial/CLAUDE.md, "No run leaves a
 * TODO behind"): a publishing job closes everything it finds inside the run.
 * A claim it cannot source is cut, never marked. This script makes the rule
 * mechanical for what readers actually get: it fails on a TODO, FIXME, TBD or
 * TKTK marker anywhere in a content collection file, body, frontmatter,
 * table, caption or HTML comment alike.
 *
 * Scope is published content only. Source code (src/pages, src/components,
 * src/data, scripts) is not scanned, so a code comment is never flagged.
 *
 * Three modes:
 *   (default)       every file under src/content/
 *   --staged        the staged version of changed files under src/content/
 *                   (pre-commit hook)
 *   <file> [...]    the named files, for a draft before it is published:
 *                   node scripts/check-content.mjs editorial/output/<slug>.md
 *
 * Markers are matched as whole words and case-sensitively, so the Spanish
 * "todo" and words that merely contain the letters never trip it.
 *
 * Exit code 1 on any marker, with file and line.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, posix } from 'node:path';

const ROOT = 'src/content';
const CONTENT_FILE = /\.(md|mdx|markdoc|json|ya?ml)$/i;
const MARKER = /(?<![A-Za-z0-9_])(TODO|FIXME|TBD|TKTK)(?![A-Za-z0-9_])/g;

const args = process.argv.slice(2);
const staged = args.includes('--staged');
const named = args.filter((a) => !a.startsWith('--'));

/** Repo-relative, POSIX-separated paths to check. */
function targets() {
  if (named.length) return named.map((p) => p.split('\\').join(posix.sep));
  if (staged) {
    const out = execFileSync(
      'git',
      ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '--', ROOT],
      { encoding: 'utf8' },
    );
    return out.split('\n').map((l) => l.trim()).filter((p) => p && CONTENT_FILE.test(p));
  }
  const found = [];
  (function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (CONTENT_FILE.test(entry.name)) found.push(full.split('\\').join(posix.sep));
    }
  })(ROOT);
  return found;
}

/** The text that will be committed (staged) or published (on disk). */
function contents(path) {
  if (staged && !named.length) return execFileSync('git', ['show', `:${path}`], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (!existsSync(path)) {
    console.error(`[check-content] No such file: ${path}`);
    process.exit(1);
  }
  return readFileSync(path, 'utf8');
}

const hits = [];
const files = targets();
for (const path of files) {
  const lines = contents(path).split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(MARKER)) {
      hits.push({ path, line: i + 1, marker: m[1], text: line.trim().slice(0, 140) });
    }
  });
}

if (hits.length) {
  console.error(`\n[check-content] ${hits.length} open marker(s) in ${new Set(hits.map((h) => h.path)).size} file(s). Nothing publishes with a TODO attached.\n`);
  for (const h of hits) {
    console.error(`  ${h.path}:${h.line}  ${h.marker}`);
    console.error(`      ${h.text}`);
  }
  console.error('\nClose each item, do not just delete the marker: source the claim twice or cut it,');
  console.error('fix the page it contradicts, or hold the piece. See editorial/CLAUDE.md, "No run leaves a TODO behind".\n');
  process.exit(1);
}

console.log(`[check-content] ${files.length} content file(s) checked, no TODO, FIXME, TBD or TKTK marker.`);
