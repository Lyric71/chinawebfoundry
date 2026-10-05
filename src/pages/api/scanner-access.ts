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
  es: {
    invalidBody: 'Solicitud no válida.',
    missingFields: 'Falta algún campo por completar.',
    invalidEmail: 'El correo electrónico no es válido.',
    captchaFailed: 'La comprobación de seguridad no es correcta. Inténtelo de nuevo.',
    sendFailed: 'No hemos podido enviar el formulario. Inténtelo de nuevo.',
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
  const t = locale === 'fr' ? MESSAGES.fr : locale === 'es' ? MESSAGES.es : MESSAGES.en;

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

  // Follow-up to the lead, scheduled 1 hour out. A failure here is logged but never blocks the scan.
  const followUp = buildFollowUp(name, website);
  const { error: followUpError } = await resend.emails.send({
    from: FOLLOW_UP_FROM,
    to: email,
    bcc: FOLLOW_UP_BCC,
    replyTo: FOLLOW_UP_REPLY_TO,
    subject: followUp.subject,
    html: followUp.html,
    text: followUp.text,
    scheduledAt: new Date(Date.now() + FOLLOW_UP_DELAY_MS).toISOString(),
  });

  if (followUpError) {
    console.error('Resend follow-up error:', followUpError);
  }

  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
};

// thechinapath.com is verified in Resend.
const FOLLOW_UP_FROM = 'Cyril Drouin <cyril.drouin@thechinapath.com>';
const FOLLOW_UP_REPLY_TO = 'cyril.drouin@outlook.com';
const FOLLOW_UP_BCC = 'cyril.drouin@outlook.com';
const FOLLOW_UP_DELAY_MS = 60 * 60 * 1000;

function buildFollowUp(name: string, website: string) {
  const site = website.replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  const firstName = name.split(/\s+/)[0];

  const subject = `Your China Site Scanner check of ${site}`;

  const text = `Dear ${firstName},

Thanks for running ${site} through the China Site Scanner.

If your results raised questions, or you're weighing what to do next, I can help. We're a Shanghai team that has spent more than 20 years helping international companies launch and run websites for the mainland China market.

We can support you at any stage:

- Plan: a strategy and audit of your China readiness, or a full migration of your site to China.
- Build: native Chinese content, UX/UI design for Chinese users, and ICP-licensed hosting.
- Grow and run: Baidu SEO, visibility in Chinese AI search engines, and ongoing maintenance and support.

Some clients come to us for a single piece, others hand us the whole thing.

Would a 20-minute call be useful?

Best,
Cyril Drouin
ChinaWebFoundry
chinawebfoundry.com`;

  const p = 'margin: 0 0 16px;';
  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #333333; max-width: 600px;">
      <p style="${p}">Dear ${escapeHtml(firstName)},</p>
      <p style="${p}">Thanks for running ${escapeHtml(site)} through the China Site Scanner.</p>
      <p style="${p}">If your results raised questions, or you're weighing what to do next, I can help. We're a Shanghai team that has spent more than 20 years helping international companies launch and run websites for the mainland China market.</p>
      <p style="${p}">We can support you at any stage:</p>
      <ul style="margin: 0 0 16px; padding-left: 20px;">
        <li style="margin-bottom: 6px;"><strong>Plan:</strong> a strategy and audit of your China readiness, or a full migration of your site to China.</li>
        <li style="margin-bottom: 6px;"><strong>Build:</strong> native Chinese content, UX/UI design for Chinese users, and ICP-licensed hosting.</li>
        <li style="margin-bottom: 6px;"><strong>Grow and run:</strong> Baidu SEO, visibility in Chinese AI search engines, and ongoing maintenance and support.</li>
      </ul>
      <p style="${p}">Some clients come to us for a single piece, others hand us the whole thing.</p>
      <p style="${p}">Would a 20-minute call be useful?</p>
      <p style="margin: 0;">Best,<br>Cyril Drouin<br>ChinaWebFoundry<br><a href="https://www.chinawebfoundry.com/" style="color: #F25F29;">chinawebfoundry.com</a></p>
    </div>
  `;

  return { subject, html, text };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
