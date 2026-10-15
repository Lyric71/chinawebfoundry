---
title: "China Dependency Index, October 2026"
slug: china-dependency-index-2026-10
description: "A 55-entry register of China web dependencies, using dated
GreatFire verdicts and 21YunBox observations. Missing tests and limits
included."
excerpt: "Dated third-party evidence for 55 web dependencies, with separate
cloud and consumer results where sources publish both."
template: guide
author: cyril-drouin
category: Technology
reviewBy: 2026-11-15
---

<!-- HERO SECTION -->

China Dependency Index, October 2026

<!-- INTRODUCTION -->

Method: this China Dependency Index compiles third-party evidence. In 21YunBox’s
five-resource comparison, four went unanswered on Beijing China Mobile (中国移动)
broadband on 30 August 2026; one went unanswered on Alibaba Cloud (阿里云)
Zhangjiakou on 28 August. The full register contains 55 dependency entries,
including untested entries. The failure counts cover only the paired subset.

Edition compiled: 16 October 2026. Source tests cited: 12 March to 11 October
2026. October is the compilation month; each row retains its source’s test date.

| Evidence | What the result covers | What it cannot establish |
|---|---|---|
| GreatFire URL verdict | Reachability of the stated HTTPS URL on its test dates | A named home-line experience, latency or a completed transaction |
| 21YunBox repeated requests | Direct resource requests from Zhangjiakou | Completion from a consumer connection |
| 21YunBox home-line observations | Requests encountered during real website loads in Beijing | Every endpoint used by the same product |
| 21YunBox vendor-page loads | The named vendor website or product page | A customer’s deployment or embedded widget |
| Untested | No dated evidence in this register | A positive or negative compatibility verdict |

> Of the five resources in 21YunBox’s paired study, reCAPTCHA went unanswered from Alibaba Cloud (阿里云) cn-zhangjiakou on 28 August 2026. On Beijing China Mobile (中国移动) residential broadband on 30 August, Google Fonts’ two hosts and Google Tag Manager also went unanswered. jsDelivr answered from both.
> Source: 21YunBox, 28 and 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

<!-- SECTION: Method -->

## How the evidence was collected

ChinaWebFoundry compiled this register from GreatFire and 21YunBox. We did not
operate the mainland probes. Reading their pages again checks that a citation
still supports a claim; it does not create a new observation from China.

GreatFire reports whether a particular URL was blocked, disrupted or reachable.
Its cited pages do not identify a datacentre region or consumer carrier, so
their results have their own column. A successful connection in that source
cannot fill either of the named-vantage timing columns.

21YunBox used different methods for its resource and website studies. Its
repeated-resource test ran from Alibaba Cloud (阿里云) cn-zhangjiakou. Requests ran
throughout the sampling period, including the evening. The consumer evidence
came from a volunteer’s Beijing China Mobile (中国移动) residential broadband
connection. The word Mobile is the carrier’s name here; this was a home
broadband line, not a mobile-radio test.

> 21YunBox sampled five resources every ten minutes for twelve hours on 28 August 2026, with a 30-second timeout. Its separate Beijing home-line run on 30 August covered 88 sites and 264 page loads, with a 60-second page-load ceiling. The number of requests to each dependency varied by site.
> Source: 21YunBox, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

The table keeps resource answers and whole-page completions apart. A response
from a challenge host says nothing about whether a visitor passed that
challenge. A response from a video host does not show that a video played to the
end. Those are separate questions for the site’s acceptance checks.

Wix and AWS CloudFront appear as vendor-page observations. The CloudFront target
is explicitly aws.amazon.com/cloudfront. Its Beijing source says residential
broadband and gives no carrier. The Wix source names the vendor website, without
a reproducible full request path. Neither observation measures every customer
site on that platform.

No source supplies the same experiment for every row. A panel-wide failure
rate would therefore combine unlike observations, and the evidence cannot
rank the categories or produce a national average.

An absent value stays absent.

<!-- SECTION: Reading the register -->

## Reading the China Dependency Index

Each row has a stable host ID for citation. The target column shows the host or
URL path supported by the source. Where the record names only a product and
contains no tested endpoint, it says target unspecified. Untested means this
register has no usable dated evidence; it does not claim that nobody anywhere
has ever tested the product.

Cloud means the Alibaba Cloud (阿里云) Zhangjiakou probe. Home means Beijing China
Mobile (中国移动) broadband, except the CloudFront product-page observation, whose
carrier is unstated. TTFB is the median time until the first response byte, in
milliseconds. Unavailable means the publisher supplied no figure. A zero answer
count has no successful-response median.

The home counts for Wistia and Cloudflare’s challenge host are calculated as
total requests minus reported failures. They record answers during page loads.
The source did not publish a completion test for a video or a captcha workflow.
Keep that distinction when quoting either row.

| Index label | Reading rule |
|---|---|
| Reachable | The cited source obtained a connection or completed the stated load |
| Slow | A completed resource request had a material delay in the cited study; no universal latency threshold is applied across methods |
| Answers then stalls | A first byte arrived but the stated page-load deadline expired |
| Intermittent | GreatFire reports disruption, or the available observations vary; read the evidence note for which |
| Blocked | GreatFire reports blocking, or the named probe received no answers in its sample |
| Splits by vantage point | The paired cloud and home observations disagree |
| Untested | No dated result supports a verdict in this register |

GreatFire’s disrupted label is retained in the evidence notes. Its interference
results do not establish whether a particular failure came from DNS or a later
connection stage. Likewise, a row marked reachable does not certify a product’s
licence, data handling or checkout process.

This is the first edition, so every change cell reads baseline. A later edition
can compare a matching endpoint and method. A newly found old test changes our
evidence coverage; it does not prove the network improved this month. The same
applies when a publisher withdraws a figure or changes how it classifies refused
connections.

<!-- SECTION: Panel -->

## The complete dependency register

The raw panel contains the same entries and source dates as this table. Category
groups are sorted by observed failure type, then by dependency name. Every dated
finding is attributed in the evidence notes below. Entries without a dated
result remain untested.

| Host ID | Target | Purpose | Category | Cloud TTFB ms | Cloud count | Home TTFB ms | Home count | Verdict | Tested | Change |
|---|---|---|---|---|---|---|---|---|---|---|
| host-google-analytics | www.google-analytics.com | Google Analytics | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-07-24 | baseline |
| host-meta-pixel | connect.facebook.net | Meta Pixel | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-05-27 | baseline |
| host-google-tag-manager | www.googletagmanager.com | Google Tag Manager | Analytics | 118 | 72 of 72 | Unavailable | 0 of 112 | splits by vantage point | 2026-08-28, 2026-08-30 | baseline |
| host-hotjar | static.hotjar.com | Hotjar | Analytics | Unavailable | Unavailable | Unavailable | 0 of 6 | intermittent | 2026-08-30, 2026-09-30 | baseline |
| host-mixpanel-script | cdn.mxpnl.com | Mixpanel | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | intermittent | 2026-09-06 | baseline |
| host-plausible | plausible.io | Plausible | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | intermittent | 2026-08-20 | baseline |
| host-amplitude-events | api.amplitude.com | Amplitude events | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-10 | baseline |
| host-amplitude-script | cdn.amplitude.com | Amplitude script | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-14 | baseline |
| host-linkedin-insight | snap.licdn.com | LinkedIn Insight Tag | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-22 | baseline |
| host-microsoft-clarity | www.clarity.ms | Microsoft Clarity | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-15 | baseline |
| host-mixpanel-events | api.mixpanel.com | Mixpanel | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-19 | baseline |
| host-segment | api.segment.io | Segment | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-15 | baseline |
| host-matomo | cdn.matomo.cloud | Matomo cloud | Analytics | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-google-libraries | ajax.googleapis.com | Google Hosted Libraries | Fonts and script CDNs | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-08-22 | baseline |
| host-google-fonts-css | fonts.googleapis.com | Google Fonts CSS | Fonts and script CDNs | 111 | 72 of 72 | Unavailable | 0 of 54 | splits by vantage point | 2026-08-28, 2026-08-30 | baseline |
| host-google-fonts-files | fonts.gstatic.com | Google Fonts files | Fonts and script CDNs | 102 | 72 of 72 | Unavailable | 0 of 6 | splits by vantage point | 2026-08-28, 2026-08-30 | baseline |
| host-adobe-fonts | use.typekit.net | Adobe Fonts | Fonts and script CDNs | Unavailable | Unavailable | Unavailable | 0 of 11 | intermittent | 2026-08-30, 2026-09-22 | baseline |
| host-jsdelivr | cdn.jsdelivr.net | jsDelivr | Fonts and script CDNs | 660 | 72 of 72 | Unavailable | 36 of 36 | slow | 2026-08-28, 2026-08-30 | baseline |
| host-cdnjs | cdnjs.cloudflare.com | cdnjs | Fonts and script CDNs | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-27 | baseline |
| host-unpkg | unpkg.com | unpkg | Fonts and script CDNs | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-08-14 | baseline |
| host-mailchimp | cdn-images.mailchimp.com | Mailchimp | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-09-10 | baseline |
| host-recaptcha | www.google.com/recaptcha | Google reCAPTCHA | Forms and chat | Unavailable | 0 of 72 | Unavailable | 0 of 18 | blocked | 2026-08-28, 2026-08-30 | baseline |
| host-cloudflare-turnstile | challenges.cloudflare.com | Cloudflare Turnstile | Forms and chat | Unavailable | Unavailable | Unavailable | 9 of 12 | intermittent | 2026-08-30, 2026-10-11 | baseline |
| host-calendly | calendly.com | Calendly | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-10-03 | baseline |
| host-hcaptcha | api2.hcaptcha.com | hCaptcha | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-14 | baseline |
| host-intercom | widget.intercom.io | Intercom | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-23 | baseline |
| host-typeform | form.typeform.com | Typeform | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-30 | baseline |
| host-zendesk | static.zdassets.com | Zendesk | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-10-08 | baseline |
| host-crisp | Target unspecified | Crisp | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-drift | js.driftt.com | Drift | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-hubspot-script | js.hs-scripts.com | HubSpot loader | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-tawk-to | Target unspecified | Tawk.to | Forms and chat | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-disqus | disqus.com | Disqus | Embeds | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-09-13 | baseline |
| host-instagram | www.instagram.com | Instagram | Embeds | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-10-03 | baseline |
| host-soundcloud | w.soundcloud.com | SoundCloud | Embeds | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-06-24 | baseline |
| host-spotify | open.spotify.com | Spotify | Embeds | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-09-12 | baseline |
| host-x-timeline | platform.twitter.com | X, the timeline widget | Embeds | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-07-07 | baseline |
| host-wistia | fast.wistia.com | Wistia | Embeds | Unavailable | Unavailable | Unavailable | 9 of 15 | intermittent | 2026-03-17, 2026-08-30 | baseline |
| host-loom | Target unspecified | Loom | Embeds | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-mapbox-telemetry | events.mapbox.com | Mapbox, telemetry | Maps | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-03-12 | baseline |
| host-openstreetmap | tile.openstreetmap.org | OpenStreetMap tiles | Maps | Unavailable | Unavailable | Unavailable | Unavailable | blocked | 2026-09-07 | baseline |
| host-mapbox-api | api.mapbox.com | Mapbox, tiles and API | Maps | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-08-31 | baseline |
| host-wix | wix.com | Wix | Platforms | 532 | 0 of 3 | Unavailable | Unavailable | answers then stalls | 2026-08-30 | baseline |
| host-webflow | webflow.com | Webflow | Platforms | Unavailable | Unavailable | Unavailable | Unavailable | intermittent | 2026-08-23 | baseline |
| host-shopify | cdn.shopify.com | Shopify | Platforms | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-10-08 | baseline |
| host-squarespace | www.squarespace.com | Squarespace | Platforms | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-10-03 | baseline |
| host-netlify | Target unspecified | Netlify | Platforms | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-sanity | Target unspecified | Sanity | Platforms | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-algolia | algolia.net | Algolia | Infrastructure | Unavailable | Unavailable | Unavailable | Unavailable | intermittent | 2026-08-31 | baseline |
| host-firebase | firebase.google.com | Firebase | Infrastructure | Unavailable | Unavailable | Unavailable | Unavailable | intermittent | 2026-09-14 | baseline |
| host-sentry | browser.sentry-cdn.com | Sentry | Infrastructure | Unavailable | Unavailable | Unavailable | Unavailable | intermittent | 2026-10-01 | baseline |
| host-aws-cloudfront | aws.amazon.com/cloudfront | AWS CloudFront | Infrastructure | 665 | 3 of 3 | 718 | 3 of 3 | reachable | 2026-08-28, 2026-08-30 | baseline |
| host-bootstrap-cdn | Target unspecified | Bootstrap CDN | Infrastructure | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |
| host-paypal | www.paypal.com | PayPal | Payments | Unavailable | Unavailable | Unavailable | Unavailable | reachable | 2026-09-25 | baseline |
| host-stripe | js.stripe.com | Stripe | Payments | Unavailable | Unavailable | Unavailable | Unavailable | untested | No dated test | baseline |

### Evidence attached to each row

**host-google-analytics (Google Analytics).**
> GreatFire reports www.google-analytics.com blocked, last tested 24 July 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 24 July 2026. https://en.greatfire.org/https/www.google-analytics.com

**host-meta-pixel (Meta Pixel).**
> GreatFire reports connect.facebook.net blocked, last tested 27 May 2026; historical verdict older than 90 days, without a recent conclusive count.
> Source: GreatFire, 27 May 2026. https://en.greatfire.org/https/connect.facebook.net

**host-google-tag-manager (Google Tag Manager).**
> 21YunBox observed www.googletagmanager.com: 72 of 72 direct requests answered from Alibaba Cloud cn-zhangjiakou on 28 August 2026 at 118ms median first byte; 0 of 112 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 28 August 2026, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-hotjar (Hotjar).**
> GreatFire reports static.hotjar.com disrupted, last tested 30 September 2026; interference recorded in 1 of 2 conclusive tests.
> Source: GreatFire, 30 September 2026. https://en.greatfire.org/https/static.hotjar.com

> 21YunBox observed static.hotjar.com: 0 of 6 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-mixpanel-script (Mixpanel).**
> GreatFire reports cdn.mxpnl.com disrupted, last tested 6 September 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 6 September 2026. https://en.greatfire.org/https/cdn.mxpnl.com

**host-plausible (Plausible).**
> GreatFire reports plausible.io disrupted, last tested 20 August 2026; interference recorded in 1 of 2 conclusive tests.
> Source: GreatFire, 20 August 2026. https://en.greatfire.org/https/plausible.io

**host-amplitude-events (Amplitude events).**
> GreatFire reports api.amplitude.com not blocked, last tested 10 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 10 September 2026. https://en.greatfire.org/https/api.amplitude.com

**host-amplitude-script (Amplitude script).**
> GreatFire reports cdn.amplitude.com not blocked, last tested 14 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 14 September 2026. https://en.greatfire.org/https/cdn.amplitude.com

**host-linkedin-insight (LinkedIn Insight Tag).**
> GreatFire reports snap.licdn.com not blocked, last tested 22 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 22 September 2026. https://en.greatfire.org/https/snap.licdn.com

**host-microsoft-clarity (Microsoft Clarity).**
> GreatFire reports www.clarity.ms not blocked, last tested 15 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 15 September 2026. https://en.greatfire.org/https/www.clarity.ms

**host-mixpanel-events (Mixpanel).**
> GreatFire reports api.mixpanel.com not blocked, last tested 19 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 19 September 2026. https://en.greatfire.org/https/api.mixpanel.com

**host-segment (Segment).**
> GreatFire reports api.segment.io not blocked, last tested 15 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 15 September 2026. https://en.greatfire.org/https/api.segment.io

**host-matomo (Matomo cloud).**
No dated third-party test is recorded for this entry; its status is untested.

**host-google-libraries (Google Hosted Libraries).**
> GreatFire reports ajax.googleapis.com blocked, last tested 22 August 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 22 August 2026. https://en.greatfire.org/https/ajax.googleapis.com

**host-google-fonts-css (Google Fonts CSS).**
> 21YunBox observed fonts.googleapis.com: 72 of 72 direct requests answered from Alibaba Cloud cn-zhangjiakou on 28 August 2026 at 111ms median first byte; 0 of 54 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 28 August 2026, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-google-fonts-files (Google Fonts files).**
> 21YunBox observed fonts.gstatic.com: 72 of 72 direct requests answered from Alibaba Cloud cn-zhangjiakou on 28 August 2026 at 102ms median first byte; 0 of 6 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 28 August 2026, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-adobe-fonts (Adobe Fonts).**
> GreatFire reports use.typekit.net not blocked, last tested 22 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 22 September 2026. https://en.greatfire.org/https/use.typekit.net

> 21YunBox observed use.typekit.net: 0 of 11 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-jsdelivr (jsDelivr).**
> 21YunBox observed cdn.jsdelivr.net: 72 of 72 direct requests answered from Alibaba Cloud cn-zhangjiakou on 28 August 2026 at 660ms median first byte; 36 of 36 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 28 August 2026, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cdnjs (cdnjs).**
> GreatFire reports cdnjs.cloudflare.com not blocked, last tested 27 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 27 September 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com

**host-unpkg (unpkg).**
> GreatFire reports unpkg.com not blocked, last tested 14 August 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 14 August 2026. https://en.greatfire.org/https/unpkg.com

**host-mailchimp (Mailchimp).**
> GreatFire reports cdn-images.mailchimp.com blocked, last tested 10 September 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 10 September 2026. https://en.greatfire.org/https/cdn-images.mailchimp.com

**host-recaptcha (Google reCAPTCHA).**
> 21YunBox observed www.google.com/recaptcha: 0 of 72 direct requests answered from Alibaba Cloud cn-zhangjiakou on 28 August 2026; 0 of 18 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 28 August 2026, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cloudflare-turnstile (Cloudflare Turnstile).**
> GreatFire reports challenges.cloudflare.com not blocked, last tested 11 October 2026; interference recorded in 0 of 2 conclusive tests.
> Source: GreatFire, 11 October 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

> 21YunBox observed challenges.cloudflare.com: 9 of 12 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-calendly (Calendly).**
> GreatFire reports calendly.com not blocked, last tested 3 October 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 3 October 2026. https://en.greatfire.org/https/calendly.com

**host-hcaptcha (hCaptcha).**
> GreatFire reports api2.hcaptcha.com not blocked, last tested 14 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 14 September 2026. https://en.greatfire.org/https/api2.hcaptcha.com

**host-intercom (Intercom).**
> GreatFire reports widget.intercom.io not blocked, last tested 23 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 23 September 2026. https://en.greatfire.org/https/widget.intercom.io

**host-typeform (Typeform).**
> GreatFire reports form.typeform.com not blocked, last tested 30 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 30 September 2026. https://en.greatfire.org/https/form.typeform.com

**host-zendesk (Zendesk).**
> GreatFire reports static.zdassets.com not blocked, last tested 8 October 2026; interference recorded in 0 of 2 conclusive tests.
> Source: GreatFire, 8 October 2026. https://en.greatfire.org/https/static.zdassets.com

**host-crisp (Crisp).**
No dated third-party test is recorded for this entry; its status is untested.

**host-drift (Drift).**
No dated third-party test is recorded for this entry; its status is untested.

**host-hubspot-script (HubSpot loader).**
No dated third-party test is recorded for this entry; its status is untested.

**host-tawk-to (Tawk.to).**
No dated third-party test is recorded for this entry; its status is untested.

**host-disqus (Disqus).**
> GreatFire reports disqus.com blocked, last tested 13 September 2026; interference recorded in 2 of 2 conclusive tests.
> Source: GreatFire, 13 September 2026. https://en.greatfire.org/https/disqus.com

**host-instagram (Instagram).**
> GreatFire reports www.instagram.com blocked, last tested 3 October 2026; interference recorded in 2 of 2 conclusive tests.
> Source: GreatFire, 3 October 2026. https://en.greatfire.org/https/www.instagram.com

**host-soundcloud (SoundCloud).**
> GreatFire reports w.soundcloud.com blocked, last tested 24 June 2026; historical verdict older than 90 days, without a recent conclusive count.
> Source: GreatFire, 24 June 2026. https://en.greatfire.org/https/w.soundcloud.com

**host-spotify (Spotify).**
> GreatFire reports open.spotify.com blocked, last tested 12 September 2026; interference recorded in 4 of 4 conclusive tests.
> Source: GreatFire, 12 September 2026. https://en.greatfire.org/https/open.spotify.com

**host-x-timeline (X, the timeline widget).**
> GreatFire reports platform.twitter.com blocked, last tested 7 July 2026; historical verdict older than 90 days, without a recent conclusive count.
> Source: GreatFire, 7 July 2026. https://en.greatfire.org/https/platform.twitter.com

**host-wistia (Wistia).**
> GreatFire reports fast.wistia.com not blocked, last tested 17 March 2026; historical verdict older than 90 days, without a recent conclusive count.
> Source: GreatFire, 17 March 2026. https://en.greatfire.org/https/fast.wistia.com

> 21YunBox observed fast.wistia.com: 9 of 15 requests answered on Beijing China Mobile broadband on 30 August 2026.
> Source: 21YunBox, 30 August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-loom (Loom).**
No dated third-party test is recorded for this entry; its status is untested.

**host-mapbox-telemetry (Mapbox, telemetry).**
> GreatFire reports events.mapbox.com blocked, last tested 12 March 2026; historical verdict older than 90 days, without a recent conclusive count.
> Source: GreatFire, 12 March 2026. https://en.greatfire.org/https/events.mapbox.com

**host-openstreetmap (OpenStreetMap tiles).**
> GreatFire reports tile.openstreetmap.org blocked, last tested 7 September 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 7 September 2026. https://en.greatfire.org/https/tile.openstreetmap.org

**host-mapbox-api (Mapbox, tiles and API).**
> GreatFire reports api.mapbox.com not blocked, last tested 31 August 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 31 August 2026. https://en.greatfire.org/https/api.mapbox.com

**host-wix (Wix).**
> 21YunBox’s Wix vendor-site load from Alibaba Cloud cn-zhangjiakou on 30 August 2026 returned a median first byte at 532ms, with 0 of 3 page loads completed inside 60 seconds.
> Source: 21YunBox, 30 August 2026. https://www.21cloudbox.com/support/wix-china.html

**host-webflow (Webflow).**
> GreatFire reports webflow.com disrupted, last tested 23 August 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 23 August 2026. https://en.greatfire.org/https/webflow.com

**host-shopify (Shopify).**
> GreatFire reports cdn.shopify.com not blocked, last tested 8 October 2026; interference recorded in 0 of 2 conclusive tests.
> Source: GreatFire, 8 October 2026. https://en.greatfire.org/https/cdn.shopify.com

**host-squarespace (Squarespace).**
> GreatFire reports www.squarespace.com not blocked, last tested 3 October 2026; interference recorded in 0 of 3 conclusive tests.
> Source: GreatFire, 3 October 2026. https://en.greatfire.org/https/www.squarespace.com

**host-netlify (Netlify).**
No dated third-party test is recorded for this entry; its status is untested.

**host-sanity (Sanity).**
No dated third-party test is recorded for this entry; its status is untested.

**host-algolia (Algolia).**
> GreatFire reports algolia.net disrupted, last tested 31 August 2026; interference recorded in 2 of 2 conclusive tests.
> Source: GreatFire, 31 August 2026. https://en.greatfire.org/https/algolia.net

**host-firebase (Firebase).**
> GreatFire reports firebase.google.com disrupted, last tested 14 September 2026; interference recorded in 2 of 2 conclusive tests.
> Source: GreatFire, 14 September 2026. https://en.greatfire.org/https/firebase.google.com

**host-sentry (Sentry).**
> GreatFire reports browser.sentry-cdn.com disrupted, last tested 1 October 2026; interference recorded in 1 of 1 conclusive tests.
> Source: GreatFire, 1 October 2026. https://en.greatfire.org/https/browser.sentry-cdn.com

**host-aws-cloudfront (AWS CloudFront).**
> 21YunBox loaded the CloudFront product page 3 of 3 times from Alibaba Cloud cn-zhangjiakou on 28 August 2026 (665ms median first byte), and 3 of 3 from Beijing residential broadband on 30 August (718ms); the carrier is unstated.
> Source: 21YunBox, 28 August 2026, 30 August 2026. https://www.21cloudbox.com/support/aws-cloudfront-china.html

**host-bootstrap-cdn (Bootstrap CDN).**
No dated third-party test is recorded for this entry; its status is untested.

**host-paypal (PayPal).**
> GreatFire reports www.paypal.com not blocked, last tested 25 September 2026; interference recorded in 0 of 1 conclusive tests.
> Source: GreatFire, 25 September 2026. https://en.greatfire.org/https/www.paypal.com

**host-stripe (Stripe).**
No dated third-party test is recorded for this entry; its status is untested.
<!-- SECTION: Findings -->

## What the split changes for a site owner

The font and tag-manager rows show why a cloud result needs its network label.
The same resources that answered the datacentre probe went unanswered on the
consumer connection. Treating the cloud observation as a visitor experience
would produce the wrong delivery decision for that Beijing sample.

For your own site, start with the exact request. A font stylesheet, its font
files and the tag manager’s script are separate dependencies. Find which page
needs them and whether a failed response prevents the visitor from doing
something. Self-hosting a font file removes that particular external request; it
does not repair an unrelated form or analytics endpoint.

The analytics rows also separate the script from event collection. GreatFire’s
Mixpanel results differ between the library host and the ingestion host. They
were tested on different dates, so the table cannot reconstruct a single user
session. It does show why checking only one address gives an incomplete account
of the integration.

First-byte timing needs the same care. The Wix observation returned a first byte
and still failed to finish within the source’s page-load deadline. A timing
dashboard that stops at the first byte would miss that outcome. Follow the
request through to the action that matters on the page.

Our guide to third-party scripts in China explains how to trace those calls
through a page. For changes to forms or tracking, Technical Integration covers
the implementation work. The guide to what the Great Firewall blocks explains
how to read the wider dependency evidence.

## Gaps that remain visible

Untested entries include Drift’s widget host and the HTTPS HubSpot loader.
Matomo’s cloud tracker has no dated replacement for the withdrawn vendor-site
timing. The absence of a usable record gives you no basis for calling those
integrations either reliable or blocked.

The panel also keeps Crisp, Tawk.to, Loom, Sanity, Netlify and Bootstrap CDN
without a tested target, and Stripe’s script without a verdict. An
account-specific deployment can use a different host from the product website.
Do not fill these cells with a timing from a homepage just because the brand
matches.

Some GreatFire records are old. Their dates remain visible because a successful
connection months ago can be relevant background without settling today’s
decision. The consumer observations cover one Beijing home line; they cannot
describe every province or carrier. Repeated requests on one connection also
share conditions, so their counts should not be read as independent samples of
China’s population.

Use the register to identify which external request deserves attention, then
check that the replacement serves the same task. Keep the observed URL and date
with any finding passed to your development team. That makes the difference
between a useful fault report and a brand name on a blacklist.

<!-- CTA -->

CTA: Run your own site against this list

