import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const company = str(body.company);
  const youAre = str(body.youAre);
  const country = str(body.country);
  const budget = str(body.budget);
  const hasWebsite = str(body.hasWebsite);
  const website = str(body.website);
  const chinaPresence = str(body.chinaPresence);
  const chinaPresenceDetail = str(body.chinaPresenceDetail);
  const project = str(body.project);
  const services = Array.isArray(body.services)
    ? body.services.filter((s): s is string => typeof s === 'string')
    : [];

  if (!name || !email || !company || !project || !youAre || !budget || services.length === 0) {
    return json({ error: 'Missing required fields.' }, 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json({ error: 'Invalid email address.' }, 400);
  }

  const labelTd =
    'padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 160px; vertical-align: top;';
  const valueTd =
    'padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E; line-height: 1.6;';
  const row = (label: string, value: string): string =>
    `<tr><td style="${labelTd}">${label}</td><td style="${valueTd}">${value}</td></tr>`;

  const rows = [
    row('Name', `<strong>${escapeHtml(name)}</strong>`),
    row('Email', `<a href="mailto:${escapeHtml(email)}" style="color: #F25F29;">${escapeHtml(email)}</a>`),
    row('Phone', escapeHtml(phone || '-')),
    row('Company', `<strong>${escapeHtml(company)}</strong>`),
    row('Type of business', escapeHtml(youAre)),
    row('Country', escapeHtml(country || '-')),
    row('Services of interest', services.map(escapeHtml).join('<br/>')),
    row('Budget', escapeHtml(budget)),
    row('Has a website', escapeHtml(hasWebsite || '-')),
    ...(website
      ? [row('Website', `<a href="${escapeHtml(website)}" style="color: #F25F29;">${escapeHtml(website)}</a>`)]
      : []),
    row('Presence in China', escapeHtml(chinaPresence || '-')),
    ...(chinaPresenceDetail ? [row('China presence details', escapeHtml(chinaPresenceDetail))] : []),
    row('Project', escapeHtml(project).replace(/\n/g, '<br/>')),
  ].join('');

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #1C1C1C 0%, #F25F29 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New contact form submission</h1>
        <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0 0;">ChinaWebFoundry.com</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${rows}
        </table>
      </div>
    </div>
  `;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Company: ${company}`,
    `Type of business: ${youAre}`,
    `Country: ${country || '-'}`,
    `Services of interest: ${services.join(', ')}`,
    `Budget: ${budget}`,
    `Has a website: ${hasWebsite || '-'}`,
    ...(website ? [`Website: ${website}`] : []),
    `Presence in China: ${chinaPresence || '-'}`,
    ...(chinaPresenceDetail ? [`China presence details: ${chinaPresenceDetail}`] : []),
    `Project: ${project}`,
  ].join('\n');

  const { error } = await resend.emails.send({
    from: 'ChinaWebFoundry <onboarding@resend.dev>',
    to: 'cyril.drouin@outlook.com',
    replyTo: email,
    subject: `New enquiry from ${name} - ${company}`,
    html,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ error: 'Failed to send email.' }, 500);
  }

  return json({ success: true }, 200);
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
