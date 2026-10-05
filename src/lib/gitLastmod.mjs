// Last-modified dates for sitemap <lastmod>, from git history.
//
// Vercel builds from a shallow clone. In a shallow clone the oldest commit in
// the window has no parent, so `git log -1 -- <file>` returns that boundary
// commit for every file not touched inside the window. Before this module, 308
// of 320 sitemap URLs carried the same boundary-commit timestamp, which tells
// crawlers nothing and teaches Google to ignore the sitemap's lastmod.
//
// So a date that comes from a boundary commit is treated as unknown. The
// fallback is the frontmatter `updatedAt` (or `publishedAt`) of a Markdown
// source, and failing that no lastmod at all: an absent lastmod is honest, a
// wrong one is not.
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

/** @param {string[]} args */
function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

/** @type {Set<string> | undefined} */
let boundary;
function shallowBoundary() {
  if (boundary) return boundary;
  boundary = new Set();
  try {
    const shallowFile = git(['rev-parse', '--git-path', 'shallow']);
    if (existsSync(shallowFile)) {
      for (const sha of readFileSync(shallowFile, 'utf8').split(/\s+/)) {
        if (sha) boundary.add(sha);
      }
    }
  } catch {
    // Not a git checkout: every lookup below falls through to frontmatter.
  }
  return boundary;
}

/** @param {string} src */
function frontmatterDate(src) {
  if (!src.endsWith('.md')) return undefined;
  const fm = readFileSync(src, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return undefined;
  const m =
    fm[1].match(/^updatedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m) ??
    fm[1].match(/^publishedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m);
  return m ? new Date(`${m[1]}T00:00:00Z`) : undefined;
}

const cache = new Map();
/**
 * @param {string} src
 * @returns {Date | undefined}
 */
function lastModForFile(src) {
  if (cache.has(src)) return cache.get(src);
  /** @type {Date | undefined} */
  let date;
  try {
    const [sha, iso] = git(['log', '-1', '--format=%H %cI', '--', src]).split(' ');
    if (iso && !shallowBoundary().has(sha)) date = new Date(iso);
  } catch {
    // Fall through to frontmatter.
  }
  date ??= frontmatterDate(src);
  cache.set(src, date);
  return date;
}

/**
 * Latest known modification date across the files that make up one URL.
 * @param {string[]} sources
 * @returns {Date | undefined}
 */
export function lastModFor(sources) {
  /** @type {Date | undefined} */
  let latest;
  for (const src of sources) {
    const d = lastModForFile(src);
    if (d && (!latest || d > latest)) latest = d;
  }
  return latest;
}
