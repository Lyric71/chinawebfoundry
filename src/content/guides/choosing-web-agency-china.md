---
title: "How to Choose a Web Agency in China"
subtitle: "Four kinds of vendor sell China websites, and only one of them can build, file, host and rank one. Here is how to tell them apart before you sign."
summary: "The four vendor types on every China shortlist, eight questions that expose the difference on the first call, the red flags worth acting on, and how the market prices this work."
visual: "/images/guides/choosing-web-agency-china.webp"
order: 33
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
category: Technology
---

Search for a web agency in China and you'll mostly find directories. Ranked lists, sponsored placements, and a lot of companies that have typed the words "China website" onto a services page without ever having filed an ICP.

The shortlist that comes out of that search usually holds four different kinds of business, presented as if they were interchangeable. Telling them apart is most of the decision.

If you already know you want a WordPress build specifically, our guide on [vetting a WordPress agency for China](/resources/china-web-guide/vetting-a-wordpress-agency-china/) goes deeper on the stack questions. This page is about the vendor category itself.

## The four kinds of vendor selling China websites

| Type | What they actually do | Where they break |
| --- | --- | --- |
| China web specialist | Builds, files, hosts, tunes for Baidu and maintains the site | Smaller teams, fewer household-name logos |
| Marketing agency with a web page | Sells retainers for social, search and media buying | The website is the entry ticket, not the product |
| Delivery layer SaaS | Serves a faster version of your existing site inside China | Cannot build, design, file or write anything |
| Offshore development shop | Cheap production capacity | No mainland entity, so no filing and no local hosting |

The expensive mistake is hiring the second type for the first type's job. A China marketing agency can be genuinely good at what it does. It also, quite often, cannot name the content management system it builds on, because the website is a lead-in to a monthly retainer rather than something it engineers.

The third type is legitimate inside its lane. A delivery-layer service rewrites the blocked resources in your existing site and serves it faster inside China without a rebuild. If your problem really is just performance, that's a reasonable purchase. If your problem is that you have no Chinese site, no mainland entity and no Baidu presence, it refers all of that out to somebody else.

## Eight questions that separate them

Ask these on the first call. The answers are diagnostic, and a wrong answer is usually obvious even to a non-technical buyer.

**1. Do you file the ICP yourselves, or do you introduce us to someone?**
"We guide you through the process" means they don't do it. There's a real difference between an agency that submits documentation to a provider on your behalf and one that emails you a link to a law firm.

**2. What content management system will we be editing this in?**
An agency that won't name a platform on the first call won't name one on the fifth. You're entitled to know what you'll own.

**3. Where will it be hosted, and what happens to ports 80 and 443 before the filing clears?**
The correct answer is that they're closed and nothing serves until the filing completes. A vendor who doesn't know this has never shipped a mainland site.

**4. Which of our current third-party scripts will you remove?**
Someone who has done this work starts listing dependencies before you finish the question. Google Hosted Libraries, reCAPTCHA, Analytics, Maps, YouTube embeds, Gravatar.

**5. How will you verify Baiduspider is reaching the site?**
The right answer involves reverse DNS on the requesting IP, because the user agent string is trivially spoofed. If they answer "we'll submit the sitemap," they don't run Baidu SEO.

**6. Which Chinese AI engines do you target?**
As of 2026 the list that matters is DeepSeek, Doubao (豆包), Kimi, Yuanbao (元宝), Qwen and Baidu AI. A vendor selling "GEO" who answers with ChatGPT and Perplexity is selling a Western product with a Chinese label on it.

**7. Who maintains the site after launch, and how do plugin updates work from a mainland server?**
Mainland IP rate limiting on the WordPress update servers is the specific thing you want them to raise unprompted. We cover the mechanics in our [WordPress hosting in China guide](/resources/china-web-guide/wordpress-hosting-china/).

**8. Can you show me a live site with a filing number in the footer?**
Fastest single check on this list. A mainland-filed site carries its ICP number at the bottom of the page. Start with their own site.

## What a credible answer set sounds like

A vendor who does this work is specific about time and vague about nothing.

They'll tell you the ICP filing takes three to six weeks once your mainland entity exists, and twelve to eighteen weeks if the site takes payment and needs a commercial licence. They'll tell you a build runs six to twelve weeks, and that migrating a large existing site runs longer than that. They'll quote load times measured from inside China rather than from a global testing tool, and the numbers will come from projects they shipped rather than from targets.

They'll also tell you when the answer is no. A vendor who says yes to every requirement in the first meeting hasn't thought about your requirements.

## Signals worth taking seriously

Two of these are disqualifying on their own.

**No mainland entity.** A Hong Kong or Singapore agency cannot sponsor an ICP filing, because the filing requires a mainland-registered company. They can advise on it. They can't do it.

**A case study page with no case studies.** More common than you'd expect. Several agencies in this market publish dozens of case study URLs that search engines can see and visitors can't open.

The rest are softer, and they accumulate. Logos on a wall prove nothing without a project behind them, so ask which site and when. If the agency's own published service mix puts web design and development at five or ten percent of what it does, the website isn't the thing it sells, and you'll feel that in month two. And if the copy still says Google Fonts is blocked in China, take note: it isn't, and hasn't been for a while. A company writing about current technical facts should have current technical facts.

## How these engagements get priced

The market is barbelled, which makes comparison harder than it should be.

> Across 29 vendors reviewed in August 2026, published entry points ran from 299 USD a year for a template site and 400 USD a month for a WeChat package, through roughly 7,000 USD in year one for a delivery-layer subscription, up to project minimums of 10,000 to 25,000 USD at specialist agencies. The largest consultancies publish no pricing at all.
> Source: ChinaWebFoundry vendor pricing review, 29 vendors, August 2026.

At the bottom sit template shops and marketing retainers. In the middle, delivery-layer subscriptions and specialist project work. At the top, the consultancies serving luxury and pharma, quoting into six figures and disclosing nothing publicly.

Very little sits between those bands. A shortlist that mixes them produces quotes an order of magnitude apart for what reads like one brief, and the briefs are doing different jobs. Read the scope line by line, and specifically read whether the ICP filing, the mainland hosting, the Chinese copywriting and the Baidu work are included or quietly listed as client responsibilities.

That scope comparison is where an hour of your time saves the most money on this entire process.

## Frequently asked

**Should we use a local Chinese agency instead?**
Domestic agencies are strong on execution and on Baidu, and they're often cheaper. The friction is process, language, and expectations around design review and reporting. It works well when you have someone bilingual internally who owns the relationship.

**Do we need a China agency at all if our global agency is good?**
Your global agency can build the site. It can't file the ICP, it won't know what Baidu does with JavaScript, and it'll keep the dependencies that break inside the country. A common arrangement that works: global agency owns the design system, China specialist owns build, filing, hosting and search.

**How long before we see search results in China?**
Baidu indexing usually takes two to four weeks after a correctly configured launch. Meaningful ranking movement takes three to six months. Anyone promising faster is selling paid placement and calling it SEO.

**What's the smallest sensible first step?**
An audit. It costs a fraction of a build, it tells you whether you need a rebuild or a repair, and it leaves you with a document you can hand to any vendor on your shortlist.

Send us the proposals and the scope lines from a shortlist you already have. We'll tell you which of the four types each vendor really is, and where the scope gaps sit. If you'd rather start from evidence than from a call, run your current site through our [China readiness scan](/china-site-scanner/) first, or read how we work as a [web agency in China](/web-agency-china/).
