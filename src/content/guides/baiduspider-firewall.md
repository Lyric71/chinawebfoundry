---
title: "Baiduspider Blocked by Cloudflare and WAF Rules"
subtitle: "The site is up. The CDN dashboard is healthy, the Shanghai team has been publishing Chinese content for six weeks, and index volume in the Baidu Search Resource Platform has not moved off zero."
summary: "Cloudflare, WAF defaults and geo rules block Baiduspider silently. How to spot it, verify a real crawler by reverse DNS, and fix it in order."
visual: "/images/guides/baiduspider-firewall.webp"
order: 28
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

Nothing in a normal monitoring stack is watching for this. Uptime checks run from Frankfurt and Virginia, and real user monitoring only sees people who already got a page. Meanwhile the one visitor that matters is being turned away at the edge, and the only place that shows up is a dashboard nobody has opened.

We see it more than any other technical cause of a stalled China launch, and it is almost always a setting nobody remembers making.

## Why your default rules catch Baidu's crawler

Baiduspider reaches your origin from mainland China networks. Reverse DNS on legitimate crawler addresses resolves to *.baidu.com or *.baidu.jp, with the mainland ranges doing most of the fetching.

Now think about what a standard security posture does with those ranges. There is usually a geo rule that challenges or blocks China, added during an incident and never revisited, plus a bot management setting that scores unfamiliar automated clients as suspicious. Underneath both sits a managed ruleset tuned on Western traffic. Not one of those rules was written with a Chinese search crawler in mind. Baiduspider looks like automated traffic from a region you decided to distrust, so it gets whatever you configured for that.

None of it generates an alert. A blocked crawler does not file a ticket. It retries, gets the same answer, and comes back less often.

> Baidu held 63.97% of China's search engine market across all devices in November 2025, and 77.86% on mobile.
>
> *Source: StatCounter, cited by The Egg, February 11, 2026*

That market sits on the other side of the rule.

## The case that never got resolved

There is a Cloudflare community thread worth reading once. A site owner had put the Baidu verification file, baidu_verify_codeva-CODE.html, at the document root. It resolved publicly, and anyone outside China could fetch it and get a 200. Baidu's check reported an i/o timeout. The thread closed without a resolution.

That case is not evidence that Cloudflare blocks Baidu as policy. It shows something narrower: a file reachable from your desk proves nothing about whether Baidu can reach it, and the two can disagree for weeks while everyone stares at a URL that works.

Baidu's file verification is narrow. The file sits at the document root and returns a 200, with no redirect and no authentication. The HTML tag method is no more forgiving, since the meta tag has to appear in the HTML the server delivers. An interstitial breaks both.

## A 403 is the good outcome

When the edge refuses Baiduspider outright, you get a 403, which is the outcome to hope for. A refusal is a fact both sides can see.

The expensive version is the challenge. A JavaScript interstitial returns a 200, your access logs record a served request, and the crawler gets a page of script where your content should be. Every dashboard you own says the request succeeded, and on Baidu's side there is a fetch with nothing in it.

Rate limiting is the third pattern and the worst to debug. The crawler gets through on Tuesday and not on Wednesday, and no rule you can point at explains why.

## Reverse DNS is the only check that holds

Allowing the user agent is the right place to start and the wrong place to stop. The legitimate strings are Baiduspider/2.0 and Baiduspider-render/2.0, with mobile variants carrying Android or Mobile. The render variant catches people out. It pulls what a page needs to render, so a rule that allows Baiduspider/2.0 and rate limits the rest lets the crawler in and then starves it.

A user agent is a request header, and a request header is a string anyone can type. Allow on that alone and you have opened your WAF to anyone who reads a blog post.

The check that holds up is a forward-confirmed reverse lookup. Take the client IP, resolve the PTR record with host or dig, confirm the hostname ends in baidu.com or baidu.jp, then resolve that hostname forward and check you get the same address back. A PTR record alone proves nothing, since it is set by whoever controls the address block.

Build the rule in that order: match the user agent, confirm with reverse DNS, then allow. Some edge platforms do this for known crawlers. Where yours does not, it is a short worker script.

## Make Baidu tell you what it received

Crawl diagnosis (抓取诊断, zhuāqǔ zhěnduàn) in the Search Resource Platform fetches a URL as Baiduspider and shows you the response. Desktop or mobile user agent, your choice. It reads the first 200KB of the body, enough to show an interstitial or an error page.

We reach for it before touching anything else, because it ends arguments. Run it on the homepage, the verification file, and three deep pages. Edge rules are often path-scoped, and the homepage is usually the one path somebody exempted.

Fetch quota is limited and reported inconsistently, between 70 and 200 a week, so it is not a load test. And read the body it returns, not just the status code.

## Offshore hosting makes every one of these worse

Hosting outside mainland China blocks nothing by itself. It adds latency and packet loss on top of whatever your rules are doing.

Give a marginal connection an extra round trip for a challenge and it stops being marginal. An i/o timeout looks exactly like this from the outside: the page loads fast from Europe while Baidu records a connection that gave up. Mainland hosting removes the variable, at the cost of an ICP filing (备案号, bèi'àn hào).

## The order to change things in

Start with your logs. Filter the edge for the Baiduspider user agents over the last 30 days. Zero requests means the crawler is not getting to you at all. If there are requests, the question becomes what you sent back.

Then take the blunt instruments off in order. Geo rules affecting China go first, or narrow to the paths that genuinely need them. Bot management exceptions for verified Baiduspider come next, then managed ruleset exceptions, once you know which rule fired. Rate limits last, because they are the hardest failure to attribute.

Check robots.txt while you are in there. Baidu's tester caps the file at 48KB, and a stray disallow copied from staging has cost more China launches than any firewall rule.

Once the rules are off, re-run crawl diagnosis, starting with the verification file, the URL holding up everything else. Verification lands anywhere from instant to 24 hours once the crawler can read it. Index volume is slower: zero for days to weeks even when everything is right, with initial indexing commonly two to four weeks. Change one thing at a time, or the next zero tells you nothing.

Re-run crawl diagnosis after any WAF or CDN upgrade, since edge defaults change on their own schedule.
