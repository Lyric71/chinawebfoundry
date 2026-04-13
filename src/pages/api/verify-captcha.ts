import type { APIRoute } from 'astro';
import { verifyChallenge } from '../../lib/captcha';

export const prerender = false;

const MESSAGES = {
  en: {
    invalidBody: 'Invalid request body.',
    captchaFailed: 'Captcha verification failed. Please try again.',
  },
  fr: {
    invalidBody: 'Requête invalide.',
    captchaFailed: 'Échec de la vérification anti-robot. Veuillez réessayer.',
  },
} as const;

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: MESSAGES.en.invalidBody }), { status: 400, headers });
  }

  const { captchaAnswer, captchaToken, locale } = body;
  const t = locale === 'fr' ? MESSAGES.fr : MESSAGES.en;

  if (!verifyChallenge(captchaAnswer, captchaToken)) {
    return new Response(JSON.stringify({ error: t.captchaFailed }), { status: 403, headers });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
};
