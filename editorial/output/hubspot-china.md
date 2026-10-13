---
title: "HubSpot in China: What Works and What Does Not"
slug: hubspot-china
description: "HubSpot’s scripts and a HubSpot-hosted site carry different risks in China. What GreatFire’s tests show, what is untested, and the fix for each."
excerpt: "Which parts of a HubSpot stack have a dated test from inside China, which have none, and how to keep the lead when one fails."
template: guide
author: cyril-drouin
category: Technology
reviewBy: 2026-10-31
---

<!-- HERO SECTION -->

Is HubSpot blocked in China? Part of it has never been tested

<!-- INTRODUCTION -->

Parts of HubSpot reach mainland China, and the parts that run on your own
pages have no current test. GreatFire, which tracks censorship in China, has
read none of the HubSpot hosts it tested over HTTPS as blocked. It reads the
HubSpot app as reachable (last tested 22 September 2026) and its API host as
disrupted on its one conclusive test (10 September 2026). Your pages load
something else: the tracking and form scripts, plus a chat loader. There is no
record of whether those reach a visitor in Chengdu today.

That shapes the fix. With nothing to measure against, you build each page so
the lead survives when a HubSpot script never arrives, and you start with the
forms. A site hosted on HubSpot’s own CMS is a different problem with its
own fix: it is served from outside the mainland and can’t carry an ICP filing
(ICP备案). Every verdict below was read at its source on 14 October 2026.

<!-- SECTION: Which HubSpot hosts are blocked in China, and which are untested -->

## Which HubSpot hosts are blocked in China, and which are untested

| Host                  | What it does for your site      | GreatFire verdict | Conclusive tests | Last tested |
| --------------------- | ------------------------------- | ----------------- | ---------------- | ----------- |
| `app.hubspot.com`     | The app your team logs in to    | Reachable         | 0 of 1 disrupted | 22 Sep 2026 |
| `api.hubspot.com`     | HubSpot API host                | Intermittent      | 1 of 1 disrupted | 10 Sep 2026 |
| `hs-sites.com`        | System domain, US East accounts | Reachable         | 0 of 1 disrupted | 2 Aug 2026  |
| `js.hs-scripts.com`   | Tracking code loader            | Untested          | none over HTTPS  | n/a         |
| `js.hs-analytics.net` | Tracking script                 | Untested          | none             | n/a         |
| `js.hs-banner.com`    | Places HubSpot’s cookies        | Untested          | none             | n/a         |
| `js.hsforms.net`      | Draws embedded forms            | Untested          | none             | n/a         |
| `api.hsforms.com`     | Forms submission API            | Untested          | none             | n/a         |
| `api.usemessages.com` | Chat (chatflows)                | Untested          | none             | n/a         |

> GreatFire read https://api.hubspot.com as 100% disrupted, 1 of 1
> conclusive tests in the last 90 days, last tested 10 September 2026. It read
> https://app.hubspot.com as not blocked, 0 of 1, last tested 22 September
> 2026, and https://hs-sites.com as not blocked, 0 of 1, last tested 2 August
> 2026.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/api.hubspot.com,
> https://en.greatfire.org/https/app.hubspot.com and
> https://en.greatfire.org/https/hs-sites.com

One conclusive test per host is a thin record, so read each verdict with its
date. We recheck the table once a verdict passes 90 days.

The loader is the gap that matters. GreatFire’s newest test of
`js.hs-scripts.com` ran over plain HTTP, on 13 September 2026. A page served
over HTTPS fetches the script over HTTPS, and GreatFire notes the two are
filtered by different means, so that reading says nothing about your visitors.
Its last HTTPS reading of a HubSpot script address is from 14 July 2026, past
the 90 days we allow a verdict. We list the script as untested.

No timed load fills the gap: 21YunBox, whose mainland probes we cite on other
pages, publishes no HubSpot figure (its HubSpot page, reviewed 7 October 2026,
deals with data residency). For the other tools
a marketing site tends to load, see our table of what the Great Firewall
blocks, host by host.

<!-- SECTION: What a stalled tracking script costs you -->

## What a stalled tracking script costs you

HubSpot asks you to paste its tracking code just before the closing body tag.
The code fetches a loader from `js.hs-scripts.com`, then the tracking script
from `js.hs-analytics.net`. A third file, from `js.hs-banner.com`, places
HubSpot’s cookies even if you don’t use its consent banner. (HubSpot’s own
troubleshooting guide expects to see all three in your browser’s network
panel.)

> If the tracking code is not working, HubSpot says data that depends on
> tracking “may be incomplete or unavailable”, chat widgets “may not work as
> expected”, and it “can’t recover tracking data that was missed while the
> code was inactive.”
> Source: HubSpot Knowledge Base, Troubleshoot the HubSpot tracking code, 23
> July 2026. https://knowledge.hubspot.com/reports/how-do-i-know-if-my-hubspot-tracking-code-is-working

The code sits at the end of the page, after your content. If it stalls, the
visitor still sees the page. What goes missing is the record: visits from
China arrive thin or not at all, and the attribution reports built on them go
wrong in a way your team can’t spot from London or Boston. To see the gap, run
a counter on your own server beside HubSpot and compare the China sessions.

Chat rides on the same code. HubSpot’s install guide says live chat widgets
will not load without it. Our guide to Google Analytics in China covers Baidu
Tongji (百度统计) and self-hosted counters.

<!-- SECTION: Forms are where a lead goes missing -->

## Forms are where a lead goes missing

An embedded HubSpot form is built inside the visitor’s browser. The embed code
loads `js.hsforms.net/forms/embed/v2.js` and asks it to draw the form. If that
file never arrives, the visitor gets a blank space where the form should be.
Copying the file to your own server looks like the obvious workaround.
HubSpot rules it out.

> “HubSpot forms should only be loaded using the HubSpot-hosted JavaScript
> file. Making a copy of the form embed code and self-hosting it is not
> supported.”
> Source: HubSpot developer documentation, HubSpot forms, last modified 29
> March 2026. https://developers.hubspot.com/docs/cms/start-building/building-blocks/modules/forms

What about your own HTML form, picked up by HubSpot’s non-HubSpot forms tool?
It depends on the tracking code.

> “The non-HubSpot forms tool is dependent on the tracking code. HubSpot can
> only collect form submissions if the tracking code loads successfully.”
> Source: HubSpot Knowledge Base, Use non-HubSpot forms, 27 July 2026.
> https://knowledge.hubspot.com/forms/use-non-hubspot-forms

The submission still reaches whatever inbox or server the form posts to.
HubSpot never hears about it, and the contact never lands in your sales team’s
queue.

So own the form. Build it in plain HTML on your own server and save every
submission there first. Then forward it to HubSpot through its Submit data to
a form API, which HubSpot names as the alternative to the non-HubSpot forms
tool. If the forward fails, a retry job sends it later, and the lead already
sits in your database. Keep the retry on a mainland server too: the forward
crosses the border, and `api.hsforms.com` has no test on record.

> HubSpot documents an unauthenticated endpoint,
> https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid},
> for sending form submission data to a HubSpot form.
> Source: HubSpot developer documentation, Submit data to a form, last
> modified 29 March 2026. https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated

<!-- SECTION: A site on HubSpot CMS is a hosting question -->

## A site on HubSpot CMS is a hosting question

When HubSpot hosts the site itself, the scripts become the smaller worry.

> HubSpot’s product infrastructure runs on Amazon Web Services in the United
> States (Virginia and Oregon), Canada (Montreal), Australia (Sydney) and the
> European Union (Germany). No data centre is listed in mainland China.
> Source: HubSpot Knowledge Base, Cloud Infrastructure and Data Hosting FAQ,
> 24 July 2026. https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions

Pages reach visitors through HubSpot’s CDN, which its developer documentation
calls “powered by Cloudflare”. Neither HubSpot page on its CDN mentions China.

Then there’s the ICP filing. That one is a hard stop. A filing is made against
a server inside the mainland, through the provider that runs it.

> A domain that resolves to a server in mainland China must complete its
> website filing before the site can open to visitors
> (“域名解析至中国内地服务器必须先完成网站备案，才能正常开通网站访问”).
> Source: Alibaba Cloud (阿里云) help centre, 4 September 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

HubSpot lists no mainland data centre, which leaves a HubSpot-hosted site
nothing to file against. There are two ways out.

The first is a separate mainland site, built in WordPress or Astro on Alibaba
Cloud or Tencent Cloud (腾讯云), filed in China, with its forms forwarded into
the same HubSpot portal as above. Moving the China pages off HubSpot is a
migration project in its own right, and it’s the route we’d take for a site
that has to work every day.

The second is a reverse proxy: a mainland CDN, on a filed domain, in front of
HubSpot. HubSpot accepts a proxy only on a CDN or distributed network, and its
support team won’t set one up for you. Every page the proxy fetches still comes from
HubSpot’s servers outside China, across the border, on a path no published
test covers.

Where the contact data lives is a separate question under PIPL, and our guide
to China’s data privacy rules takes it on.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Does HubSpot work in China?**

The HubSpot app was reachable on GreatFire’s last test, on 22 September 2026,
so a team in Shanghai should be able to log in. HubSpot’s API host is
shakier: disrupted on its one test, on 10 September 2026. The scripts on
your visitors’ pages have no current HTTPS test at all.

**Can I use HubSpot forms on a site hosted in China?**

Yes, if the form doesn’t need a HubSpot script to exist. Build it in HTML on
your mainland server and store each submission there. A background job then
forwards it to HubSpot through the Submit data to a form API, retrying when
the call fails.

**Does HubSpot have a data centre in China?**

No. HubSpot lists data centres in the United States, Canada, Australia and
Germany, all on Amazon Web Services, and none in mainland China (24 July
2026). That rules out an ICP filing for a HubSpot-hosted site. It also turns
contact data from Chinese visitors into a cross-border transfer, which brings
its own duties under PIPL.

<!-- CTA -->

CTA: Run a free China readiness scan

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/hubspot-china.webp
- Reference:  /images/guides/hubspot-china.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

Candid handheld photograph on a shared co-working floor in Nanjing, Jiangsu, on an overcast weekday morning, taken from slightly behind and to the side of a Chinese marketing coordinator in her late twenties with a low ponytail, a grey cardigan and a lanyard, leaning towards a laptop on a long shared desk while holding a paper cup of soy milk; the laptop screen shows a company product page in a desktop browser, with Chinese-language headings and product photos at the top and, where a contact form should sit, a large empty white rectangle with a thin grey border and nothing inside it, the browser loading spinner still turning in the tab; beside the laptop a second, older monitor on a stand shows a spreadsheet-style list of contact records in Chinese with columns of names and dates, slightly out of focus; her free hand points at the empty rectangle mid-gesture, a little motion blurred; the desk is cluttered with a tangle of white charging cables, a phone face down, a notebook with handwritten Chinese notes, a small potted succulent and a lanyard badge from another desk; behind her, out of focus, two Chinese colleagues talk beside a whiteboard with half-erased marker lines and a window with rain-streaked glass and grey high-rise towers; uneven light mixes flat daylight from the window with cool overhead fluorescent tubes, giving a slight green cast and visible sensor noise, the frame tilts about two degrees and a chair back cuts into the lower left corner; documentary realism, smudges on the laptop screen, natural imperfections, no studio lighting, no cinematic grade, no added text, captions or watermarks, no logos other than what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no (the brief does not ask for FAQ schema)
Breadcrumb: Home > China Web Guide > HubSpot in China: What Works and What Does Not
Author: Cyril Drouin
datePublished: the publish date (YYYY-MM-DD), set by the publish step
Measurement: GreatFire HTTPS verdicts only (GFW rule): api.hubspot.com
  10 September 2026, app.hubspot.com 22 September 2026, hs-sites.com 2 August
  2026; js.hs-scripts.com named for its plain-HTTP test of 13 September 2026
  (no verdict printed) and the last HTTPS reading of a HubSpot script URL,
  js-eu1.hs-scripts.com/26918530.js, 14 July 2026 (older than 90 days, date
  only, no verdict, F42). 21YunBox publishes no HubSpot figure (support page
  reviewed 7 October 2026, compliance only). Every verdict is GreatFire's,
  none is a ChinaWebFoundry measurement.
-->

<!-- ASSET BRIEF
TABLES: (1) HubSpot hosts with GreatFire's HTTPS verdict, conclusive-test
  count and last-tested date, labelled as GreatFire's; hosts with no test
  listed as untested (F42 for the tracking script). Read 14 October 2026.
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
  a migration project in its own right -> /services/china-migration/
  our guide to Google Analytics in China -> /resources/china-web-guide/google-analytics-china/
  our guide to China's data privacy rules -> /resources/china-web-guide/china-data-privacy-pipl-dsl/
  our table of what the Great Firewall blocks, host by host -> /resources/china-web-guide/great-firewall-what-it-blocks/
  CTA "Run a free China readiness scan" -> /china-site-scanner/ (rendered by the layout)
LOCALIZED SLUGS: none (T2 is English only, hreflang x-default on the English URL; add to englishOnlyRoutes at publish)
CLIENT SIGN-OFF ON RECORD: none needed (no client named, no client figure)
LINK SUBSTITUTIONS: none
REVIEW BY: 2026-10-31 (oldest cited verdict inside the 90-day window,
  hs-sites.com on 2 August 2026, plus 90 days); carried in frontmatter as
  reviewBy for review-due.mjs.
THIRD-PARTY MEASUREMENTS CITED (GFW rule):
  https://api.hubspot.com, GreatFire, 10 September 2026
  https://app.hubspot.com, GreatFire, 22 September 2026
  https://hs-sites.com, GreatFire, 2 August 2026
  http://js.hs-scripts.com, GreatFire, 13 September 2026 (HTTP only, named, no verdict)
  https://js-eu1.hs-scripts.com/26918530.js, GreatFire, 14 July 2026 (date only, no verdict)
UNTESTED HOSTS NAMED (F42 and never-tested, no verdict): js.hs-scripts.com,
  js.hs-analytics.net, js.hs-banner.com, js.hsforms.net, api.hsforms.com,
  api.usemessages.com
-->
