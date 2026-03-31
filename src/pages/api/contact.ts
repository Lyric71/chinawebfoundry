import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, phone, website, company, project } = body;

  if (!name || !email || !website || !company || !project) {
    return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #1C1C1C 0%, #F25F29 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New contact form submission</h1>
        <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0 0;">ChinaWebFoundry.com</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="mailto:${escapeHtml(email)}" style="color: #F25F29;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E;">${escapeHtml(phone || '-')}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Website</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="${escapeHtml(website)}" style="color: #F25F29;">${escapeHtml(website)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #56687A; font-size: 13px; vertical-align: top;">Project</td>
            <td style="padding: 10px 0; color: #1A1F2E; line-height: 1.6;">${escapeHtml(project).replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'ChinaWebFoundry <onboarding@resend.dev>',
    to: 'cyril.drouin@beyondbordergroup.com',
    replyTo: email,
    subject: `New enquiry from ${name} - ${company}`,
    html,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nWebsite: ${website}\nCompany: ${company}\nProject: ${project}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
