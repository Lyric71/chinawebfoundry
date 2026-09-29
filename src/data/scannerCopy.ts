/**
 * Every user-facing sentence of the China Site Scanner, per locale.
 *
 * `page` renders at build time in ScannerPage.astro. `client` is serialised
 * into the page as JSON and read by src/scripts/siteScanner.ts to write the
 * report, so the API only ever returns keys and raw evidence.
 *
 * Facts in `why` and `hosting` come from editorial/sources/fact-bank.md; keep
 * them in step with src/lib/scanner/rules.ts. Placeholders: {service},
 * {country}, {network}, {provider}, {value}, {status}, {date}, {count},
 * {scripts}, {styles}, {ms}, {kb}, {platform}.
 */
import type { Locale } from '../i18n/ui';

interface ReadinessCopy {
  title: string;
  pass?: string;
  warn?: string;
  fail?: string;
  info?: string;
}

export interface ScannerClientCopy {
  progress: string[];
  errors: Record<string, string>;
  grades: Record<'good' | 'work' | 'poor', { title: string; summary: string }>;
  severity: Record<'critical' | 'high' | 'medium' | 'low' | 'info', { tag: string; title: string; description: string }>;
  verdicts: Record<string, string>;
  modes: Record<string, string>;
  why: Record<string, string>;
  fixes: Record<string, string>;
  hosting: Record<string, string>;
  readiness: Record<string, ReadinessCopy>;
  ui: Record<string, string>;
}

export interface ScannerPageCopy {
  title: string;
  description: string;
  badge: string;
  h1: string;
  lead: string;
  namePh: string;
  companyPh: string;
  websitePh: string;
  emailPh: string;
  captchaLabel: string;
  captchaEnd: string;
  captchaPh: string;
  captchaRefresh: string;
  submit: string;
  formNote: string;
  loadingTitle: string;
  loadingBody: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  ctaHref: string;
  howTitle: string;
  howSub: string;
  steps: { title: string; body: string }[];
  whatTitle: string;
  whatSub: string;
  categories: { name: string; detail: string }[];
  methodTitle: string;
  method: string[];
}

export interface ScannerCopy {
  page: ScannerPageCopy;
  client: ScannerClientCopy;
}

const en: ScannerCopy = {
  page: {
    title: 'China Site Scanner | Will your site work behind the Great Firewall?',
    description:
      "Free scan of what breaks when your site opens in mainland China: 60+ services checked by how they load, where you're hosted, and ICP readiness.",
    badge: 'Free tool',
    h1: 'China Site Scanner',
    lead: 'Find out what breaks when someone opens your site in mainland China. We check more than 60 services, how each one loads, and where your site is served from.',
    namePh: 'Your name',
    companyPh: 'Company name',
    websitePh: 'Website URL (e.g. example.com)',
    emailPh: 'Work email',
    captchaLabel: 'Quick check: what is',
    captchaEnd: '?',
    captchaPh: 'Your answer',
    captchaRefresh: 'Refresh captcha',
    submit: 'Scan my website',
    formNote: 'Reads your homepage, your contact page, and your own scripts and stylesheets. Takes about 20 seconds.',
    loadingTitle: 'Scanning your website',
    loadingBody: 'Reading your pages and checking every outside resource against our test data.',
    ctaTitle: 'Want these fixed?',
    ctaBody:
      "We're a Shanghai team that moves sites behind the Great Firewall and keeps them fast there, whatever they're built on. We'll go through your report with you.",
    ctaButton: 'Get a free assessment',
    ctaHref: '/contact/',
    howTitle: 'How it works',
    howSub: 'From form to report in under a minute',
    steps: [
      { title: 'Enter your details', body: 'Name, company, website and a work email. The scan starts as soon as you send the form.' },
      {
        title: 'We read your pages',
        body: 'The scanner reads your homepage and contact page, then your own scripts and stylesheets, and notes every outside resource and how it loads.',
      },
      { title: 'Get a dated report', body: 'Each problem comes with why it matters, how to fix it, and the test it rests on, with its date.' },
    ],
    whatTitle: 'What we check',
    whatSub: 'Every verdict traces back to a dated test. Where we have no mainland measurement, the report says so.',
    categories: [
      { name: 'Fonts and code libraries', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Forms and captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Analytics and tags', detail: 'Google Analytics, Tag Manager, Meta Pixel, Hotjar, Clarity, Amplitude' },
      { name: 'Video and embeds', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Maps and payments', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Platforms and back ends', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Hosting and CDN', detail: 'Where the site is served from, the CDN in front of it, and where a mainland visitor gets sent' },
      { name: 'China launch checklist', detail: 'ICP and PSB numbers, domain eligibility, Chinese version, Baidu verification' },
      { name: 'Security', detail: 'polyfill.io, BootCDN and Staticfile, the domains behind the 2024 supply-chain attack' },
    ],
    methodTitle: 'How we reach a verdict',
    method: [
      "Verdicts come from dated tests: our own probes from an Alibaba Cloud data centre and a Beijing home broadband line, 21YunBox probes from a mainland data centre, and third-party blocking tests run from inside China. Every finding shows its source and date.",
      "The scan runs from outside China. We see what your pages load and how, and we make a DNS lookup as a mainland visitor would to find out where they get sent. We can't open the page on a phone in Shanghai, so read the report as a map of risks and confirm the big ones on the ground.",
      "Hosts we've never measured are marked as not yet measured. We'd rather say that than guess.",
    ],
  },
  client: {
    progress: [
      'Checking your answer...',
      'Fetching your homepage...',
      'Finding your contact page...',
      'Reading your scripts and stylesheets...',
      'Looking up where your site is served from...',
      'Checking hosts against our test data...',
      'Writing your report...',
    ],
    errors: {
      fields: 'All fields are required.',
      captcha: 'Please answer the quick check.',
      invalid: "That doesn't look like a website address. Try something like example.com.",
      'blocked-target': "That address can't be scanned.",
      timeout: 'Your site took more than 12 seconds to answer, so we stopped. Try again, or try another page.',
      unreachable: "We couldn't reach that site. Check the address and try again.",
      http: 'Your site answered with an error (HTTP {status}). Some firewalls block automated checks like ours.',
      'too-many-redirects': "The site redirects in a loop, so we couldn't reach a page.",
      'not-html': 'That address leads to a file. Enter the address of a web page.',
      token: 'Your session expired. Please answer the quick check again.',
      rate: "You've run a lot of scans in a short time. Please wait a few minutes.",
      server: 'Something went wrong on our side. Please try again.',
    },
    grades: {
      good: {
        title: 'In good shape for China',
        summary: 'Nothing on this page should stall for mainland visitors. The notes below are still worth a look before launch.',
      },
      work: {
        title: 'Works, with gaps',
        summary: 'The page should load in China, but some features will fail or lose data for mainland visitors.',
      },
      poor: {
        title: 'Breaks in China',
        summary: 'At least one problem will stall or break this page for mainland visitors. Start with the critical items.',
      },
    },
    severity: {
      critical: { tag: 'Critical', title: 'Stalls the page', description: 'Loaded so that the whole page waits on a host that fails in China.' },
      high: { tag: 'High', title: 'Breaks a feature', description: "A form, video, map or other feature that won't work for mainland visitors." },
      medium: { tag: 'Medium', title: 'Loses data or degrades', description: 'Tracking, embeds and extras that fail quietly.' },
      low: { tag: 'Low', title: 'Slows things down', description: 'Loads, but slowly, or only turns up in your code.' },
      info: { tag: 'Check', title: 'Worth checking', description: "Services we haven't measured from inside China yet." },
    },
    verdicts: {
      blocked: 'Blocked',
      hangs: 'Answers, then hangs',
      network: 'Depends on network',
      split: 'Loads, data blocked',
      intermittent: 'Intermittent',
      partial: 'Partly blocked',
      slow: 'Slow',
      licensing: 'Licensing issue',
      unverified: 'Not yet measured',
      malicious: 'Malicious',
      domestic: 'Mainland provider',
      reachable: 'Reachable',
      unknown: 'Not in our data',
      redirected: 'Redirected',
    },
    modes: {
      'blocking-script': 'render-blocking script',
      'async-script': 'async script',
      stylesheet: 'render-blocking stylesheet',
      'deferred-style': 'deferred stylesheet',
      preload: 'preload',
      hint: 'connection hint',
      iframe: 'iframe',
      image: 'image',
      media: 'video or audio',
      'inline-script': 'inline script',
      'js-file': 'referenced in',
      'css-file': 'in stylesheet',
      marker: 'widget markup on',
      plugin: 'WordPress plugin',
    },
    why: {
      malicious:
        '{service} belongs to the network behind the 2024 polyfill.io supply-chain attack, which pushed malware through these domains. Treat any reference as a security incident, China or no China.',
      'fonts-network':
        'Google Fonts depends on where the visitor sits. From mainland data centres it answers; from a Beijing home broadband line in August 2026, 0 of 54 requests got through. Loaded in the <head>, the stylesheet holds up the whole page while the browser waits.',
      'fonts-mirror':
        "A third-party proxy for Google Fonts with an unnamed operator. It may work today, but you can't audit what it serves, and mirrors like this come and go.",
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) is blocked. Our probe from Alibaba Cloud in Zhangjiakou got no first byte in 60 seconds. When jQuery loads from here, the page freezes until the browser gives up, then every script that needs jQuery fails.',
      'cdn-slow':
        '{service} reaches mainland China, but slowly and from servers outside it. In August 2026 probes from a mainland data centre, the first byte took 0.5 to 1.1 seconds.',
      unverified:
        "We don't have a mainland measurement for {service} yet, and we won't guess. Test it from inside China before launch, or swap it for a service you control.",
      'recaptcha-net':
        "Moving reCAPTCHA to recaptcha.net is Google's own suggested workaround for China. Our last confirmation dates from February 2026 and developers keep reporting failures, so treat it as unproven.",
      'captcha-blocked':
        "Google reCAPTCHA is blocked in mainland China. The form can't be submitted, and every enquiry from China disappears without an error.",
      'captcha-intermittent':
        "hCaptcha's site loads, but the API a challenge needs (api2.hcaptcha.com) is intermittent in tests from inside China. Some visitors will sit in front of a challenge that never completes.",
      'form-hangs':
        '{service} answers, then never finishes loading from China: 0 of 3 test loads completed in August 2026. The form stays empty and submissions vanish with no error.',
      'analytics-blocked':
        '{service} is blocked in mainland China. Visits from China never reach your reports, so the market looks smaller than it is.',
      'analytics-hangs':
        '{service} answers from China, then never completes (0 of 3 in August 2026 tests). Data from mainland visitors is lost, and nothing on the page tells you.',
      'analytics-split':
        "Amplitude's script loads from China, but the endpoint it sends events to is blocked. Everything looks installed and working while no China data arrives.",
      'analytics-slow': '{service} completes from China, but each call takes around a second. Keep it off the critical path.',
      'tag-manager':
        'Google Tag Manager loads only some of the time from China. Even when the container gets through, the tags it fires send data to blocked Google hosts, so China traffic is lost either way.',
      'google-blocked':
        '{service} runs on Google infrastructure, which is blocked in mainland China. Whatever this resource does, it fails for mainland visitors.',
      'video-blocked': '{service} is blocked in mainland China, player and all. Visitors see an empty frame where the video should be.',
      'video-slow': '{service} reaches China but streams from servers abroad. Expect slow starts and buffering.',
      'embed-blocked':
        '{service} is blocked in mainland China. The embed shows as an empty box, and if its script loads in the <head> it can hold up the page.',
      'comments-blocked':
        'Disqus is blocked in mainland China (41 of 43 tested URLs, September 2026). The comment section never appears.',
      'avatars-blocked':
        'Gravatar is blocked. Avatars fail on the site, and WordPress also calls Gravatar all over wp-admin, which slows your own editors if they work from China.',
      'maps-blocked':
        "{service} is blocked in mainland China, so the map stays blank. Publishing maps in China also needs a licensed provider, so a faster mirror won't fix it.",
      'maps-split':
        "Mapbox's API is intermittent from China and its telemetry endpoint is blocked, so maps half-render while a request hangs in the background. Map data in China also needs a licensed provider.",
      'payments-licensing':
        "Mainland China isn't a Stripe country, so there's no domestic card acquiring whether the script loads or not. Chinese buyers expect Alipay, WeChat Pay or UnionPay.",
      'payments-partial':
        "PayPal's site is reachable, but 9 of 27 tested PayPal URLs were disrupted in August 2026, and the disrupted ones are checkout redirects. Payments can fail at the last step.",
      'search-hangs': 'Algolia answers from China, then never completes (0 of 3 test loads). Site search returns nothing.',
      'backend-blocked':
        "Firebase sits on Google's googleapis.com family, which is blocked. Logins, databases and anything else it powers will fail.",
      cloudfront:
        "CloudFront's global network doesn't serve mainland China. It loaded from a mainland data centre, but 0 of 3 loads completed on a Beijing home broadband line in August 2026.",
      'platform-slow': '{service} loads in China, but from servers outside it: a 3.6-second median in our August 2026 tests.',
      'platform-hangs':
        "Wix's static servers answer, then fail to complete from China (0 of 3 test loads). The site's own scripts come from there, so the page may never finish.",
      'platform-https':
        "Squarespace and Webflow load over plain HTTP from China, but HTTPS is intermittent, because the firewall filters on the encrypted connection's server name. Real visitors arrive over HTTPS.",
      'wpcom-partial':
        'Jetpack\'s image CDN and stats run on WordPress.com infrastructure, where hundreds of URLs test as blocked from China (508 of 1,509 tested). Images routed through it can fail at random.',
      translatepress:
        "TranslatePress calls Google's translation API and its own server while serving a page, whenever a string isn't translated yet. On a server in mainland China those calls stall the request.",
    },
    fixes: {
      'fix-malicious':
        "Remove every reference now and check the site for injected redirects. Modern browsers don't need polyfills; if you do, self-host a build.",
      'fix-fonts': 'Self-host the font files (WOFF2) on your own server or CDN and drop the Google stylesheet.',
      'fix-fonts-elementor':
        'In Elementor, set Settings > Performance > Load Google Fonts Locally to Enable, or turn Google Fonts off under Settings > Advanced. The editor still calls Google for Roboto either way.',
      'fix-self-host':
        'Serve the file from your own domain, or from a China CDN such as Alibaba Cloud or Tencent Cloud (mainland nodes need an ICP filing).',
      'fix-self-host-fonts': 'Download the fonts your licence allows and serve them from your own domain.',
      'fix-captcha':
        'Use a captcha with mainland infrastructure: Alibaba Cloud Captcha, Tencent Captcha or GeeTest. A honeypot field plus rate limiting also stops most spam.',
      'fix-forms': 'Build the form into your own site, or use a mainland form tool such as Jinshuju or Tencent Survey.',
      'fix-chat': 'Test it from inside China. If it fails, mainland options include Meiqia, Zhichi and NetEase Qiyu.',
      'fix-test-first': 'Test it from inside China before launch. If it fails, load it only for visitors outside China, or drop it.',
      'fix-analytics':
        "Run a tool that works in China alongside it: Baidu Tongji, or Plausible or Matomo self-hosted on a mainland server. Load global tags async so they can't hold up the page.",
      'fix-video': 'Host China copies on Youku, Bilibili, Tencent Video or Alibaba Cloud VOD, and show those to mainland visitors.',
      'fix-embeds': 'Swap the embed for a static image that links out, or use Weibo or WeChat equivalents on your China pages.',
      'fix-comments': 'Use native comments, a self-hosted system such as Waline, or Changyan.',
      'fix-avatars': 'Point avatars at a mainland mirror such as Cravatar (cravatar.cn), or turn avatars off in Settings > Discussion.',
      'fix-maps': 'Use a licensed mainland provider: AMap, Baidu Maps or Tencent Maps. For one address, a static map image does the job.',
      'fix-payments': 'Add Alipay, WeChat Pay or UnionPay through a payment provider licensed for China.',
      'fix-search': 'Use search you can run in China: Alibaba Cloud OpenSearch or a self-hosted Meilisearch.',
      'fix-backend': 'Move the back end to a mainland cloud (Alibaba Cloud, Tencent Cloud), or proxy it through a server you control in China.',
      'fix-china-cdn': 'Serve the files from a CDN with mainland nodes (Alibaba Cloud, Tencent Cloud). That needs an ICP filing.',
      'fix-replatform':
        "Platforms like this can't be served from inside China. A China version usually means moving the site to hosting you control, with an ICP filing.",
      'fix-jetpack':
        "Turn off Jetpack's Site Accelerator (image and file CDN) and stats, and serve images from your own server or a China CDN.",
      'fix-emoji': "Remove WordPress's emoji script (a few lines in functions.php, or a small plugin). Current systems draw emoji themselves.",
      'fix-translatepress':
        'Translate every string before launch so no live calls fire, or move to a plugin with no runtime calls, such as Polylang.',
      'fix-google-other': 'Find what loads this resource, then remove it or replace it for mainland visitors.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        "For Chinese visitors, your site resolves to a server in mainland China ({network}). That's the setup that loads fastest behind the firewall.",
      'host-china-cdn':
        'Your domain points at {provider}, a Chinese CDN. If its service area includes the mainland (which needs an ICP filing), Chinese visitors are served locally. From our test point it answered from outside China ({country}).',
      'host-platform-subdomain':
        "The site runs on a shared platform subdomain. Subdomains like .vercel.app are often throttled or blocked in China, and you can't file an ICP for a domain you don't control.",
      'host-wix': 'The site runs on Wix. Its servers answer from China, but none of 3 test loads finished in August 2026.',
      'host-sni':
        "The site runs on {provider}. HTTPS to these platforms is intermittent from China, because the firewall filters on the connection's server name.",
      'host-cloudfront':
        "The site is served through AWS CloudFront's global network, which has no mainland nodes. In August 2026, 0 of 3 loads completed on a Beijing home broadband line.",
      'host-vercel':
        "The site runs on Vercel, outside China ({country}). Vercel's own knowledge base says it can't guarantee availability or speed in mainland China.",
      'host-cloudflare':
        'The site sits behind Cloudflare. On standard plans, mainland visitors reach an overseas edge, usually Hong Kong, Japan or the US west coast. The in-country network is an Enterprise product that needs an ICP filing.',
      'host-shopify':
        'The store runs on Shopify, served from outside China. It loads, slowly: a 3.6-second median in August 2026 tests from a mainland data centre.',
      'host-hk':
        "The site is served from Hong Kong ({network}). No ICP needed and it's close, but traffic still crosses the mainland border.",
      'host-abroad':
        "The site is served from outside China ({country}, {network}). Every request from a mainland visitor crosses the border. In Chinafy's 2026 benchmark of 614 sites, time to first byte from Beijing was 4 to 4.5 times higher than from Virginia or London.",
      'host-unknown': "We couldn't work out where the site is served from.",
    },
    readiness: {
      icp: {
        title: 'ICP number',
        pass: 'Found {value}, linked to the MIIT register.',
        warn: 'No ICP number found. Without one, a server in mainland China won\'t serve your site on ports 80 and 443.',
      },
      'icp-unlinked': {
        title: 'ICP number',
        warn: "Found {value}, but it doesn't link to beian.miit.gov.cn, which the rules require.",
      },
      psb: {
        title: 'Public Security Bureau filing',
        pass: 'Found {value}.',
        warn: 'No PSB number found. A mainland-hosted site has 30 days after launch to file and display one.',
        info: "Not needed until the site is hosted in mainland China.",
      },
      'tld-eligible': { title: 'Domain ending', pass: '{value} can carry an ICP filing.' },
      'tld-ineligible': {
        title: 'Domain ending',
        fail: "{value} isn't on MIIT's list of approved domain endings, so it can't carry an ICP filing. A China site needs .cn, .com or another approved ending.",
      },
      'tld-org': { title: 'Domain ending', warn: '.org stopped taking new ICP filings in 2018. Sites filed before then keep their numbers.' },
      'tld-co': {
        title: 'Domain ending',
        warn: ".co was approved in 2018 but is missing from MIIT's current list. Some provinces accept it and some don't, so check with your filing agent.",
      },
      chinese: {
        title: 'Chinese-language version',
        pass: 'Found ({value}).',
        warn: 'No Simplified Chinese version declared (no zh hreflang or page language). Chinese visitors and Baidu both look for one.',
      },
      'baidu-verify': {
        title: 'Baidu verification',
        pass: 'Found the baidu-site-verification tag.',
        info: 'No Baidu Webmaster Tools verification tag. You need one to submit pages and see how Baidu indexes you.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji is installed.',
        info: 'No analytics that work in China. Baidu Tongji is the usual choice.',
      },
      commerce: {
        title: 'Online shop',
        info: 'We found {value}. Selling in China needs local payment methods and a separate licensing review.',
      },
    },
    ui: {
      resultsTitle: 'Your report',
      reportFor: 'Report for',
      scoreLabel: 'China compatibility score',
      findingsTitle: 'What we found',
      whyLabel: 'Why it matters',
      fixLabel: 'Fix',
      sourceLabel: 'Source',
      foundLabel: 'Where we found it',
      referencedNote: 'Only referenced in your JavaScript. It loads if that feature runs.',
      hostingTitle: 'Where your site is served from',
      servedFrom: 'Country',
      network: 'Network',
      provider: 'CDN or platform',
      ip: 'IP address',
      chinaView: 'Based on a DNS lookup made as a mainland visitor.',
      checklistTitle: 'China launch checklist',
      checklistIntro: 'What a mainland launch needs, beyond a page that loads.',
      hostsTitle: 'Every outside host on the page ({count})',
      hostsIntro: 'Each third-party host the page loads, with our verdict.',
      detailsTitle: 'Scan details',
      pagesScanned: 'Pages scanned',
      filesScanned: '{scripts} scripts and {styles} stylesheets read',
      responseTime: 'Homepage answered in {ms} ms',
      htmlSize: 'HTML: {kb} KB',
      builtWith: 'Built with {platform}',
      copy: 'Copy report',
      copied: 'Copied',
      again: 'Scan another site',
      noFindings: 'No outside dependencies that fail in China. Nice work.',
      unknown: 'unknown',
      failed: 'failed',
      score: 'Score',
    },
  },
};

const fr: ScannerCopy = {
  page: {
    title: 'China Site Scanner | Votre site tient-il derrière le Grand Pare-feu ?',
    description:
      'Scan gratuit : ce qui casse sur votre site quand on l’ouvre depuis la Chine continentale. Plus de 60 services, leur chargement, l’hébergement, l’ICP.',
    badge: 'Outil gratuit',
    h1: 'China Site Scanner',
    lead: 'Voyez ce qui casse quand on ouvre votre site depuis la Chine continentale. On vérifie plus de 60 services, la façon dont chacun se charge, et d’où votre site est servi.',
    namePh: 'Votre nom',
    companyPh: 'Votre entreprise',
    websitePh: 'Adresse du site (ex. exemple.com)',
    emailPh: 'E-mail professionnel',
    captchaLabel: 'Petite vérification : combien font',
    captchaEnd: ' ?',
    captchaPh: 'Votre réponse',
    captchaRefresh: 'Nouvelle question',
    submit: 'Scanner mon site',
    formNote: 'On lit votre page d’accueil, votre page contact, vos scripts et vos feuilles de style. Comptez une vingtaine de secondes.',
    loadingTitle: 'On analyse votre site',
    loadingBody: 'Lecture de vos pages et comparaison de chaque ressource externe avec nos mesures.',
    ctaTitle: 'Besoin d’aide pour tout corriger ?',
    ctaBody:
      'Notre équipe, basée à Shanghai, installe des sites derrière le Grand Pare-feu et les garde rapides, quelle que soit leur technologie. On passe votre rapport en revue avec vous.',
    ctaButton: 'Demander un audit gratuit',
    ctaHref: '/fr/contact/',
    howTitle: 'Mode d’emploi',
    howSub: 'Du formulaire au rapport en moins d’une minute',
    steps: [
      { title: 'Vos coordonnées', body: 'Votre nom, votre entreprise, l’adresse du site, un e-mail professionnel. Le scan démarre dès l’envoi.' },
      {
        title: 'On lit vos pages',
        body: 'Le scanner parcourt votre page d’accueil et votre page contact, puis vos propres scripts et feuilles de style, et note chaque ressource externe et sa façon de se charger.',
      },
      { title: 'Un rapport daté', body: 'Chaque problème arrive avec son explication, sa solution et le test sur lequel il repose, date comprise.' },
    ],
    whatTitle: 'Ce que nous vérifions',
    whatSub: 'Chaque verdict renvoie à un test daté. Quand nous n’avons aucune mesure depuis la Chine, le rapport le dit.',
    categories: [
      { name: 'Polices et bibliothèques de code', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Formulaires et captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Mesure d’audience et balises', detail: 'Google Analytics, Tag Manager, pixel Meta, Hotjar, Clarity, Amplitude' },
      { name: 'Vidéos et contenus intégrés', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Cartes et paiement', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Plateformes et back-ends', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Hébergement et CDN', detail: 'D’où le site est servi, le CDN placé devant, et où atterrit un visiteur chinois' },
      { name: 'Check-list lancement Chine', detail: 'Numéros ICP et PSB, extension de domaine, version chinoise, validation Baidu' },
      { name: 'Sécurité', detail: 'polyfill.io, BootCDN et Staticfile, les domaines de l’attaque de 2024 sur la chaîne d’approvisionnement' },
    ],
    methodTitle: 'Comment nous tranchons',
    method: [
      'Nos verdicts reposent sur des tests datés : nos propres sondes, depuis un centre de données Alibaba Cloud et une connexion résidentielle à Pékin, les sondes de 21YunBox depuis un centre de données chinois, et des tests de blocage menés depuis la Chine. Chaque constat affiche sa source et sa date.',
      'Le scan tourne depuis l’étranger. On voit ce que chargent vos pages et comment, et on interroge le DNS comme le ferait un internaute chinois pour savoir où il est envoyé. On ne peut pas ouvrir la page sur un téléphone à Shanghai : lisez donc le rapport comme une carte des risques, et vérifiez les plus gros sur place.',
      'Les services que nous n’avons jamais mesurés sont signalés comme tels. Plutôt le dire que deviner.',
    ],
  },
  client: {
    progress: [
      'Vérification de votre réponse…',
      'Lecture de la page d’accueil…',
      'Recherche de la page contact…',
      'Lecture des scripts et feuilles de style…',
      'Localisation de l’hébergement…',
      'Confrontation avec nos mesures…',
      'Rédaction du rapport…',
    ],
    errors: {
      fields: 'Merci de remplir tous les champs.',
      captcha: 'Merci de répondre à la petite vérification.',
      invalid: 'Cette adresse ne ressemble pas à celle d’un site. Essayez par exemple exemple.com.',
      'blocked-target': 'Cette adresse ne peut pas être analysée.',
      timeout: 'Votre site a mis plus de 12 secondes à répondre, on a arrêté là. Réessayez, ou testez une autre page.',
      unreachable: 'Impossible de joindre ce site. Vérifiez l’adresse et réessayez.',
      http: 'Votre site a renvoyé une erreur (HTTP {status}). Certains pare-feu bloquent les outils d’analyse comme le nôtre.',
      'too-many-redirects': 'Le site redirige en boucle : impossible d’atteindre une page.',
      'not-html': 'Cette adresse mène à un fichier. Indiquez l’adresse d’une page web.',
      token: 'Session expirée. Merci de répondre de nouveau à la petite vérification.',
      rate: 'Beaucoup d’analyses en peu de temps. Patientez quelques minutes.',
      server: 'Un problème est survenu de notre côté. Merci de réessayer.',
    },
    grades: {
      good: {
        title: 'En bonne forme pour la Chine',
        summary: 'Rien sur cette page ne devrait bloquer l’affichage en Chine continentale. Jetez tout de même un œil aux remarques ci-dessous avant le lancement.',
      },
      work: {
        title: 'Ça passe, avec des trous',
        summary: 'La page devrait s’afficher en Chine, mais certaines fonctions tomberont en panne ou perdront des données pour les visiteurs chinois.',
      },
      poor: {
        title: 'Ça casse en Chine',
        summary: 'Au moins un problème bloquera ou cassera cette page pour les internautes de Chine continentale. Commencez par les points critiques.',
      },
    },
    severity: {
      critical: { tag: 'Critique', title: 'Bloque la page', description: 'Chargé de telle sorte que toute la page attend un serveur qui échoue en Chine.' },
      high: { tag: 'Élevé', title: 'Casse une fonction', description: 'Formulaire, vidéo, carte : une fonction qui ne marchera pas pour les visiteurs chinois.' },
      medium: { tag: 'Moyen', title: 'Perd des données ou se dégrade', description: 'Suivi, contenus intégrés et extras qui échouent sans bruit.' },
      low: { tag: 'Faible', title: 'Ralentit', description: 'Se charge, mais lentement, ou n’apparaît que dans votre code.' },
      info: { tag: 'À vérifier', title: 'Points à vérifier', description: 'Services que nous n’avons pas encore mesurés depuis la Chine.' },
    },
    verdicts: {
      blocked: 'Bloqué',
      hangs: 'Répond, puis se fige',
      network: 'Dépend du réseau',
      split: 'Script chargé, données bloquées',
      intermittent: 'Intermittent',
      partial: 'Partiellement bloqué',
      slow: 'Lent',
      licensing: 'Question de licence',
      unverified: 'Pas encore mesuré',
      malicious: 'Malveillant',
      domestic: 'Fournisseur chinois',
      reachable: 'Accessible',
      unknown: 'Absent de nos données',
      redirected: 'Redirigé',
    },
    modes: {
      'blocking-script': 'script bloquant',
      'async-script': 'script asynchrone',
      stylesheet: 'feuille de style bloquante',
      'deferred-style': 'feuille de style différée',
      preload: 'préchargement',
      hint: 'indication de connexion',
      iframe: 'iframe',
      image: 'image',
      media: 'vidéo ou audio',
      'inline-script': 'script intégré',
      'js-file': 'cité dans',
      'css-file': 'dans la feuille de style',
      marker: 'widget repéré sur',
      plugin: 'extension WordPress',
    },
    why: {
      malicious:
        '{service} appartient au réseau derrière l’attaque de 2024 sur polyfill.io, qui a diffusé des logiciels malveillants par ces domaines. Toute référence est un incident de sécurité, Chine ou pas.',
      'fonts-network':
        'Google Fonts dépend de l’endroit où se trouve l’internaute. Depuis un centre de données chinois, ça répond ; depuis un accès Internet résidentiel à Pékin, en août 2026, aucune des 54 requêtes n’a abouti. Placée dans le <head>, la feuille de style fait attendre toute la page.',
      'fonts-mirror':
        'Un relais tiers pour Google Fonts, exploité par on ne sait qui. Il marche peut-être aujourd’hui, mais impossible de contrôler ce qu’il sert, et ce genre de miroir disparaît du jour au lendemain.',
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) est bloqué. Notre sonde chez Alibaba Cloud, à Zhangjiakou, n’a reçu aucun octet en 60 secondes. Si jQuery vient de là, la page reste figée jusqu’à ce que le navigateur abandonne, puis tous les scripts qui en dépendent échouent.',
      'cdn-slow':
        '{service} passe en Chine continentale, mais lentement, depuis des serveurs situés hors du pays. En août 2026, depuis un centre de données chinois, le premier octet arrivait en 0,5 à 1,1 seconde.',
      unverified:
        'Nous n’avons pas encore de mesure de {service} depuis la Chine continentale, et nous préférons ne pas deviner. Testez-le sur place avant le lancement, ou remplacez-le par un service que vous maîtrisez.',
      'recaptcha-net':
        'Passer par recaptcha.net, c’est la parade que Google suggère lui-même pour la Chine. Notre dernière confirmation remonte à février 2026 et des développeurs signalent encore des échecs : à considérer comme non prouvé.',
      'captcha-blocked':
        'Google reCAPTCHA est bloqué en Chine continentale. Le formulaire ne part pas, et chaque demande venue de Chine se perd sans le moindre message d’erreur.',
      'captcha-intermittent':
        'Le site d’hCaptcha répond, mais l’API dont chaque test a besoin (api2.hcaptcha.com) reste intermittente dans les tests menés depuis la Chine. Une partie des visiteurs restera bloquée devant un test qui ne se termine jamais.',
      'form-hangs':
        '{service} répond, puis ne finit jamais de se charger depuis la Chine : aucun des 3 chargements de test n’a abouti en août 2026. Le formulaire reste vide et les envois disparaissent sans erreur.',
      'analytics-blocked':
        '{service} est bloqué en Chine continentale. Les visites chinoises n’arrivent jamais dans vos rapports, et le marché paraît plus petit qu’il ne l’est.',
      'analytics-hangs':
        '{service} répond depuis la Chine, puis ne termine jamais (0 sur 3 lors des tests d’août 2026). Les données des visiteurs chinois se perdent, et rien ne vous en avertit.',
      'analytics-split':
        'Le script d’Amplitude se charge depuis la Chine, mais l’adresse qui reçoit les événements est bloquée. Tout semble installé et fonctionnel, alors qu’aucune donnée chinoise n’arrive.',
      'analytics-slow': '{service} aboutit depuis la Chine, mais chaque appel prend environ une seconde. À tenir à l’écart du chargement critique.',
      'tag-manager':
        'Google Tag Manager ne se charge que par intermittence depuis la Chine. Et même quand le conteneur passe, les balises qu’il déclenche envoient leurs données vers des serveurs Google bloqués : le trafic chinois se perd dans tous les cas.',
      'google-blocked':
        '{service} tourne sur l’infrastructure de Google, bloquée en Chine continentale. Quel que soit son rôle, cette ressource échoue pour les visiteurs chinois.',
      'video-blocked': '{service} est bloqué en Chine continentale, lecteur compris. Les visiteurs voient un cadre vide à la place de la vidéo.',
      'video-slow': '{service} passe en Chine, mais diffuse depuis l’étranger. Attendez-vous à des démarrages lents et à des coupures pour mise en mémoire tampon.',
      'embed-blocked':
        '{service} est bloqué en Chine continentale. Le contenu intégré s’affiche comme une case vide, et si son script se charge dans le <head>, il peut bloquer toute la page.',
      'comments-blocked':
        'Disqus est bloqué en Chine continentale (41 adresses testées sur 43, septembre 2026). La zone de commentaires n’apparaît jamais.',
      'avatars-blocked':
        'Gravatar est bloqué. Les avatars ne s’affichent pas sur le site, et WordPress appelle aussi Gravatar partout dans wp-admin, ce qui ralentit vos rédacteurs s’ils travaillent depuis la Chine.',
      'maps-blocked':
        '{service} est bloqué en Chine continentale : la carte reste blanche. Publier une carte en Chine exige en plus un fournisseur agréé, donc un miroir plus rapide ne réglera rien.',
      'maps-split':
        'L’API de Mapbox est intermittente depuis la Chine et son adresse de télémétrie est bloquée : la carte s’affiche à moitié pendant qu’une requête reste en suspens. Publier une carte en Chine exige en plus un fournisseur agréé.',
      'payments-licensing':
        'La Chine continentale ne figure pas parmi les pays couverts par Stripe : aucun encaissement local par carte, que le script se charge ou non. Les acheteurs chinois attendent Alipay, WeChat Pay ou UnionPay.',
      'payments-partial':
        'Le site de PayPal est accessible, mais 9 adresses PayPal testées sur 27 étaient perturbées en août 2026, et ce sont justement les redirections du paiement. La transaction peut échouer à la dernière étape.',
      'search-hangs': 'Algolia répond depuis la Chine, puis ne termine jamais (aucun chargement complet sur 3). La recherche du site ne renvoie rien.',
      'backend-blocked':
        'Firebase repose sur la famille googleapis.com, bloquée en Chine. Connexions, bases de données et tout ce qu’il alimente tomberont en panne.',
      cloudfront:
        'Le réseau mondial de CloudFront ne dessert pas la Chine continentale. Depuis un centre de données chinois, ça passait ; sur une connexion résidentielle à Pékin, aucun des 3 chargements n’a abouti en août 2026.',
      'platform-slow': '{service} se charge en Chine, mais depuis l’étranger : 3,6 secondes en médiane lors de nos tests d’août 2026.',
      'platform-hangs':
        'Les serveurs statiques de Wix répondent, puis n’aboutissent pas depuis la Chine (aucun chargement complet sur 3). Les scripts du site viennent de là : la page risque de ne jamais finir de s’afficher.',
      'platform-https':
        'Squarespace et Webflow passent en HTTP simple depuis la Chine, mais le HTTPS reste intermittent, car le pare-feu filtre sur le nom de serveur de la connexion chiffrée. Or vos visiteurs arrivent en HTTPS.',
      'wpcom-partial':
        'Le CDN d’images et les statistiques de Jetpack tournent sur l’infrastructure de WordPress.com, où des centaines d’adresses ressortent bloquées depuis la Chine (508 sur 1 509 testées). Les images qui passent par là peuvent tomber au hasard.',
      translatepress:
        'TranslatePress appelle l’API de traduction de Google et son propre serveur pendant qu’il sert une page, dès qu’une chaîne n’est pas encore traduite. Sur un serveur en Chine continentale, ces appels bloquent la requête.',
    },
    fixes: {
      'fix-malicious':
        'Supprimez toutes les références maintenant et vérifiez que le site ne contient pas de redirections injectées. Les navigateurs récents se passent de polyfills ; si vous en avez besoin, hébergez votre propre version.',
      'fix-fonts': 'Hébergez les fichiers de police (WOFF2) sur votre serveur ou votre CDN, et retirez la feuille de style de Google.',
      'fix-fonts-elementor':
        'Dans Elementor, activez Settings > Performance > Load Google Fonts Locally, ou désactivez Google Fonts dans Settings > Advanced. L’éditeur continue d’appeler Google pour Roboto dans les deux cas.',
      'fix-self-host':
        'Servez le fichier depuis votre propre domaine, ou depuis un CDN chinois comme Alibaba Cloud ou Tencent Cloud (les nœuds en Chine continentale exigent un dépôt ICP).',
      'fix-self-host-fonts': 'Téléchargez les polices que votre licence autorise et servez-les depuis votre propre domaine.',
      'fix-captcha':
        'Choisissez un captcha adossé à une infrastructure en Chine : Alibaba Cloud Captcha, Tencent Captcha ou GeeTest. Un champ piège associé à une limite d’envois arrête aussi l’essentiel du spam.',
      'fix-forms': 'Intégrez le formulaire à votre site, ou passez par un outil chinois comme Jinshuju ou Tencent Survey.',
      'fix-chat': 'Testez-le depuis la Chine. En cas d’échec, les solutions locales s’appellent Meiqia, Zhichi ou NetEase Qiyu.',
      'fix-test-first': 'Testez-le depuis la Chine avant le lancement. S’il échoue, chargez-le seulement pour les visiteurs hors de Chine, ou retirez-le.',
      'fix-analytics':
        'Installez en parallèle un outil qui fonctionne en Chine : Baidu Tongji, ou bien Plausible ou Matomo auto-hébergés sur un serveur chinois. Chargez les balises internationales en asynchrone pour qu’elles ne bloquent jamais la page.',
      'fix-video': 'Publiez des copies sur Youku, Bilibili, Tencent Video ou Alibaba Cloud VOD, et affichez-les aux visiteurs chinois.',
      'fix-embeds': 'Remplacez le contenu intégré par une image qui renvoie vers l’original, ou utilisez les équivalents Weibo ou WeChat sur vos pages chinoises.',
      'fix-comments': 'Passez aux commentaires natifs, à un système auto-hébergé comme Waline, ou à Changyan.',
      'fix-avatars': 'Basculez les avatars vers un miroir chinois comme Cravatar (cravatar.cn), ou désactivez-les dans Réglages > Discussion.',
      'fix-maps': 'Passez par un fournisseur agréé en Chine : AMap, Baidu Maps ou Tencent Maps. Pour une simple adresse, une image de carte statique suffit.',
      'fix-payments': 'Ajoutez Alipay, WeChat Pay ou UnionPay via un prestataire de paiement agréé pour la Chine.',
      'fix-search': 'Prenez une recherche exploitable en Chine : Alibaba Cloud OpenSearch ou un Meilisearch auto-hébergé.',
      'fix-backend': 'Migrez le back-end vers un cloud chinois (Alibaba Cloud, Tencent Cloud), ou faites-le transiter par un serveur que vous contrôlez en Chine.',
      'fix-china-cdn': 'Servez les fichiers depuis un CDN doté de nœuds en Chine continentale (Alibaba Cloud, Tencent Cloud). Il faut pour cela un dépôt ICP.',
      'fix-replatform':
        'Ce type de plateforme ne peut pas être servi depuis la Chine. Une version chinoise passe en général par un hébergement que vous contrôlez, avec un dépôt ICP.',
      'fix-jetpack':
        'Désactivez l’accélérateur de site de Jetpack (CDN d’images et de fichiers) et ses statistiques, puis servez les images depuis votre serveur ou un CDN chinois.',
      'fix-emoji': 'Retirez le script d’emoji de WordPress (quelques lignes dans functions.php ou une petite extension). Les systèmes récents affichent les emoji tout seuls.',
      'fix-translatepress':
        'Traduisez toutes les chaînes avant le lancement pour qu’aucun appel ne parte en direct, ou passez à une extension sans appel externe, comme Polylang.',
      'fix-google-other': 'Repérez ce qui charge cette ressource, puis retirez-la ou remplacez-la pour les visiteurs chinois.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        'Pour un internaute chinois, votre site pointe vers un serveur en Chine continentale ({network}). C’est la configuration la plus rapide derrière le pare-feu.',
      'host-china-cdn':
        'Votre domaine pointe vers {provider}, un CDN chinois. Si sa zone de diffusion inclut la Chine continentale (ce qui suppose un dépôt ICP), les visiteurs chinois sont servis sur place. Vu de notre point de test, il répondait hors de Chine ({country}).',
      'host-platform-subdomain':
        'Le site tourne sur un sous-domaine de plateforme partagée. Ces sous-domaines, comme .vercel.app, sont souvent ralentis ou bloqués en Chine, et impossible de déposer un ICP pour un domaine que vous ne contrôlez pas.',
      'host-wix': 'Le site tourne sur Wix. Ses serveurs répondent depuis la Chine, mais aucun des 3 chargements de test n’a abouti en août 2026.',
      'host-sni':
        'Le site tourne sur {provider}. Le HTTPS vers ces plateformes est intermittent depuis la Chine, car le pare-feu filtre sur le nom de serveur de la connexion.',
      'host-cloudfront':
        'Le site passe par le réseau mondial d’AWS CloudFront, sans aucun nœud en Chine continentale. En août 2026, sur une connexion résidentielle à Pékin, aucun des 3 chargements n’a abouti.',
      'host-vercel':
        'Le site tourne sur Vercel, hors de Chine ({country}). Vercel reconnaît dans sa propre documentation ne pouvoir garantir ni la disponibilité ni la vitesse en Chine continentale.',
      'host-cloudflare':
        'Le site se trouve derrière Cloudflare. Avec les offres standard, les visiteurs chinois atterrissent sur un point de présence à l’étranger, en général Hong Kong, le Japon ou la côte ouest américaine. Le réseau en Chine relève de l’offre Enterprise et exige un dépôt ICP.',
      'host-shopify':
        'La boutique tourne sur Shopify, servie depuis l’étranger. Elle se charge, lentement : 3,6 secondes en médiane lors de tests d’août 2026 depuis un centre de données chinois.',
      'host-hk':
        'Le site est servi depuis Hong Kong ({network}). Pas d’ICP nécessaire et c’est tout près, mais le trafic franchit quand même la frontière avec la Chine continentale.',
      'host-abroad':
        'Le site est hébergé hors de Chine ({country}, {network}). Chaque requête d’un visiteur chinois traverse la frontière. Dans l’étude Chinafy 2026 portant sur 614 sites, le délai de premier octet était 4 à 4,5 fois plus long depuis Pékin que depuis la Virginie ou Londres.',
      'host-unknown': 'Impossible de déterminer d’où le site est servi.',
    },
    readiness: {
      icp: {
        title: 'Numéro ICP',
        pass: 'Trouvé : {value}, avec lien vers le registre du MIIT.',
        warn: 'Aucun numéro ICP trouvé. Sans lui, un serveur en Chine continentale ne servira pas votre site sur les ports 80 et 443.',
      },
      'icp-unlinked': {
        title: 'Numéro ICP',
        warn: 'Trouvé : {value}, mais sans lien vers beian.miit.gov.cn, que la réglementation exige.',
      },
      psb: {
        title: 'Enregistrement auprès de la police (PSB)',
        pass: 'Trouvé : {value}.',
        warn: 'Aucun numéro PSB trouvé. Un site hébergé en Chine dispose de 30 jours après sa mise en ligne pour s’enregistrer et l’afficher.',
        info: 'Inutile tant que le site n’est pas hébergé en Chine continentale.',
      },
      'tld-eligible': { title: 'Extension de domaine', pass: '{value} est accepté pour un dépôt ICP.' },
      'tld-ineligible': {
        title: 'Extension de domaine',
        fail: '{value} ne figure pas sur la liste des extensions approuvées par le MIIT : impossible d’y rattacher un dépôt ICP. Un site chinois demande un .cn, un .com ou une autre extension approuvée.',
      },
      'tld-org': {
        title: 'Extension de domaine',
        warn: 'Le .org n’accepte plus de nouveaux dépôts ICP depuis 2018. Les sites enregistrés avant cette date gardent leur numéro.',
      },
      'tld-co': {
        title: 'Extension de domaine',
        warn: 'Le .co a été approuvé en 2018 mais ne figure plus sur la liste actuelle du MIIT. Certaines provinces l’acceptent, d’autres non : vérifiez auprès de votre prestataire.',
      },
      chinese: {
        title: 'Version en chinois',
        pass: 'Trouvée ({value}).',
        warn: 'Aucune version en chinois simplifié déclarée (ni hreflang zh, ni langue de page). Les internautes chinois comme Baidu en cherchent une.',
      },
      'baidu-verify': {
        title: 'Validation Baidu',
        pass: 'Balise baidu-site-verification trouvée.',
        info: 'Pas de balise de validation Baidu Webmaster Tools. Elle sert à soumettre vos pages et à suivre leur indexation.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji est installé.',
        info: 'Aucun outil de mesure qui fonctionne en Chine. Baidu Tongji reste le choix habituel.',
      },
      commerce: {
        title: 'Boutique en ligne',
        info: 'Nous avons repéré {value}. Vendre en Chine suppose des moyens de paiement locaux et un examen à part des licences.',
      },
    },
    ui: {
      resultsTitle: 'Votre rapport',
      reportFor: 'Rapport pour',
      scoreLabel: 'Score de compatibilité Chine',
      findingsTitle: 'Ce que nous avons trouvé',
      whyLabel: 'Pourquoi c’est important',
      fixLabel: 'Solution',
      sourceLabel: 'Source',
      foundLabel: 'Où nous l’avons trouvé',
      referencedNote: 'Seulement cité dans votre JavaScript : il se charge si la fonction s’exécute.',
      hostingTitle: 'D’où votre site est servi',
      servedFrom: 'Pays',
      network: 'Réseau',
      provider: 'CDN ou plateforme',
      ip: 'Adresse IP',
      chinaView: 'D’après une requête DNS formulée comme depuis la Chine.',
      checklistTitle: 'Check-list lancement Chine',
      checklistIntro: 'Ce qu’exige un lancement en Chine, au-delà d’une page qui s’affiche.',
      hostsTitle: 'Tous les domaines externes de la page ({count})',
      hostsIntro: 'Chaque domaine tiers chargé par la page, avec notre verdict.',
      detailsTitle: 'Détails de l’analyse',
      pagesScanned: 'Pages analysées',
      filesScanned: '{scripts} scripts et {styles} feuilles de style lus',
      responseTime: 'Page d’accueil servie en {ms} ms',
      htmlSize: 'HTML : {kb} Ko',
      builtWith: 'Construit avec {platform}',
      copy: 'Copier le rapport',
      copied: 'Copié',
      again: 'Analyser un autre site',
      noFindings: 'Aucune dépendance externe qui échoue en Chine. Bravo.',
      unknown: 'inconnu',
      failed: 'échec',
      score: 'Score',
    },
  },
};

const es: ScannerCopy = {
  page: {
    title: 'China Site Scanner | ¿Funciona su sitio web detrás del Gran Cortafuegos?',
    description:
      'Compruebe gratis qué falla en su web al abrirla desde China continental: más de 60 servicios, cómo carga cada uno, su alojamiento y el ICP.',
    badge: 'Herramienta gratuita',
    h1: 'China Site Scanner',
    lead: 'Descubra qué falla cuando alguien abre su sitio web desde China continental. Revisamos más de 60 servicios, la forma en que carga cada uno y desde dónde se sirve su sitio.',
    namePh: 'Su nombre',
    companyPh: 'Su empresa',
    websitePh: 'Su sitio web (p. ej. ejemplo.com)',
    emailPh: 'Correo electrónico profesional',
    captchaLabel: 'Comprobación rápida: ¿cuánto es',
    captchaEnd: '?',
    captchaPh: 'Su respuesta',
    captchaRefresh: 'Otra pregunta',
    submit: 'Analizar mi sitio web',
    formNote: 'Leemos su página de inicio, su página de contacto y sus propios scripts y hojas de estilo. Tarda unos 20 segundos.',
    loadingTitle: 'Analizando su sitio web',
    loadingBody: 'Leemos sus páginas y contrastamos cada recurso externo con los datos de nuestras pruebas.',
    ctaTitle: '¿Quiere que lo arreglemos por usted?',
    ctaBody:
      'Somos un equipo con sede en Shanghái que lleva sitios web al otro lado del Gran Cortafuegos y los mantiene rápidos, sea cual sea la tecnología con la que estén hechos. Repasaremos el informe con usted.',
    ctaButton: 'Pedir una auditoría gratuita',
    ctaHref: '/es/contacto/',
    howTitle: 'Cómo funciona',
    howSub: 'Del formulario al informe en menos de un minuto.',
    steps: [
      { title: 'Sus datos', body: 'Nombre, empresa, sitio web y un correo profesional. El análisis arranca en cuanto envía el formulario.' },
      {
        title: 'Leemos sus páginas',
        body: 'El escáner recorre su página de inicio y su página de contacto, después sus propios scripts y hojas de estilo, y anota cada recurso externo y cómo se carga.',
      },
      { title: 'Un informe con fechas', body: 'Cada problema llega con su explicación, su solución y la prueba en la que se basa, con la fecha incluida.' },
    ],
    whatTitle: 'Lo que comprobamos',
    whatSub: 'Cada veredicto remite a una prueba con fecha. Cuando no tenemos una medición desde China, el informe lo dice.',
    categories: [
      { name: 'Fuentes y bibliotecas de código', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Formularios y captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Analítica y etiquetas', detail: 'Google Analytics, Tag Manager, píxel de Meta, Hotjar, Clarity, Amplitude' },
      { name: 'Vídeo y contenido incrustado', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Mapas y pagos', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Plataformas y back end', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Alojamiento y CDN', detail: 'Desde dónde se sirve el sitio, qué CDN tiene delante y adónde llega un visitante de China continental' },
      { name: 'Lista para lanzar en China', detail: 'Números ICP y PSB, extensión del dominio, versión en chino, verificación de Baidu' },
      { name: 'Seguridad', detail: 'polyfill.io, BootCDN y Staticfile, los dominios del ataque a la cadena de suministro de 2024' },
    ],
    methodTitle: 'Cómo llegamos a cada veredicto',
    method: [
      'Los veredictos salen de pruebas con fecha: nuestras propias sondas, desde un centro de datos de Alibaba Cloud y una conexión doméstica en Pekín, las sondas de 21YunBox desde un centro de datos en China y pruebas de bloqueo realizadas desde dentro del país. Cada hallazgo muestra su fuente y su fecha.',
      'El análisis se ejecuta desde fuera de China. Vemos qué cargan sus páginas y cómo lo hacen, y consultamos el DNS como lo haría un visitante de China continental para saber adónde lo envía. No podemos abrir la página en un móvil en Shanghái, así que conviene leer el informe como un mapa de riesgos y confirmar los más graves sobre el terreno.',
      'Los servicios que nunca hemos medido aparecen marcados como tales. Preferimos decirlo antes que adivinar.',
    ],
  },
  client: {
    progress: [
      'Comprobando su respuesta...',
      'Descargando la página de inicio...',
      'Buscando la página de contacto...',
      'Leyendo scripts y hojas de estilo...',
      'Averiguando desde dónde se sirve su sitio...',
      'Cruzando los datos con nuestras mediciones...',
      'Redactando el informe...',
    ],
    errors: {
      fields: 'Falta algún campo por completar.',
      captcha: 'Responda a la comprobación rápida, por favor.',
      invalid: 'Esa dirección no parece la de un sitio web. Pruebe con algo como ejemplo.com.',
      'blocked-target': 'Esa dirección no se puede analizar.',
      timeout: 'Su sitio tardó más de 12 segundos en responder y detuvimos el análisis. Vuelva a intentarlo o pruebe con otra página.',
      unreachable: 'No hemos podido conectar con ese sitio. Revise la dirección y vuelva a intentarlo.',
      http: 'Su sitio respondió con un error (HTTP {status}). Algunos cortafuegos bloquean las comprobaciones automáticas como la nuestra.',
      'too-many-redirects': 'El sitio entra en un bucle de redirecciones y no llegamos a ninguna página.',
      'not-html': 'Esa dirección lleva a un archivo. Indique la dirección de una página web.',
      token: 'La sesión ha caducado. Responda de nuevo a la comprobación rápida.',
      rate: 'Ha lanzado muchos análisis en poco tiempo. Espere unos minutos, por favor.',
      server: 'Algo ha fallado por nuestra parte. Vuelva a intentarlo.',
    },
    grades: {
      good: {
        title: 'En buena forma para China',
        summary: 'Nada en esta página debería quedarse bloqueado para los visitantes de China continental. Aun así, conviene revisar las notas de abajo antes del lanzamiento.',
      },
      work: {
        title: 'Funciona, con carencias',
        summary: 'La página debería cargar en China, pero algunas funciones fallarán o perderán datos de los visitantes de China continental.',
      },
      poor: {
        title: 'Se rompe en China',
        summary: 'Al menos un problema bloqueará o romperá esta página para los visitantes de China continental. Empiece por los puntos críticos.',
      },
    },
    severity: {
      critical: { tag: 'Crítico', title: 'Bloquea la página', description: 'Se carga de forma que toda la página espera a un servidor que falla en China.' },
      high: { tag: 'Alto', title: 'Rompe una función', description: 'Un formulario, un vídeo, un mapa u otra función que no funcionará para los visitantes de China.' },
      medium: { tag: 'Medio', title: 'Pierde datos o se degrada', description: 'Seguimiento, contenidos incrustados y extras que fallan sin avisar.' },
      low: { tag: 'Bajo', title: 'Ralentiza', description: 'Carga, pero despacio, o solo aparece mencionado en el código.' },
      info: { tag: 'Revisar', title: 'Conviene revisarlo', description: 'Servicios que todavía no hemos medido desde China.' },
    },
    verdicts: {
      blocked: 'Bloqueado',
      hangs: 'Responde y se queda colgado',
      network: 'Depende de la red',
      split: 'Carga, pero los datos no llegan',
      intermittent: 'Intermitente',
      partial: 'Bloqueado en parte',
      slow: 'Lento',
      licensing: 'Problema de licencias',
      unverified: 'Aún sin medir',
      malicious: 'Malicioso',
      domestic: 'Proveedor chino',
      reachable: 'Accesible',
      unknown: 'Fuera de nuestros datos',
      redirected: 'Redirigido',
    },
    modes: {
      'blocking-script': 'script que bloquea la carga',
      'async-script': 'script asíncrono',
      stylesheet: 'hoja de estilo que bloquea la carga',
      'deferred-style': 'hoja de estilo diferida',
      preload: 'precarga',
      hint: 'aviso de conexión',
      iframe: 'iframe',
      image: 'imagen',
      media: 'vídeo o audio',
      'inline-script': 'script incrustado',
      'js-file': 'mencionado en',
      'css-file': 'en la hoja de estilo',
      marker: 'widget detectado en',
      plugin: 'plugin de WordPress',
    },
    why: {
      malicious:
        '{service} pertenece a la red que estuvo detrás del ataque de 2024 contra la cadena de suministro de polyfill.io, que distribuyó software malicioso a través de estos dominios. Cualquier referencia es un incidente de seguridad, tenga o no visitantes en China.',
      'fonts-network':
        'Google Fonts depende de desde dónde se conecte el visitante. Desde un centro de datos en China responde; desde una conexión doméstica en Pekín, en agosto de 2026, no pasó ni una de 54 peticiones. Si la hoja de estilo está en el <head>, toda la página se queda esperando.',
      'fonts-mirror':
        'Es un intermediario de terceros para Google Fonts y no se sabe quién lo gestiona. Puede que hoy funcione, pero no hay forma de auditar lo que sirve, y estos espejos aparecen y desaparecen.',
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) está bloqueado. Nuestra sonda en Alibaba Cloud, en Zhangjiakou, no recibió ni un byte en 60 segundos. Si jQuery se carga desde aquí, la página se congela hasta que el navegador se rinde y, a continuación, falla cualquier script que dependa de jQuery.',
      'cdn-slow':
        '{service} llega a China continental, pero despacio y desde servidores situados fuera del país. En agosto de 2026, desde un centro de datos chino, el primer byte tardaba entre 0,5 y 1,1 segundos.',
      unverified:
        'Todavía no tenemos una medición de {service} desde China continental, y preferimos no aventurar nada. Pruébelo desde dentro de China antes del lanzamiento o sustitúyalo por un servicio que usted controle.',
      'recaptcha-net':
        'Cambiar reCAPTCHA a recaptcha.net es la solución que propone la propia Google para China, pero nuestra última confirmación es de febrero de 2026 y los desarrolladores siguen informando de fallos. Considérelo no demostrado.',
      'captcha-blocked':
        'Google reCAPTCHA está bloqueado en China continental. El formulario no se puede enviar y cada consulta que llega desde China se pierde sin mostrar ningún error.',
      'captcha-intermittent':
        'La web de hCaptcha carga, pero la API que necesita cada desafío (api2.hcaptcha.com) aparece como intermitente en las pruebas hechas desde China. Parte de los visitantes se quedará atascada ante un desafío que nunca termina.',
      'form-hangs':
        '{service} responde, pero nunca termina de cargar desde China: ninguna de las 3 cargas de prueba se completó en agosto de 2026. El formulario queda vacío y los envíos se pierden sin ningún aviso.',
      'analytics-blocked':
        '{service} está bloqueado en China continental. Las visitas desde China no llegan nunca a sus informes, así que el mercado parece más pequeño de lo que es.',
      'analytics-hangs':
        '{service} responde desde China, pero nunca termina (ninguna de 3 cargas en las pruebas de agosto de 2026). Los datos de los visitantes chinos se pierden y nada en la página lo delata.',
      'analytics-split':
        'El script de Amplitude carga desde China, pero la dirección a la que envía los eventos está bloqueada. Todo parece instalado y en marcha mientras no llega ni un dato de China.',
      'analytics-slow': '{service} responde desde China, pero cada llamada tarda alrededor de un segundo. Conviene sacarlo de la ruta crítica de carga.',
      'tag-manager':
        'Google Tag Manager solo carga a ratos desde China. Y aunque el contenedor cargue, las etiquetas que dispara envían los datos a servidores de Google bloqueados, de modo que el tráfico chino se pierde igualmente.',
      'google-blocked':
        '{service} funciona sobre la infraestructura de Google, bloqueada en China continental. Haga lo que haga este recurso, fallará para los visitantes de China.',
      'video-blocked': '{service} está bloqueado en China continental, reproductor incluido. Donde debería verse el vídeo, el visitante encuentra un recuadro vacío.',
      'video-slow': '{service} llega a China, pero emite desde servidores en el extranjero. Cuente con arranques lentos y pausas para cargar.',
      'embed-blocked':
        '{service} está bloqueado en China continental. El contenido incrustado aparece como un recuadro vacío y, si su script se carga en el <head>, puede frenar toda la página.',
      'comments-blocked':
        'Disqus está bloqueado en China continental (41 de 43 direcciones probadas, septiembre de 2026). La sección de comentarios no llega a aparecer.',
      'avatars-blocked':
        'Gravatar está bloqueado. Los avatares no se ven en la web y, además, WordPress llama a Gravatar en todo el panel de administración, lo que ralentiza a sus editores si trabajan desde China.',
      'maps-blocked':
        '{service} está bloqueado en China continental y el mapa se queda en blanco. Además, para publicar mapas en China hace falta un proveedor autorizado, así que un espejo más rápido no lo resuelve.',
      'maps-split':
        'La API de Mapbox funciona de forma intermitente desde China y su servicio de telemetría está bloqueado: el mapa se dibuja a medias y queda una petición colgada. Además, para publicar mapas en China hace falta un proveedor autorizado.',
      'payments-licensing':
        'China continental no figura entre los países en los que opera Stripe, así que no hay cobro local con tarjeta, cargue o no el script. Los compradores chinos esperan Alipay, WeChat Pay o UnionPay.',
      'payments-partial':
        'La web de PayPal es accesible, pero 9 de las 27 direcciones de PayPal probadas en agosto de 2026 daban problemas, y eran precisamente las redirecciones del pago. La compra puede fallar en el último paso.',
      'search-hangs': 'Algolia responde desde China, pero nunca termina (ninguna de 3 cargas de prueba). El buscador del sitio no devuelve nada.',
      'backend-blocked':
        'Firebase se apoya en la familia googleapis.com, bloqueada en China. El inicio de sesión, las bases de datos y todo lo que dependa de él dejará de funcionar.',
      cloudfront:
        'La red global de CloudFront no da servicio en China continental. Desde un centro de datos chino cargaba, pero en una conexión doméstica de Pekín ninguna de 3 cargas se completó en agosto de 2026.',
      'platform-slow': '{service} carga en China, pero desde servidores en el extranjero: 3,6 segundos de mediana en nuestras pruebas de agosto de 2026.',
      'platform-hangs':
        'Los servidores estáticos de Wix responden, pero no terminan de cargar desde China (ninguna de 3 cargas de prueba). Los scripts del propio sitio salen de ahí, así que puede que la página no termine nunca de mostrarse.',
      'platform-https':
        'Squarespace y Webflow cargan por HTTP sin cifrar desde China, pero el HTTPS es intermitente, porque el cortafuegos filtra por el nombre del servidor de la conexión cifrada. Y los visitantes reales llegan por HTTPS.',
      'wpcom-partial':
        'La CDN de imágenes y las estadísticas de Jetpack funcionan sobre la infraestructura de WordPress.com, donde cientos de direcciones aparecen bloqueadas desde China (508 de 1.509 probadas). Las imágenes que pasan por ahí pueden fallar al azar.',
      translatepress:
        'TranslatePress llama a la API de traducción de Google y a su propio servidor mientras sirve una página, cada vez que una cadena aún no está traducida. En un servidor en China continental, esas llamadas bloquean la petición.',
    },
    fixes: {
      'fix-malicious':
        'Elimine ya todas las referencias y revise si su sitio contiene redirecciones inyectadas. Los navegadores actuales no necesitan polyfills; si usted los necesita, aloje su propia versión.',
      'fix-fonts': 'Aloje los archivos de fuente (WOFF2) en su servidor o en su CDN y quite la hoja de estilo de Google.',
      'fix-fonts-elementor':
        'En Elementor, active Settings > Performance > Load Google Fonts Locally, o desactive Google Fonts en Settings > Advanced. En ambos casos, el editor sigue llamando a Google para cargar Roboto.',
      'fix-self-host':
        'Sirva el archivo desde su propio dominio o desde una CDN china como Alibaba Cloud o Tencent Cloud (los nodos en China continental exigen registro ICP).',
      'fix-self-host-fonts': 'Descargue las fuentes que permita su licencia y sírvalas desde su propio dominio.',
      'fix-captcha':
        'Use un captcha con infraestructura en China: Alibaba Cloud Captcha, Tencent Captcha o GeeTest. Un campo trampa combinado con un límite de envíos también frena la mayor parte del spam.',
      'fix-forms': 'Integre el formulario en su propio sitio o use una herramienta china, como Jinshuju o Tencent Survey.',
      'fix-chat': 'Pruébelo desde China. Si falla, las alternativas locales son Meiqia, Zhichi y NetEase Qiyu.',
      'fix-test-first': 'Pruébelo desde China antes del lanzamiento. Si falla, cárguelo solo para los visitantes de fuera de China o elimínelo.',
      'fix-analytics':
        'Añada una herramienta que funcione en China: Baidu Tongji, o bien Plausible o Matomo alojados en un servidor chino. Cargue las etiquetas globales de forma asíncrona para que nunca bloqueen la página.',
      'fix-video': 'Suba copias a Youku, Bilibili, Tencent Video o Alibaba Cloud VOD y muéstrelas a los visitantes de China.',
      'fix-embeds': 'Sustituya el contenido incrustado por una imagen con enlace al original o use los equivalentes de Weibo o WeChat en sus páginas para China.',
      'fix-comments': 'Use los comentarios nativos, un sistema alojado por usted como Waline, o Changyan.',
      'fix-avatars': 'Cambie los avatares a un espejo chino como Cravatar (cravatar.cn) o desactívelos en Ajustes > Comentarios.',
      'fix-maps': 'Use un proveedor autorizado en China: AMap, Baidu Maps o Tencent Maps. Para mostrar una sola dirección, basta con una imagen estática del mapa.',
      'fix-payments': 'Añada Alipay, WeChat Pay o UnionPay a través de un proveedor de pagos autorizado para China.',
      'fix-search': 'Use un buscador que pueda funcionar en China: Alibaba Cloud OpenSearch o Meilisearch alojado por usted.',
      'fix-backend': 'Traslade el back end a una nube china (Alibaba Cloud, Tencent Cloud) o hágalo pasar por un servidor que usted controle en China.',
      'fix-china-cdn': 'Sirva los archivos desde una CDN con nodos en China continental (Alibaba Cloud, Tencent Cloud). Para ello necesitará un registro ICP.',
      'fix-replatform':
        'Este tipo de plataforma no se puede servir desde China. Una versión para China suele exigir trasladar el sitio a un alojamiento que usted controle, con registro ICP.',
      'fix-jetpack':
        'Desactive el acelerador de sitio de Jetpack (CDN de imágenes y archivos) y sus estadísticas, y sirva las imágenes desde su servidor o desde una CDN china.',
      'fix-emoji': 'Quite el script de emojis de WordPress (unas líneas en functions.php o un pequeño plugin). Los sistemas actuales ya muestran los emojis por su cuenta.',
      'fix-translatepress':
        'Traduzca todas las cadenas antes del lanzamiento para que no se dispare ninguna llamada en directo, o cambie a un plugin sin llamadas externas, como Polylang.',
      'fix-google-other': 'Localice qué carga este recurso y elimínelo o sustitúyalo para los visitantes de China.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        'Para un visitante de China, su sitio apunta a un servidor en China continental ({network}). Es la configuración que más rápido carga al otro lado del cortafuegos.',
      'host-china-cdn':
        'Su dominio apunta a {provider}, una CDN china. Si su zona de servicio incluye China continental (algo que exige registro ICP), los visitantes chinos reciben el sitio desde allí mismo. Desde nuestro punto de prueba respondió fuera de China ({country}).',
      'host-platform-subdomain':
        'El sitio funciona en un subdominio de una plataforma compartida. Subdominios como .vercel.app sufren a menudo limitaciones o bloqueos en China, y no se puede registrar un ICP para un dominio que usted no controla.',
      'host-wix': 'El sitio funciona en Wix. Sus servidores responden desde China, pero ninguna de 3 cargas de prueba terminó en agosto de 2026.',
      'host-sni':
        'El sitio funciona en {provider}. El HTTPS hacia estas plataformas es intermitente desde China, porque el cortafuegos filtra por el nombre del servidor de la conexión.',
      'host-cloudfront':
        'El sitio se sirve a través de la red global de AWS CloudFront, que no tiene nodos en China continental. En agosto de 2026, en una conexión doméstica de Pekín, ninguna de 3 cargas se completó.',
      'host-vercel':
        'El sitio funciona en Vercel, fuera de China ({country}). La propia documentación de Vercel reconoce que no puede garantizar ni la disponibilidad ni la velocidad en China continental.',
      'host-cloudflare':
        'El sitio está detrás de Cloudflare. Con los planes estándar, los visitantes de China llegan a un nodo en el extranjero, normalmente en Hong Kong, Japón o la costa oeste de Estados Unidos. La red dentro de China es un producto Enterprise que exige registro ICP.',
      'host-shopify':
        'La tienda funciona en Shopify y se sirve desde fuera de China. Carga, pero despacio: 3,6 segundos de mediana en pruebas de agosto de 2026 desde un centro de datos chino.',
      'host-hk':
        'El sitio se sirve desde Hong Kong ({network}). No necesita ICP y está muy cerca, pero el tráfico sigue cruzando la frontera con China continental.',
      'host-abroad':
        'El sitio se sirve desde fuera de China ({country}, {network}). Cada petición de un visitante chino cruza la frontera. En el estudio de Chinafy de 2026 sobre 614 sitios, el tiempo hasta el primer byte era entre 4 y 4,5 veces mayor desde Pekín que desde Virginia o Londres.',
      'host-unknown': 'No hemos podido determinar desde dónde se sirve el sitio.',
    },
    readiness: {
      icp: {
        title: 'Número ICP',
        pass: 'Encontrado: {value}, con enlace al registro del MIIT.',
        warn: 'No hemos encontrado ningún número ICP. Sin él, un servidor en China continental no servirá su sitio por los puertos 80 y 443.',
      },
      'icp-unlinked': {
        title: 'Número ICP',
        warn: 'Encontrado: {value}, pero sin enlace a beian.miit.gov.cn, como exige la normativa.',
      },
      psb: {
        title: 'Registro ante la policía (PSB)',
        pass: 'Encontrado: {value}.',
        warn: 'No hemos encontrado número PSB. Un sitio alojado en China tiene 30 días desde su publicación para registrarse y mostrarlo.',
        info: 'No hace falta mientras el sitio no se aloje en China continental.',
      },
      'tld-eligible': { title: 'Extensión del dominio', pass: '{value} admite registro ICP.' },
      'tld-ineligible': {
        title: 'Extensión del dominio',
        fail: '{value} no figura en la lista de extensiones aprobadas por el MIIT, así que no admite registro ICP. Un sitio para China necesita un .cn, un .com u otra extensión aprobada.',
      },
      'tld-org': {
        title: 'Extensión del dominio',
        warn: '.org dejó de admitir nuevos registros ICP en 2018. Los sitios registrados antes conservan su número.',
      },
      'tld-co': {
        title: 'Extensión del dominio',
        warn: '.co se aprobó en 2018, pero ya no figura en la lista actual del MIIT. Algunas provincias lo aceptan y otras no: consúltelo con su gestor.',
      },
      chinese: {
        title: 'Versión en chino',
        pass: 'Encontrada ({value}).',
        warn: 'No hay una versión en chino simplificado declarada (ni hreflang zh ni idioma de página). Tanto los visitantes chinos como Baidu la buscan.',
      },
      'baidu-verify': {
        title: 'Verificación de Baidu',
        pass: 'Etiqueta baidu-site-verification encontrada.',
        info: 'No hay etiqueta de verificación de Baidu Webmaster Tools. La necesitará para enviar páginas y ver cómo le indexa Baidu.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji está instalado.',
        info: 'No hay ninguna herramienta de analítica que funcione en China. Lo habitual es Baidu Tongji.',
      },
      commerce: {
        title: 'Tienda online',
        info: 'Hemos detectado {value}. Vender en China exige medios de pago locales y una revisión aparte de las licencias.',
      },
    },
    ui: {
      resultsTitle: 'Su informe',
      reportFor: 'Informe de',
      scoreLabel: 'Compatibilidad con China',
      findingsTitle: 'Lo que hemos encontrado',
      whyLabel: 'Por qué importa',
      fixLabel: 'Solución',
      sourceLabel: 'Fuente',
      foundLabel: 'Dónde lo encontramos',
      referencedNote: 'Solo aparece mencionado en su JavaScript: se carga si esa función llega a ejecutarse.',
      hostingTitle: 'Desde dónde se sirve su sitio',
      servedFrom: 'País',
      network: 'Red',
      provider: 'CDN o plataforma',
      ip: 'Dirección IP',
      chinaView: 'Según una consulta DNS hecha como si llegara desde China.',
      checklistTitle: 'Lista para lanzar en China',
      checklistIntro: 'Lo que exige un lanzamiento en China, además de que la página cargue.',
      hostsTitle: 'Todos los dominios externos de la página ({count})',
      hostsIntro: 'Cada dominio de terceros que carga la página, con nuestro veredicto.',
      detailsTitle: 'Detalles del análisis',
      pagesScanned: 'Páginas analizadas',
      filesScanned: '{scripts} scripts y {styles} hojas de estilo leídos',
      responseTime: 'La página de inicio respondió en {ms} ms',
      htmlSize: 'HTML: {kb} KB',
      builtWith: 'Hecho con {platform}',
      copy: 'Copiar el informe',
      copied: 'Copiado',
      again: 'Analizar otro sitio',
      noFindings: 'Ninguna dependencia externa que falle en China. Enhorabuena.',
      unknown: 'desconocido',
      failed: 'fallo',
      score: 'Puntuación',
    },
  },
};

const de: ScannerCopy = {
  page: {
    title: 'China Site Scanner | Übersteht Ihre Website die Große Firewall?',
    description:
      'Kostenloser Scan: Was an Ihrer Website hakt, sobald sie aus Festlandchina aufgerufen wird. Über 60 Dienste, ihre Ladeweise, Hosting und ICP.',
    badge: 'Kostenloses Tool',
    h1: 'China Site Scanner',
    lead: 'Finden Sie heraus, was an Ihrer Website hakt, wenn jemand sie aus Festlandchina aufruft. Wir prüfen mehr als 60 Dienste, wie jeder davon lädt und von wo Ihre Website ausgeliefert wird.',
    namePh: 'Ihr Name',
    companyPh: 'Ihr Unternehmen',
    websitePh: 'Website-URL (z. B. beispiel.de)',
    emailPh: 'Geschäftliche E-Mail-Adresse',
    captchaLabel: 'Kurze Prüfung: Was ergibt',
    captchaEnd: '?',
    captchaPh: 'Ihre Antwort',
    captchaRefresh: 'Neue Frage',
    submit: 'Meine Website scannen',
    formNote: 'Wir lesen Ihre Startseite, Ihre Kontaktseite sowie Ihre eigenen Skripte und Stylesheets. Das dauert etwa 20 Sekunden.',
    loadingTitle: 'Ihre Website wird gescannt',
    loadingBody: 'Wir lesen Ihre Seiten und gleichen jede externe Ressource mit unseren Messdaten ab.',
    ctaTitle: 'Brauchen Sie Hilfe bei diesen Punkten?',
    ctaBody:
      'Wir sind ein Team in Shanghai, das Websites hinter die Große Firewall bringt und dort schnell hält, egal womit sie gebaut sind. Ihren Bericht gehen wir gemeinsam mit Ihnen durch.',
    ctaButton: 'Kostenlose Einschätzung anfordern',
    ctaHref: '/de/kontakt/',
    howTitle: 'So funktioniert es',
    howSub: 'Vom Formular zum Bericht in unter einer Minute',
    steps: [
      { title: 'Ihre Angaben eintragen', body: 'Name, Unternehmen, Website und eine geschäftliche E-Mail-Adresse. Der Scan startet, sobald Sie das Formular absenden.' },
      {
        title: 'Wir lesen Ihre Seiten',
        body: 'Der Scanner liest Ihre Startseite und Ihre Kontaktseite, dann Ihre eigenen Skripte und Stylesheets, und notiert jede externe Ressource und wie sie lädt.',
      },
      { title: 'Ein datierter Bericht', body: 'Zu jedem Problem gibt es die Begründung, die Lösung und den Test, auf dem es beruht, samt Datum.' },
    ],
    whatTitle: 'Was wir prüfen',
    whatSub: 'Jedes Urteil geht auf einen datierten Test zurück. Wo uns eine Messung aus China fehlt, sagt der Bericht das.',
    categories: [
      { name: 'Schriften und Code-Bibliotheken', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Formulare und Captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Analyse und Tags', detail: 'Google Analytics, Tag Manager, Meta-Pixel, Hotjar, Clarity, Amplitude' },
      { name: 'Videos und Einbettungen', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Karten und Zahlungen', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Plattformen und Backends', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Hosting und CDN', detail: 'Von wo die Website ausgeliefert wird, welches CDN davorsitzt und wohin ein Besucher aus Festlandchina geschickt wird' },
      { name: 'Checkliste für den China-Start', detail: 'ICP- und PSB-Nummer, Domainendung, chinesische Version, Baidu-Verifizierung' },
      { name: 'Sicherheit', detail: 'polyfill.io, BootCDN und Staticfile, die Domains hinter dem Lieferkettenangriff von 2024' },
    ],
    methodTitle: 'Wie wir zu einem Urteil kommen',
    method: [
      'Unsere Urteile stützen sich auf datierte Tests: eigene Messungen aus einem Rechenzentrum von Alibaba Cloud und über einen Privatanschluss in Peking, Messungen von 21YunBox aus einem chinesischen Rechenzentrum und Sperrtests, die innerhalb Chinas laufen. Jeder Befund nennt Quelle und Datum.',
      'Der Scan läuft außerhalb Chinas. Wir sehen, was Ihre Seiten laden und wie, und stellen eine DNS-Anfrage so, als käme sie aus Festlandchina, um zu sehen, wohin Besucher dort geschickt werden. Auf einem Smartphone in Shanghai können wir die Seite nicht öffnen. Lesen Sie den Bericht deshalb als Risikokarte und prüfen Sie die großen Punkte vor Ort.',
      'Dienste, die wir nie gemessen haben, sind als solche markiert. Das sagen wir lieber offen, als zu raten.',
    ],
  },
  client: {
    progress: [
      'Antwort wird geprüft …',
      'Startseite wird abgerufen …',
      'Kontaktseite wird gesucht …',
      'Skripte und Stylesheets werden gelesen …',
      'Standort der Website wird ermittelt …',
      'Abgleich mit unseren Messdaten …',
      'Bericht wird erstellt …',
    ],
    errors: {
      fields: 'Bitte füllen Sie alle Felder aus.',
      captcha: 'Bitte beantworten Sie die kurze Prüfung.',
      invalid: 'Das sieht nicht nach einer Web-Adresse aus. Versuchen Sie es etwa mit beispiel.de.',
      'blocked-target': 'Diese Adresse kann nicht gescannt werden.',
      timeout: 'Ihre Website hat länger als 12 Sekunden nicht geantwortet, deshalb haben wir abgebrochen. Versuchen Sie es noch einmal oder mit einer anderen Seite.',
      unreachable: 'Die Website war nicht erreichbar. Prüfen Sie die Adresse und versuchen Sie es erneut.',
      http: 'Ihre Website hat mit einem Fehler geantwortet (HTTP {status}). Manche Firewalls sperren automatische Prüfungen wie unsere.',
      'too-many-redirects': 'Die Website leitet in einer Schleife weiter, wir erreichen keine Seite.',
      'not-html': 'Diese Adresse führt zu einer Datei. Bitte geben Sie die Adresse einer Webseite ein.',
      token: 'Die Sitzung ist abgelaufen. Bitte beantworten Sie die kurze Prüfung erneut.',
      rate: 'Sie haben in kurzer Zeit viele Scans gestartet. Bitte warten Sie ein paar Minuten.',
      server: 'Bei uns ist etwas schiefgelaufen. Bitte versuchen Sie es noch einmal.',
    },
    grades: {
      good: {
        title: 'Gut aufgestellt für China',
        summary: 'Auf dieser Seite sollte für Besucher in Festlandchina nichts hängen bleiben. Die Hinweise unten lohnen vor dem Start trotzdem einen Blick.',
      },
      work: {
        title: 'Läuft, mit Lücken',
        summary: 'Die Seite sollte in China laden, doch einige Funktionen fallen für Besucher aus Festlandchina aus oder verlieren Daten.',
      },
      poor: {
        title: 'Bricht in China',
        summary: 'Mindestens ein Problem blockiert diese Seite oder legt sie für Besucher in Festlandchina lahm. Beginnen Sie mit den kritischen Punkten.',
      },
    },
    severity: {
      critical: { tag: 'Kritisch', title: 'Blockiert die Seite', description: 'So eingebunden, dass die ganze Seite auf einen Server wartet, der in China ausfällt.' },
      high: { tag: 'Hoch', title: 'Legt eine Funktion lahm', description: 'Ein Formular, ein Video, eine Karte oder eine andere Funktion, die für Besucher aus China nicht funktioniert.' },
      medium: { tag: 'Mittel', title: 'Verliert Daten oder läuft eingeschränkt', description: 'Tracking, Einbettungen und Extras, die still ausfallen.' },
      low: { tag: 'Niedrig', title: 'Bremst', description: 'Lädt, aber langsam, oder taucht nur in Ihrem Code auf.' },
      info: { tag: 'Prüfen', title: 'Prüfenswert', description: 'Dienste, die wir noch nicht aus China gemessen haben.' },
    },
    verdicts: {
      blocked: 'Gesperrt',
      hangs: 'Antwortet, hängt dann',
      network: 'Hängt vom Netz ab',
      split: 'Lädt, Daten gesperrt',
      intermittent: 'Unzuverlässig',
      partial: 'Teilweise gesperrt',
      slow: 'Langsam',
      licensing: 'Lizenzfrage',
      unverified: 'Noch nicht gemessen',
      malicious: 'Schädlich',
      domestic: 'Chinesischer Anbieter',
      reachable: 'Erreichbar',
      unknown: 'Nicht in unseren Daten',
      redirected: 'Umgeleitet',
    },
    modes: {
      'blocking-script': 'render-blockierendes Skript',
      'async-script': 'asynchrones Skript',
      stylesheet: 'render-blockierendes Stylesheet',
      'deferred-style': 'verzögertes Stylesheet',
      preload: 'Preload',
      hint: 'Verbindungshinweis',
      iframe: 'iframe',
      image: 'Bild',
      media: 'Video oder Audio',
      'inline-script': 'Inline-Skript',
      'js-file': 'erwähnt in',
      'css-file': 'im Stylesheet',
      marker: 'Widget gefunden auf',
      plugin: 'WordPress-Plugin',
    },
    why: {
      malicious:
        '{service} gehört zu dem Netzwerk hinter dem polyfill.io-Lieferkettenangriff von 2024, bei dem über diese Domains Schadsoftware verteilt wurde. Jede Einbindung ist ein Sicherheitsvorfall, mit oder ohne China-Bezug.',
      'fonts-network':
        'Ob Google Fonts lädt, hängt davon ab, wo der Besucher sitzt. Aus einem Rechenzentrum in China antwortet der Dienst, über einen Privatanschluss in Peking kam im August 2026 keine von 54 Anfragen durch. Steht das Stylesheet im <head>, wartet die ganze Seite darauf.',
      'fonts-mirror':
        'Ein Proxy eines Drittanbieters für Google Fonts, dessen Betreiber unbekannt ist. Vielleicht funktioniert er heute, prüfen lässt sich aber nicht, was er ausliefert, und solche Spiegel verschwinden so schnell, wie sie auftauchen.',
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) ist gesperrt. Unsere Messstation bei Alibaba Cloud in Zhangjiakou erhielt in 60 Sekunden kein einziges Byte. Kommt jQuery von dort, friert die Seite ein, bis der Browser aufgibt, danach scheitert jedes Skript, das jQuery braucht.',
      'cdn-slow':
        '{service} erreicht Festlandchina, aber langsam und von Servern außerhalb des Landes. Im August 2026 kam das erste Byte aus einem chinesischen Rechenzentrum nach 0,5 bis 1,1 Sekunden.',
      unverified:
        'Für {service} haben wir noch keine Messung aus Festlandchina, und raten wollen wir nicht. Testen Sie den Dienst vor dem Start vor Ort oder ersetzen Sie ihn durch einen, den Sie selbst kontrollieren.',
      'recaptcha-net':
        'reCAPTCHA über recaptcha.net zu laden, empfiehlt Google selbst als Ausweg für China. Unsere letzte Bestätigung stammt allerdings vom Februar 2026, und Entwickler melden weiterhin Ausfälle. Das gilt deshalb als unbewiesen.',
      'captcha-blocked':
        'Google reCAPTCHA ist in Festlandchina gesperrt. Das Formular lässt sich nicht absenden, und jede Anfrage aus China geht ohne Fehlermeldung verloren.',
      'captcha-intermittent':
        'Die Website von hCaptcha lädt, doch die API, die jede Abfrage braucht (api2.hcaptcha.com), ist in Tests aus China unzuverlässig. Ein Teil der Besucher bleibt an einer Abfrage hängen, die nie fertig wird.',
      'form-hangs':
        '{service} antwortet, lädt aus China aber nie fertig: Im August 2026 wurde keiner von 3 Testaufrufen abgeschlossen. Das Formular bleibt leer, Einsendungen verschwinden ohne Fehlermeldung.',
      'analytics-blocked':
        '{service} ist in Festlandchina gesperrt. Besuche aus China tauchen nie in Ihren Berichten auf, der Markt wirkt kleiner, als er ist.',
      'analytics-hangs':
        '{service} antwortet aus China, wird aber nie fertig (0 von 3 in Tests vom August 2026). Die Daten von Besuchern aus China gehen verloren, und nichts auf der Seite verrät es.',
      'analytics-split':
        'Das Skript von Amplitude lädt aus China, die Adresse, an die es Ereignisse schickt, ist aber gesperrt. Alles wirkt installiert und funktionsfähig, während keine Daten aus China ankommen.',
      'analytics-slow': '{service} funktioniert aus China, jeder Aufruf dauert aber rund eine Sekunde. Halten Sie den Dienst aus dem kritischen Ladepfad heraus.',
      'tag-manager':
        'Google Tag Manager lädt aus China nur zeitweise. Und selbst wenn der Container durchkommt, schicken die ausgelösten Tags ihre Daten an gesperrte Google-Server, der China-Traffic geht also so oder so verloren.',
      'google-blocked':
        '{service} läuft auf Googles Infrastruktur, die in Festlandchina gesperrt ist. Was auch immer diese Ressource tut, für Besucher aus China schlägt sie fehl.',
      'video-blocked': '{service} ist in Festlandchina gesperrt, samt Player. Besucher sehen einen leeren Rahmen, wo das Video sein sollte.',
      'video-slow': '{service} erreicht China, streamt aber von Servern im Ausland. Rechnen Sie mit langen Startzeiten und Pufferpausen.',
      'embed-blocked':
        '{service} ist in Festlandchina gesperrt. Die Einbettung erscheint als leerer Kasten, und lädt ihr Skript im <head>, kann es die ganze Seite aufhalten.',
      'comments-blocked':
        'Disqus ist in Festlandchina gesperrt (41 von 43 getesteten Adressen, September 2026). Der Kommentarbereich erscheint nie.',
      'avatars-blocked':
        'Gravatar ist gesperrt. Avatare fehlen auf der Website, und WordPress ruft Gravatar auch überall in wp-admin auf, was Ihre Redaktion bremst, wenn sie aus China arbeitet.',
      'maps-blocked':
        '{service} ist in Festlandchina gesperrt, die Karte bleibt leer. Wer in China Karten veröffentlicht, braucht zudem einen lizenzierten Anbieter, ein schnellerer Spiegel hilft also nicht.',
      'maps-split':
        'Die Mapbox-API ist aus China unzuverlässig erreichbar, die Telemetrie-Adresse gesperrt: Die Karte baut sich halb auf, während im Hintergrund eine Anfrage hängt. Für Kartendaten in China braucht es zudem einen lizenzierten Anbieter.',
      'payments-licensing':
        'Festlandchina gehört nicht zu den Ländern, in denen Stripe arbeitet: Kartenzahlungen lassen sich dort nicht lokal abwickeln, ob das Skript lädt oder nicht. Chinesische Käufer erwarten Alipay, WeChat Pay oder UnionPay.',
      'payments-partial':
        'Die PayPal-Website ist erreichbar, doch 9 von 27 getesteten PayPal-Adressen waren im August 2026 gestört, ausgerechnet die Weiterleitungen im Bezahlvorgang. Die Zahlung kann im letzten Schritt scheitern.',
      'search-hangs': 'Algolia antwortet aus China, wird aber nie fertig (0 von 3 Testaufrufen). Die Suche auf der Website liefert nichts.',
      'backend-blocked':
        'Firebase baut auf der Domainfamilie googleapis.com auf, die gesperrt ist. Anmeldung, Datenbanken und alles, was daran hängt, fallen aus.',
      cloudfront:
        'Das globale CloudFront-Netz bedient Festlandchina nicht. Aus einem chinesischen Rechenzentrum lud es noch, über einen Privatanschluss in Peking wurde im August 2026 keiner von 3 Aufrufen fertig.',
      'platform-slow': '{service} lädt in China, aber von Servern im Ausland: im Median 3,6 Sekunden in unseren Tests vom August 2026.',
      'platform-hangs':
        'Die statischen Server von Wix antworten, laden aus China aber nicht fertig (0 von 3 Testaufrufen). Die Skripte der Website kommen von dort, die Seite wird also womöglich nie vollständig angezeigt.',
      'platform-https':
        'Squarespace und Webflow laden aus China über unverschlüsseltes HTTP, HTTPS ist dagegen unzuverlässig, weil die Firewall nach dem Servernamen der verschlüsselten Verbindung filtert. Echte Besucher kommen über HTTPS.',
      'wpcom-partial':
        'Das Bild-CDN und die Statistiken von Jetpack laufen auf der Infrastruktur von WordPress.com, wo Hunderte Adressen aus China gesperrt sind (508 von 1.509 getesteten). Bilder, die darüber laufen, können zufällig ausfallen.',
      translatepress:
        'TranslatePress ruft beim Ausliefern einer Seite Googles Übersetzungs-API und den eigenen Server auf, sobald ein Text noch nicht übersetzt ist. Auf einem Server in Festlandchina blockieren diese Aufrufe die Anfrage.',
    },
    fixes: {
      'fix-malicious':
        'Entfernen Sie sofort jede Einbindung und prüfen Sie Ihre Website auf eingeschleuste Weiterleitungen. Moderne Browser brauchen keine Polyfills; falls Sie welche benötigen, hosten Sie eine eigene Version.',
      'fix-fonts': 'Hosten Sie die Schriftdateien (WOFF2) auf Ihrem eigenen Server oder CDN und entfernen Sie das Google-Stylesheet.',
      'fix-fonts-elementor':
        'Stellen Sie in Elementor unter Settings > Performance die Option Load Google Fonts Locally auf Enable, oder schalten Sie Google Fonts unter Settings > Advanced ab. Der Editor ruft Roboto in beiden Fällen weiter bei Google ab.',
      'fix-self-host':
        'Liefern Sie die Datei von Ihrer eigenen Domain aus oder über ein chinesisches CDN wie Alibaba Cloud oder Tencent Cloud (Knoten in Festlandchina setzen eine ICP-Registrierung voraus).',
      'fix-self-host-fonts': 'Laden Sie die Schriften herunter, soweit Ihre Lizenz es erlaubt, und liefern Sie sie von Ihrer eigenen Domain aus.',
      'fix-captcha':
        'Setzen Sie ein Captcha mit Infrastruktur in China ein: Alibaba Cloud Captcha, Tencent Captcha oder GeeTest. Ein Honeypot-Feld mit Ratenbegrenzung hält ebenfalls den Großteil des Spams ab.',
      'fix-forms': 'Bauen Sie das Formular direkt in Ihre Website ein oder nutzen Sie ein chinesisches Tool wie Jinshuju oder Tencent Survey.',
      'fix-chat': 'Testen Sie den Dienst aus China. Fällt er aus, gibt es vor Ort Meiqia, Zhichi oder NetEase Qiyu.',
      'fix-test-first': 'Testen Sie den Dienst vor dem Start aus China. Fällt er aus, laden Sie ihn nur für Besucher außerhalb Chinas oder verzichten Sie darauf.',
      'fix-analytics':
        'Ergänzen Sie ein Tool, das in China funktioniert: Baidu Tongji oder ein selbst gehostetes Plausible oder Matomo auf einem Server in China. Laden Sie globale Tags asynchron, damit sie die Seite nie aufhalten.',
      'fix-video': 'Stellen Sie Kopien auf Youku, Bilibili, Tencent Video oder Alibaba Cloud VOD ein und zeigen Sie diese Besuchern aus China.',
      'fix-embeds': 'Ersetzen Sie die Einbettung durch ein verlinktes Bild oder nutzen Sie auf Ihren China-Seiten die Pendants von Weibo oder WeChat.',
      'fix-comments': 'Nutzen Sie die eingebauten Kommentare, ein selbst gehostetes System wie Waline oder Changyan.',
      'fix-avatars': 'Stellen Sie Avatare auf einen chinesischen Spiegel wie Cravatar (cravatar.cn) um oder schalten Sie sie unter Einstellungen > Diskussion ab.',
      'fix-maps': 'Nutzen Sie einen in China lizenzierten Anbieter: AMap, Baidu Maps oder Tencent Maps. Für eine einzelne Adresse genügt ein statisches Kartenbild.',
      'fix-payments': 'Binden Sie Alipay, WeChat Pay oder UnionPay über einen für China lizenzierten Zahlungsdienstleister ein.',
      'fix-search': 'Nutzen Sie eine Suche, die sich in China betreiben lässt: Alibaba Cloud OpenSearch oder ein selbst gehostetes Meilisearch.',
      'fix-backend': 'Ziehen Sie das Backend in eine chinesische Cloud um (Alibaba Cloud, Tencent Cloud) oder leiten Sie es über einen Server, den Sie in China kontrollieren.',
      'fix-china-cdn': 'Liefern Sie die Dateien über ein CDN mit Knoten in Festlandchina aus (Alibaba Cloud, Tencent Cloud). Dafür ist eine ICP-Registrierung nötig.',
      'fix-replatform':
        'Plattformen dieser Art lassen sich nicht aus China heraus ausliefern. Eine China-Version bedeutet meist den Umzug auf ein Hosting, das Sie selbst kontrollieren, mit ICP-Registrierung.',
      'fix-jetpack':
        'Schalten Sie den Site Accelerator von Jetpack (Bild- und Datei-CDN) und die Statistiken ab und liefern Sie Bilder von Ihrem eigenen Server oder einem chinesischen CDN aus.',
      'fix-emoji': 'Entfernen Sie das Emoji-Skript von WordPress (ein paar Zeilen in der functions.php oder ein kleines Plugin). Aktuelle Systeme stellen Emojis selbst dar.',
      'fix-translatepress':
        'Übersetzen Sie vor dem Start alle Texte, damit keine Live-Aufrufe mehr anfallen, oder wechseln Sie zu einem Plugin ohne externe Aufrufe wie Polylang.',
      'fix-google-other': 'Finden Sie heraus, was diese Ressource lädt, und entfernen oder ersetzen Sie sie für Besucher aus China.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        'Für Besucher aus China zeigt Ihre Website auf einen Server in Festlandchina ({network}). So lädt eine Website hinter der Firewall am schnellsten.',
      'host-china-cdn':
        'Ihre Domain zeigt auf {provider}, ein chinesisches CDN. Schließt dessen Liefergebiet Festlandchina ein (was eine ICP-Registrierung voraussetzt), werden Besucher aus China vor Ort bedient. Von unserem Messpunkt aus antwortete es außerhalb Chinas ({country}).',
      'host-platform-subdomain':
        'Die Website läuft auf der Subdomain einer gemeinsam genutzten Plattform. Subdomains wie .vercel.app werden in China oft gedrosselt oder gesperrt, und für eine Domain, die Ihnen nicht gehört, gibt es keine ICP-Registrierung.',
      'host-wix': 'Die Website läuft auf Wix. Die Server antworten aus China, doch im August 2026 wurde keiner von 3 Testaufrufen fertig.',
      'host-sni':
        'Die Website läuft auf {provider}. HTTPS zu diesen Plattformen ist aus China unzuverlässig, weil die Firewall nach dem Servernamen der Verbindung filtert.',
      'host-cloudfront':
        'Die Website wird über das globale Netz von AWS CloudFront ausgeliefert, das keine Knoten in Festlandchina hat. Im August 2026 wurde über einen Privatanschluss in Peking keiner von 3 Aufrufen fertig.',
      'host-vercel':
        'Die Website läuft auf Vercel, außerhalb Chinas ({country}). Vercel schreibt in der eigenen Dokumentation, dass es Verfügbarkeit und Geschwindigkeit in Festlandchina nicht garantieren kann.',
      'host-cloudflare':
        'Die Website liegt hinter Cloudflare. In den Standardtarifen landen Besucher aus China an einem Knoten im Ausland, meist in Hongkong, Japan oder an der US-Westküste. Das Netz innerhalb Chinas ist ein Enterprise-Produkt und setzt eine ICP-Registrierung voraus.',
      'host-shopify':
        'Der Shop läuft auf Shopify und wird außerhalb Chinas ausgeliefert. Er lädt, aber langsam: im Median 3,6 Sekunden in Tests vom August 2026 aus einem chinesischen Rechenzentrum.',
      'host-hk':
        'Die Website wird aus Hongkong ausgeliefert ({network}). Eine ICP-Registrierung ist nicht nötig und der Weg ist kurz, der Datenverkehr überquert aber trotzdem die Grenze zu Festlandchina.',
      'host-abroad':
        'Die Website wird außerhalb Chinas ausgeliefert ({country}, {network}). Jede Anfrage eines Besuchers aus China überquert die Grenze. In Chinafys Benchmark 2026 mit 614 Websites lag die Zeit bis zum ersten Byte in Peking vier- bis viereinhalbmal höher als in Virginia oder London.',
      'host-unknown': 'Wir konnten nicht ermitteln, von wo die Website ausgeliefert wird.',
    },
    readiness: {
      icp: {
        title: 'ICP-Nummer',
        pass: 'Gefunden: {value}, mit Link zum MIIT-Register.',
        warn: 'Keine ICP-Nummer gefunden. Ohne sie liefert ein Server in Festlandchina Ihre Website nicht über die Ports 80 und 443 aus.',
      },
      'icp-unlinked': {
        title: 'ICP-Nummer',
        warn: 'Gefunden: {value}, aber ohne Link zu beian.miit.gov.cn, wie ihn die Vorschriften verlangen.',
      },
      psb: {
        title: 'Registrierung bei der Polizei (PSB)',
        pass: 'Gefunden: {value}.',
        warn: 'Keine PSB-Nummer gefunden. Eine in China gehostete Website hat nach dem Start 30 Tage Zeit, sich zu registrieren und die Nummer anzuzeigen.',
        info: 'Erst nötig, wenn die Website in Festlandchina gehostet wird.',
      },
      'tld-eligible': { title: 'Domainendung', pass: '{value} ist für eine ICP-Registrierung zugelassen.' },
      'tld-ineligible': {
        title: 'Domainendung',
        fail: '{value} steht nicht auf der MIIT-Liste zugelassener Domainendungen, eine ICP-Registrierung ist damit nicht möglich. Eine China-Website braucht .cn, .com oder eine andere zugelassene Endung.',
      },
      'tld-org': {
        title: 'Domainendung',
        warn: 'Für .org werden seit 2018 keine neuen ICP-Registrierungen mehr angenommen. Ältere Registrierungen behalten ihre Nummer.',
      },
      'tld-co': {
        title: 'Domainendung',
        warn: '.co wurde 2018 zugelassen, fehlt aber auf der aktuellen MIIT-Liste. Manche Provinzen akzeptieren die Endung, andere nicht. Fragen Sie Ihren Dienstleister.',
      },
      chinese: {
        title: 'Chinesische Version',
        pass: 'Gefunden ({value}).',
        warn: 'Keine Version in vereinfachtem Chinesisch angegeben (weder hreflang zh noch Seitensprache). Besucher aus China und Baidu suchen danach.',
      },
      'baidu-verify': {
        title: 'Baidu-Verifizierung',
        pass: 'Tag baidu-site-verification gefunden.',
        info: 'Kein Verifizierungs-Tag für die Baidu Webmaster Tools. Sie brauchen es, um Seiten einzureichen und die Indexierung zu verfolgen.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji ist installiert.',
        info: 'Kein Analysetool, das in China funktioniert. Üblich ist Baidu Tongji.',
      },
      commerce: {
        title: 'Onlineshop',
        info: 'Wir haben {value} gefunden. Wer in China verkauft, braucht lokale Zahlungsarten und eine gesonderte Prüfung der Lizenzen.',
      },
    },
    ui: {
      resultsTitle: 'Ihr Scan-Bericht',
      reportFor: 'Bericht für',
      scoreLabel: 'China-Tauglichkeit',
      findingsTitle: 'Was wir gefunden haben',
      whyLabel: 'Warum das wichtig ist',
      fixLabel: 'Lösung',
      sourceLabel: 'Quelle',
      foundLabel: 'Wo wir es gefunden haben',
      referencedNote: 'Nur in Ihrem JavaScript erwähnt. Es lädt, sobald die Funktion ausgeführt wird.',
      hostingTitle: 'Von wo Ihre Website ausgeliefert wird',
      servedFrom: 'Land',
      network: 'Netz',
      provider: 'CDN oder Plattform',
      ip: 'IP-Adresse',
      chinaView: 'Nach einer DNS-Anfrage, wie sie aus Festlandchina käme.',
      checklistTitle: 'Checkliste für den China-Start',
      checklistIntro: 'Was ein Start in China verlangt, über eine ladende Seite hinaus.',
      hostsTitle: 'Alle externen Hosts der Seite ({count})',
      hostsIntro: 'Jeder Drittanbieter-Host, den die Seite lädt, mit unserem Urteil.',
      detailsTitle: 'Details zum Scan',
      pagesScanned: 'Gescannte Seiten',
      filesScanned: '{scripts} Skripte und {styles} Stylesheets gelesen',
      responseTime: 'Startseite antwortete in {ms} ms',
      htmlSize: 'HTML: {kb} KB',
      builtWith: 'Gebaut mit {platform}',
      copy: 'Bericht kopieren',
      copied: 'Kopiert',
      again: 'Andere Website scannen',
      noFindings: 'Keine externen Abhängigkeiten, die in China ausfallen. Sehr gut.',
      unknown: 'unbekannt',
      failed: 'fehlgeschlagen',
      score: 'Punktzahl',
    },
  },
};

export const scannerCopy: Record<Locale, ScannerCopy> = { en, fr, es, de };
