import type { APIRoute } from 'astro';
import { verifyScanToken } from '../../lib/captcha';
import { ScanFetchError } from '../../lib/scanner/fetch';
import { scanSite } from '../../lib/scanner/scan';
import type { ScanErrorCode } from '../../lib/scanner/types';

export const prerender = false;

/** Per-instance throttle on top of the scan token: 8 scans per IP per 10 minutes. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const recent = new Map<string, number[]>();

function throttled(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

function fail(code: ScanErrorCode, status: number, detail?: number) {
  return new Response(JSON.stringify({ error: code, status: detail }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: { url?: unknown; scanToken?: unknown };
  try {
    body = await request.json();
  } catch {
    return fail('invalid', 400);
  }

  let url = typeof body.url === 'string' ? body.url.trim() : '';
  if (!url || url.length > 2048) return fail('invalid', 400);
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    new URL(url);
  } catch {
    return fail('invalid', 400);
  }

  if (!verifyScanToken(body.scanToken, url)) return fail('token', 403);

  let ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
  if (!ip) {
    try {
      ip = clientAddress;
    } catch {
      ip = 'unknown';
    }
  }
  if (throttled(ip)) return fail('token', 429);

  try {
    const report = await scanSite(url);
    return new Response(JSON.stringify(report), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    if (err instanceof ScanFetchError) return fail(err.code, 502, err.status);
    console.error('Scan failed:', err);
    return fail('server', 500);
  }
};
