import { readdir, stat, unlink } from 'node:fs/promises';
import { resolve, join, extname, basename } from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = resolve('public/images');
const QUALITY = 80;
const MAX_WIDTH = 1600;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(full));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = await getFiles(IMAGES_DIR);
console.log(`Found ${files.length} images to convert to WebP\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const before = (await stat(file)).size;
  totalBefore += before;

  try {
    await sharp(file)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const after = (await stat(webpPath)).size;
    totalAfter += after;
    const savings = ((1 - after / before) * 100).toFixed(0);
    console.log(`${basename(file)} -> ${basename(webpPath)} (${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB, -${savings}%)`);

    await unlink(file);
  } catch (err) {
    console.error(`Failed: ${basename(file)} - ${err.message}`);
    totalAfter += before;
  }
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB -> ${(totalAfter/1024/1024).toFixed(1)}MB (-${((1-totalAfter/totalBefore)*100).toFixed(0)}%)`);
