import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

try { process.loadEnvFile('.env'); } catch {}

const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';
const WEBP_QUALITY = 80;
const MAX_WIDTH = 1600;

const apiKey = process.env.WAVESPEED_API_KEY;
if (!apiKey) {
  console.error('Missing WAVESPEED_API_KEY in environment. Add it to .env');
  process.exit(1);
}

const args = process.argv.slice(2);
const nameFlag = args.findIndex((a) => a === '--name');
let outputName;
if (nameFlag !== -1) {
  outputName = args.splice(nameFlag, 2)[1];
}

const prompt = args.join(' ');
if (!prompt) {
  console.error('Usage: node scripts/generate-image.mjs [--name <filename>] <prompt>');
  process.exit(1);
}

console.log(`Submitting: "${prompt}"`);

const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt: prompt.trim(), output_format: 'png', quality: '1K', size: '1408x832' }),
});

const submitData = await submitRes.json();

if (submitData.code !== 200 || !submitData.data?.id) {
  console.error('Submit failed:', submitData.message || submitData);
  process.exit(1);
}

const taskId = submitData.data.id;
console.log(`Task ID: ${taskId} — polling...`);

for (let i = 0; i < 120; i++) {
  await new Promise((r) => setTimeout(r, 1000));

  const statusRes = await fetch(`${WAVESPEED_API_URL}/predictions/${taskId}/result`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  const statusData = await statusRes.json();
  const status = statusData.data?.status;

  if (status === 'completed') {
    const imageUrl = statusData.data.outputs[0];
    console.log(`Done! URL: ${imageUrl}`);

    // Download and optimise to WebP
    const imgRes = await fetch(imageUrl);
    const rawBuffer = Buffer.from(await imgRes.arrayBuffer());
    const optimised = await sharp(rawBuffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    const filename = outputName ? `${outputName}.webp` : `generated-${Date.now()}.webp`;
    const outPath = resolve('public/images', filename);
    await writeFile(outPath, optimised);
    const savings = ((1 - optimised.length / rawBuffer.length) * 100).toFixed(0);
    console.log(`Saved to ${outPath} (${(rawBuffer.length/1024).toFixed(0)}KB -> ${(optimised.length/1024).toFixed(0)}KB, -${savings}%)`);
    process.exit(0);
  }

  if (status === 'failed') {
    console.error('Generation failed.');
    process.exit(1);
  }

  if (i % 5 === 0) process.stdout.write('.');
}

console.error('\nTimed out after 120s.');
process.exit(1);
