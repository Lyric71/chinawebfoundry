/**
 * China Site Scanner: the dependency rule set.
 *
 * Every verdict here comes from editorial/sources/fact-bank.md (the F-numbers)
 * or from a dated primary source noted inline. Nothing on the fact bank's
 * Do Not Assert list may be stated as a verdict: hosts without a mainland
 * measurement use `unverified` and the report says so.
 *
 * Rules are matched in order against `hostname + pathname`, so specific rules
 * must sit above the generic ones (fonts.gstatic.com above *.gstatic.com).
 * User-facing wording lives in src/data/scannerCopy.ts, keyed by `copy` and `fix`.
 */

export type Verdict =
  | 'blocked' // fails from mainland networks
  | 'hangs' // answers with a first byte, then never completes (F33)
  | 'network' // works from datacentres, fails on consumer lines (F6)
  | 'split' // script loads, the endpoint it posts to is blocked (F34)
  | 'intermittent' // sometimes loads, sometimes not
  | 'partial' // some URLs on the host blocked, others not (F9, F40)
  | 'slow' // completes, but slowly (F7, F38)
  | 'licensing' // reachability is secondary to a licensing problem (F40)
  | 'unverified' // no mainland measurement on record (F42)
  | 'malicious' // known supply-chain compromise
  | 'domestic' // mainland provider, the right choice for China
  | 'reachable'; // measured reachable, no action

export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';

export type Category =
  | 'fonts'
  | 'libraries'
  | 'analytics'
  | 'forms'
  | 'media'
  | 'maps'
  | 'social'
  | 'commerce'
  | 'platform'
  | 'security'
  | 'google'
  | 'china'
  | 'other';

export interface Evidence {
  /** Proper noun, not translated: "21YunBox probe", "ChinaWebFoundry fact bank" */
  source: string;
  /** ISO date (YYYY-MM-DD, or YYYY-MM when the source gives only a month) */
  date: string;
  /** Fact bank reference, for internal traceability */
  fact?: string;
}

export interface Rule {
  key: string;
  service: string;
  category: Category;
  /** Tested against `hostname + pathname`, lower-cased */
  match: RegExp;
  verdict: Verdict;
  /** Severity when the resource loads without blocking render */
  severity: Severity;
  /** Escalate to critical when loaded render-blocking and the verdict fails */
  renderRisk?: boolean;
  /** Copy key for "why this matters" in scannerCopy.ts */
  copy: string;
  /** Copy key for the fix */
  fix: string;
  evidence: Evidence;
  /** WordPress plugin slugs whose presence implies this dependency */
  plugins?: string[];
  /** Markup that proves the widget is on the page even when the loader is not */
  markers?: RegExp[];
}

const FACT_BANK = 'ChinaWebFoundry fact bank';
// Verdicts from third-party blocking tests are cited through the fact bank, where they are recorded
const GF = FACT_BANK;
const YB = '21YunBox probe';

export const RULES: Rule[] = [
  /* ── Security first: known supply-chain compromise ── */
  {
    key: 'polyfill',
    service: 'polyfill.io and clones',
    category: 'security',
    match: /^(cdn\.)?polyfill\.io\/|^([a-z0-9-]+\.)*(bootcdn\.net|bootcss\.com|staticfile\.org|staticfile\.net|unionadjs\.com|xhsbpza\.com|newcrbpc\.com|googie-anaiytics\.com)\/|^union\.macoms\.la\//,
    verdict: 'malicious',
    severity: 'critical',
    copy: 'malicious',
    fix: 'fix-malicious',
    evidence: { source: 'Sansec advisory', date: '2024-06-28' },
  },

  /* ── Fonts and shared libraries ── */
  {
    key: 'google-fonts',
    service: 'Google Fonts',
    category: 'fonts',
    match: /^fonts\.(googleapis|gstatic)\.com\//,
    verdict: 'network',
    severity: 'high',
    renderRisk: true,
    copy: 'fonts-network',
    fix: 'fix-fonts',
    evidence: { source: 'Beijing home broadband and Alibaba Cloud probes', date: '2026-08-29', fact: 'F6' },
    plugins: ['google-fonts', 'olympus-google-fonts', 'easy-google-fonts'],
  },
  {
    key: 'fonts-mirror',
    service: 'Google Fonts mirror',
    category: 'fonts',
    match: /^(fonts|gstatic)\.loli\.net\/|^fonts\.font\.im\/|^fonts\.geekzu\.org\/|^fonts\.(googleapis|gstatic)\.cn\//,
    verdict: 'unverified',
    severity: 'low',
    copy: 'fonts-mirror',
    fix: 'fix-fonts',
    evidence: { source: 'ChinaWebFoundry checks', date: '2026-09-29' },
  },
  {
    key: 'google-libs',
    service: 'Google Hosted Libraries',
    category: 'libraries',
    match: /^ajax\.googleapis\.com\//,
    verdict: 'blocked',
    severity: 'high',
    renderRisk: true,
    copy: 'libs-blocked',
    fix: 'fix-self-host',
    evidence: { source: 'Alibaba Cloud probe, Zhangjiakou', date: '2026-08-29', fact: 'F1' },
  },
  {
    key: 'jsdelivr',
    service: 'jsDelivr',
    category: 'libraries',
    match: /^(cdn|fastly|gcore|testingcf)\.jsdelivr\.net\//,
    verdict: 'slow',
    severity: 'low',
    copy: 'cdn-slow',
    fix: 'fix-self-host',
    evidence: { source: YB, date: '2026-08-28', fact: 'F7' },
  },
  {
    key: 'cdnjs',
    service: 'cdnjs',
    category: 'libraries',
    match: /^cdnjs\.cloudflare\.com\//,
    verdict: 'slow',
    severity: 'low',
    copy: 'cdn-slow',
    fix: 'fix-self-host',
    evidence: { source: YB, date: '2026-08-28', fact: 'F7' },
  },
  {
    key: 'unpkg',
    service: 'unpkg',
    category: 'libraries',
    match: /^unpkg\.com\//,
    verdict: 'slow',
    severity: 'low',
    copy: 'cdn-slow',
    fix: 'fix-self-host',
    evidence: { source: YB, date: '2026-08-28', fact: 'F7' },
  },
  {
    key: 'adobe-fonts',
    service: 'Adobe Fonts',
    category: 'fonts',
    match: /^(use|p)\.typekit\.net\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-self-host-fonts',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'font-awesome',
    service: 'Font Awesome CDN',
    category: 'fonts',
    match: /^(use|kit|ka-f|ka-p)\.fontawesome\.com\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-self-host-fonts',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'bootstrap-cdn',
    service: 'Bootstrap CDN',
    category: 'libraries',
    match: /^(stackpath|maxcdn|netdna)\.bootstrapcdn\.com\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-self-host',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },

  /* ── Forms, captcha, chat ── */
  {
    key: 'recaptcha',
    service: 'Google reCAPTCHA',
    category: 'forms',
    match: /^www\.google\.com\/recaptcha\/|^www\.gstatic\.com\/recaptcha\//,
    verdict: 'blocked',
    severity: 'high',
    renderRisk: true,
    copy: 'captcha-blocked',
    fix: 'fix-captcha',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F2' },
    plugins: ['google-captcha', 'invisible-recaptcha', 'advanced-google-recaptcha', 'simple-google-recaptcha', 'login-recaptcha', 'recaptcha-in-wp-comments-form'],
    markers: [/class=["'][^"']*\bg-recaptcha\b/i, /grecaptcha\.(?:execute|render|ready)/],
  },
  {
    key: 'recaptcha-net',
    service: 'reCAPTCHA via recaptcha.net',
    category: 'forms',
    match: /^www\.recaptcha\.net\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'recaptcha-net',
    fix: 'fix-captcha',
    evidence: { source: FACT_BANK, date: '2026-02', fact: 'F2' },
  },
  {
    key: 'hcaptcha',
    service: 'hCaptcha',
    category: 'forms',
    match: /^(js\.|api\.|api2\.|newassets\.|imgs\.)?hcaptcha\.com\//,
    verdict: 'intermittent',
    severity: 'medium',
    copy: 'captcha-intermittent',
    fix: 'fix-captcha',
    evidence: { source: GF, date: '2026-07-29', fact: 'F35' },
    markers: [/class=["'][^"']*\bh-captcha\b/i],
  },
  {
    key: 'turnstile',
    service: 'Cloudflare Turnstile',
    category: 'forms',
    match: /^challenges\.cloudflare\.com\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-captcha',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
    markers: [/class=["'][^"']*cf-turnstile/i],
  },
  {
    key: 'typeform',
    service: 'Typeform',
    category: 'forms',
    match: /^(embed|form)\.typeform\.com\/|^[a-z0-9-]+\.typeform\.com\//,
    verdict: 'hangs',
    severity: 'high',
    copy: 'form-hangs',
    fix: 'fix-forms',
    evidence: { source: YB, date: '2026-08-28', fact: 'F35' },
  },
  {
    key: 'mailchimp',
    service: 'Mailchimp embed',
    category: 'forms',
    match: /^(chimpstatic\.com|[a-z0-9-]+\.list-manage\.com|downloads\.mailchimp\.com)\//,
    verdict: 'hangs',
    severity: 'high',
    copy: 'form-hangs',
    fix: 'fix-forms',
    evidence: { source: YB, date: '2026-08-28', fact: 'F35' },
    plugins: ['mailchimp-for-wp'],
  },
  {
    key: 'hubspot',
    service: 'HubSpot',
    category: 'forms',
    match: /^(js|js-na1|js-eu1)\.(hs-scripts|hsforms|hs-analytics|hs-banner|hscollectedforms|usemessages)\.(com|net)\/|^(js\.)?hsforms\.net\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-test-first',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'marketo',
    service: 'Marketo',
    category: 'forms',
    match: /^munchkin\.marketo\.net\/|^[a-z0-9-]+\.marketo\.com\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-test-first',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'intercom',
    service: 'Intercom',
    category: 'forms',
    match: /^(widget|js)\.intercom(cdn)?\.(io|com)\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-chat',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F35' },
  },
  {
    key: 'crisp',
    service: 'Crisp',
    category: 'forms',
    match: /^client\.crisp\.chat\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-chat',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'tawk',
    service: 'Tawk.to',
    category: 'forms',
    match: /^(embed|va)\.tawk\.to\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-chat',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'zendesk',
    service: 'Zendesk widget',
    category: 'forms',
    match: /^static\.zdassets\.com\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-chat',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F35' },
  },
  {
    key: 'calendly',
    service: 'Calendly',
    category: 'forms',
    match: /^(assets\.)?calendly\.com\//,
    verdict: 'reachable',
    severity: 'info',
    copy: 'reachable',
    fix: 'fix-none',
    evidence: { source: GF, date: '2026-08-18', fact: 'F35' },
  },
  {
    key: 'drift',
    service: 'Drift',
    category: 'forms',
    match: /^js\.driftt\.com\//,
    verdict: 'reachable',
    severity: 'info',
    copy: 'reachable',
    fix: 'fix-none',
    evidence: { source: GF, date: '2026-08-22', fact: 'F35' },
  },

  /* ── Analytics and tags ── */
  {
    key: 'google-analytics',
    service: 'Google Analytics',
    category: 'analytics',
    match: /^(www|ssl|region1|[a-z0-9-]+)?\.?google-analytics\.com\/|^analytics\.google\.com\//,
    verdict: 'blocked',
    severity: 'medium',
    renderRisk: true,
    copy: 'analytics-blocked',
    fix: 'fix-analytics',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F3' },
    plugins: ['google-analytics-for-wordpress', 'ga-google-analytics', 'google-analytics-dashboard-for-wp'],
  },
  {
    key: 'google-tag-manager',
    service: 'Google Tag Manager',
    category: 'analytics',
    match: /^www\.googletagmanager\.com\//,
    verdict: 'intermittent',
    severity: 'medium',
    renderRisk: true,
    copy: 'tag-manager',
    fix: 'fix-analytics',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F3' },
    plugins: ['google-site-kit', 'duracelltomi-google-tag-manager'],
  },
  {
    key: 'google-ads',
    service: 'Google Ads and DoubleClick',
    category: 'analytics',
    match: /^([a-z0-9-]+\.)*(doubleclick\.net|googleadservices\.com|googlesyndication\.com)\//,
    verdict: 'blocked',
    severity: 'medium',
    renderRisk: true,
    copy: 'google-blocked',
    fix: 'fix-analytics',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F3' },
  },
  {
    key: 'meta-pixel',
    service: 'Meta Pixel and Facebook SDK',
    category: 'analytics',
    match: /^connect\.facebook\.net\/|^(www\.)?facebook\.com\/tr|^([a-z0-9-]+\.)*fbcdn\.net\//,
    verdict: 'blocked',
    severity: 'medium',
    renderRisk: true,
    copy: 'analytics-blocked',
    fix: 'fix-analytics',
    evidence: { source: GF, date: '2026-07-27', fact: 'F34' },
    plugins: ['official-facebook-pixel', 'pixelyoursite', 'facebook-for-woocommerce'],
  },
  {
    key: 'hotjar',
    service: 'Hotjar',
    category: 'analytics',
    match: /^([a-z0-9-]+\.)*hotjar\.(com|io)\//,
    verdict: 'blocked',
    severity: 'medium',
    copy: 'analytics-blocked',
    fix: 'fix-analytics',
    evidence: { source: GF, date: '2026-08-20', fact: 'F34' },
  },
  {
    key: 'clarity',
    service: 'Microsoft Clarity',
    category: 'analytics',
    match: /^([a-z0-9-]+\.)*clarity\.ms\//,
    verdict: 'hangs',
    severity: 'medium',
    copy: 'analytics-hangs',
    fix: 'fix-analytics',
    evidence: { source: YB, date: '2026-08-28', fact: 'F34' },
  },
  {
    key: 'mixpanel',
    service: 'Mixpanel',
    category: 'analytics',
    match: /^(cdn\.mxpnl\.com|cdn4\.mxpnl\.com|api(-js|-eu)?\.mixpanel\.com)\//,
    verdict: 'hangs',
    severity: 'medium',
    copy: 'analytics-hangs',
    fix: 'fix-analytics',
    evidence: { source: YB, date: '2026-08-28', fact: 'F34' },
  },
  {
    key: 'amplitude',
    service: 'Amplitude',
    category: 'analytics',
    match: /^(cdn|api|api2)\.amplitude\.com\//,
    verdict: 'split',
    severity: 'medium',
    copy: 'analytics-split',
    fix: 'fix-analytics',
    evidence: { source: GF, date: '2026-04-22', fact: 'F34' },
  },
  {
    key: 'segment',
    service: 'Segment',
    category: 'analytics',
    match: /^(cdn\.segment\.com|api\.segment\.io|cdn\.segment\.io)\//,
    verdict: 'slow',
    severity: 'low',
    copy: 'analytics-slow',
    fix: 'fix-analytics',
    evidence: { source: YB, date: '2026-08-28', fact: 'F34' },
  },
  {
    key: 'linkedin-insight',
    service: 'LinkedIn Insight Tag',
    category: 'analytics',
    match: /^(snap\.licdn\.com|px\.ads\.linkedin\.com)\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-test-first',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'plausible',
    service: 'Plausible',
    category: 'analytics',
    match: /^plausible\.io\//,
    verdict: 'reachable',
    severity: 'info',
    copy: 'reachable',
    fix: 'fix-none',
    evidence: { source: YB, date: '2026-08-28', fact: 'F34' },
  },
  {
    key: 'sentry',
    service: 'Sentry',
    category: 'analytics',
    match: /^(browser\.sentry-cdn\.com|js\.sentry-cdn\.com|[a-z0-9-]+\.ingest(\.[a-z]+)?\.sentry\.io)\//,
    verdict: 'reachable',
    severity: 'info',
    copy: 'reachable',
    fix: 'fix-none',
    evidence: { source: YB, date: '2026-08-28', fact: 'F39' },
  },

  /* ── Media and embeds ── */
  {
    key: 'youtube',
    service: 'YouTube',
    category: 'media',
    match: /^(www\.|m\.)?youtube(-nocookie)?\.com\/(embed|iframe_api|player_api|s\/player|subscribe_embed|live_chat)|^([a-z0-9-]+\.)*(ytimg|googlevideo)\.com\//,
    verdict: 'blocked',
    severity: 'high',
    copy: 'video-blocked',
    fix: 'fix-video',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F5' },
    markers: [/data-(?:lazy-)?src=["'][^"']*youtube(?:-nocookie)?\.com\/embed/i],
  },
  {
    key: 'vimeo',
    service: 'Vimeo',
    category: 'media',
    match: /^player\.vimeo\.com\/|^([a-z0-9-]+\.)*vimeocdn\.com\//,
    verdict: 'blocked',
    severity: 'high',
    copy: 'video-blocked',
    fix: 'fix-video',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F5' },
  },
  {
    key: 'wistia',
    service: 'Wistia',
    category: 'media',
    match: /^(fast\.)?wistia\.(com|net)\//,
    verdict: 'slow',
    severity: 'low',
    copy: 'video-slow',
    fix: 'fix-video',
    evidence: { source: GF, date: '2026-06-26', fact: 'F36' },
  },
  {
    key: 'loom',
    service: 'Loom',
    category: 'media',
    match: /^(www\.)?loom\.com\/(embed|share)/,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-video',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'soundcloud',
    service: 'SoundCloud',
    category: 'media',
    match: /^(w\.)?soundcloud\.com\/|^([a-z0-9-]+\.)*sndcdn\.com\//,
    verdict: 'blocked',
    severity: 'medium',
    copy: 'embed-blocked',
    fix: 'fix-embeds',
    evidence: { source: GF, date: '2026-04-22', fact: 'F36' },
  },
  {
    key: 'spotify',
    service: 'Spotify',
    category: 'media',
    match: /^(open|embed)\.spotify\.com\//,
    verdict: 'blocked',
    severity: 'medium',
    copy: 'embed-blocked',
    fix: 'fix-embeds',
    evidence: { source: GF, date: '2026-06', fact: 'F36' },
  },
  {
    key: 'gravatar',
    service: 'Gravatar',
    category: 'media',
    match: /^([a-z0-9-]+\.)*gravatar\.com\//,
    verdict: 'blocked',
    severity: 'medium',
    copy: 'avatars-blocked',
    fix: 'fix-avatars',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F4' },
  },

  /* ── Social ── */
  {
    key: 'x-twitter',
    service: 'X (Twitter) widgets',
    category: 'social',
    match: /^(platform|syndication|cdn\.syndication)\.twimg\.com\/|^(platform|syndication)\.twitter\.com\/|^([a-z0-9-]+\.)*twimg\.com\/|^platform\.x\.com\//,
    verdict: 'blocked',
    severity: 'medium',
    renderRisk: true,
    copy: 'embed-blocked',
    fix: 'fix-embeds',
    evidence: { source: GF, date: '2026-04-25', fact: 'F36' },
  },
  {
    key: 'instagram',
    service: 'Instagram',
    category: 'social',
    match: /^(www\.)?instagram\.com\/(embed|p\/|reel\/)|^([a-z0-9-]+\.)*cdninstagram\.com\//,
    verdict: 'blocked',
    severity: 'medium',
    copy: 'embed-blocked',
    fix: 'fix-embeds',
    evidence: { source: GF, date: '2026-04-15', fact: 'F36' },
  },
  {
    key: 'facebook-embed',
    service: 'Facebook embeds',
    category: 'social',
    match: /^(www\.)?facebook\.com\/(plugins|v[0-9.]+\/plugins)\//,
    verdict: 'blocked',
    severity: 'medium',
    copy: 'embed-blocked',
    fix: 'fix-embeds',
    evidence: { source: GF, date: '2026-07-27', fact: 'F34' },
  },
  {
    key: 'disqus',
    service: 'Disqus',
    category: 'social',
    match: /^([a-z0-9-]+\.)*disqus(cdn)?\.com\//,
    verdict: 'blocked',
    severity: 'high',
    copy: 'comments-blocked',
    fix: 'fix-comments',
    evidence: { source: GF, date: '2026-09-03', fact: 'F36' },
    plugins: ['disqus-comment-system'],
  },

  /* ── Maps ── */
  {
    key: 'google-maps',
    service: 'Google Maps',
    category: 'maps',
    match: /^maps\.(googleapis|gstatic)\.com\/|^maps\.google\.[a-z.]+\/|^www\.google\.[a-z.]+\/maps/,
    verdict: 'blocked',
    severity: 'high',
    copy: 'maps-blocked',
    fix: 'fix-maps',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F3' },
    plugins: ['wp-google-maps', 'google-maps-widget', 'wp-google-map-plugin'],
  },
  {
    key: 'mapbox',
    service: 'Mapbox',
    category: 'maps',
    match: /^(api|events|a\.tiles|b\.tiles)\.mapbox\.com\//,
    verdict: 'split',
    severity: 'high',
    copy: 'maps-split',
    fix: 'fix-maps',
    evidence: { source: GF, date: '2026-06-07', fact: 'F37' },
  },
  {
    key: 'openstreetmap',
    service: 'OpenStreetMap tiles',
    category: 'maps',
    match: /^([a-c]\.)?tile\.openstreetmap\.org\//,
    verdict: 'blocked',
    severity: 'high',
    copy: 'maps-blocked',
    fix: 'fix-maps',
    evidence: { source: GF, date: '2026-03-10', fact: 'F37' },
  },

  /* ── Commerce ── */
  {
    key: 'stripe',
    service: 'Stripe',
    category: 'commerce',
    match: /^(js|m|checkout)\.stripe\.(com|network)\//,
    verdict: 'licensing',
    severity: 'medium',
    copy: 'payments-licensing',
    fix: 'fix-payments',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F40' },
    plugins: ['woocommerce-gateway-stripe'],
  },
  {
    key: 'paypal',
    service: 'PayPal',
    category: 'commerce',
    match: /^(www\.)?paypal\.com\/sdk|^(www\.)?paypalobjects\.com\//,
    verdict: 'partial',
    severity: 'medium',
    copy: 'payments-partial',
    fix: 'fix-payments',
    evidence: { source: GF, date: '2026-08-27', fact: 'F40' },
    plugins: ['woocommerce-paypal-payments'],
  },

  /* ── Platforms and back-end services ── */
  {
    key: 'algolia',
    service: 'Algolia',
    category: 'platform',
    match: /^([a-z0-9-]+\.)*(algolia\.net|algolianet\.com|algolia\.io)\//,
    verdict: 'hangs',
    severity: 'high',
    copy: 'search-hangs',
    fix: 'fix-search',
    evidence: { source: YB, date: '2026-08-28', fact: 'F39' },
  },
  {
    key: 'firebase',
    service: 'Firebase',
    category: 'platform',
    match: /^([a-z0-9-]+\.)*(firebaseio\.com|firebaseapp\.com|firebasestorage\.googleapis\.com|firestore\.googleapis\.com|identitytoolkit\.googleapis\.com)\//,
    verdict: 'blocked',
    severity: 'high',
    copy: 'backend-blocked',
    fix: 'fix-backend',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F39' },
  },
  {
    key: 'cloudfront',
    service: 'AWS CloudFront',
    category: 'platform',
    match: /^[a-z0-9]+\.cloudfront\.net\//,
    verdict: 'network',
    severity: 'high',
    renderRisk: true,
    copy: 'cloudfront',
    fix: 'fix-china-cdn',
    evidence: { source: YB, date: '2026-08-28', fact: 'F39' },
  },
  {
    key: 'shopify-cdn',
    service: 'Shopify CDN',
    category: 'platform',
    match: /^cdn\.shopify\.com\/|^cdn\.shopifycdn\.net\//,
    verdict: 'slow',
    severity: 'low',
    copy: 'platform-slow',
    fix: 'fix-china-cdn',
    evidence: { source: YB, date: '2026-08-28', fact: 'F38' },
  },
  {
    key: 'wix-static',
    service: 'Wix',
    category: 'platform',
    match: /^static\.(parastorage|wixstatic)\.com\//,
    verdict: 'hangs',
    severity: 'high',
    renderRisk: true,
    copy: 'platform-hangs',
    fix: 'fix-replatform',
    evidence: { source: YB, date: '2026-08-28', fact: 'F38' },
  },
  {
    key: 'squarespace-webflow',
    service: 'Squarespace or Webflow assets',
    category: 'platform',
    match: /^([a-z0-9-]+\.)*(squarespace-cdn\.com|sqspcdn\.com|website-files\.com|webflow\.com|webflow\.io)\//,
    verdict: 'intermittent',
    severity: 'high',
    renderRisk: true,
    copy: 'platform-https',
    fix: 'fix-replatform',
    evidence: { source: GF, date: '2026-08-21', fact: 'F38' },
  },
  {
    key: 'sanity',
    service: 'Sanity CDN',
    category: 'platform',
    match: /^cdn\.sanity\.io\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-test-first',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F42' },
  },
  {
    key: 'wordpress-com',
    service: 'WordPress.com and Jetpack CDN',
    category: 'platform',
    match: /^(i[0-3]|c[0-2]|s[0-2]|stats|pixel|widgets|public-api)\.wp\.com\/|^([a-z0-9-]+\.)*files\.wordpress\.com\/|^public-api\.wordpress\.com\//,
    verdict: 'partial',
    severity: 'high',
    renderRisk: true,
    copy: 'wpcom-partial',
    fix: 'fix-jetpack',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F9' },
    plugins: ['jetpack', 'jetpack-boost'],
  },
  {
    key: 'wordpress-org-static',
    service: 'WordPress.org static files',
    category: 'platform',
    match: /^s\.w\.org\//,
    verdict: 'unverified',
    severity: 'info',
    copy: 'unverified',
    fix: 'fix-emoji',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F11' },
  },

  {
    key: 'translatepress',
    service: 'TranslatePress',
    category: 'platform',
    match: /(?!)/, // detected from the plugin path only
    verdict: 'blocked',
    severity: 'medium',
    copy: 'translatepress',
    fix: 'fix-translatepress',
    evidence: { source: 'TranslatePress 3.3.4 source code', date: '2026-09-04', fact: 'F13' },
    plugins: ['translatepress-multilingual'],
  },

  /* ── Catch-all Google infrastructure (after the specific Google rules) ── */
  {
    key: 'google-other',
    service: 'Other Google services',
    category: 'google',
    match: /^([a-z0-9-]+\.)*(googleapis\.com|gstatic\.com|googleusercontent\.com|ggpht\.com|google(\.[a-z]{2,3}){1,2})\//,
    verdict: 'blocked',
    severity: 'high',
    renderRisk: true,
    copy: 'google-blocked',
    fix: 'fix-google-other',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F1, F3, F39' },
  },

  /* ── Mainland providers: good signals, listed so they do not show as unknown ── */
  {
    key: 'baidu-tongji',
    service: 'Baidu Tongji',
    category: 'china',
    match: /^hm\.baidu\.com\//,
    verdict: 'domestic',
    severity: 'info',
    copy: 'domestic',
    fix: 'fix-none',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F23' },
  },
  {
    key: 'china-provider',
    service: 'Mainland provider',
    category: 'china',
    match: /^([a-z0-9-]+\.)*(baidu\.com|bdstatic\.com|bcebos\.com|alicdn\.com|aliyuncs\.com|aliyun\.com|alipay\.com|alipayobjects\.com|qq\.com|gtimg\.cn|gtimg\.com|myqcloud\.com|tencent-cloud\.net|qcloud\.com|weixin\.qq\.com|wx\.qq\.com|amap\.com|autonavi\.com|bilibili\.com|hdslb\.com|youku\.com|ykimg\.com|cravatar\.cn|weavatar\.com|sep\.cc|npmmirror\.com|iconfont\.cn|geetest\.com|geevisit\.com|huaweicloud\.com|volccdn\.com|bytecdn\.cn|qiniucdn\.com|qnssl\.com|clouddn\.com|sinaimg\.cn|weibo\.com|jinshuju\.net|wjx\.cn|meiqia\.com|sobot\.com|qiyukf\.com|changyan\.kuaizhan\.com)\//,
    verdict: 'domestic',
    severity: 'info',
    copy: 'domestic',
    fix: 'fix-none',
    evidence: { source: FACT_BANK, date: '2026-09-06', fact: 'F41' },
  },
];

/** Verdicts that mean the dependency fails or silently loses data for mainland visitors. */
export const FAILING: ReadonlySet<Verdict> = new Set<Verdict>([
  'blocked',
  'hangs',
  'network',
  'split',
  'intermittent',
  'partial',
  'malicious',
]);

export function matchRule(hostAndPath: string): Rule | null {
  const target = hostAndPath.toLowerCase();
  for (const rule of RULES) {
    if (rule.match.test(target)) return rule;
  }
  return null;
}

export const RULES_BY_KEY: Record<string, Rule> = Object.fromEntries(RULES.map((r) => [r.key, r]));
