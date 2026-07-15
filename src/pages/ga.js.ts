import type { APIRoute } from 'astro';

// Dynamic Google Analytics loader, gated on the visitor's country.
//
// The site is statically generated and CDN-cached, so the GA snippet cannot be
// conditionally injected into the HTML per request. Instead the page always
// requests this first-party script, and this route decides server-side whether
// to hand back the real gtag bootstrap or an inert stub.
//
// Visitors inside mainland China get the stub: no request to Google is ever
// made from their browser, so there is no hanging connection to the (blocked)
// googletagmanager.com and no cost to their page load. Everyone else - which is
// essentially the whole target audience, sitting outside the Great Firewall -
// gets full GA4.
//
// Vercel injects `x-vercel-ip-country` on every request. When it is absent
// (local dev, preview, or any request Vercel cannot geolocate) we fail closed
// and serve the stub, so GA never loads unless we are certain the visitor is
// outside China.

export const prerender = false;

const GA_ID = 'G-YZCLZT8H8Q';

const STUB = '/* analytics not loaded */\n';

const bootstrap = (id: string) => `(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${id}');
})();
`;

export const GET: APIRoute = ({ request }) => {
  const country = request.headers.get('x-vercel-ip-country') ?? 'CN';
  const enabled = country !== 'CN';

  return new Response(enabled ? bootstrap(GA_ID) : STUB, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      // Response varies by visitor country, so it must never be shared from a
      // CDN cache across visitors.
      'Cache-Control': 'private, no-store',
    },
  });
};
