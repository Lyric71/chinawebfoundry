import fs from 'node:fs';
const source = fs.readFileSync('editorial/output/cloudflare-china.md', 'utf8');
const field = name => source.match(new RegExp(`^${name}: (.+)$`, 'm'))[1];
const orders = fs.readdirSync('src/content/guides').filter(x=>x.endsWith('.md')).map(x=>Number(fs.readFileSync(`src/content/guides/${x}`,'utf8').match(/^order: (\d+)/m)?.[1]||0));
let body = source.split('<!-- INTRODUCTION -->')[1].split('<!-- =====================================================================')[0].replace(/<!--[^]*?-->/g,'').replace(/^CTA:.*$/gm,'').trim();
for (const [anchor, url] of [
 ['foreign-company ICP filing\nguide','/resources/china-web-guide/icp-licence-filing-foreign-companies/'],
 ['guide to reCAPTCHA failures on China forms','/resources/china-web-guide/recaptcha-china/'],
 ['China\nhosting service','/services/china-hosting/']
]) { if (!body.includes(anchor)) throw new Error(anchor); body=body.replace(anchor,`[${anchor.replace(/\n/g,' ')}](${url})`); }
const text=`---\ntitle: ${field('title')}\nsubtitle: ${field('excerpt')}\nsummary: ${field('description')}\nvisual: "/images/guides/cloudflare-china.webp"\norder: ${Math.max(...orders)+1}\npublished: true\npublishedAt: 2026-10-20\nupdatedAt: 2026-10-20\nreviewBy: 2026-11-26\ncategory: Hosting\nauthor: cyril-drouin\n---\n\n${body}\n`;
fs.writeFileSync('src/content/guides/cloudflare-china.md',text);
const route='src/i18n/routes.ts';
let routes=fs.readFileSync(route,'utf8');
routes=routes.replace('export const guideSlugs: Record<string, Trans> = {',"export const guideSlugs: Record<string, Trans> = {\n  'cloudflare-china': { fr: 'cloudflare-chine', es: 'cloudflare-china', de: 'cloudflare-china' },");
fs.writeFileSync(route,routes);
console.log(`English mapped, order ${Math.max(...orders)+1}; three links and three localized slugs registered.`);
