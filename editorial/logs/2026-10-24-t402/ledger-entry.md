
## T4-02 paired-vantage study, verified twice 24 October 2026

### F2, F3, F6, F7: paired resource observations

- Source: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same
  Hosts, Opposite Answers, 28 August 2026, updated 30 August 2026.
- URL: https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html
- Cloud vantage: Alibaba Cloud (阿里云) cn-zhangjiakou, 28 August 2026,
  direct requests, 72 per resource, 30-second resource timeout.
- Home vantage: Beijing China Mobile (中国移动) residential broadband,
  30 August 2026, 88 sites, 264 page loads, 60-second page-load ceiling.
- Values, cloud answers and median TTFB / home answers: fonts.googleapis.com
  72 of 72, 111ms / 0 of 54; fonts.gstatic.com 72 of 72, 102ms / 0 of 6;
  www.googletagmanager.com 72 of 72, 118ms / 0 of 112;
  www.google.com/recaptcha 0 of 72 / www.google.com host 0 of 18;
  cdn.jsdelivr.net 72 of 72, 660ms / 36 of 36. Home medians unavailable.
- Derived count: four resources with no home answers; one with no cloud
  answers. Three paired rows split. These are resource counts, not a
  national rate, transaction outcome or causal explanation.
- Verified 1: 2026-10-24, web fetch and independent Node fetch, HTTP 200;
  source table, limits and dates read.
- Verified 2: 2026-10-24, new Node fetch in createarticle iteration 8,
  HTTP 200, byte-identical source and unchanged claims.
- Both fetches SHA-256:
  903fba011f8524b8772c440287f32696bb48e14b7127e78256480efb60dd6afe
- Used in: china-latency-vantage-point-study; correction of the count and
  method paragraph in is-wordpress-blocked-in-china, all four locales.
- Decision: corrected the fact-bank preamble through PLAN.md. A cloud
  observation supplies no universal consumer latency bound. Retained
  different dates, different methods and home host-only reCAPTCHA scope.

### F6: GreatFire Google Fonts stylesheet URL

- URL: https://en.greatfire.org/https/fonts.googleapis.com
- Source: GreatFire; last tested 15 October 2026, four recent conclusive
  tests connected normally, 0 of 4 disrupted. No named carrier or timing.
- Verified 1: 2026-10-24, web and Node fetch, HTTP 200, date and count read.
- Verified 2: 2026-10-24, Node re-fetch during iteration 8, HTTP 200,
  identical source. Never used to overwrite the dated home observation.
- Both fetches SHA-256:
  695705b81a411233e266bc27644b9585b1c9dd89eb6fe857fd3c73959cc0a039
- Used in: china-latency-vantage-point-study.

### TTFB definition

- Source: MDN Web Docs, Time to First Byte, modified 18 July 2025.
- URL: https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte
- Claim: interval to first response byte; connection setup can contribute.
  It does not establish completion of a page or visitor action.
- Verified 1: 2026-10-24, web and Node fetch, HTTP 200, definition and
  last-modified date read.
- Verified 2: 2026-10-24, Node re-fetch in iteration 8, HTTP 200, identical.
- Both fetches SHA-256:
  f4560182291c6a94b5d9ef79e361ad47d28b214bc2b11e461821117aa164842a
- Used in: china-latency-vantage-point-study and the corrected speed FAQ.

Fetch metadata: editorial/logs/2026-10-24-t402/sources-check1.json and
sources-check2.json. Raw responses are retained in the ignored runner
scratch directory. No source failed either validation.
