/**
 * Where is the site served from?
 *
 * Signals, strongest first:
 * 1. The "China view": Google Public DNS queried with a China Telecom client
 *    subnet (EDNS Client Subnet). Geo-DNS setups answer with their mainland
 *    CDN, so a mainland IP here means mainland visitors are served locally.
 * 2. Team Cymru's IP-to-ASN DNS service (no key, plain TXT). The prefix
 *    country is the mainland signal; an AS registered in CN on a non-CN prefix
 *    is a Chinese provider's overseas node, which is not the same thing.
 * 3. CNAME chain and response headers, which name the CDN or platform vendor.
 *    A vendor match alone never proves mainland delivery: Alibaba and Tencent
 *    run overseas nodes too.
 */
import { resolve4, resolveCname, resolveTxt } from 'node:dns/promises';
import type { Evidence, Severity } from './rules';
import type { Hosting, HostingZone } from './types';

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | null> {
  return Promise.race([p.catch(() => null), new Promise<null>((r) => setTimeout(() => r(null), ms))]);
}

interface Fingerprint {
  provider: string;
  /** A Chinese CDN vendor: mainland delivery is possible, not proven */
  chinaVendor?: boolean;
  header?: (h: Headers) => boolean;
  cname?: RegExp;
}

const has = (name: string) => (h: Headers) => h.has(name);
const headerMatch = (name: string, re: RegExp) => (h: Headers) => re.test(h.get(name) ?? '');

const FINGERPRINTS: Fingerprint[] = [
  { provider: 'Alibaba Cloud CDN', chinaVendor: true, cname: /\.(kunlun[a-z0-9]*|alikunlun|tbcache|cdngslb|alicdn)\.(com|net)\.?$/, header: (h) => h.has('eagleid') || h.has('ali-swift-global-savetime') },
  { provider: 'Tencent Cloud CDN / EdgeOne', chinaVendor: true, cname: /\.(cdn\.dnsv1\.com|dnsv1\.com\.cn|tcdn\.qq\.com|cdntip\.com|dnse[0-9]\.com|edgeone\.(com|cn|ai)|qcloudcdn\.com)\.?$/, header: (h) => h.has('x-nws-log-uuid') || h.has('eo-log-uuid') || h.has('eo-cache-status') },
  { provider: 'Baidu AI Cloud CDN', chinaVendor: true, cname: /\.(bdydns|jomodns|bcebos|bdycdn)\.(com|cn)\.?$/, header: (h) => h.has('ohc-cache-hit') },
  { provider: 'Huawei Cloud CDN', chinaVendor: true, cname: /\.(cdnhwc[0-9]*|huaweicloud-cdn|hwcdn)\.(com|net|cn)\.?$/, header: headerMatch('dl-from', /hwcdn/i) },
  { provider: 'Wangsu / ChinaNetCenter', chinaVendor: true, cname: /\.(wscdns|wsdvs|wsglb0|lxdns|chinanetcenter|wswebcdn|wsssec)\.(com|net|cn)\.?$/, header: has('x-ws-request-id') },
  { provider: 'Qiniu', chinaVendor: true, cname: /\.(qiniudns|qbox|clouddn|qiniucdn)\.(com|me|net)\.?$/, header: has('x-qiniu-zone') },
  { provider: 'Volcano Engine CDN', chinaVendor: true, cname: /\.(volcgslb|bytegslb|volcdns)\.(com|net)\.?$/ },
  { provider: 'Azure China', chinaVendor: true, cname: /\.(chinacloudapp|chinacloudapi|chinacloudsites)\.(cn|net)\.?$|\.azure\.cn\.?$/ },
  { provider: 'AWS China', chinaVendor: true, cname: /\.cloudfront\.cn\.?$|\.amazonaws\.com\.cn\.?$/ },
  { provider: 'Cloudflare China Network', chinaVendor: true, cname: /\.cloudflarecn\.net\.?$|\.cloudflare-cn\.com\.?$/ },

  { provider: 'Vercel', header: (h) => h.has('x-vercel-id') || /^vercel$/i.test(h.get('server') ?? ''), cname: /vercel-dns[a-z0-9-]*\.com\.?$|\.vercel\.app\.?$/ },
  { provider: 'Netlify', header: (h) => h.has('x-nf-request-id') || /netlify/i.test(h.get('server') ?? ''), cname: /\.netlify\.(app|com)\.?$/ },
  { provider: 'Cloudflare', header: (h) => h.has('cf-ray') || /cloudflare/i.test(h.get('server') ?? ''), cname: /\.cdn\.cloudflare\.net\.?$/ },
  { provider: 'AWS CloudFront', header: (h) => h.has('x-amz-cf-id') || h.has('x-amz-cf-pop'), cname: /\.cloudfront\.net\.?$/ },
  { provider: 'Fastly', header: (h) => /cache-[a-z]{3}/i.test(h.get('x-served-by') ?? '') || h.has('x-fastly-request-id'), cname: /\.fastly(lb)?\.net\.?$/ },
  { provider: 'Akamai', header: (h) => h.has('akamai-grn') || h.has('x-akamai-transformed'), cname: /\.(akamaiedge|edgekey|edgesuite|akamaized|akamai)\.net\.?$/ },
  { provider: 'Azure Front Door', header: has('x-azure-ref'), cname: /\.(azurefd|azureedge|trafficmanager|azurewebsites)\.net\.?$/ },
  { provider: 'Google Cloud', cname: /\.(ghs\.googlehosted|googlehosted)\.com\.?$/ },
  { provider: 'Shopify', header: (h) => h.has('x-shopid') || /shopify/i.test(h.get('powered-by') ?? ''), cname: /shops\.myshopify\.com\.?$/ },
  { provider: 'Wix', header: (h) => h.has('x-wix-request-id') || /pepyaka/i.test(h.get('server') ?? ''), cname: /\.wixdns\.net\.?$/ },
  { provider: 'Squarespace', header: headerMatch('server', /squarespace/i), cname: /\.squarespace\.com\.?$/ },
  { provider: 'Webflow', header: (h) => h.has('x-wf-region') || h.has('x-wf-page-id'), cname: /\.webflow\.io\.?$|proxy-ssl\.webflow\.com\.?$/ },
  { provider: 'GitHub Pages', header: headerMatch('server', /github\.com/i), cname: /\.github\.io\.?$/ },
  { provider: 'WP Engine', header: headerMatch('x-powered-by', /wp engine/i), cname: /\.wpengine(powered)?\.com\.?$/ },
  { provider: 'Kinsta', header: has('x-kinsta-cache'), cname: /\.kinsta\.cloud\.?$/ },
  { provider: 'HubSpot CMS', header: has('x-hs-cache-config'), cname: /\.hubspot\.net\.?$|\.hs-sites\.com\.?$/ },
];

async function cnameChain(hostname: string): Promise<string[]> {
  const chain: string[] = [];
  let current = hostname;
  for (let i = 0; i < 6; i++) {
    const next = await withTimeout(resolveCname(current), 2500);
    if (!next || next.length === 0) break;
    current = next[0].toLowerCase();
    if (chain.includes(current)) break;
    chain.push(current);
  }
  return chain;
}

/** A China Telecom Guangdong subnet, so geo-DNS answers as it would for a mainland visitor. */
const CHINA_SUBNET = '202.96.128.0/24';

async function chinaView(hostname: string): Promise<{ cnames: string[]; ip: string | null } | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);
  try {
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(hostname)}&type=A&edns_client_subnet=${CHINA_SUBNET}`,
      { signal: controller.signal, headers: { Accept: 'application/dns-json' } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { Answer?: { type: number; data: string }[] };
    const answers = data.Answer ?? [];
    return {
      cnames: answers.filter((a) => a.type === 5).map((a) => a.data.toLowerCase().replace(/\.$/, '')),
      ip: answers.find((a) => a.type === 1)?.data ?? null,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

interface OriginAs {
  asn: string;
  prefixCountry: string;
  asCountry: string | null;
  network: string | null;
}

async function originAs(ip: string): Promise<OriginAs | null> {
  const reversed = ip.split('.').reverse().join('.');
  const origin = await withTimeout(resolveTxt(`${reversed}.origin.asn.cymru.com`), 2500);
  const line = origin?.[0]?.join('');
  if (!line) return null;
  const [asnField, , country] = line.split('|').map((s) => s.trim());
  const asn = asnField?.split(' ')[0];
  if (!asn) return null;
  const desc = await withTimeout(resolveTxt(`AS${asn}.asn.cymru.com`), 2500);
  const fields = desc?.[0]?.join('').split('|').map((s) => s.trim());
  return {
    asn,
    prefixCountry: (country || '').toUpperCase(),
    asCountry: fields?.[1]?.toUpperCase() ?? null,
    network: fields?.[4] ?? null,
  };
}

const FACT_BANK = 'ChinaWebFoundry fact bank';

export async function analyseHosting(hostname: string, headers: Headers): Promise<Hosting> {
  const [localCnames, localIps, cn] = await Promise.all([
    cnameChain(hostname),
    withTimeout(resolve4(hostname), 2500),
    chinaView(hostname),
  ]);

  const localIp = localIps?.[0] ?? null;
  const [localAs, cnAs] = await Promise.all([
    localIp ? originAs(localIp) : Promise.resolve(null),
    cn?.ip && cn.ip !== localIp ? originAs(cn.ip) : Promise.resolve(null),
  ]);

  const cnames = [...new Set([...localCnames, ...(cn?.cnames ?? [])])];
  const providers: string[] = [];
  let chinaVendor = false;
  for (const fp of FINGERPRINTS) {
    const byHeader = fp.header?.(headers) ?? false;
    const byCname = fp.cname ? cnames.some((c) => fp.cname!.test(c)) || fp.cname.test(hostname) : false;
    if (byHeader || byCname) {
      providers.push(fp.provider);
      if (fp.chinaVendor) chinaVendor = true;
    }
  }

  // Prefer the mainland answer when it lands on a mainland prefix
  const servedInChina = cnAs?.prefixCountry === 'CN' || localAs?.prefixCountry === 'CN';
  const shown = cnAs?.prefixCountry === 'CN' ? { ip: cn!.ip, as: cnAs } : { ip: localIp, as: localAs };
  const country = shown.as?.prefixCountry || null;

  let zone: HostingZone = 'unknown';
  if (servedInChina) zone = 'mainland';
  else if (chinaVendor) zone = 'china-cdn';
  else if (country === 'HK' || country === 'MO') zone = 'hk';
  else if (country) zone = 'abroad';

  let copy = 'host-unknown';
  let severity: Severity = 'info';
  let evidence: Evidence | undefined;
  const is = (p: string) => providers.includes(p);
  const bare = hostname.toLowerCase();

  if (zone === 'mainland') {
    copy = 'host-mainland';
  } else if (zone === 'china-cdn') {
    copy = 'host-china-cdn';
    severity = 'low';
  } else if (/\.(vercel\.app|netlify\.app|pages\.dev|github\.io|webflow\.io|wixsite\.com|myshopify\.com)$/.test(bare)) {
    copy = 'host-platform-subdomain';
    severity = 'high';
    evidence = { source: FACT_BANK, date: '2026-09-06', fact: 'F29' };
  } else if (is('Wix')) {
    copy = 'host-wix';
    severity = 'high';
    evidence = { source: '21YunBox probe', date: '2026-08-28', fact: 'F38' };
  } else if (is('Squarespace') || is('Webflow')) {
    copy = 'host-sni';
    severity = 'high';
    evidence = { source: FACT_BANK, date: '2026-08-21', fact: 'F38' };
  } else if (is('AWS CloudFront')) {
    copy = 'host-cloudfront';
    severity = 'high';
    evidence = { source: '21YunBox probe', date: '2026-08-28', fact: 'F39' };
  } else if (is('Vercel')) {
    copy = 'host-vercel';
    severity = 'medium';
    evidence = { source: 'Vercel knowledge base', date: '2025-11', fact: 'F29' };
  } else if (is('Cloudflare')) {
    copy = 'host-cloudflare';
    severity = 'medium';
    evidence = { source: FACT_BANK, date: '2026-09-06', fact: 'F30' };
  } else if (is('Shopify')) {
    copy = 'host-shopify';
    severity = 'medium';
    evidence = { source: '21YunBox probe', date: '2026-08-28', fact: 'F38' };
  } else if (zone === 'hk') {
    copy = 'host-hk';
    severity = 'low';
  } else if (zone === 'abroad') {
    copy = 'host-abroad';
    severity = 'medium';
    evidence = { source: 'Chinafy 2026 benchmark', date: '2026-04', fact: 'F31' };
  }

  return {
    hostname,
    ip: shown.ip,
    country,
    asn: shown.as?.asn ?? null,
    network: shown.as?.network ?? null,
    cnames,
    providers,
    zone,
    copy,
    severity,
    evidence,
  };
}
