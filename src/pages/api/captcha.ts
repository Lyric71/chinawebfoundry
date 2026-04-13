import type { APIRoute } from 'astro';
import { createChallenge } from '../../lib/captcha';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(createChallenge()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};
