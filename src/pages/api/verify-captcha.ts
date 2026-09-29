import type { APIRoute } from 'astro';
import { createScanToken, verifyChallenge } from '../../lib/captcha';

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
  es: {
    invalidBody: 'Solicitud no válida.',
    captchaFailed: 'La comprobación de seguridad no es correcta. Inténtelo de nuevo.',
  },
  de: {
    invalidBody: 'Ungültige Anfrage.',
    captchaFailed: 'Die Sicherheitsabfrage ist fehlgeschlagen. Bitte versuchen Sie es erneut.',
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

  const { captchaAnswer, captchaToken, locale, url } = body;
  const t = MESSAGES[locale as keyof typeof MESSAGES] ?? MESSAGES.en;

  if (!verifyChallenge(captchaAnswer, captchaToken)) {
    return new Response(JSON.stringify({ error: t.captchaFailed }), { status: 403, headers });
  }

  // The scanner page sends the URL it is about to scan and gets a token bound to it
  const scanToken = typeof url === 'string' ? createScanToken(url) : null;

  return new Response(JSON.stringify({ success: true, scanToken }), { status: 200, headers });
};
