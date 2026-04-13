import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { verifyChallenge } from '../../lib/captcha';

export const prerender = false;

const MESSAGES = {
  en: {
    invalidBody: 'Invalid request body.',
    missingFields: 'All fields are required.',
    invalidEmail: 'Invalid email address.',
    captchaFailed: 'Captcha verification failed. Please try again.',
    sendFailed: 'Failed to send. Please try again.',
  },
  fr: {
    invalidBody: 'Requête invalide.',
    missingFields: 'Tous les champs sont requis.',
    invalidEmail: 'Adresse e-mail invalide.',
    captchaFailed: 'Échec de la vérification anti-robot. Veuillez réessayer.',
    sendFailed: "L'envoi a échoué. Veuillez réessayer.",
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

  const { name, company, website, email, captchaAnswer, captchaToken, locale } = body;
  const t = locale === 'fr' ? MESSAGES.fr : MESSAGES.en;

  if (!name || !company || !website || !email) {
    return new Response(JSON.stringify({ error: t.missingFields }), { status: 400, headers });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: t.invalidEmail }), { status: 400, headers });
  }

  if (!verifyChallenge(captchaAnswer, captchaToken)) {
    return new Response(JSON.stringify({ error: t.captchaFailed }), { status: 403, headers });
  }

  // Send email via Resend
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #1C1C1C 0%, #F25F29 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">China Site Scanner - New lead</h1>
        <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0 0;">ChinaWebFoundry.com</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Website</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="${escapeHtml(website)}" style="color: #F25F29;">${escapeHtml(website)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #56687A; font-size: 13px;">Email</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${escapeHtml(email)}" style="color: #F25F29;">${escapeHtml(email)}</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'ChinaWebFoundry <onboarding@resend.dev>',
    to: 'cyril.drouin@outlook.com',
    replyTo: email,
    subject: `China Site Scanner - ${name} (${company})`,
    html,
    text: `Name: ${name}\nCompany: ${company}\nWebsite: ${website}\nEmail: ${email}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: t.sendFailed }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
