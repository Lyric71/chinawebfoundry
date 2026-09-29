/**
 * Outbound fetch for the China Site Scanner, with SSRF protection.
 *
 * The scanner fetches arbitrary user-supplied URLs from our own function, so
 * every hop (including redirects) is checked: http(s) only, default ports only,
 * and the hostname must resolve to public addresses. Bodies are size-capped and
 * decoded with the charset the page declares (many mainland sites still serve GBK).
 */
import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

export const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

export class ScanFetchError extends Error {
  constructor(
    public code: 'invalid' | 'blocked-target' | 'timeout' | 'unreachable' | 'http' | 'too-many-redirects' | 'not-html',
    message: string,
    public status?: number,
  ) {
    super(message);
  }
}

export interface FetchResult {
  url: string;
  status: number;
  headers: Headers;
  body: string;
  bytes: number;
  ms: number;
  redirects: string[];
}

function ipv4ToInt(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0;
}

function inRange(ip: string, cidr: string): boolean {
  const [base, bits] = cidr.split('/');
  const mask = bits === '0' ? 0 : (~0 << (32 - Number(bits))) >>> 0;
  return (ipv4ToInt(ip) & mask) === (ipv4ToInt(base) & mask);
}

const PRIVATE_V4 = [
  '0.0.0.0/8',
  '10.0.0.0/8',
  '100.64.0.0/10',
  '127.0.0.0/8',
  '169.254.0.0/16',
  '172.16.0.0/12',
  '192.0.0.0/24',
  '192.0.2.0/24',
  '192.168.0.0/16',
  '198.18.0.0/15',
  '198.51.100.0/24',
  '203.0.113.0/24',
  '224.0.0.0/4',
  '240.0.0.0/4',
];

export function isPublicAddress(address: string): boolean {
  const family = isIP(address);
  if (family === 4) return !PRIVATE_V4.some((cidr) => inRange(address, cidr));
  if (family === 6) {
    const a = address.toLowerCase();
    if (a === '::' || a === '::1') return false;
    const mapped = a.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
    if (mapped) return isPublicAddress(mapped[1]);
    // fc00::/7 unique local, fe80::/10 link local, ff00::/8 multicast, 2001:db8::/32 documentation
    if (/^f[cd]/.test(a) || /^fe[89ab]/.test(a) || a.startsWith('ff') || a.startsWith('2001:db8')) return false;
    return true;
  }
  return false;
}

async function assertSafeTarget(url: URL): Promise<void> {
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new ScanFetchError('invalid', 'Only http and https URLs can be scanned.');
  }
  if (url.port && url.port !== '80' && url.port !== '443') {
    throw new ScanFetchError('blocked-target', 'Only standard web ports can be scanned.');
  }
  if (url.username || url.password) {
    throw new ScanFetchError('invalid', 'URLs with credentials cannot be scanned.');
  }
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.internal') || host.endsWith('.local')) {
    throw new ScanFetchError('blocked-target', 'That address cannot be scanned.');
  }
  if (isIP(host)) {
    if (!isPublicAddress(host)) throw new ScanFetchError('blocked-target', 'That address cannot be scanned.');
    return;
  }
  let addresses: { address: string }[];
  try {
    addresses = await lookup(host, { all: true, verbatim: true });
  } catch {
    throw new ScanFetchError('unreachable', 'The domain does not resolve.');
  }
  if (addresses.length === 0 || addresses.some((a) => !isPublicAddress(a.address))) {
    throw new ScanFetchError('blocked-target', 'That address cannot be scanned.');
  }
}

function charsetOf(contentType: string | null, head: Uint8Array): string {
  const fromHeader = contentType?.match(/charset=["']?([\w-]+)/i)?.[1];
  if (fromHeader) return fromHeader.toLowerCase();
  const sniff = new TextDecoder('latin1').decode(head.subarray(0, 2048));
  const fromMeta = sniff.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1];
  return (fromMeta ?? 'utf-8').toLowerCase();
}

function decode(bytes: Uint8Array, contentType: string | null): string {
  const charset = charsetOf(contentType, bytes);
  try {
    return new TextDecoder(charset === 'gb2312' ? 'gbk' : charset).decode(bytes);
  } catch {
    return new TextDecoder('utf-8').decode(bytes);
  }
}

async function readCapped(res: Response, maxBytes: number): Promise<Uint8Array> {
  if (!res.body) return new Uint8Array();
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (total < maxBytes) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.byteLength;
  }
  await reader.cancel().catch(() => {});
  const out = new Uint8Array(Math.min(total, maxBytes));
  let offset = 0;
  for (const chunk of chunks) {
    const slice = chunk.subarray(0, out.length - offset);
    out.set(slice, offset);
    offset += slice.byteLength;
    if (offset >= out.length) break;
  }
  return out;
}

export interface SafeFetchOptions {
  timeoutMs: number;
  maxBytes: number;
  accept?: string;
  maxRedirects?: number;
  /** Fail with `not-html` when the final response is not an HTML document */
  requireHtml?: boolean;
}

export async function safeFetch(input: string, opts: SafeFetchOptions): Promise<FetchResult> {
  let current: URL;
  try {
    current = new URL(input);
  } catch {
    throw new ScanFetchError('invalid', 'Invalid URL format.');
  }

  const redirects: string[] = [];
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeoutMs);

  try {
    for (let hop = 0; hop <= (opts.maxRedirects ?? 5); hop++) {
      await assertSafeTarget(current);
      let res: Response;
      try {
        res = await fetch(current, {
          redirect: 'manual',
          signal: controller.signal,
          headers: {
            'User-Agent': USER_AGENT,
            Accept: opts.accept ?? 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-GB,en;q=0.9,zh-CN;q=0.6',
          },
        });
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          throw new ScanFetchError('timeout', 'The site took too long to answer.');
        }
        throw new ScanFetchError('unreachable', 'Could not reach the site.');
      }

      if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
        await res.body?.cancel().catch(() => {});
        redirects.push(current.toString());
        current = new URL(res.headers.get('location')!, current);
        continue;
      }

      if (!res.ok) {
        await res.body?.cancel().catch(() => {});
        throw new ScanFetchError('http', `The site answered with HTTP ${res.status}.`, res.status);
      }

      const contentType = res.headers.get('content-type');
      if (opts.requireHtml && contentType && !/html|xml/i.test(contentType)) {
        await res.body?.cancel().catch(() => {});
        throw new ScanFetchError('not-html', 'That URL does not return a web page.');
      }

      const bytes = await readCapped(res, opts.maxBytes);
      return {
        url: current.toString(),
        status: res.status,
        headers: res.headers,
        body: decode(bytes, contentType),
        bytes: bytes.byteLength,
        ms: Date.now() - started,
        redirects,
      };
    }
    throw new ScanFetchError('too-many-redirects', 'The site redirects too many times.');
  } finally {
    clearTimeout(timer);
  }
}
