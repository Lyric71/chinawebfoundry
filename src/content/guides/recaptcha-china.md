---
title: "reCAPTCHA in China: Your Forms Are Dead"
subtitle: "Why visitors in mainland China cannot send a form protected by reCAPTCHA, what Google’s recaptcha.net swap changes, and what to use instead."
summary: "GreatFire reads Google’s reCAPTCHA addresses as blocked in mainland China, so protected forms turn visitors away. Google’s swap and the alternatives."
visual: "/images/guides/recaptcha-china.webp"
order: 40
published: true
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
reviewBy: "2026-11-18"
category: "Technology"
author: "cyril-drouin"
---

A form protected by Google reCAPTCHA can’t be sent from mainland China. On 28
August 2026, 21YunBox requested `www.google.com/recaptcha` 72 times from an
Alibaba Cloud (阿里云) server in Zhangjiakou and got no answer. On 30 August, a
Beijing China Mobile (中国移动) home line asked 18 times and got none. GreatFire,
which tracks censorship in China, reads the address as blocked, last tested 28
September 2026.

No script means no token, and a form that demands a token turns the visitor
away. Nothing reaches your inbox to tell you. Google’s own workaround is to load
the widget from `www.recaptcha.net`, which GreatFire reads as not blocked. No
published test has timed it, though. We’d still move to a captcha run from
inside China, such as Alibaba Cloud’s or Tencent Cloud’s (腾讯云). Every figure
below was checked against its source on 8 October 2026.

## Why a reCAPTCHA form in China never sends

| Host                       | Alibaba Cloud (阿里云), Zhangjiakou | Beijing China Mobile (中国移动) home line | Completions        | Verdict | Tested             |
| -------------------------- | ----------------------------------- | ----------------------------------------- | ------------------ | ------- | ------------------ |
| `www.google.com/recaptcha` | no answer inside 30 seconds         | no answer                                 | 0 of 72 / 0 of 18  | blocked | 28 and 30 Aug 2026 |

> From an Alibaba Cloud (阿里云) instance in cn-zhangjiakou, sampled every
> ten minutes for twelve hours on 28 August 2026 with a 30-second timeout,
> `www.google.com/recaptcha` answered 0 of 72 requests. Across 264 page loads
> on 88 real websites from a Beijing China Mobile (中国移动) residential line
> on 30 August 2026, www.google.com, the reCAPTCHA host, was requested 18
> times and never answered.
> Source: 21YunBox, A Day of Third-Party Requests From Inside China, August
> 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

The checkbox, and the invisible check in version 3, come from one script at
`www.google.com/recaptcha/api.js`. GreatFire’s last three conclusive tests of
that address all failed.

> GreatFire read https://www.google.com/recaptcha/api.js as 100% blocked, 3 of
> 3 conclusive tests in the last 90 days, last tested 7 September 2026. It has
> recorded interference with https://www.google.com/recaptcha since 7 May
> 2015.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api.js

When the script never loads, the page looks normal and the fields accept typing
as usual. The token Google would have handed over is never created, and your
server needs it to finish the check.

> The server sends the token from the form’s g-recaptcha-response field to
> Google’s siteverify address. When it is absent, Google returns the error
> missing-input-response: “The response parameter is missing.”
> Source: Google for Developers, Verifying the user’s response, last updated
> 14 October 2024. https://developers.google.com/recaptcha/docs/verify

A form built to require a passing check then has to refuse the submission. The
visitor sees an error message or a button that does nothing. You get no email.
Your logs show nothing that looks like a lost lead.

Version 3 hides the failure even better.

> “reCAPTCHA v3 will never interrupt your users.” It loads from
> https://www.google.com/recaptcha/api.js with the site key in a render
> parameter.
> Source: Google for Developers, reCAPTCHA v3, last updated 10 July 2024.
> https://developers.google.com/recaptcha/docs/v3

There’s no checkbox on screen, so a visitor has nothing missing to mention.

## On a mainland server, it fails for every visitor

Moving the site onto a mainland server adds a second failure to the default
setup. The check runs from your server to Google, and GreatFire reads that
address as blocked too.

> GreatFire read https://www.google.com/recaptcha/api/siteverify as 100%
> blocked, 1 of 1 conclusive tests in the last 90 days, last tested
> 28 September 2026.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api/siteverify

So a server inside China can’t confirm any token, wherever the visitor happens
to be. Someone in London loads the page, ticks the box (Google answers them fine
from London) and presses send, and the server rejects the form because its own
question to Google went nowhere. Put the captcha on the checklist for any move
into China; [our guide to migrating WordPress to China](/resources/china-web-guide/migrate-wordpress-to-china/) covers the rest of that
list.

## What the recaptcha.net swap changes

Google knows about this, and documents a fix.

> “Yes, please use ‘www.recaptcha.net’ in your code in circumstances when
> ‘www.google.com’ is not accessible.” Replace the api.js address on the
> page, then “apply the same to everywhere else that uses
> ‘www.google.com/recaptcha/’ on your site.”
> Source: Google for Developers, reCAPTCHA FAQ, last updated 2 April 2026.
> https://developers.google.com/recaptcha/docs/faq

That means two edits. One changes the script address in the page; the other,
easier to forget, changes the verify address on your server. GreatFire has
tested both sides of the swap.

| Address                                      | What it does                       | GreatFire verdict      | Conclusive tests, last 90 days | Last tested |
| -------------------------------------------- | ---------------------------------- | ---------------------- | ------------------------------ | ----------- |
| `www.google.com/recaptcha/api.js`            | default widget script              | blocked                | 3 of 3 failed                  | 7 Sep 2026  |
| `www.google.com/recaptcha/api/siteverify`    | default server check               | blocked                | 1 of 1 failed                  | 28 Sep 2026 |
| `www.recaptcha.net`                          | the swapped domain                 | not blocked            | 0 of 2 disrupted               | 30 Sep 2026 |
| `www.recaptcha.net/recaptcha/api.js`         | swapped widget script              | not blocked            | 0 of 2 disrupted               | 27 Aug 2026 |
| `www.gstatic.com/recaptcha`                  | challenge code the script fetches  | not blocked            | 0 of 1 disrupted               | 20 Aug 2026 |
| `www.recaptcha.net/recaptcha/api/siteverify` | swapped server check               | reachable at last test | none in the last 90 days       | 2 May 2026  |

> GreatFire read https://www.recaptcha.net as not blocked, 0 of 2 conclusive
> tests disrupted, last tested 30 September 2026; of 30 recaptcha.net
> addresses it has tested, 28 read accessible and 2 disrupted. It read
> https://www.recaptcha.net/recaptcha/api.js as not blocked on 27 August
> 2026 and https://www.gstatic.com/recaptcha as not blocked on 20 August
> 2026. Its last test of https://www.recaptcha.net/recaptcha/api/siteverify
> was on 2 May 2026.
> Source: GreatFire, August to September 2026. https://en.greatfire.org/https/www.recaptcha.net

A GreatFire verdict records whether a connection got through from its test
points. It carries no timing and no separate home-line result.

That gap has caught people before.

> GreatFire read https://fonts.googleapis.com as not blocked, 0 of 3
> conclusive tests disrupted, last tested 7 September 2026. From a Beijing
> China Mobile (中国移动) residential line on 30 August 2026, 21YunBox saw the
> same host requested 54 times and answer none.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/fonts.googleapis.com;
> 21YunBox, A Day of Third-Party Requests From Inside China, August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

The swapped script isn’t self-contained either. Read the file
`www.recaptcha.net/recaptcha/api.js` and it loads its challenge code from
`www.gstatic.com/recaptcha`, on another Google domain with a mixed record.

> Of 175 gstatic.com addresses GreatFire has tested, 8 read blocked, 42
> disrupted, 123 accessible and 2 have no verdict.
> Source: GreatFire, read 8 October 2026. https://en.greatfire.org/https/www.gstatic.com

And the swapped verify address hasn’t been tested since May. We’ll recheck every
verdict on this page by 18 November 2026.

If forms are failing now, make the swap first and plan the replacement after it.

## What to use instead of reCAPTCHA in China

If you’d rather not depend on Google at all, five options are realistic.

Alibaba Cloud (阿里云) and Tencent Cloud (腾讯云) both sell a captcha that works the
way reCAPTCHA does: a widget in the page, then a check your server makes against
the vendor’s API before it accepts the form.

| Option                                | Widget served by            | Evidence on record                                                |
| ------------------------------------- | --------------------------- | ----------------------------------------------------------------- |
| Alibaba Cloud Captcha 2.0 (阿里云验证码2.0) | Alibaba Cloud               | Vendor documentation, 11 Sep 2026: Shanghai and Singapore regions |
| Tencent Cloud Captcha (腾讯云验证码)        | Tencent Cloud               | Vendor documentation, 18 Sep 2026                                 |
| hCaptcha                              | `js.hcaptcha.com`           | GreatFire: not blocked, 25 and 26 Sep 2026                        |
| Cloudflare Turnstile                  | `challenges.cloudflare.com` | GreatFire: script not blocked, 0 of 1, 23 Sep 2026                |
| A check on your own server            | your own domain             | No third-party host involved                                      |

> After the client-side integration, the server calls VerifyIntelligentCaptcha.
> Alibaba Cloud lists two service regions: mainland China (Shanghai, at
> captcha.cn-shanghai.aliyuncs.com) and outside the mainland (Singapore, at
> captcha.ap-southeast-1.aliyuncs.com). The region set in the page must match
> the address the server calls, or verification returns an error.
> Source: Alibaba Cloud (阿里云) help centre, Captcha 2.0 server access,
> updated 11 September 2026. https://help.aliyun.com/zh/captcha/captcha2-0/user-guide/server-access

In practice, pick the region before anyone writes the server code.

> The server checks each ticket with DescribeCaptchaResult at
> captcha.tencentcloudapi.com. A CaptchaCode of 1 means the check passed.
> Source: Tencent Cloud (腾讯云), Captcha ticket verification, last updated
> 18 September 2026. https://cloud.tencent.com/document/product/1110/36926

GeeTest (极验) is the third mainland name developers reach for. We found no dated
documentation for it, so it gets no row in the table.

hCaptcha and Turnstile carry the same caveat as the recaptcha.net swap. Their
GreatFire verdicts are clean. No source we can cite has timed either one from a
home line.

> GreatFire read https://hcaptcha.com as not blocked, 0 of 3 conclusive tests
> disrupted, on 25 September 2026, https://js.hcaptcha.com as not blocked on
> 26 September and https://api2.hcaptcha.com as not blocked on 14 September.
> It read https://challenges.cloudflare.com/turnstile/v0/api.js as not
> blocked, 0 of 1, on 23 September 2026.
> Source: GreatFire, September 2026. https://en.greatfire.org/https/hcaptcha.com
> and https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

ChinaWebFoundry takes the last option on its own site. Our contact form carries
a hidden honeypot field that only bots fill in, and the access check on our
scanner is a small sum our own server signs and verifies. Neither one calls a
third-party host.

Changing just the captcha is a small job. On most sites it sits on a list with
fonts, maps, analytics and video embeds, and working through that list is [the
plugin and extension work we do](/services/plugins-extensions/). Our breakdown of [what the Great Firewall
blocks, host by host](/resources/china-web-guide/great-firewall-what-it-blocks/), shows what else tends to be on it.

## Questions site owners ask

**Does reCAPTCHA v3 work in China?**

Version 3 loads from the same script address as version 2, and GreatFire read
that address as blocked on 3 of 3 conclusive tests, the latest on 7 September
2026. So it fails the same way, more quietly. It shows visitors nothing, so
there’s no missing checkbox to report, and your server gets no token to score.

**Will the recaptcha.net swap fix my form?**

It’s the only reCAPTCHA setup with clean GreatFire verdicts today: the
recaptcha.net domain and its script both read not blocked in August and
September 2026. No timing or home-line test of it has been published, and the
script still pulls code from `www.gstatic.com`. Treat it as a patch while you
move to a mainland captcha.

**How do I check whether my site uses reCAPTCHA?**

Search your page source for `www.google.com/recaptcha` and `g-recaptcha`. Form
plugins and page builders can add it from their own settings, so look there too.
Or run the site through the [China Site Scanner](/china-site-scanner/), which lists the third-party
hosts your pages request.
