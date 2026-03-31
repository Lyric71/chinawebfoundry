import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';

const apiKey = process.env.WAVESPEED_API_KEY;
if (!apiKey) {
  console.error('Missing WAVESPEED_API_KEY in environment. Add it to .env');
  process.exit(1);
}

const prompt = process.argv.slice(2).join(' ');
if (!prompt) {
  console.error('Usage: node scripts/generate-image.mjs <prompt>');
  process.exit(1);
}

console.log(`Submitting: "${prompt}"`);

const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt: prompt.trim(), output_format: 'png', quality: '1K' }),
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

    // Download to disk
    const imgRes = await fetch(imageUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const filename = `generated-${Date.now()}.png`;
    const outPath = resolve('public/images', filename);
    await writeFile(outPath, buffer);
    console.log(`Saved to ${outPath}`);
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
