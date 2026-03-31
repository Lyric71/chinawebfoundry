const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';

export interface GenerateImageResult {
  imageUrl: string;
  timings: Record<string, unknown>;
}

export async function generateImage(
  prompt: string,
  apiKey: string,
  options?: { timeoutSeconds?: number }
): Promise<GenerateImageResult> {
  const timeout = options?.timeoutSeconds ?? 60;

  // Step 1: Submit task
  const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt.trim(),
      output_format: 'png',
      quality: '1K',
    }),
  });

  const submitData = await submitRes.json();

  if (submitData.code !== 200 || !submitData.data?.id) {
    throw new Error(submitData.message || 'Failed to submit generation task.');
  }

  const taskId = submitData.data.id;

  // Step 2: Poll for result
  for (let i = 0; i < timeout; i++) {
    await new Promise((r) => setTimeout(r, 1000));

    const statusRes = await fetch(
      `${WAVESPEED_API_URL}/predictions/${taskId}/result`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    const statusData = await statusRes.json();
    const status = statusData.data?.status;

    if (status === 'completed') {
      return {
        imageUrl: statusData.data.outputs[0],
        timings: statusData.data.timings,
      };
    }

    if (status === 'failed') {
      throw new Error('Image generation failed.');
    }
  }

  throw new Error(`Image generation timed out (${timeout}s).`);
}
