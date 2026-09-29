/**
 * ICP filing eligibility by top-level domain.
 *
 * MIIT only accepts ICP filings on TLDs whose registry holds a MIIT approval.
 * APPROVED is MIIT's own list, read from domain.miit.gov.cn on 29 September
 * 2026 (138 generic TLDs, plus .cn and Chinese-script TLDs). Approvals lapse
 * and new ones arrive, so refresh this list when it matters.
 *
 * Two special cases: .org stopped accepting new filings in 2018 (sites filed
 * before then keep their numbers), and .co was approved in 2018 but is not on
 * the current list, while Alibaba Cloud's documentation still accepts it.
 */

export const TLD_LIST_DATE = '2026-09-29';

const APPROVED = new Set<string>([
  'cn',
  'alibaba', 'anquan', 'archi', 'art', 'asia', 'auto', 'autos', 'baby', 'baidu', 'band', 'beauty',
  'beer', 'bio', 'biz', 'black', 'blue', 'boats', 'bond', 'cab', 'cafe', 'car', 'cars', 'cash',
  'cc', 'center', 'chat', 'citic', 'city', 'click', 'cloud', 'club', 'college', 'com', 'company',
  'cool', 'cyou', 'design', 'email', 'fan', 'fans', 'fashion', 'fit', 'fun', 'fund', 'fyi', 'games',
  'global', 'gold', 'green', 'group', 'guru', 'hair', 'help', 'hk', 'homes', 'host', 'icu', 'info',
  'ink', 'kids', 'kim', 'law', 'life', 'link', 'live', 'lotto', 'love', 'ltd', 'luxe', 'makeup',
  'market', 'mba', 'me', 'media', 'mobi', 'monster', 'motorcycles', 'net', 'news', 'online',
  'organic', 'pet', 'pink', 'plus', 'poker', 'press', 'pro', 'promo', 'protection', 'pub', 'pw',
  'quest', 'red', 'ren', 'rent', 'run', 'sale', 'school', 'security', 'shop', 'shopping', 'show',
  'site', 'ski', 'skin', 'social', 'sohu', 'space', 'storage', 'store', 'studio', 'tax', 'team',
  'tech', 'technology', 'theatre', 'tickets', 'today', 'top', 'tv', 'unicom', 'uno', 'video', 'vin',
  'vip', 'vote', 'voto', 'wang', 'website', 'wiki', 'work', 'world', 'xin', 'xyz', 'yachts', 'yoga',
  'yun', 'zone',
]);

export type TldStatus = 'eligible' | 'ineligible' | 'org' | 'co';

export function tldStatus(hostname: string): { tld: string; status: TldStatus } {
  const labels = hostname.toLowerCase().replace(/\.$/, '').split('.');
  const tld = labels[labels.length - 1] ?? '';
  if (tld === 'org') return { tld, status: 'org' };
  if (tld === 'co') return { tld, status: 'co' };
  // Chinese-script TLDs arrive punycoded (xn--); treat .中国 (xn--fiqs8s) and the rest as approved
  if (APPROVED.has(tld) || tld.startsWith('xn--')) return { tld, status: 'eligible' };
  return { tld, status: 'ineligible' };
}
