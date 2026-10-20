#!/usr/bin/env node
/**
 * Builds the share cards: the picture LinkedIn, X, WhatsApp or Slack show
 * when someone pastes one of our links (og:image, twitter:image).
 *
 *   node scripts/og-images.mjs           # only what is missing or older
 *   node scripts/og-images.mjs --force   # every card again
 *
 *   public/images/guides/foo.webp  ->  public/og/guides/foo.jpg
 *
 * Why JPEG, outside public/images: the site serves WebP, and LinkedIn does not
 * reliably render a WebP share picture (the card comes out bare). The image
 * guard (scripts/check-images.mjs) bans JPEG under public/images only, and
 * caps every image at 1050 px, so a card is 1050 x 550: the 1.91:1 shape every
 * network crops to, inside the guard's width and weight budget.
 *
 * Writes src/data/og-cards.json, the list of cards that exist. BaseLayout
 * checks it before pointing at one; a page whose picture has no card gets the
 * default card (public/og/default.jpg), built here from the skyline hero and
 * the logo. Run it after adding a hero, a guide visual or a case study visual,
 * and commit the cards with the page.
 */

import { argv } from 'node:process';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const force = argv.includes('--force');

const W = 1050;
const H = 550;
const QUALITY = 80;
const OUT_ROOT = 'public/og';
const LIST_PATH = 'src/data/og-cards.json';

/** Which pictures get a card: page heroes, guide and case study visuals.
 *  Full-page screenshots (-full) are too tall to crop into a card. */
const SOURCES = [
  { dir: 'images', keep: (n) => /^hero-.*\.webp$/i.test(n) },
  { dir: 'images/guides', keep: (n) => /\.webp$/i.test(n) },
  { dir: 'images/casestudies', keep: (n) => /\.webp$/i.test(n) && !/-full\.webp$/i.test(n) },
];

const DEFAULT_PLATE = 'public/images/hero-astro-china-skyline.webp';
const LOGO = 'public/Logo-ChinaWebFoundry-final.webp';
const NAME = 'ChinaWebFoundry';
const TAGLINE = 'Web agency in China for international brands';
const DOMAIN = 'chinawebfoundry.com';

/** @param {string} p */
async function mtime(p) {
  try {
    return (await stat(p)).mtimeMs;
  } catch {
    return 0;
  }
}

/** /images/x/y.webp -> x/y (the list key and the card path under og/). */
const cardKey = (url) => url.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');

async function buildCard(url) {
  const src = path.join('public', url);
  const out = path.join(OUT_ROOT, `${cardKey(url)}.jpg`);
  if (!force && (await mtime(out)) >= (await mtime(src))) return false;
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .flatten({ background: '#0f0f14' })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(out);
  return true;
}

async function buildDefault() {
  const out = path.join(OUT_ROOT, 'default.jpg');
  const newest = Math.max(await mtime(DEFAULT_PLATE), await mtime(LOGO), await mtime(fileURLToPath(import.meta.url)));
  if (!force && (await mtime(out)) >= newest) return false;

  const plate = await sharp(DEFAULT_PLATE).resize(W, H, { fit: 'cover' }).toBuffer();
  const logo = await sharp(LOGO).resize({ height: 150 }).png().toBuffer();
  const overlay = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#0f0f14" stop-opacity="0.94"/>
        <stop offset="0.6" stop-color="#0f0f14" stop-opacity="0.74"/>
        <stop offset="1" stop-color="#0f0f14" stop-opacity="0.4"/>
      </linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
      <text x="70" y="300" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="64"
        font-weight="700" fill="#ffffff">${NAME}</text>
      <text x="70" y="362" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="34"
        fill="#e5e5ea">${TAGLINE}</text>
      <text x="70" y="${H - 60}" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="26"
        font-weight="600" letter-spacing="1" fill="#F25F29">${DOMAIN}</text>
    </svg>`,
  );
  await mkdir(OUT_ROOT, { recursive: true });
  await sharp(plate)
    .composite([{ input: overlay }, { input: logo, left: 64, top: 70 }])
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(out);
  return true;
}

async function main() {
  let built = 0;
  if (await buildDefault()) built++;
  const keys = [];
  for (const { dir, keep } of SOURCES) {
    let names = [];
    try {
      names = await readdir(path.join('public', dir));
    } catch {
      continue;
    }
    for (const n of names.filter(keep)) {
      const url = `/${dir}/${n}`;
      if (await buildCard(url)) built++;
      keys.push(cardKey(url));
    }
  }
  keys.sort();
  const next = `${JSON.stringify(keys, null, 2)}\n`;
  let prev = '';
  try {
    prev = await readFile(LIST_PATH, 'utf8');
  } catch {}
  if (prev !== next) {
    await mkdir(path.dirname(LIST_PATH), { recursive: true });
    await writeFile(LIST_PATH, next);
  }
  console.log(`[og] ${keys.length} share cards, ${built} written.`);
}

main().catch((err) => {
  console.error(`[og] ${err.message}`);
  process.exit(1);
});
