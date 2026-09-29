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
      colon: ': ',
    },
  },
};

const fr: ScannerCopy = {
  page: {
    title: 'China Site Scanner | Votre site résiste-t-il au Grand Pare-feu ?',
    description:
      'Analyse gratuite de votre site tel qu’il s’affiche en Chine continentale : plus de 60 services tiers passés au crible, hébergement et conformité ICP.',
    badge: 'Outil gratuit',
    h1: 'China Site Scanner',
    lead: 'Ouvert depuis la Chine continentale, votre site perd-il une police, un formulaire, une vidéo ? Le scanner examine plus de 60 services tiers, leur mode de chargement et l’hébergement de votre site.',
    namePh: 'Nom et prénom',
    companyPh: 'Société',
    websitePh: 'Adresse du site (par ex. exemple.com)',
    emailPh: 'E-mail professionnel',
    captchaLabel: 'Question de contrôle : combien font',
    captchaEnd: ' ?',
    captchaPh: 'Réponse',
    captchaRefresh: 'Changer de question',
    submit: 'Lancer l’analyse',
    formNote: 'L’analyse couvre la page d’accueil, la page de contact, vos scripts et vos feuilles de style. Comptez une vingtaine de secondes.',
    loadingTitle: 'Analyse en cours',
    loadingBody: 'Nous lisons vos pages et confrontons chaque ressource externe à nos relevés.',
    ctaTitle: 'Vous souhaitez corriger ces points ?',
    ctaBody:
      'Depuis Shanghai, notre équipe installe des sites derrière le Grand Pare-feu et veille à ce qu’ils y restent rapides, quelle que soit la technologie employée. Nous reprenons votre rapport avec vous, point par point.',
    ctaButton: 'Demander un audit gratuit',
    ctaHref: '/fr/contact/',
    howTitle: 'Déroulement de l’analyse',
    howSub: 'Moins d’une minute entre le formulaire et le rapport',
    steps: [
      { title: 'Vos coordonnées', body: 'Nom, société, adresse du site et e-mail professionnel : l’analyse démarre dès l’envoi du formulaire.' },
      {
        title: 'L’analyse de vos pages',
        body: 'Le scanner parcourt la page d’accueil et la page de contact, puis vos propres scripts et feuilles de style. Il consigne chaque ressource externe et son mode de chargement.',
      },
      { title: 'Un rapport daté', body: 'Chaque anomalie est assortie d’une explication, d’une correction et du test daté sur lequel repose le verdict.' },
    ],
    whatTitle: 'Le périmètre de l’analyse',
    whatSub: 'Chaque verdict renvoie à un test daté. Lorsqu’aucune mesure n’a été réalisée depuis la Chine, le rapport le signale.',
    categories: [
      { name: 'Polices et bibliothèques', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Formulaires et captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Statistiques et balises de suivi', detail: 'Google Analytics, Tag Manager, pixel Meta, Hotjar, Clarity, Amplitude' },
      { name: 'Vidéos et contenus embarqués', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Cartographie et paiement', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Plateformes et services back-end', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Hébergement et CDN', detail: 'Pays d’hébergement, CDN placé en frontal, serveur vers lequel est dirigé un internaute chinois' },
      { name: 'Préparer un lancement en Chine', detail: 'Numéros ICP et PSB, extension de domaine, version chinoise, validation Baidu' },
      { name: 'Sécurité', detail: 'polyfill.io, BootCDN et Staticfile, domaines liés à l’attaque de 2024 contre la chaîne d’approvisionnement logicielle' },
    ],
    methodTitle: 'D’où viennent nos verdicts',
    method: [
      'Chaque verdict s’appuie sur un test daté : nos propres sondes, installées dans un centre de données Alibaba Cloud et sur une connexion résidentielle à Pékin, celles de 21YunBox depuis un centre de données chinois, ainsi que des tests de blocage menés depuis la Chine. Source et date figurent en regard de chaque constat.',
      'L’analyse est lancée depuis l’étranger. Elle révèle ce que chargent vos pages et de quelle manière ; une requête DNS simulant un internaute chinois indique en outre vers quel serveur celui-ci est aiguillé. Impossible, en revanche, d’ouvrir la page sur un téléphone à Shanghai : ce rapport dresse donc une carte des risques, dont les plus sérieux appellent une vérification sur place.',
      'Un service que nous n’avons jamais mesuré est signalé comme tel. Mieux vaut l’admettre que risquer une conjecture.',
    ],
  },
  client: {
    progress: [
      'Vérification de la réponse…',
      'Lecture de la page d’accueil…',
      'Recherche de la page de contact…',
      'Lecture des scripts et des feuilles de style…',
      'Localisation de l’hébergement…',
      'Comparaison avec nos relevés…',
      'Rédaction du rapport…',
    ],
    errors: {
      fields: 'Tous les champs sont obligatoires.',
      captcha: 'Merci de répondre à la question de contrôle.',
      invalid: 'Adresse non reconnue. Essayez sous la forme exemple.com.',
      'blocked-target': 'Cette adresse ne peut pas être analysée.',
      timeout: 'Faute de réponse de votre site au bout de 12 secondes, l’analyse a été interrompue. Réessayez, ou indiquez une autre page.',
      unreachable: 'Le site est injoignable. Vérifiez l’adresse, puis réessayez.',
      http: 'Votre site a renvoyé une erreur (HTTP {status}). Certains pare-feu bloquent les analyses automatisées comme la nôtre.',
      'too-many-redirects': 'Le site redirige en boucle : aucune page n’a pu être atteinte.',
      'not-html': 'Cette adresse pointe vers un fichier. Indiquez celle d’une page web.',
      token: 'La session a expiré. Merci de répondre à nouveau à la question de contrôle.',
      rate: 'Trop d’analyses en peu de temps. Merci de patienter quelques minutes.',
      server: 'Une erreur est survenue de notre côté. Merci de réessayer.',
    },
    grades: {
      good: {
        title: 'Prêt pour la Chine, à quelques détails près',
        summary: 'Aucun élément de cette page ne devrait en bloquer l’affichage en Chine continentale. Les remarques ci-dessous méritent toutefois un examen avant le lancement.',
      },
      work: {
        title: 'Fonctionnel, avec des lacunes',
        summary: 'La page devrait s’afficher en Chine, mais plusieurs fonctions échoueront ou perdront des données chez les internautes chinois.',
      },
      poor: {
        title: 'Le site bute sur le Grand Pare-feu',
        summary: 'Au moins un problème bloque ou dégrade cette page pour les internautes de Chine continentale. Commencez par les points critiques.',
      },
    },
    severity: {
      critical: { tag: 'Critique', title: 'Bloque la page', description: 'Ressource chargée de façon bloquante depuis un serveur défaillant en Chine : toute la page l’attend.' },
      high: { tag: 'Élevé', title: 'Neutralise une fonction', description: 'Formulaire, vidéo, carte : une fonction inutilisable pour les internautes chinois.' },
      medium: { tag: 'Moyen', title: 'Perte de données ou fonction dégradée', description: 'Suivi, contenus embarqués et modules annexes qui échouent en silence.' },
      low: { tag: 'Faible', title: 'Ralentit la page', description: 'Chargement lent, ou simple mention dans votre code.' },
      info: { tag: 'À vérifier', title: 'Points à vérifier', description: 'Services que nous n’avons pas encore mesurés depuis la Chine.' },
    },
    verdicts: {
      blocked: 'Bloqué',
      hangs: 'Répond puis se fige',
      network: 'Variable selon le réseau',
      split: 'Script chargé, données bloquées',
      intermittent: 'Intermittent',
      partial: 'Partiellement bloqué',
      slow: 'Lent',
      licensing: 'Question de licence',
      unverified: 'Non mesuré',
      malicious: 'Malveillant',
      domestic: 'Prestataire chinois',
      reachable: 'Accessible',
      unknown: 'Hors de nos relevés',
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
      'inline-script': 'script en ligne',
      'js-file': 'cité dans',
      'css-file': 'dans la feuille de style',
      marker: 'widget repéré sur',
      plugin: 'extension WordPress',
    },
    why: {
      malicious:
        '{service} fait partie du réseau à l’origine de l’attaque de 2024 contre polyfill.io, qui a servi à diffuser des logiciels malveillants via ces domaines. Toute référence constitue un incident de sécurité, que vous visiez la Chine ou non.',
      'fonts-network':
        'Google Fonts se comporte différemment selon la connexion de l’internaute. Le service répond depuis les centres de données chinois ; depuis un accès résidentiel à Pékin, en août 2026, aucune des 54 requêtes n’a abouti. Placée dans le <head>, sa feuille de style suspend l’affichage de toute la page.',
      'fonts-mirror':
        'Ce relais de Google Fonts est exploité par un tiers non identifié. Il fonctionne peut-être aujourd’hui, mais rien ne permet de contrôler ce qu’il distribue, et ce type de miroir disparaît souvent sans préavis.',
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) est bloqué. Depuis Alibaba Cloud, à Zhangjiakou, notre sonde n’a reçu aucun octet en 60 secondes. Chargé depuis ce domaine, jQuery fige la page jusqu’à l’abandon du navigateur ; tous les scripts qui en dépendent échouent ensuite.',
      'cdn-slow':
        '{service} fonctionne en Chine continentale, mais lentement, ses serveurs étant situés à l’étranger. En août 2026, depuis un centre de données chinois, le premier octet arrivait en 0,5 à 1,1 seconde.',
      unverified:
        'Nous ne disposons encore d’aucune mesure de {service} depuis la Chine continentale et préférons ne rien avancer. Testez-le sur place avant le lancement, ou remplacez-le par un service que vous maîtrisez.',
      'recaptcha-net':
        'Google recommande lui-même de passer par recaptcha.net pour la Chine. Notre dernière confirmation date toutefois de février 2026 et des développeurs signalent encore des échecs : la solution reste à prouver.',
      'captcha-blocked':
        'Google reCAPTCHA est bloqué en Chine continentale. Le formulaire ne peut pas être envoyé, et chaque demande venue de Chine se perd sans le moindre message d’erreur.',
      'captcha-intermittent':
        'Le site d’hCaptcha répond, mais l’API sollicitée à chaque vérification (api2.hcaptcha.com) se révèle intermittente lors des tests menés depuis la Chine. Une partie des internautes restera bloquée devant une vérification qui n’aboutit jamais.',
      'form-hangs':
        '{service} répond, puis ne finit jamais de se charger depuis la Chine : aucun des 3 chargements de test n’a abouti en août 2026. Le formulaire reste vide et les envois disparaissent sans message d’erreur.',
      'analytics-blocked':
        '{service} est bloqué en Chine continentale. Les visites chinoises n’apparaissent jamais dans vos rapports, et le marché semble plus étroit qu’il ne l’est.',
      'analytics-hangs':
        '{service} répond depuis la Chine sans jamais terminer (0 sur 3 lors des tests d’août 2026). Les données des internautes chinois sont perdues, sans que rien ne le signale.',
      'analytics-split':
        'Le script d’Amplitude se charge depuis la Chine, mais l’adresse qui collecte les événements est bloquée. L’outil paraît installé et opérationnel, alors qu’aucune donnée chinoise ne remonte.',
      'analytics-slow': '{service} fonctionne depuis la Chine, mais chaque appel prend environ une seconde : mieux vaut l’écarter du chargement critique.',
      'tag-manager':
        'Google Tag Manager ne se charge que par intermittence depuis la Chine. Même lorsque le conteneur se charge, les balises qu’il déclenche transmettent leurs données à des serveurs Google bloqués : le trafic chinois est perdu dans tous les cas.',
      'google-blocked':
        '{service} repose sur l’infrastructure de Google, bloquée en Chine continentale. Quel que soit son rôle, cette ressource échoue chez les internautes chinois.',
      'video-blocked': '{service} est bloqué en Chine continentale, lecteur compris. À la place de la vidéo, l’internaute ne voit qu’un cadre vide.',
      'video-slow': '{service} est accessible en Chine, mais la diffusion part de serveurs situés à l’étranger. Démarrages lents et mises en mémoire tampon sont à prévoir.',
      'embed-blocked':
        '{service} est bloqué en Chine continentale. Le contenu embarqué se réduit à un cadre vide ; chargé dans le <head>, son script peut en outre bloquer toute la page.',
      'comments-blocked':
        'Disqus est bloqué en Chine continentale (41 adresses sur 43 testées, septembre 2026). L’espace de commentaires ne s’affiche jamais.',
      'avatars-blocked':
        'Gravatar est bloqué. Les avatars ne s’affichent pas sur le site, et WordPress sollicite aussi Gravatar dans toute l’interface d’administration, ce qui ralentit vos équipes éditoriales si elles travaillent depuis la Chine.',
      'maps-blocked':
        '{service} est bloqué en Chine continentale : la carte reste blanche. La publication de cartes en Chine exige en outre un fournisseur agréé ; un miroir plus rapide n’y changerait rien.',
      'maps-split':
        'L’API de Mapbox est intermittente depuis la Chine et son adresse de télémétrie bloquée : la carte ne s’affiche qu’en partie, tandis qu’une requête reste en suspens. La publication de cartes en Chine exige en outre un fournisseur agréé.',
      'payments-licensing':
        'La Chine continentale ne fait pas partie des pays couverts par Stripe : aucun encaissement local par carte n’y est possible, que le script se charge ou non. Les acheteurs chinois attendent Alipay, WeChat Pay ou UnionPay.',
      'payments-partial':
        'Le site de PayPal est accessible, mais 9 des 27 adresses PayPal testées en août 2026 étaient perturbées, précisément celles des redirections de paiement. La transaction peut échouer à la dernière étape.',
      'search-hangs': 'Algolia répond depuis la Chine sans jamais terminer (aucun des 3 chargements de test). Le moteur de recherche du site ne renvoie aucun résultat.',
      'backend-blocked':
        'Firebase repose sur la famille de domaines googleapis.com, bloquée en Chine. Authentification, bases de données et toutes les fonctions qui en dépendent tomberont en panne.',
      cloudfront:
        'Le réseau mondial de CloudFront ne dessert pas la Chine continentale. Depuis un centre de données chinois, le téléchargement aboutissait ; sur une connexion résidentielle à Pékin, aucun des 3 chargements n’a abouti en août 2026.',
      'platform-slow': '{service} se charge en Chine, mais depuis l’étranger : 3,6 secondes en médiane lors de nos tests d’août 2026.',
      'platform-hangs':
        'Les serveurs statiques de Wix répondent, sans jamais aboutir depuis la Chine (aucun des 3 chargements de test). Les scripts du site en proviennent : la page risque de ne jamais s’afficher complètement.',
      'platform-https':
        'Squarespace et Webflow restent accessibles en HTTP depuis la Chine, mais le HTTPS y est intermittent, le pare-feu filtrant sur le nom de serveur de la connexion chiffrée. Or c’est en HTTPS qu’arrivent vos visiteurs.',
      'wpcom-partial':
        'Le CDN d’images et les statistiques de Jetpack reposent sur l’infrastructure de WordPress.com, dont des centaines d’adresses ressortent bloquées depuis la Chine (508 sur 1 509 testées). Les images qui y transitent peuvent manquer au hasard.',
      translatepress:
        'Dès qu’une chaîne n’est pas encore traduite, TranslatePress interroge l’API de traduction de Google et son propre serveur au moment de servir la page. Sur un serveur installé en Chine continentale, ces appels bloquent la requête.',
    },
    fixes: {
      'fix-malicious':
        'Supprimez sans attendre toutes les références et vérifiez que le site ne comporte pas de redirections injectées. Les navigateurs récents se passent de polyfills ; si vous en avez besoin, hébergez votre propre version.',
      'fix-fonts': 'Hébergez les fichiers de police (WOFF2) sur votre serveur ou votre CDN et supprimez la feuille de style de Google.',
      'fix-fonts-elementor':
        'Dans Elementor, activez Settings > Performance > Load Google Fonts Locally, ou désactivez Google Fonts dans Settings > Advanced. Dans les deux cas, l’éditeur continue de solliciter Google pour la police Roboto.',
      'fix-self-host':
        'Hébergez le fichier sur votre propre domaine, ou diffusez-le via un CDN chinois comme Alibaba Cloud ou Tencent Cloud (des nœuds en Chine continentale supposent un dépôt ICP).',
      'fix-self-host-fonts': 'Téléchargez les polices dans la limite de votre licence et hébergez-les sur votre propre domaine.',
      'fix-captcha':
        'Optez pour un captcha doté d’une infrastructure en Chine : Alibaba Cloud Captcha, Tencent Captcha ou GeeTest. Un champ piège, associé à une limitation du nombre d’envois, écarte aussi l’essentiel du spam.',
      'fix-forms': 'Intégrez le formulaire directement à votre site, ou recourez à un outil chinois comme Jinshuju ou Tencent Survey.',
      'fix-chat': 'Testez-le depuis la Chine. En cas d’échec, tournez-vous vers Meiqia, Zhichi ou NetEase Qiyu.',
      'fix-test-first': 'Testez-le depuis la Chine avant le lancement. S’il échoue, réservez-le aux internautes situés hors de Chine, ou supprimez-le.',
      'fix-analytics':
        'Doublez-le d’un outil qui fonctionne en Chine : Baidu Tongji, ou Plausible et Matomo hébergés sur un serveur chinois. Chargez les balises internationales en asynchrone pour qu’elles ne bloquent jamais la page.',
      'fix-video': 'Publiez des copies sur Youku, Bilibili, Tencent Video ou Alibaba Cloud VOD, et proposez-les aux internautes chinois.',
      'fix-embeds': 'Remplacez le contenu embarqué par une image renvoyant vers l’original, ou recourez aux équivalents Weibo ou WeChat sur vos pages chinoises.',
      'fix-comments': 'Optez pour les commentaires natifs, un système auto-hébergé comme Waline, ou Changyan.',
      'fix-avatars': 'Redirigez les avatars vers un miroir chinois comme Cravatar (cravatar.cn), ou désactivez-les dans Réglages > Discussion.',
      'fix-maps': 'Faites appel à un fournisseur agréé en Chine : AMap, Baidu Maps ou Tencent Maps. Pour une adresse unique, une image de carte statique suffit.',
      'fix-payments': 'Ajoutez Alipay, WeChat Pay ou UnionPay par l’intermédiaire d’un prestataire de paiement agréé pour la Chine.',
      'fix-search': 'Adoptez un moteur de recherche exploitable en Chine : Alibaba Cloud OpenSearch ou Meilisearch auto-hébergé.',
      'fix-backend': 'Migrez le back-end vers un cloud chinois (Alibaba Cloud, Tencent Cloud), ou faites-le transiter par un serveur que vous contrôlez en Chine.',
      'fix-china-cdn': 'Diffusez les fichiers via un CDN doté de nœuds en Chine continentale (Alibaba Cloud, Tencent Cloud), ce qui suppose un dépôt ICP.',
      'fix-replatform':
        'Ce type de plateforme ne peut pas être hébergé en Chine. Une version chinoise passe en général par une migration vers un hébergement que vous contrôlez, assorti d’un dépôt ICP.',
      'fix-jetpack':
        'Désactivez l’accélérateur de site de Jetpack (CDN d’images et de fichiers) ainsi que ses statistiques, et hébergez les images sur votre serveur ou un CDN chinois.',
      'fix-emoji': 'Supprimez le script d’emoji de WordPress (quelques lignes dans functions.php ou une petite extension) : les systèmes récents les affichent nativement.',
      'fix-translatepress':
        'Traduisez toutes les chaînes avant le lancement afin qu’aucun appel ne parte en direct, ou adoptez une extension sans appel externe, comme Polylang.',
      'fix-google-other': 'Identifiez ce qui charge cette ressource, puis supprimez-la ou remplacez-la pour les internautes chinois.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        'Pour un internaute chinois, votre site pointe vers un serveur situé en Chine continentale ({network}). Aucune configuration n’offre de chargement plus rapide derrière le pare-feu.',
      'host-china-cdn':
        'Votre domaine pointe vers {provider}, un CDN chinois. Si sa zone de diffusion couvre la Chine continentale, ce qui suppose un dépôt ICP, les internautes chinois reçoivent le site depuis des serveurs locaux. Depuis notre point de test, il répondait hors de Chine ({country}).',
      'host-platform-subdomain':
        'Le site est hébergé sur le sous-domaine d’une plateforme mutualisée. En Chine, ces sous-domaines, comme .vercel.app, sont souvent ralentis ou bloqués, et aucun dépôt ICP n’est possible pour un domaine que vous ne contrôlez pas.',
      'host-wix': 'Le site repose sur Wix. Ses serveurs répondent depuis la Chine, mais aucun des 3 chargements de test n’a abouti en août 2026.',
      'host-sni':
        'Le site repose sur {provider}. Le HTTPS vers ces plateformes est intermittent depuis la Chine, le pare-feu filtrant sur le nom de serveur de la connexion.',
      'host-cloudfront':
        'Le site est distribué par le réseau mondial d’AWS CloudFront, qui ne dispose d’aucun nœud en Chine continentale. En août 2026, sur une connexion résidentielle à Pékin, aucun des 3 chargements n’a abouti.',
      'host-vercel':
        'Le site repose sur Vercel, hors de Chine ({country}). Vercel reconnaît dans sa propre documentation ne garantir ni la disponibilité ni la vitesse en Chine continentale.',
      'host-cloudflare':
        'Le site est placé derrière Cloudflare. Avec les offres standard, les internautes chinois aboutissent sur un point de présence à l’étranger, le plus souvent à Hong Kong, au Japon ou sur la côte ouest des États-Unis. Le réseau implanté en Chine relève de l’offre Enterprise et suppose un dépôt ICP.',
      'host-shopify':
        'La boutique repose sur Shopify, hébergé à l’étranger. Elle se charge, mais lentement : 3,6 secondes en médiane lors de tests d’août 2026 depuis un centre de données chinois.',
      'host-hk':
        'Le site est hébergé à Hong Kong ({network}). Aucun dépôt ICP n’est requis et la distance est faible, mais le trafic franchit malgré tout la frontière avec la Chine continentale.',
      'host-abroad':
        'Le site est hébergé hors de Chine ({country}, {network}) : chaque requête d’un internaute chinois franchit la frontière. Dans l’étude publiée par Chinafy en 2026 sur 614 sites, le délai de premier octet était 4 à 4,5 fois plus long depuis Pékin que depuis la Virginie ou Londres.',
      'host-unknown': 'Nous n’avons pas pu localiser l’hébergement du site.',
    },
    readiness: {
      icp: {
        title: 'Numéro ICP',
        pass: 'Numéro {value} trouvé, avec un lien vers le registre du MIIT.',
        warn: 'Aucun numéro ICP trouvé. Sans lui, un serveur installé en Chine continentale ne servira pas votre site sur les ports 80 et 443.',
      },
      'icp-unlinked': {
        title: 'Numéro ICP',
        warn: 'Numéro {value} trouvé, mais sans le lien vers beian.miit.gov.cn qu’impose la réglementation.',
      },
      psb: {
        title: 'Enregistrement auprès de la police (PSB)',
        pass: 'Numéro {value} trouvé.',
        warn: 'Aucun numéro PSB trouvé. Un site hébergé en Chine dispose de 30 jours après sa mise en ligne pour s’enregistrer et afficher ce numéro.',
        info: 'Sans objet tant que le site n’est pas hébergé en Chine continentale.',
      },
      'tld-eligible': { title: 'Extension de domaine', pass: 'L’extension {value} permet un dépôt ICP.' },
      'tld-ineligible': {
        title: 'Extension de domaine',
        fail: 'L’extension {value} ne figure pas sur la liste approuvée par le MIIT et ne permet donc aucun dépôt ICP. Un site destiné à la Chine requiert un .cn, un .com ou une autre extension approuvée.',
      },
      'tld-org': {
        title: 'Extension de domaine',
        warn: 'L’extension .org n’accepte plus de nouveaux dépôts ICP depuis 2018. Les sites enregistrés auparavant conservent leur numéro.',
      },
      'tld-co': {
        title: 'Extension de domaine',
        warn: 'Approuvée en 2018, l’extension .co ne figure plus sur la liste actuelle du MIIT. Certaines provinces l’acceptent, d’autres non : renseignez-vous auprès de votre prestataire.',
      },
      chinese: {
        title: 'Version chinoise',
        pass: 'Version trouvée ({value}).',
        warn: 'Aucune version en chinois simplifié n’est déclarée (ni hreflang zh, ni langue de page). Internautes chinois et Baidu en attendent une.',
      },
      'baidu-verify': {
        title: 'Validation Baidu',
        pass: 'Balise baidu-site-verification présente.',
        info: 'Aucune balise de validation Baidu Webmaster Tools. Elle est indispensable pour soumettre vos pages et suivre leur indexation.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji est installé.',
        info: 'Aucun outil de mesure d’audience opérationnel en Chine. Baidu Tongji reste le choix le plus courant.',
      },
      commerce: {
        title: 'Boutique en ligne',
        info: 'Nous avons détecté {value}. Vendre en Chine suppose des moyens de paiement locaux et un examen distinct des licences.',
      },
    },
    ui: {
      resultsTitle: 'Votre rapport',
      reportFor: 'Rapport établi pour',
      scoreLabel: 'Score de compatibilité avec la Chine',
      findingsTitle: 'Constats',
      whyLabel: 'Enjeu',
      fixLabel: 'Correction',
      sourceLabel: 'Source',
      foundLabel: 'Emplacements détectés',
      referencedNote: 'Simplement cité dans votre JavaScript : la ressource se charge si la fonction s’exécute.',
      hostingTitle: 'Hébergement de votre site',
      servedFrom: 'Pays',
      network: 'Réseau',
      provider: 'CDN ou plateforme',
      ip: 'Adresse IP',
      chinaView: 'Résultat obtenu en simulant la requête DNS d’un internaute chinois.',
      checklistTitle: 'Préparer un lancement en Chine',
      checklistIntro: 'Ce qu’exige un lancement en Chine, au-delà d’une page qui s’affiche.',
      hostsTitle: 'Domaines externes chargés par la page ({count})',
      hostsIntro: 'Chaque domaine tiers sollicité par la page, avec notre verdict.',
      detailsTitle: 'Détails de l’analyse',
      pagesScanned: 'Pages analysées',
      filesScanned: '{scripts} scripts et {styles} feuilles de style lus',
      responseTime: 'Réponse de la page d’accueil : {ms} ms',
      htmlSize: 'Poids du HTML : {kb} Ko',
      builtWith: 'Réalisé avec {platform}',
      copy: 'Copier le rapport',
      copied: 'Copié',
      again: 'Analyser un autre site',
      noFindings: 'Aucune dépendance externe défaillante en Chine. Beau travail.',
      unknown: 'inconnu',
      failed: 'échec',
      score: 'Score',
      colon: ' : ',
    },
  },
};

const es: ScannerCopy = {
  page: {
    title: 'China Site Scanner | ¿Funciona su sitio web en China?',
    description:
      'Analice gratis cómo se comporta su sitio web en China continental: más de 60 servicios de terceros, el alojamiento y el registro ICP.',
    badge: 'Herramienta gratuita',
    h1: 'China Site Scanner',
    lead: 'Descubra qué deja de funcionar cuando alguien abre su sitio web desde China continental. Revisamos más de sesenta servicios de terceros, cómo se carga cada uno y dónde está alojado su sitio.',
    namePh: 'Nombre y apellidos',
    companyPh: 'Empresa',
    websitePh: 'Dirección del sitio web (p. ej., ejemplo.com)',
    emailPh: 'Correo electrónico profesional',
    captchaLabel: 'Comprobación de seguridad: ¿cuánto es',
    captchaEnd: '?',
    captchaPh: 'Respuesta',
    captchaRefresh: 'Cambiar la pregunta',
    submit: 'Analizar mi sitio web',
    formNote: 'Analizamos la página de inicio, la página de contacto y sus propios scripts y hojas de estilo. El proceso tarda unos veinte segundos.',
    loadingTitle: 'Analizando su sitio web',
    loadingBody: 'Leemos sus páginas y comparamos cada recurso externo con los datos de nuestras pruebas.',
    ctaTitle: '¿Quiere corregir estos fallos?',
    ctaBody:
      'Somos un equipo con sede en Shanghái. Llevamos sitios web al otro lado del Gran Cortafuegos y los mantenemos rápidos, sea cual sea su tecnología. Revisamos el informe con usted, punto por punto.',
    ctaButton: 'Solicitar una auditoría gratuita',
    ctaHref: '/es/contacto/',
    howTitle: 'Cómo funciona',
    howSub: 'Del formulario al informe en menos de un minuto.',
    steps: [
      { title: 'Sus datos', body: 'Indique su nombre, su empresa, la dirección del sitio y un correo profesional. El análisis empieza en cuanto envía el formulario.' },
      {
        title: 'Leemos sus páginas',
        body: 'Revisamos la página de inicio y la de contacto, y después sus propios scripts y hojas de estilo. Anotamos cada recurso externo y cómo se carga.',
      },
      { title: 'Un informe con fechas', body: 'Cada fallo incluye una explicación, la solución y la prueba en la que se basa el veredicto, con su fecha.' },
    ],
    whatTitle: 'Qué comprobamos',
    whatSub: 'Cada veredicto se basa en una prueba con fecha. Cuando no tenemos una medición hecha desde China, el informe lo indica.',
    categories: [
      { name: 'Fuentes y bibliotecas de código', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Formularios y captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Analítica y etiquetas', detail: 'Google Analytics, Tag Manager, píxel de Meta, Hotjar, Clarity, Amplitude' },
      { name: 'Vídeo y contenidos incrustados', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Mapas y pagos', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Plataformas y servicios de back end', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Alojamiento y CDN', detail: 'Dónde está alojado el sitio, qué CDN tiene delante y a qué servidor llega un visitante de China continental' },
      { name: 'Lanzamiento en China', detail: 'Números ICP y PSB, extensión del dominio, versión en chino y verificación de Baidu' },
      { name: 'Seguridad', detail: 'polyfill.io, BootCDN y Staticfile, los dominios del ataque a la cadena de suministro de 2024' },
    ],
    methodTitle: 'Cómo llegamos a cada veredicto',
    method: [
      'Cada veredicto se apoya en una prueba con fecha: nuestras propias sondas, en un centro de datos de Alibaba Cloud y en una conexión doméstica de Pekín; las sondas de 21YunBox desde un centro de datos en China, y pruebas de bloqueo realizadas desde dentro del país. Cada hallazgo indica su fuente y su fecha.',
      'El análisis se ejecuta desde fuera de China. Vemos qué cargan sus páginas y cómo lo hacen, y simulamos la consulta DNS de un visitante chino para saber a qué servidor llega. No podemos abrir la página en un teléfono en Shanghái, así que el informe es un mapa de riesgos: los más graves conviene confirmarlos sobre el terreno.',
      'Si nunca hemos medido un servicio, lo decimos. Preferimos reconocerlo antes que hacer suposiciones.',
    ],
  },
  client: {
    progress: [
      'Comprobando su respuesta...',
      'Descargando la página de inicio...',
      'Buscando la página de contacto...',
      'Leyendo los scripts y las hojas de estilo...',
      'Localizando el alojamiento...',
      'Comparando con nuestras mediciones...',
      'Preparando el informe...',
    ],
    errors: {
      fields: 'Faltan campos por completar.',
      captcha: 'Responda a la comprobación de seguridad.',
      invalid: 'No reconocemos esa dirección. Pruebe con el formato ejemplo.com.',
      'blocked-target': 'Esa dirección no se puede analizar.',
      timeout: 'Su sitio tardó más de doce segundos en responder y detuvimos el análisis. Vuelva a intentarlo o pruebe con otra página.',
      unreachable: 'No hemos podido conectar con el sitio. Revise la dirección e inténtelo de nuevo.',
      http: 'Su sitio respondió con un error (HTTP {status}). Algunos cortafuegos bloquean los análisis automáticos como el nuestro.',
      'too-many-redirects': 'El sitio redirige en bucle y no hemos llegado a ninguna página.',
      'not-html': 'Esa dirección lleva a un archivo. Indique la dirección de una página web.',
      token: 'La sesión ha caducado. Responda de nuevo a la comprobación de seguridad.',
      rate: 'Ha lanzado muchos análisis en poco tiempo. Espere unos minutos.',
      server: 'Se ha producido un error en nuestro sistema. Vuelva a intentarlo.',
    },
    grades: {
      good: {
        title: 'Listo para China',
        summary: 'Nada en esta página debería bloquearse para los visitantes de China continental. Aun así, conviene revisar las notas antes del lanzamiento.',
      },
      work: {
        title: 'Funciona, con carencias',
        summary: 'La página debería cargar en China, pero algunas funciones fallarán o perderán datos de los visitantes chinos.',
      },
      poor: {
        title: 'Falla en China',
        summary: 'Al menos un problema bloquea o deja inservible esta página para los visitantes de China continental. Empiece por los puntos críticos.',
      },
    },
    severity: {
      critical: { tag: 'Crítico', title: 'Bloquea la página', description: 'El recurso se carga de forma que toda la página espera a un servidor que falla en China.' },
      high: { tag: 'Alto', title: 'Inutiliza una función', description: 'Un formulario, un vídeo, un mapa u otra función que no estará disponible para los visitantes chinos.' },
      medium: { tag: 'Medio', title: 'Pierde datos o funciona a medias', description: 'Seguimiento, contenidos incrustados y complementos que fallan sin avisar.' },
      low: { tag: 'Bajo', title: 'Ralentiza la página', description: 'Carga, aunque despacio, o solo aparece mencionado en el código.' },
      info: { tag: 'Revisar', title: 'Conviene revisarlo', description: 'Servicios que aún no hemos medido desde China.' },
    },
    verdicts: {
      blocked: 'Bloqueado',
      hangs: 'Responde y se queda colgado',
      network: 'Depende de la red',
      split: 'El script carga, los datos no',
      intermittent: 'Intermitente',
      partial: 'Bloqueado en parte',
      slow: 'Lento',
      licensing: 'Cuestión de licencias',
      unverified: 'Sin medir',
      malicious: 'Malicioso',
      domestic: 'Proveedor chino',
      reachable: 'Accesible',
      unknown: 'Fuera de nuestros datos',
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
        '{service} pertenece a la red responsable del ataque de 2024 contra polyfill.io, que distribuyó software malicioso a través de estos dominios. Cualquier referencia es un incidente de seguridad, tenga o no visitantes en China.',
      'fonts-network':
        'Que Google Fonts funcione depende de la conexión del visitante. Desde un centro de datos en China responde; desde una conexión doméstica en Pekín, en agosto de 2026, ninguna de las 54 peticiones llegó a completarse. Si la hoja de estilo está en el <head>, la página entera queda a la espera.',
      'fonts-mirror':
        'Es un intermediario de Google Fonts gestionado por un tercero desconocido. Puede que hoy funcione, pero no hay forma de controlar lo que distribuye, y estos espejos desaparecen sin previo aviso.',
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) está bloqueado. Nuestra sonda de Alibaba Cloud en Zhangjiakou no recibió ni un byte en 60 segundos. Si jQuery se carga desde ahí, la página se congela hasta que el navegador desiste, y después fallan todos los scripts que dependen de jQuery.',
      'cdn-slow':
        '{service} funciona en China continental, pero despacio, porque sus servidores están fuera del país. En agosto de 2026, desde un centro de datos chino, el primer byte tardaba entre 0,5 y 1,1 segundos.',
      unverified:
        'Aún no tenemos ninguna medición de {service} desde China continental y preferimos no hacer suposiciones. Pruébelo desde China antes del lanzamiento o sustitúyalo por un servicio que usted controle.',
      'recaptcha-net':
        'La propia Google recomienda cargar reCAPTCHA desde recaptcha.net en China. Sin embargo, nuestra última confirmación es de febrero de 2026 y los desarrolladores siguen informando de fallos. La solución no está demostrada.',
      'captcha-blocked':
        'Google reCAPTCHA está bloqueado en China continental. El formulario no se puede enviar y cada consulta desde China se pierde sin ningún mensaje de error.',
      'captcha-intermittent':
        'El sitio de hCaptcha carga, pero la API que necesita cada comprobación (api2.hcaptcha.com) es intermitente en las pruebas hechas desde China. Parte de los visitantes se quedará bloqueada ante una comprobación que nunca termina.',
      'form-hangs':
        '{service} responde, pero no termina de cargar desde China: en agosto de 2026 no se completó ninguna de las tres cargas de prueba. El formulario queda vacío y los envíos se pierden sin aviso.',
      'analytics-blocked':
        '{service} está bloqueado en China continental. Las visitas desde China nunca aparecen en sus informes, así que el mercado parece más pequeño de lo que es.',
      'analytics-hangs':
        '{service} responde desde China, pero nunca termina (ninguna de tres cargas en las pruebas de agosto de 2026). Los datos de los visitantes chinos se pierden sin que nada lo indique.',
      'analytics-split':
        'El script de Amplitude carga desde China, pero la dirección que recibe los eventos está bloqueada. La herramienta parece instalada y operativa, y sin embargo no llega ningún dato de China.',
      'analytics-slow': '{service} funciona desde China, pero cada llamada tarda alrededor de un segundo. Conviene sacarlo de la carga crítica.',
      'tag-manager':
        'Google Tag Manager carga de forma intermitente desde China. Y aunque el contenedor cargue, las etiquetas que activa envían los datos a servidores de Google bloqueados. El tráfico chino se pierde en cualquier caso.',
      'google-blocked':
        '{service} funciona sobre la infraestructura de Google, bloqueada en China continental. Sea cual sea su función, este recurso falla para los visitantes chinos.',
      'video-blocked': '{service} está bloqueado en China continental, incluido el reproductor. El visitante ve un recuadro vacío en lugar del vídeo.',
      'video-slow': '{service} llega a China, pero emite desde servidores en el extranjero. La reproducción tardará en empezar y se detendrá para cargar.',
      'embed-blocked':
        '{service} está bloqueado en China continental. El contenido incrustado se queda en un recuadro vacío y, si su script se carga en el <head>, puede bloquear toda la página.',
      'comments-blocked':
        'Disqus está bloqueado en China continental (41 de 43 direcciones probadas, septiembre de 2026). La sección de comentarios nunca aparece.',
      'avatars-blocked':
        'Gravatar está bloqueado. Los avatares no se ven en el sitio, y WordPress también llama a Gravatar en todo el panel de administración, lo que ralentiza a sus editores si trabajan desde China.',
      'maps-blocked':
        '{service} está bloqueado en China continental y el mapa se queda en blanco. Además, publicar mapas en China exige un proveedor autorizado, así que un espejo más rápido no lo resuelve.',
      'maps-split':
        'La API de Mapbox funciona de forma intermitente desde China y su telemetría está bloqueada: el mapa se dibuja a medias y una petición se queda colgada. Además, publicar mapas en China exige un proveedor autorizado.',
      'payments-licensing':
        'Stripe no opera en China continental, así que no hay cobro local con tarjeta, cargue o no el script. Los compradores chinos esperan Alipay, WeChat Pay o UnionPay.',
      'payments-partial':
        'El sitio de PayPal es accesible, pero en agosto de 2026 fallaban 9 de las 27 direcciones de PayPal probadas, justo las redirecciones del pago. La compra puede fallar en el último paso.',
      'search-hangs': 'Algolia responde desde China, pero nunca termina (ninguna de tres cargas de prueba). El buscador del sitio no devuelve resultados.',
      'backend-blocked':
        'Firebase depende de la familia de dominios googleapis.com, bloqueada en China. El inicio de sesión, las bases de datos y todo lo que dependa de Firebase dejará de funcionar.',
      cloudfront:
        'La red global de CloudFront no da servicio en China continental. Desde un centro de datos chino la descarga se completaba, pero en una conexión doméstica de Pekín no terminó ninguna de las tres cargas en agosto de 2026.',
      'platform-slow': '{service} carga en China, pero desde servidores en el extranjero: 3,6 segundos de mediana en nuestras pruebas de agosto de 2026.',
      'platform-hangs':
        'Los servidores estáticos de Wix responden, pero no terminan de cargar desde China (ninguna de tres cargas de prueba). Los scripts del sitio salen de ahí, así que la página puede no mostrarse nunca completa.',
      'platform-https':
        'Squarespace y Webflow cargan por HTTP desde China, pero el HTTPS es intermitente, porque el cortafuegos filtra por el nombre del servidor de la conexión cifrada. Y los visitantes llegan por HTTPS.',
      'wpcom-partial':
        'La CDN de imágenes y las estadísticas de Jetpack funcionan sobre la infraestructura de WordPress.com, con cientos de direcciones bloqueadas desde China (508 de 1509 probadas). Las imágenes que pasan por ahí pueden fallar al azar.',
      translatepress:
        'Cuando una cadena aún no está traducida, TranslatePress llama a la API de traducción de Google y a su propio servidor al generar la página. En un servidor en China continental, esas llamadas bloquean la petición.',
    },
    fixes: {
      'fix-malicious':
        'Elimine ya todas las referencias y compruebe que el sitio no tiene redirecciones inyectadas. Los navegadores actuales no necesitan polyfills; si usted los necesita, aloje su propia versión.',
      'fix-fonts': 'Aloje los archivos de fuente (WOFF2) en su servidor o en su CDN y quite la hoja de estilo de Google.',
      'fix-fonts-elementor':
        'En Elementor, active Settings > Performance > Load Google Fonts Locally o desactive Google Fonts en Settings > Advanced. En ambos casos, el editor sigue pidiendo la fuente Roboto a Google.',
      'fix-self-host':
        'Aloje el archivo en su propio dominio o distribúyalo a través de una CDN china como Alibaba Cloud o Tencent Cloud (los nodos en China continental exigen registro ICP).',
      'fix-self-host-fonts': 'Descargue las fuentes que permita su licencia y alójelas en su propio dominio.',
      'fix-captcha':
        'Use un captcha con infraestructura en China: Alibaba Cloud Captcha, Tencent Captcha o GeeTest. Un campo trampa con un límite de envíos también frena la mayor parte del spam.',
      'fix-forms': 'Integre el formulario en su propio sitio o use una herramienta china, como Jinshuju o Tencent Survey.',
      'fix-chat': 'Pruébelo desde China. Si falla, las alternativas locales son Meiqia, Zhichi y NetEase Qiyu.',
      'fix-test-first': 'Pruébelo desde China antes del lanzamiento. Si falla, cárguelo solo para los visitantes de fuera de China o elimínelo.',
      'fix-analytics':
        'Añada una herramienta que funcione en China: Baidu Tongji, o Plausible o Matomo alojados en un servidor chino. Cargue las etiquetas globales de forma asíncrona para que nunca bloqueen la página.',
      'fix-video': 'Publique copias en Youku, Bilibili, Tencent Video o Alibaba Cloud VOD y muéstrelas a los visitantes de China.',
      'fix-embeds': 'Sustituya el contenido incrustado por una imagen con enlace al original o use los equivalentes de Weibo o WeChat en sus páginas para China.',
      'fix-comments': 'Use los comentarios nativos, un sistema alojado por usted como Waline, o Changyan.',
      'fix-avatars': 'Cambie los avatares a un espejo chino como Cravatar (cravatar.cn) o desactívelos en Ajustes > Comentarios.',
      'fix-maps': 'Use un proveedor autorizado en China: AMap, Baidu Maps o Tencent Maps. Para una sola dirección basta con una imagen estática del mapa.',
      'fix-payments': 'Añada Alipay, WeChat Pay o UnionPay a través de un proveedor de pagos autorizado para China.',
      'fix-search': 'Use un buscador que pueda funcionar en China: Alibaba Cloud OpenSearch o Meilisearch alojado por usted.',
      'fix-backend': 'Traslade el back end a una nube china (Alibaba Cloud, Tencent Cloud) o canalícelo a través de un servidor que usted controle en China.',
      'fix-china-cdn': 'Distribuya los archivos desde una CDN con nodos en China continental (Alibaba Cloud, Tencent Cloud). Para ello necesita un registro ICP.',
      'fix-replatform':
        'Este tipo de plataforma no se puede alojar en China. Una versión para China suele exigir trasladar el sitio a un alojamiento que usted controle, con registro ICP.',
      'fix-jetpack':
        'Desactive el acelerador de Jetpack (CDN de imágenes y archivos) y sus estadísticas, y aloje las imágenes en su servidor o en una CDN china.',
      'fix-emoji': 'Quite el script de emojis de WordPress (unas líneas en functions.php o un pequeño plugin). Los sistemas actuales muestran los emojis por sí solos.',
      'fix-translatepress':
        'Traduzca todas las cadenas antes del lanzamiento para que no se produzca ninguna llamada en directo, o cambie a un plugin sin llamadas externas, como Polylang.',
      'fix-google-other': 'Localice qué carga este recurso y elimínelo o sustitúyalo para los visitantes de China.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        'Para un visitante chino, su sitio apunta a un servidor en China continental ({network}). Con esta configuración, el sitio carga lo más rápido posible al otro lado del cortafuegos.',
      'host-china-cdn':
        'Su dominio apunta a {provider}, una CDN china. Si su zona de servicio incluye China continental, algo que exige registro ICP, los visitantes chinos reciben el sitio desde servidores locales. Desde nuestro punto de prueba respondió fuera de China ({country}).',
      'host-platform-subdomain':
        'El sitio usa el subdominio de una plataforma compartida. En China, subdominios como .vercel.app sufren a menudo limitaciones o bloqueos, y no se puede registrar un ICP para un dominio que usted no controla.',
      'host-wix': 'El sitio está alojado en Wix. Sus servidores responden desde China, pero en agosto de 2026 no terminó ninguna de las tres cargas de prueba.',
      'host-sni':
        'El sitio está alojado en {provider}. Desde China, el HTTPS hacia estas plataformas es intermitente, porque el cortafuegos filtra por el nombre del servidor de la conexión.',
      'host-cloudfront':
        'El sitio se distribuye a través de la red global de AWS CloudFront, que no tiene nodos en China continental. En agosto de 2026, en una conexión doméstica de Pekín, no se completó ninguna de las tres cargas.',
      'host-vercel':
        'El sitio está alojado en Vercel, fuera de China ({country}). La propia documentación de Vercel reconoce que no puede garantizar ni la disponibilidad ni la velocidad en China continental.',
      'host-cloudflare':
        'El sitio está detrás de Cloudflare. Con los planes estándar, los visitantes chinos llegan a un nodo en el extranjero, normalmente en Hong Kong, Japón o la costa oeste de Estados Unidos. La red dentro de China es un producto Enterprise y exige registro ICP.',
      'host-shopify':
        'La tienda está alojada en Shopify, fuera de China. Carga, pero despacio: 3,6 segundos de mediana en pruebas de agosto de 2026 desde un centro de datos chino.',
      'host-hk':
        'El sitio está alojado en Hong Kong ({network}). No necesita ICP y está muy cerca, pero el tráfico sigue cruzando la frontera con China continental.',
      'host-abroad':
        'El sitio está alojado fuera de China ({country}, {network}) y cada petición de un visitante chino cruza la frontera. En el estudio de Chinafy de 2026 sobre 614 sitios, el tiempo hasta el primer byte era entre 4 y 4,5 veces mayor desde Pekín que desde Virginia o Londres.',
      'host-unknown': 'No hemos podido localizar el alojamiento del sitio.',
    },
    readiness: {
      icp: {
        title: 'Número ICP',
        pass: 'Hemos encontrado el número {value}, con enlace al registro del MIIT.',
        warn: 'No hemos encontrado ningún número ICP. Sin él, un servidor en China continental mantiene cerrados los puertos 80 y 443 para su sitio.',
      },
      'icp-unlinked': {
        title: 'Número ICP',
        warn: 'Hemos encontrado el número {value}, pero sin enlace a beian.miit.gov.cn, como exige la normativa.',
      },
      psb: {
        title: 'Registro ante la policía (PSB)',
        pass: 'Hemos encontrado el número {value}.',
        warn: 'No hemos encontrado ningún número PSB. Un sitio alojado en China tiene treinta días desde su publicación para registrarse y mostrarlo.',
        info: 'No hace falta mientras el sitio no esté alojado en China continental.',
      },
      'tld-eligible': { title: 'Extensión del dominio', pass: 'La extensión {value} admite registro ICP.' },
      'tld-ineligible': {
        title: 'Extensión del dominio',
        fail: 'La extensión {value} no figura en la lista aprobada por el MIIT, así que no admite registro ICP. Un sitio para China necesita un .cn, un .com u otra extensión aprobada.',
      },
      'tld-org': {
        title: 'Extensión del dominio',
        warn: 'La extensión .org dejó de admitir nuevos registros ICP en 2018. Los sitios registrados antes conservan su número.',
      },
      'tld-co': {
        title: 'Extensión del dominio',
        warn: 'La extensión .co se aprobó en 2018, pero ya no figura en la lista actual del MIIT. Algunas provincias la aceptan y otras no: consúltelo con su gestor.',
      },
      chinese: {
        title: 'Versión en chino',
        pass: 'Hemos encontrado una versión en chino ({value}).',
        warn: 'No hay ninguna versión en chino simplificado declarada (ni hreflang zh ni idioma de página). Los visitantes chinos la buscan, y Baidu también.',
      },
      'baidu-verify': {
        title: 'Verificación de Baidu',
        pass: 'La etiqueta baidu-site-verification está presente.',
        info: 'No hay etiqueta de verificación de Baidu Webmaster Tools. La necesita para enviar páginas y seguir su indexación.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji está instalado.',
        info: 'No hay ninguna herramienta de analítica que funcione en China. Lo habitual es Baidu Tongji.',
      },
      commerce: {
        title: 'Tienda online',
        info: 'Hemos detectado {value}. Para vender en China hacen falta medios de pago locales y una revisión aparte de las licencias.',
      },
    },
    ui: {
      resultsTitle: 'Su informe',
      reportFor: 'Informe de',
      scoreLabel: 'Puntuación de compatibilidad con China',
      findingsTitle: 'Lo que hemos encontrado',
      whyLabel: 'Por qué importa',
      fixLabel: 'Solución',
      sourceLabel: 'Fuente',
      foundLabel: 'Dónde lo hemos encontrado',
      referencedNote: 'Solo aparece mencionado en su JavaScript: se carga si esa función se ejecuta.',
      hostingTitle: 'Dónde está alojado su sitio',
      servedFrom: 'País',
      network: 'Red',
      provider: 'CDN o plataforma',
      ip: 'Dirección IP',
      chinaView: 'Resultado obtenido al simular la consulta DNS de un visitante chino.',
      checklistTitle: 'Lanzamiento en China',
      checklistIntro: 'Lo que exige un lanzamiento en China, además de que la página cargue.',
      hostsTitle: 'Dominios externos que carga la página ({count})',
      hostsIntro: 'Cada dominio de terceros que carga la página, con nuestro veredicto.',
      detailsTitle: 'Detalles del análisis',
      pagesScanned: 'Páginas analizadas',
      filesScanned: '{scripts} scripts y {styles} hojas de estilo leídos',
      responseTime: 'Respuesta de la página de inicio: {ms} ms',
      htmlSize: 'Tamaño del HTML: {kb} KB',
      builtWith: 'Creado con {platform}',
      copy: 'Copiar el informe',
      copied: 'Copiado',
      again: 'Analizar otro sitio',
      noFindings: 'No hay ninguna dependencia externa que falle en China. Enhorabuena.',
      unknown: 'desconocido',
      failed: 'error',
      score: 'Puntuación',
      colon: ': ',
    },
  },
};

const de: ScannerCopy = {
  page: {
    title: 'China Site Scanner | Funktioniert Ihre Website in China?',
    description:
      'Kostenloser Test: Wie verhält sich Ihre Website in Festlandchina? Geprüft werden über 60 Drittanbieterdienste, das Hosting und die ICP-Voraussetzungen.',
    badge: 'Kostenloses Tool',
    h1: 'China Site Scanner',
    lead: 'Was an Ihrer Website versagt, sobald sie jemand in Festlandchina aufruft, zeigt dieser Scan. Er prüft mehr als 60 Drittanbieterdienste, deren Ladeweise und den Standort Ihres Hostings.',
    namePh: 'Vor- und Nachname',
    companyPh: 'Unternehmen',
    websitePh: 'Adresse der Website (z. B. beispiel.de)',
    emailPh: 'Geschäftliche E-Mail-Adresse',
    captchaLabel: 'Sicherheitsfrage: Wie viel ist',
    captchaEnd: '?',
    captchaPh: 'Antwort',
    captchaRefresh: 'Neue Frage',
    submit: 'Website prüfen',
    formNote: 'Geprüft werden Startseite, Kontaktseite sowie Ihre eigenen Skripte und Stylesheets. Das dauert rund 20 Sekunden.',
    loadingTitle: 'Ihre Website wird geprüft',
    loadingBody: 'Wir lesen Ihre Seiten und gleichen jede externe Ressource mit unseren Messdaten ab.',
    ctaTitle: 'Sollen wir diese Punkte beheben?',
    ctaBody:
      'Unser Team in Shanghai bringt Websites hinter die Große Firewall und sorgt dafür, dass sie dort schnell bleiben, unabhängig von der eingesetzten Technik. Ihren Bericht gehen wir Punkt für Punkt mit Ihnen durch.',
    ctaButton: 'Kostenlose Einschätzung anfordern',
    ctaHref: '/de/kontakt/',
    howTitle: 'So läuft die Prüfung ab',
    howSub: 'Vom Formular zum Bericht in weniger als einer Minute',
    steps: [
      { title: 'Ihre Angaben', body: 'Name, Unternehmen, Website und geschäftliche E-Mail-Adresse: Die Prüfung beginnt, sobald Sie das Formular absenden.' },
      {
        title: 'Wir lesen Ihre Seiten',
        body: 'Der Scanner liest Startseite und Kontaktseite, anschließend Ihre eigenen Skripte und Stylesheets. Jede externe Ressource wird samt Ladeweise erfasst.',
      },
      { title: 'Ein datierter Bericht', body: 'Zu jedem Problem nennt der Bericht die Ursache, die Lösung und den Test, auf dem das Urteil beruht, jeweils mit Datum.' },
    ],
    whatTitle: 'Was wir prüfen',
    whatSub: 'Jedes Urteil stützt sich auf einen datierten Test. Fehlt eine Messung aus China, weist der Bericht darauf hin.',
    categories: [
      { name: 'Schriften und Bibliotheken', detail: 'Google Fonts, Google Hosted Libraries, Adobe Fonts, Font Awesome, jsDelivr, cdnjs' },
      { name: 'Formulare und Captchas', detail: 'reCAPTCHA, hCaptcha, Turnstile, Typeform, Mailchimp, HubSpot' },
      { name: 'Webanalyse und Tags', detail: 'Google Analytics, Tag Manager, Meta-Pixel, Hotjar, Clarity, Amplitude' },
      { name: 'Videos und eingebettete Inhalte', detail: 'YouTube, Vimeo, Instagram, X, SoundCloud, Disqus' },
      { name: 'Karten und Zahlungen', detail: 'Google Maps, Mapbox, OpenStreetMap, Stripe, PayPal' },
      { name: 'Plattformen und Backend-Dienste', detail: 'Wix, Squarespace, Webflow, Shopify, Jetpack, Firebase, Algolia' },
      { name: 'Hosting und CDN', detail: 'Hosting-Standort, vorgeschaltetes CDN und der Server, zu dem Besucher aus Festlandchina geleitet werden' },
      { name: 'Start in China', detail: 'ICP- und PSB-Nummer, Domainendung, chinesische Sprachversion, Baidu-Verifizierung' },
      { name: 'Sicherheit', detail: 'polyfill.io, BootCDN und Staticfile, die Domains hinter dem Lieferkettenangriff von 2024' },
    ],
    methodTitle: 'Worauf unsere Urteile beruhen',
    method: [
      'Jedes Urteil stützt sich auf einen datierten Test: auf eigene Messungen aus einem Rechenzentrum von Alibaba Cloud und über einen Privatanschluss in Peking, auf Messungen von 21YunBox aus einem chinesischen Rechenzentrum sowie auf Sperrtests innerhalb Chinas. Zu jedem Befund nennt der Bericht Quelle und Datum.',
      'Der Scan läuft außerhalb Chinas. Er zeigt, was Ihre Seiten laden und auf welche Weise; eine simulierte DNS-Anfrage aus China verrät zudem, zu welchem Server Besucher dort geleitet werden. Was er nicht kann: die Seite auf einem Smartphone in Shanghai öffnen. Der Bericht ist deshalb eine Risikokarte, deren gravierende Punkte Sie vor Ort überprüfen sollten.',
      'Dienste, die wir nie gemessen haben, kennzeichnen wir entsprechend. Das ist uns lieber als jede Vermutung.',
    ],
  },
  client: {
    progress: [
      'Antwort wird geprüft …',
      'Startseite wird abgerufen …',
      'Kontaktseite wird gesucht …',
      'Skripte und Stylesheets werden gelesen …',
      'Hosting wird lokalisiert …',
      'Abgleich mit unseren Messdaten …',
      'Bericht wird erstellt …',
    ],
    errors: {
      fields: 'Bitte füllen Sie alle Felder aus.',
      captcha: 'Bitte beantworten Sie die Sicherheitsfrage.',
      invalid: 'Diese Adresse ist ungültig. Bitte verwenden Sie das Format beispiel.de.',
      'blocked-target': 'Diese Adresse kann nicht geprüft werden.',
      timeout: 'Ihre Website hat nicht innerhalb von 12 Sekunden geantwortet, daher wurde die Prüfung abgebrochen. Versuchen Sie es erneut oder mit einer anderen Seite.',
      unreachable: 'Die Website ist nicht erreichbar. Prüfen Sie die Adresse und versuchen Sie es erneut.',
      http: 'Ihre Website hat mit einem Fehler geantwortet (HTTP {status}). Manche Firewalls blockieren automatisierte Prüfungen wie unsere.',
      'too-many-redirects': 'Die Website leitet in einer Endlosschleife weiter; keine Seite war erreichbar.',
      'not-html': 'Diese Adresse verweist auf eine Datei. Bitte geben Sie die Adresse einer Webseite an.',
      token: 'Die Sitzung ist abgelaufen. Bitte beantworten Sie die Sicherheitsfrage erneut.',
      rate: 'Zu viele Prüfungen in kurzer Zeit. Bitte warten Sie einige Minuten.',
      server: 'Auf unserer Seite ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    },
    grades: {
      good: {
        title: 'Gut gerüstet für China',
        summary: 'Nichts auf dieser Seite sollte die Darstellung in Festlandchina blockieren. Die folgenden Hinweise sollten Sie vor dem Start dennoch durchgehen.',
      },
      work: {
        title: 'Funktionsfähig, mit Lücken',
        summary: 'Die Seite dürfte in China laden, doch einzelne Funktionen fallen für Besucher aus Festlandchina aus oder verlieren Daten.',
      },
      poor: {
        title: 'Scheitert an der Großen Firewall',
        summary: 'Mindestens ein Problem blockiert diese Seite oder legt sie für Besucher aus Festlandchina lahm. Beginnen Sie mit den kritischen Punkten.',
      },
    },
    severity: {
      critical: { tag: 'Kritisch', title: 'Blockiert die Seite', description: 'Die Ressource wird so geladen, dass die gesamte Seite auf einen Server wartet, der in China ausfällt.' },
      high: { tag: 'Hoch', title: 'Legt eine Funktion lahm', description: 'Formular, Video, Karte: eine Funktion, die Besuchern aus China nicht zur Verfügung steht.' },
      medium: { tag: 'Mittel', title: 'Datenverlust oder Einschränkung', description: 'Tracking, eingebettete Inhalte und Zusatzfunktionen, die unbemerkt ausfallen.' },
      low: { tag: 'Niedrig', title: 'Bremst die Seite', description: 'Lädt langsam oder wird im Code lediglich erwähnt.' },
      info: { tag: 'Prüfen', title: 'Zu prüfen', description: 'Dienste, die wir aus China noch nicht gemessen haben.' },
    },
    verdicts: {
      blocked: 'Gesperrt',
      hangs: 'Antwortet, lädt nie fertig',
      network: 'Netzabhängig',
      split: 'Skript lädt, Daten gesperrt',
      intermittent: 'Unzuverlässig',
      partial: 'Teilweise gesperrt',
      slow: 'Langsam',
      licensing: 'Lizenzfrage',
      unverified: 'Nicht gemessen',
      malicious: 'Schädlich',
      domestic: 'Chinesischer Anbieter',
      reachable: 'Erreichbar',
      unknown: 'Nicht in unseren Daten',
    },
    modes: {
      'blocking-script': 'blockierendes Skript',
      'async-script': 'asynchrones Skript',
      stylesheet: 'blockierendes Stylesheet',
      'deferred-style': 'nachgeladenes Stylesheet',
      preload: 'Vorabladen (Preload)',
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
        '{service} gehört zu dem Netzwerk hinter dem Angriff auf polyfill.io im Jahr 2024, bei dem über diese Domains Schadsoftware verbreitet wurde. Jede Einbindung ist ein Sicherheitsvorfall, ob Sie China im Blick haben oder nicht.',
      'fonts-network':
        'Ob Google Fonts lädt, hängt von der Verbindung des Besuchers ab. Aus chinesischen Rechenzentren antwortet der Dienst; über einen Privatanschluss in Peking kam im August 2026 keine der 54 Anfragen durch. Steht das Stylesheet im <head>, wartet die gesamte Seite darauf.',
      'fonts-mirror':
        'Dieser Proxy für Google Fonts wird von einem unbekannten Dritten betrieben. Er mag heute funktionieren, doch was er ausliefert, lässt sich nicht kontrollieren, und solche Spiegel verschwinden oft ohne Vorwarnung.',
      'libs-blocked':
        'Google Hosted Libraries (ajax.googleapis.com) ist gesperrt. Unsere Messstation bei Alibaba Cloud in Zhangjiakou erhielt binnen 60 Sekunden kein einziges Byte. Wird jQuery von dort geladen, friert die Seite ein, bis der Browser aufgibt; danach scheitert jedes Skript, das jQuery benötigt.',
      'cdn-slow':
        '{service} ist in Festlandchina erreichbar, aber langsam, weil die Server im Ausland stehen. Im August 2026 traf das erste Byte in einem chinesischen Rechenzentrum nach 0,5 bis 1,1 Sekunden ein.',
      unverified:
        'Für {service} liegt uns noch keine Messung aus Festlandchina vor, und Vermutungen stellen wir nicht an. Testen Sie den Dienst vor dem Start vor Ort oder ersetzen Sie ihn durch einen, den Sie selbst kontrollieren.',
      'recaptcha-net':
        'Google selbst empfiehlt, reCAPTCHA in China über recaptcha.net zu laden. Unsere letzte Bestätigung stammt jedoch vom Februar 2026, und Entwickler berichten weiterhin von Ausfällen. Belegt ist die Lösung nicht.',
      'captcha-blocked':
        'Google reCAPTCHA ist in Festlandchina gesperrt. Das Formular lässt sich nicht absenden; jede Anfrage aus China geht ohne Fehlermeldung verloren.',
      'captcha-intermittent':
        'Die Website von hCaptcha lädt, doch die Schnittstelle, die jede Abfrage benötigt (api2.hcaptcha.com), arbeitet in Tests aus China unzuverlässig. Ein Teil der Besucher bleibt an einer Abfrage hängen, die nie abgeschlossen wird.',
      'form-hangs':
        '{service} antwortet, lädt aus China aber nie vollständig: Im August 2026 wurde keiner von drei Testaufrufen abgeschlossen. Das Formular bleibt leer, und Einsendungen gehen ohne Fehlermeldung verloren.',
      'analytics-blocked':
        '{service} ist in Festlandchina gesperrt. Besuche aus China erscheinen nie in Ihren Berichten; der Markt wirkt dadurch kleiner, als er ist.',
      'analytics-hangs':
        '{service} antwortet aus China, lädt aber nie fertig (0 von 3 in Tests vom August 2026). Die Daten chinesischer Besucher gehen verloren, ohne dass es auffällt.',
      'analytics-split':
        'Das Skript von Amplitude lädt aus China, die Adresse, an die es Ereignisse sendet, ist jedoch gesperrt. Das Werkzeug scheint installiert und funktionsfähig, doch aus China kommen keine Daten an.',
      'analytics-slow': '{service} funktioniert aus China, jeder Aufruf dauert aber rund eine Sekunde. Der Dienst gehört deshalb nicht in den kritischen Ladepfad.',
      'tag-manager':
        'Google Tag Manager lädt aus China nur unzuverlässig. Selbst wenn der Container geladen wird, senden die ausgelösten Tags ihre Daten an gesperrte Google-Server. Der Datenverkehr aus China geht so oder so verloren.',
      'google-blocked':
        '{service} läuft auf Googles Infrastruktur, die in Festlandchina gesperrt ist. Welche Aufgabe die Ressource auch erfüllt: Für Besucher aus China schlägt sie fehl.',
      'video-blocked': '{service} ist in Festlandchina gesperrt, der Player eingeschlossen. Statt des Videos sehen Besucher einen leeren Rahmen.',
      'video-slow': '{service} ist in China erreichbar, streamt aber von Servern im Ausland. Lange Startzeiten und Unterbrechungen sind die Folge.',
      'embed-blocked':
        '{service} ist in Festlandchina gesperrt. Die Einbettung bleibt ein leerer Kasten; wird ihr Skript im <head> geladen, kann es zudem die gesamte Seite aufhalten.',
      'comments-blocked':
        'Disqus ist in Festlandchina gesperrt (41 von 43 getesteten Adressen, September 2026). Der Kommentarbereich erscheint nie.',
      'avatars-blocked':
        'Gravatar ist gesperrt. Avatare fehlen auf der Website, und WordPress ruft Gravatar auch im gesamten Verwaltungsbereich auf. Das bremst Ihre Redaktion, sofern sie aus China arbeitet.',
      'maps-blocked':
        '{service} ist in Festlandchina gesperrt; die Karte bleibt leer. Wer in China Karten veröffentlicht, braucht zudem einen lizenzierten Anbieter; ein schnellerer Spiegelserver ändert daran nichts.',
      'maps-split':
        'Die Mapbox-Schnittstelle ist aus China unzuverlässig erreichbar, die Telemetrie-Adresse gesperrt: Die Karte baut sich nur teilweise auf, während im Hintergrund eine Anfrage hängt. Kartendaten in China erfordern zudem einen lizenzierten Anbieter.',
      'payments-licensing':
        'Stripe ist in Festlandchina nicht aktiv. Kartenzahlungen lassen sich dort nicht lokal abwickeln, ob das Skript lädt oder nicht. Chinesische Käufer erwarten Alipay, WeChat Pay oder UnionPay.',
      'payments-partial':
        'Die PayPal-Website ist erreichbar, doch im August 2026 waren 9 von 27 getesteten PayPal-Adressen gestört, ausgerechnet die Weiterleitungen im Bezahlvorgang. Die Zahlung kann im letzten Schritt scheitern.',
      'search-hangs': 'Algolia antwortet aus China, lädt aber nie fertig (0 von 3 Testaufrufen). Die Suche auf der Website liefert keine Ergebnisse.',
      'backend-blocked':
        'Firebase baut auf der Domainfamilie googleapis.com auf, die in China gesperrt ist. Anmeldung, Datenbanken und alles, was daran hängt, fallen aus.',
      cloudfront:
        'Das globale CloudFront-Netz bedient Festlandchina nicht. Aus einem chinesischen Rechenzentrum kam der Abruf noch zustande; über einen Privatanschluss in Peking wurde im August 2026 keiner von drei Aufrufen abgeschlossen.',
      'platform-slow': '{service} lädt in China, allerdings von Servern im Ausland: im Median 3,6 Sekunden in unseren Tests vom August 2026.',
      'platform-hangs':
        'Die statischen Server von Wix antworten, doch aus China wird kein Aufruf abgeschlossen (0 von 3 Testaufrufen). Da die Skripte der Website von dort stammen, wird die Seite womöglich nie vollständig angezeigt.',
      'platform-https':
        'Squarespace und Webflow sind aus China per HTTP erreichbar, per HTTPS dagegen nur unzuverlässig, weil die Firewall nach dem Servernamen der verschlüsselten Verbindung filtert. Echte Besucher kommen aber über HTTPS.',
      'wpcom-partial':
        'Bild-CDN und Statistiken von Jetpack laufen auf der Infrastruktur von WordPress.com, deren Adressen aus China zu Hunderten gesperrt sind (508 von 1.509 getesteten). Bilder, die darüber ausgeliefert werden, können willkürlich ausfallen.',
      translatepress:
        'Ist ein Text noch nicht übersetzt, ruft TranslatePress beim Ausliefern der Seite Googles Übersetzungsschnittstelle und den eigenen Server auf. Auf einem Server in Festlandchina blockieren diese Aufrufe die Anfrage.',
    },
    fixes: {
      'fix-malicious':
        'Entfernen Sie umgehend jede Einbindung und prüfen Sie die Website auf eingeschleuste Weiterleitungen. Moderne Browser kommen ohne Polyfills aus; wo Sie welche benötigen, hosten Sie eine eigene Version.',
      'fix-fonts': 'Hosten Sie die Schriftdateien (WOFF2) auf Ihrem eigenen Server oder CDN und entfernen Sie das Google-Stylesheet.',
      'fix-fonts-elementor':
        'Aktivieren Sie in Elementor unter Settings > Performance die Option Load Google Fonts Locally oder schalten Sie Google Fonts unter Settings > Advanced ab. In beiden Fällen ruft der Editor die Schrift Roboto weiterhin bei Google ab.',
      'fix-self-host':
        'Hosten Sie die Datei auf Ihrer eigenen Domain oder liefern Sie sie über ein chinesisches CDN wie Alibaba Cloud oder Tencent Cloud aus (Knoten in Festlandchina setzen eine ICP-Registrierung voraus).',
      'fix-self-host-fonts': 'Laden Sie die Schriften herunter, soweit Ihre Lizenz es zulässt, und hosten Sie sie auf Ihrer eigenen Domain.',
      'fix-captcha':
        'Setzen Sie ein Captcha mit Infrastruktur in China ein: Alibaba Cloud Captcha, Tencent Captcha oder GeeTest. Ein Honeypot-Feld mit Ratenbegrenzung hält den Großteil des Spams ebenfalls fern.',
      'fix-forms': 'Bauen Sie das Formular direkt in Ihre Website ein oder nutzen Sie ein chinesisches Werkzeug wie Jinshuju oder Tencent Survey.',
      'fix-chat': 'Testen Sie den Dienst aus China. Fällt er aus, bieten sich Meiqia, Zhichi oder NetEase Qiyu als lokale Lösungen an.',
      'fix-test-first': 'Testen Sie den Dienst vor dem Start aus China. Fällt er aus, laden Sie ihn nur für Besucher außerhalb Chinas oder verzichten Sie ganz darauf.',
      'fix-analytics':
        'Ergänzen Sie ein Werkzeug, das in China funktioniert: Baidu Tongji oder ein selbst gehostetes Plausible oder Matomo auf einem Server in China. Laden Sie globale Tags asynchron, damit sie die Seite nie aufhalten.',
      'fix-video': 'Stellen Sie Kopien auf Youku, Bilibili, Tencent Video oder Alibaba Cloud VOD bereit und zeigen Sie diese Besuchern aus China.',
      'fix-embeds': 'Ersetzen Sie die Einbettung durch ein verlinktes Vorschaubild oder nutzen Sie auf Ihren China-Seiten die Entsprechungen von Weibo oder WeChat.',
      'fix-comments': 'Nutzen Sie die integrierte Kommentarfunktion, ein selbst gehostetes System wie Waline oder Changyan.',
      'fix-avatars': 'Stellen Sie Avatare auf einen chinesischen Spiegel wie Cravatar (cravatar.cn) um oder deaktivieren Sie sie unter Einstellungen > Diskussion.',
      'fix-maps': 'Nutzen Sie einen in China lizenzierten Anbieter: AMap, Baidu Maps oder Tencent Maps. Für eine einzelne Adresse genügt ein statisches Kartenbild.',
      'fix-payments': 'Binden Sie Alipay, WeChat Pay oder UnionPay über einen für China lizenzierten Zahlungsdienstleister ein.',
      'fix-search': 'Setzen Sie auf eine Suche, die sich in China betreiben lässt: Alibaba Cloud OpenSearch oder ein selbst gehostetes Meilisearch.',
      'fix-backend': 'Verlagern Sie das Backend in eine chinesische Cloud (Alibaba Cloud, Tencent Cloud) oder leiten Sie es über einen Server, den Sie in China kontrollieren.',
      'fix-china-cdn': 'Liefern Sie die Dateien über ein CDN mit Knoten in Festlandchina aus (Alibaba Cloud, Tencent Cloud). Voraussetzung ist eine ICP-Registrierung.',
      'fix-replatform':
        'Plattformen dieser Art lassen sich nicht in China hosten. Eine China-Version bedeutet in der Regel den Umzug zu einem Hosting, das Sie selbst kontrollieren, samt ICP-Registrierung.',
      'fix-jetpack':
        'Deaktivieren Sie den Site Accelerator von Jetpack (Bild- und Datei-CDN) sowie die Statistiken und hosten Sie Bilder auf Ihrem eigenen Server oder einem chinesischen CDN.',
      'fix-emoji': 'Entfernen Sie das Emoji-Skript von WordPress (wenige Zeilen in der functions.php oder ein kleines Plugin). Aktuelle Systeme stellen Emojis selbst dar.',
      'fix-translatepress':
        'Übersetzen Sie vor dem Start sämtliche Texte, damit keine Live-Aufrufe anfallen, oder wechseln Sie zu einem Plugin ohne externe Aufrufe wie Polylang.',
      'fix-google-other': 'Ermitteln Sie, was diese Ressource lädt, und entfernen oder ersetzen Sie sie für Besucher aus China.',
      'fix-none': '',
    },
    hosting: {
      'host-mainland':
        'Für Besucher aus China verweist Ihre Website auf einen Server in Festlandchina ({network}). Schneller lädt eine Website hinter der Firewall nicht.',
      'host-china-cdn':
        'Ihre Domain verweist auf {provider}, ein chinesisches CDN. Umfasst das Liefergebiet Festlandchina, was eine ICP-Registrierung voraussetzt, werden Besucher aus China von Servern vor Ort bedient. Von unserem Messpunkt aus antwortete es außerhalb Chinas ({country}).',
      'host-platform-subdomain':
        'Die Website läuft unter der Subdomain einer gemeinsam genutzten Plattform. Subdomains wie .vercel.app werden in China häufig gedrosselt oder gesperrt, und für eine fremde Domain ist keine ICP-Registrierung möglich.',
      'host-wix': 'Die Website wird bei Wix gehostet. Die Server antworten aus China, doch im August 2026 wurde keiner von drei Testaufrufen abgeschlossen.',
      'host-sni':
        'Die Website wird bei {provider} gehostet. HTTPS-Verbindungen zu diesen Plattformen sind aus China unzuverlässig, weil die Firewall nach dem Servernamen der Verbindung filtert.',
      'host-cloudfront':
        'Die Website wird über das globale Netz von AWS CloudFront ausgeliefert, das keine Knoten in Festlandchina hat. Über einen Privatanschluss in Peking wurde im August 2026 keiner von drei Aufrufen abgeschlossen.',
      'host-vercel':
        'Die Website wird bei Vercel gehostet, außerhalb Chinas ({country}). Vercel räumt in der eigenen Dokumentation ein, Verfügbarkeit und Geschwindigkeit in Festlandchina nicht garantieren zu können.',
      'host-cloudflare':
        'Die Website liegt hinter Cloudflare. In den Standardtarifen landen Besucher aus China an einem Knoten im Ausland, meist in Hongkong, Japan oder an der US-Westküste. Das Netz innerhalb Chinas ist ein Enterprise-Produkt und setzt eine ICP-Registrierung voraus.',
      'host-shopify':
        'Der Shop wird bei Shopify außerhalb Chinas gehostet. Er lädt, aber langsam: im Median 3,6 Sekunden in Tests vom August 2026 aus einem chinesischen Rechenzentrum.',
      'host-hk':
        'Die Website wird in Hongkong gehostet ({network}). Eine ICP-Registrierung entfällt, und der Weg ist kurz; der Datenverkehr überquert dennoch die Grenze zu Festlandchina.',
      'host-abroad':
        'Die Website wird außerhalb Chinas gehostet ({country}, {network}); jede Anfrage eines Besuchers aus China muss also die Grenze passieren. In Chinafys Benchmark 2026 mit 614 Websites lag die Zeit bis zum ersten Byte in Peking vier- bis viereinhalbmal so hoch wie in Virginia oder London.',
      'host-unknown': 'Den Hosting-Standort der Website konnten wir nicht ermitteln.',
    },
    readiness: {
      icp: {
        title: 'ICP-Nummer',
        pass: 'Nummer {value} gefunden, mit Link zum MIIT-Register.',
        warn: 'Keine ICP-Nummer gefunden. Ohne sie bleiben die Ports 80 und 443 auf einem Server in Festlandchina für Ihre Website geschlossen.',
      },
      'icp-unlinked': {
        title: 'ICP-Nummer',
        warn: 'Nummer {value} gefunden, jedoch ohne den vorgeschriebenen Link zu beian.miit.gov.cn.',
      },
      psb: {
        title: 'Registrierung bei der Polizei (PSB)',
        pass: 'Nummer {value} gefunden.',
        warn: 'Keine PSB-Nummer gefunden. Eine in China gehostete Website muss sich binnen 30 Tagen nach dem Start registrieren und die Nummer anzeigen.',
        info: 'Erst erforderlich, wenn die Website in Festlandchina gehostet wird.',
      },
      'tld-eligible': { title: 'Domainendung', pass: 'Die Endung {value} ist für eine ICP-Registrierung zugelassen.' },
      'tld-ineligible': {
        title: 'Domainendung',
        fail: 'Die Endung {value} steht nicht auf der MIIT-Liste zugelassener Domainendungen; eine ICP-Registrierung ist damit ausgeschlossen. Eine Website für China braucht .cn, .com oder eine andere zugelassene Endung.',
      },
      'tld-org': {
        title: 'Domainendung',
        warn: 'Für .org nimmt das MIIT seit 2018 keine neuen ICP-Registrierungen mehr an. Ältere Registrierungen behalten ihre Nummer.',
      },
      'tld-co': {
        title: 'Domainendung',
        warn: 'Die Endung .co wurde 2018 zugelassen, fehlt aber auf der aktuellen MIIT-Liste. Manche Provinzen akzeptieren sie, andere nicht; klären Sie das mit Ihrem Dienstleister.',
      },
      chinese: {
        title: 'Chinesische Sprachversion',
        pass: 'Sprachversion gefunden ({value}).',
        warn: 'Keine Version in vereinfachtem Chinesisch angegeben (weder hreflang zh noch Seitensprache). Besucher aus China erwarten sie, Baidu ebenso.',
      },
      'baidu-verify': {
        title: 'Baidu-Verifizierung',
        pass: 'Das Tag baidu-site-verification ist vorhanden.',
        info: 'Es fehlt das Verifizierungs-Tag für die Baidu Webmaster Tools. Ohne es können Sie keine Seiten einreichen und die Indexierung nicht verfolgen.',
      },
      'baidu-analytics': {
        title: 'Baidu Tongji',
        pass: 'Baidu Tongji ist installiert.',
        info: 'Es ist kein Analysewerkzeug installiert, das in China funktioniert. Üblich ist Baidu Tongji.',
      },
      commerce: {
        title: 'Onlineshop',
        info: 'Wir haben {value} erkannt. Wer in China verkauft, braucht lokale Zahlungsarten und eine gesonderte Prüfung der Lizenzen.',
      },
    },
    ui: {
      resultsTitle: 'Ihr Prüfbericht',
      reportFor: 'Bericht für',
      scoreLabel: 'China-Kompatibilität',
      findingsTitle: 'Befunde',
      whyLabel: 'Warum das zählt',
      fixLabel: 'Lösung',
      sourceLabel: 'Quelle',
      foundLabel: 'Fundstellen',
      referencedNote: 'Nur in Ihrem JavaScript erwähnt: Die Ressource lädt, sobald die Funktion ausgeführt wird.',
      hostingTitle: 'Hosting Ihrer Website',
      servedFrom: 'Land',
      network: 'Netz',
      provider: 'CDN oder Plattform',
      ip: 'IP-Adresse',
      chinaView: 'Ergebnis einer simulierten DNS-Anfrage aus China.',
      checklistTitle: 'Checkliste für den Start in China',
      checklistIntro: 'Was ein Start in China verlangt, über eine funktionierende Seite hinaus.',
      hostsTitle: 'Externe Hosts dieser Seite ({count})',
      hostsIntro: 'Jeder Drittanbieter-Host, den die Seite lädt, mit unserem Urteil.',
      detailsTitle: 'Details der Prüfung',
      pagesScanned: 'Geprüfte Seiten',
      filesScanned: '{scripts} Skripte und {styles} Stylesheets gelesen',
      responseTime: 'Antwortzeit der Startseite: {ms} ms',
      htmlSize: 'HTML-Umfang: {kb} KB',
      builtWith: 'Erstellt mit {platform}',
      copy: 'Bericht kopieren',
      copied: 'Kopiert',
      again: 'Weitere Website prüfen',
      noFindings: 'Keine externen Abhängigkeiten, die in China ausfallen. Sehr gut.',
      unknown: 'unbekannt',
      failed: 'fehlgeschlagen',
      score: 'Punktzahl',
      colon: ': ',
    },
  },
};

export const scannerCopy: Record<Locale, ScannerCopy> = { en, fr, es, de };
