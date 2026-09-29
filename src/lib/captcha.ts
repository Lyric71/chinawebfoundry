import crypto from 'node:crypto';

const SECRET = import.meta.env.CAPTCHA_SECRET || 'dev-captcha-secret-change-me';
const TTL_MS = 10 * 60 * 1000;

export interface CaptchaChallenge {
  question: string;
  token: string;
}

export function createChallenge(): CaptchaChallenge {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const answer = a + b;
  const expiry = Date.now() + TTL_MS;
  const hmac = crypto
    .createHmac('sha256', SECRET)
    .update(`${answer}|${expiry}`)
    .digest('hex');
  return { question: `${a} + ${b}`, token: `${expiry}.${hmac}` };
}

export function verifyChallenge(answer: unknown, token: unknown): boolean {
  if (typeof answer !== 'string' || typeof token !== 'string') return false;
  const trimmed = answer.trim();
  if (!trimmed) return false;

  const [expiryStr, hmac] = token.split('.');
  if (!expiryStr || !hmac) return false;

  const expiry = parseInt(expiryStr, 10);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;

  const expected = crypto
    .createHmac('sha256', SECRET)
    .update(`${trimmed}|${expiry}`)
    .digest('hex');

  try {
    const a = Buffer.from(hmac, 'hex');
    const b = Buffer.from(expected, 'hex');
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

/**
 * Scan tokens. /api/verify-captcha issues one after a correct answer, bound to
 * the hostname being scanned; /api/scan refuses to run without it, so the scan
 * endpoint cannot be used as an open fetch proxy.
 */
const SCAN_TTL_MS = 10 * 60 * 1000;

function scanHost(url: string): string | null {
  try {
    const u = new URL(/^https?:\/\//i.test(url) ? url : `https://${url}`);
    return u.hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    return null;
  }
}

export function createScanToken(url: string): string | null {
  const host = scanHost(url);
  if (!host) return null;
  const expiry = Date.now() + SCAN_TTL_MS;
  const hmac = crypto.createHmac('sha256', SECRET).update(`scan|${host}|${expiry}`).digest('hex');
  return `${expiry}.${hmac}`;
}

export function verifyScanToken(token: unknown, url: string): boolean {
  if (typeof token !== 'string') return false;
  const host = scanHost(url);
  const [expiryStr, hmac] = token.split('.');
  if (!host || !expiryStr || !hmac) return false;
  const expiry = parseInt(expiryStr, 10);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;
  const expected = crypto.createHmac('sha256', SECRET).update(`scan|${host}|${expiry}`).digest('hex');
  try {
    const a = Buffer.from(hmac, 'hex');
    const b = Buffer.from(expected, 'hex');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
