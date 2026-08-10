/**
 * Image guard.
 *
 * All image optimisation on this project happens locally, before commit. Astro
 * uses passthroughImageService() and Vercel Image Optimization is off, so
 * whatever is committed is exactly what ships to visitors. Nothing downstream
 * will resize or re-encode a file that slips through.
 *
 * This script enforces the rules that used to rely on discipline alone:
 *   - no PNG / JPEG / GIF anywhere under public/images/ (WebP or SVG only)
 *   - WebP no wider than MAX_WIDTH
 *   - no image over MAX_BYTES, which catches a WebP saved at quality 100
 *
 * Two modes:
 *   --staged   validate the staged content of changed files (pre-commit hook)
 *   (default)  validate every file on disk under public/
 *
 * Exit code 1 on any violation, with the exact command needed to fix it.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join, posix } from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 1050; // 2x retina for ~525px cards
const MAX_BYTES = 350 * 1024;

// Raster formats that must never reach public/images/.
const BANNED_UNDER_IMAGES = /\.(png|jpe?g|gif|bmp|tiff?)$/i;
const ANY_IMAGE = /\.(webp|png|jpe?g|gif|bmp|tiff?|avif)$/i;

// Genuine exceptions, kept deliberately short. Each needs a reason.
const ALLOW = new Map([
  // Wide logo lockup, not a content image. 1459x416 but only 13KB.
  ['public/images/ecosystem/hubstudio.webp', 'wide logo lockup, exempt from MAX_WIDTH'],
]);

// Favicons must stay PNG for browser support. Root of public/ only, never
// public/images/, so the BANNED_UNDER_IMAGES rule already leaves them alone.
const FAVICON = /^public\/favicon[^/]*\.png$/i;

const staged = process.argv.includes('--staged');

/** Paths to check, always POSIX-separated and repo-relative. */
function targets() {
  if (staged) {
    const out = execFileSync(
      'git',
      ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '--', 'public'],
      { encoding: 'utf8' },
    );
    return out.split('\n').map((l) => l.trim()).filter(Boolean).filter((p) => ANY_IMAGE.test(p));
  }

  const found = [];
  (function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (ANY_IMAGE.test(entry.name)) found.push(full.split('\\').join(posix.sep));
    }
  })('public');
  return found;
}

/** The bytes that will actually be committed, not what sits in the working tree. */
function contents(path) {
  if (!staged) return readFileSync(path);
  return execFileSync('git', ['show', `:${path}`], { maxBuffer: 64 * 1024 * 1024 });
}

const errors = [];
const files = targets();

for (const path of files) {
  if (FAVICON.test(path)) continue;

  let buf;
  try {
    buf = contents(path);
  } catch {
    continue; // deleted, or unreadable from the index
  }

  if (path.startsWith('public/images/') && BANNED_UNDER_IMAGES.test(path)) {
    errors.push(
      `${path}\n    Not WebP. Convert it, then stage the .webp and remove the original:\n` +
        `    npx sharp-cli -i "${path}" -o "${path.replace(BANNED_UNDER_IMAGES, '.webp')}" -- resize ${MAX_WIDTH} --withoutEnlargement`,
    );
    continue;
  }

  if (buf.length > MAX_BYTES && !ALLOW.has(path)) {
    errors.push(
      `${path}\n    ${Math.round(buf.length / 1024)}KB exceeds the ${MAX_BYTES / 1024}KB budget. Re-encode at a lower quality:\n` +
        `    npx sharp-cli -i "${path}" -o "${path}" -- resize ${MAX_WIDTH} --withoutEnlargement`,
    );
    continue;
  }

  let width;
  try {
    ({ width } = await sharp(buf).metadata());
  } catch {
    errors.push(`${path}\n    Not a readable image. Corrupt, or the extension does not match the contents.`);
    continue;
  }

  if (width > MAX_WIDTH && !ALLOW.has(path)) {
    errors.push(
      `${path}\n    ${width}px wide, over the ${MAX_WIDTH}px limit. Resize it:\n` +
        `    npx sharp-cli -i "${path}" -o "${path}" -- resize ${MAX_WIDTH} --withoutEnlargement`,
    );
  }
}

if (errors.length) {
  console.error(`\nImage guard: ${errors.length} problem${errors.length > 1 ? 's' : ''} in ${files.length} file${files.length > 1 ? 's' : ''}.\n`);
  console.error('Nothing optimises these after commit. Vercel serves them byte-for-byte.\n');
  for (const e of errors) console.error(`  ${e}\n`);
  console.error('For a genuine exception, add the path to ALLOW in scripts/check-images.mjs with a reason.\n');
  process.exit(1);
}

console.log(`Image guard: ${files.length} image${files.length === 1 ? '' : 's'} OK.`);
