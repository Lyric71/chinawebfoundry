import type { APIRoute } from 'astro';

export const prerender = false;

interface CheckResult {
  id: number;
  name: string;
  description: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  status: 'pass' | 'fail';
  matches: string[];
}

interface ScanResponse {
  url: string;
  timestamp: string;
  checks: CheckResult[];
  summary: {
    total: number;
    passed: number;
    failed: number;
  };
}

interface CheckDef {
  id: number;
  name: string;
  description: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  /** Patterns to match against the HTML source */
  patterns: RegExp[];
  /** Patterns to match against combined JS source (fetched scripts) */
  jsPatterns?: RegExp[];
  /** WordPress plugin slugs that imply this service is in use */
  wpPluginSlugs?: string[];
}

const CHECKS: CheckDef[] = [
  {
    id: 1,
    name: 'Google Fonts',
    description: 'fonts.googleapis.com and fonts.gstatic.com are fully blocked in China. Causes 30-60s render block.',
    priority: 'P0',
    patterns: [/fonts\.googleapis\.com/gi, /fonts\.gstatic\.com/gi],
    jsPatterns: [/fonts\.googleapis\.com/gi, /fonts\.gstatic\.com/gi],
    wpPluginSlugs: ['google-fonts'],
  },
  {
    id: 2,
    name: 'Google AJAX / CDN Libraries',
    description: 'ajax.googleapis.com is fully blocked. jQuery and other libraries loaded from this domain will fail.',
    priority: 'P0',
    patterns: [/ajax\.googleapis\.com/gi],
    jsPatterns: [/ajax\.googleapis\.com/gi],
  },
  {
    id: 3,
    name: 'Gravatar Avatars',
    description: 'gravatar.com is intermittently blocked. Avatar images will fail or stall page load.',
    priority: 'P1',
    patterns: [/gravatar\.com/gi],
    jsPatterns: [/gravatar\.com/gi],
  },
  {
    id: 4,
    name: 'Google reCAPTCHA',
    description: 'reCAPTCHA is fully blocked. Any form using it becomes unusable in China.',
    priority: 'P1',
    patterns: [
      /google\.com\/recaptcha/gi,
      /gstatic\.com\/recaptcha/gi,
      /grecaptcha/gi,
      /data-sitekey=/gi,
      /recaptcha_public_key/gi,
    ],
    jsPatterns: [
      /google\.com\/recaptcha/gi,
      /gstatic\.com\/recaptcha/gi,
      /grecaptcha/gi,
      /recaptcha/gi,
    ],
    wpPluginSlugs: [
      'google-captcha',
      'invisible-recaptcha',
      'advanced-google-recaptcha',
      'simple-google-recaptcha',
      'login-recaptcha',
    ],
  },
  {
    id: 5,
    name: 'Google Analytics / Tag Manager',
    description: 'GA and GTM are blocked. If loaded synchronously, they add 10-30s to page load.',
    priority: 'P2',
    patterns: [/google-analytics\.com/gi, /googletagmanager\.com/gi, /gtag\/js/gi, /UA-[0-9]+/g, /GTM-[A-Z0-9]+/g],
    wpPluginSlugs: ['google-site-kit', 'google-analytics-for-wordpress', 'ga-google-analytics'],
  },
  {
    id: 6,
    name: 'Facebook / Meta Pixel & SDK',
    description: 'connect.facebook.net and fbcdn.net are fully blocked.',
    priority: 'P2',
    patterns: [/connect\.facebook\.net/gi, /fbevents\.js/gi, /fbcdn\.net/gi, /fbq\(/gi],
    jsPatterns: [/connect\.facebook\.net/gi, /fbevents\.js/gi, /fbcdn\.net/gi],
    wpPluginSlugs: ['facebook-for-woocommerce', 'official-facebook-pixel', 'pixelyoursite'],
  },
  {
    id: 7,
    name: 'Twitter / X Widgets',
    description: 'Twitter/X platform domains and twimg.com are blocked.',
    priority: 'P2',
    patterns: [/platform\.twitter\.com/gi, /syndication\.twitter\.com/gi, /twimg\.com/gi, /widgets\.x\.com/gi],
    jsPatterns: [/platform\.twitter\.com/gi, /syndication\.twitter\.com/gi],
  },
  {
    id: 8,
    name: 'YouTube / Vimeo Embeds',
    description: 'YouTube and Vimeo are blocked. Embedded video players will show a blank box.',
    priority: 'P1',
    patterns: [/youtube\.com\/embed/gi, /youtube-nocookie\.com/gi, /youtu\.be/gi, /player\.vimeo\.com/gi],
    jsPatterns: [/youtube\.com\/embed/gi, /player\.vimeo\.com/gi],
  },
  {
    id: 9,
    name: 'Instagram / Pinterest / TikTok Embeds',
    description: 'All blocked. Social embeds will not render.',
    priority: 'P2',
    patterns: [/instagram\.com\/embed/gi, /pinterest\.com\/pin/gi, /tiktok\.com\/embed/gi],
  },
  {
    id: 10,
    name: 'Disqus Comments',
    description: 'disqus.com is fully blocked. Entire comment section will be invisible.',
    priority: 'P1',
    patterns: [/disqus\.com/gi, /disquscdn\.com/gi],
    wpPluginSlugs: ['disqus-comment-system'],
  },
  {
    id: 11,
    name: 'Google Maps',
    description: 'Google Maps APIs and embeds are blocked. Map widgets will not render.',
    priority: 'P1',
    patterns: [/maps\.googleapis\.com/gi, /maps\.google\.com/gi, /maps\.gstatic\.com/gi],
    jsPatterns: [/maps\.googleapis\.com/gi, /maps\.google\.com/gi],
    wpPluginSlugs: ['wp-google-maps', 'google-maps-widget'],
  },
  {
    id: 12,
    name: 'Jetpack / WordPress.com / Photon CDN',
    description: 'wp.com and wordpress.com are fully blocked. Photon rewrites ALL images to i0-2.wp.com.',
    priority: 'P0',
    patterns: [/i[0-2]\.wp\.com/gi, /stats\.wp\.com/gi, /wordpress\.com/gi, /public-api\.wordpress\.com/gi],
    wpPluginSlugs: ['jetpack'],
  },
  {
    id: 13,
    name: 'Payment Gateway JS SDKs',
    description: 'Stripe, PayPal, Braintree, and Square JS SDKs may not load, breaking checkout.',
    priority: 'P1',
    patterns: [/js\.stripe\.com/gi, /www\.paypal\.com\/sdk/gi, /js\.braintreegateway\.com/gi, /connect\.squareup\.com/gi],
    jsPatterns: [/js\.stripe\.com/gi, /www\.paypal\.com\/sdk/gi, /js\.braintreegateway\.com/gi],
  },
  {
    id: 14,
    name: 'External Web Fonts (Non-Google)',
    description: 'Adobe Fonts, Font Awesome CDN, and other external font services add latency and may be throttled.',
    priority: 'P2',
    patterns: [/use\.typekit\.net/gi, /kit\.fontawesome\.com/gi, /fonts\.bunny\.net/gi, /fast\.fonts\.net/gi, /cloud\.typography\.com/gi],
  },
  {
    id: 15,
    name: 'Blocked CDN Resources',
    description: 'JS/CSS loaded from blocked Google domains will not load.',
    priority: 'P2',
    patterns: [
      /src=["']https?:\/\/[^"']*\.googleapis\.com[^"']*\.(js|css)["']/gi,
      /href=["']https?:\/\/[^"']*\.googleapis\.com[^"']*\.css["']/gi,
      /src=["']https?:\/\/[^"']*\.gstatic\.com[^"']*\.(js|css)["']/gi,
    ],
  },
  {
    id: 16,
    name: 'Render-Blocking Scripts on Blocked Domains',
    description: 'Synchronous scripts on blocked domains will freeze the page for 30-60s.',
    priority: 'P0',
    patterns: [
      /<script(?![^>]*(?:async|defer))[^>]*src=["']https?:\/\/[^"']*google[^"']*["'][^>]*>/gi,
      /<script(?![^>]*(?:async|defer))[^>]*src=["']https?:\/\/[^"']*facebook[^"']*["'][^>]*>/gi,
      /<link[^>]*href=["']https?:\/\/[^"']*googleapis[^"']*["'][^>]*stylesheet[^>]*>/gi,
      /<link[^>]*stylesheet[^>]*href=["']https?:\/\/[^"']*googleapis[^"']*["'][^>]*>/gi,
    ],
  },
  {
    id: 17,
    name: 'External Images on Blocked Hosts',
    description: 'Images hosted on blocked domains will appear broken.',
    priority: 'P1',
    patterns: [
      /<img[^>]*src=["']https?:\/\/[^"']*i[0-2]\.wp\.com[^"']*["']/gi,
      /<img[^>]*src=["']https?:\/\/[^"']*googleusercontent\.com[^"']*["']/gi,
      /<img[^>]*src=["']https?:\/\/[^"']*storage\.googleapis\.com[^"']*["']/gi,
      /<img[^>]*src=["']https?:\/\/[^"']*fbcdn\.net[^"']*["']/gi,
      /<img[^>]*src=["']https?:\/\/[^"']*twimg\.com[^"']*["']/gi,
    ],
  },
  {
    id: 18,
    name: 'ICP Filing Number in Footer',
    description: 'Websites hosted in mainland China must display an ICP filing number in the footer.',
    priority: 'P3',
    patterns: [/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁]ICP[备证][0-9-]+号/g],
  },
  {
    id: 19,
    name: 'WooCommerce / E-Commerce Detection',
    description: 'E-commerce sites require an ICP Commercial Licence on top of the basic ICP filing.',
    priority: 'P3',
    patterns: [/woocommerce/gi, /add-to-cart/gi, /cart-contents/gi, /wc-cart/gi, /edd-add-to-cart/gi, /shopify/gi],
  },
];

/**
 * Extract all script src URLs and stylesheet href URLs from HTML.
 * Only returns URLs from the same origin (first-party scripts).
 */
function extractScriptUrls(html: string, pageUrl: string): string[] {
  const urls: string[] = [];
  let hostname: string;
  try {
    hostname = new URL(pageUrl).hostname;
  } catch {
    return urls;
  }

  // Match script src attributes
  const scriptRegex = /src=["'](https?:\/\/[^"']+\.js[^"']*)["']/gi;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    const scriptUrl = match[1];
    try {
      if (new URL(scriptUrl).hostname === hostname) {
        urls.push(scriptUrl);
      }
    } catch {
      // Skip invalid URLs
    }
  }

  return urls;
}

/**
 * Detect WordPress plugin slugs from script/stylesheet paths in the HTML.
 * Looks for patterns like /wp-content/plugins/{slug}/
 */
function detectWpPlugins(html: string): string[] {
  const pluginRegex = /\/wp-content\/plugins\/([a-z0-9_-]+)\//gi;
  const plugins = new Set<string>();
  let match;
  while ((match = pluginRegex.exec(html)) !== null) {
    plugins.add(match[1].toLowerCase());
  }
  return [...plugins];
}

/**
 * Fetch multiple JS files in parallel with a timeout.
 * Returns combined text of all successfully fetched scripts.
 */
async function fetchScripts(urls: string[]): Promise<string> {
  // Limit to 10 scripts to avoid excessive fetching
  const limited = urls.slice(0, 10);

  const results = await Promise.allSettled(
    limited.map(async (scriptUrl) => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      try {
        const res = await fetch(scriptUrl, {
          signal: controller.signal,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
        });
        clearTimeout(timeout);
        if (!res.ok) return '';
        const text = await res.text();
        // Only return up to 500KB per script to avoid memory issues
        return text.slice(0, 512_000);
      } catch {
        clearTimeout(timeout);
        return '';
      }
    }),
  );

  return results
    .map((r) => (r.status === 'fulfilled' ? r.value : ''))
    .join('\n');
}

function runChecks(html: string, jsSource: string, detectedPlugins: string[]): CheckResult[] {
  return CHECKS.map((check) => {
    const matches: string[] = [];

    // Check HTML patterns
    for (const pattern of check.patterns) {
      pattern.lastIndex = 0;
      const found = html.match(pattern);
      if (found) {
        matches.push(...found.map((m) => m.slice(0, 120)));
      }
    }

    // Check JS patterns
    if (check.jsPatterns && jsSource) {
      for (const pattern of check.jsPatterns) {
        pattern.lastIndex = 0;
        const found = jsSource.match(pattern);
        if (found) {
          matches.push(...found.map((m) => `[in JS] ${m.slice(0, 110)}`));
        }
      }
    }

    // Check WordPress plugin slugs
    if (check.wpPluginSlugs) {
      for (const slug of check.wpPluginSlugs) {
        if (detectedPlugins.includes(slug)) {
          matches.push(`[WP plugin detected] ${slug}`);
        }
      }
    }

    // Special handling for ICP check - pass means it WAS found
    const isIcp = check.id === 18;
    const status = isIcp
      ? matches.length > 0 ? 'pass' : 'fail'
      : matches.length === 0 ? 'pass' : 'fail';

    return {
      id: check.id,
      name: check.name,
      description: check.description,
      priority: check.priority,
      status: status as 'pass' | 'fail',
      matches: [...new Set(matches)].slice(0, 10),
    };
  });
}

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400, headers });
  }

  let { url } = body;
  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required.' }), { status: 400, headers });
  }

  // Normalise URL
  url = url.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  try {
    new URL(url);
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid URL format.' }), { status: 400, headers });
  }

  let html: string;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch URL. Server returned ${response.status}.` }),
        { status: 502, headers },
      );
    }

    html = await response.text();
  } catch (err) {
    const message = err instanceof Error && err.name === 'AbortError'
      ? 'Request timed out after 15 seconds.'
      : 'Could not reach the website. Please check the URL and try again.';
    return new Response(JSON.stringify({ error: message }), { status: 502, headers });
  }

  // Detect WordPress plugins from the HTML
  const detectedPlugins = detectWpPlugins(html);

  // Extract and fetch first-party JS files to scan for dynamically-loaded blocked resources
  const scriptUrls = extractScriptUrls(html, url);
  const jsSource = await fetchScripts(scriptUrls);

  // Detect TLD for ICP eligibility
  let tldCheck: CheckResult | null = null;
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    const tld = hostname.split('.').pop()?.toLowerCase() ?? '';
    const ineligibleTlds = ['app', 'dev', 'io', 'me', 'ai', 'ly', 'co', 'page', 'blog'];
    const isIneligible = ineligibleTlds.includes(tld);
    tldCheck = {
      id: 20,
      name: 'TLD ICP Eligibility',
      description: `Domain TLD ".${tld}" ${isIneligible ? 'cannot' : 'can'} get an ICP filing. Ineligible TLDs: .app, .dev, .io, .me, .ai, .ly, .co, .page, .blog`,
      priority: 'P3',
      status: isIneligible ? 'fail' : 'pass',
      matches: isIneligible ? [`.${tld} is not eligible for ICP filing`] : [],
    };
  } catch {
    // Skip TLD check if URL parsing fails
  }

  const checks = runChecks(html, jsSource, detectedPlugins);
  if (tldCheck) {
    checks.push(tldCheck);
  }

  const passed = checks.filter((c) => c.status === 'pass').length;
  const failed = checks.filter((c) => c.status === 'fail').length;

  const result: ScanResponse = {
    url,
    timestamp: new Date().toISOString(),
    checks,
    summary: {
      total: checks.length,
      passed,
      failed,
    },
  };

  return new Response(JSON.stringify(result), { status: 200, headers });
};
