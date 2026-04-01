import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://chinawebfoundry.com';

const staticPages = [
  '',
  '/contact/',
  '/who-we-are/',
  '/services/',
  '/services/strategy-audit/',
  '/services/china-migration/',
  '/services/ux-ui-design/',
  '/services/technical-integration/',
  '/services/plugins-extensions/',
  '/services/baidu-seo/',
  '/services/chinese-content/',
  '/services/china-hosting/',
  '/services/maintenance-support/',
  '/resources/faq/',
  '/resources/china-web-guide/',
  '/privacy-policy/',
  '/cookie-policy/',
  '/terms-of-service/',
];

export const GET: APIRoute = async () => {
  const guides = (await getCollection('guides')).filter((g) => g.data.published);

  const guidePaths = guides.map((g) => `/resources/china-web-guide/${g.id}/`);
  const allPaths = [...staticPages, ...guidePaths];

  const urls = allPaths
    .map(
      (path) => `  <url>
    <loc>${site}${path}</loc>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
