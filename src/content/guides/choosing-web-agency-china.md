---
title: "How to Choose a Web Agency in China"
subtitle: "Four kinds of vendor sell China websites, and only one builds, files, hosts and ranks them. How to tell them apart before you sign."
summary: "The four vendor types on every China shortlist, compared on filing, hosting, Chinese copy and Baidu, plus eight questions for the first call."
visual: "/images/guides/choosing-web-agency-china.webp"
order: 33
published: true
publishedAt: 2026-08-29
updatedAt: 2026-10-15
reviewBy: 2027-01-13
faqSchema: true
category: Technology
---

Search for a web agency in China and you'll mostly find directories. Ranked lists, sponsored placements, and a lot of companies that have typed the words "China website" onto a services page without ever having filed an ICP.

The shortlist that comes out of that search usually holds four different kinds of business, presented as if they were interchangeable. Telling them apart is most of the decision.

If you already know you want a WordPress build specifically, our guide on [vetting a WordPress agency for China](/resources/china-web-guide/vetting-a-wordpress-agency-china/) goes deeper on the stack questions. This page is about the vendor category itself.

## The four kinds of vendor selling China websites

| Type | What they sell | Where they break |
| --- | --- | --- |
| China web specialist | A build, the filing, mainland hosting and Baidu work, then a maintenance retainer | Smaller teams, fewer household-name logos |
| Marketing agency with a web page | A monthly retainer for social, search and media buying | The website is the way into the retainer |
| Delivery-layer SaaS | A subscription that serves your existing site faster to visitors in China | Writes and builds nothing |
| Offshore development shop | Cheap production capacity | No mainland company, so no filing of its own and no mainland server |

The expensive mistake is hiring the second type for the first type's job. A China marketing agency can be genuinely good at what it does. It also, quite often, cannot name the content management system it builds on, because the website is a lead-in to a monthly retainer rather than something it engineers.

The third type is legitimate inside its lane. A delivery-layer service rewrites the blocked resources in your existing site and serves it faster inside China without a rebuild. If your problem really is just performance, that's a reasonable purchase. If you have no Chinese site, no mainland entity and no Baidu presence, the service passes most of that work to partners. Some will run the ICP filing for you, as a separate job.

Line the four types up against the jobs a China site needs and the gaps show quickly.

| Type | ICP filing | Mainland hosting | Chinese-language content | Baidu work |
| --- | --- | --- | --- | --- |
| China web specialist | Prepares and submits it with you | Buys and runs the mainland server | Written in Chinese, in-house | Crawl checks and the Search Resource Platform |
| Marketing agency with a web page | Ask question 1 | Question 3 will tell you | Strong for campaigns and social | Often paid search; for the technical side, question 5 |
| Delivery-layer SaaS | Through a partner, or as a separate service | Serves a copy of your site from its own network | Through partners, where offered | Paid ads through partners, where offered |
| Offshore development shop | None of its own: it has no mainland company | None on the mainland | Depends on the team | Ask question 5 |

The last column decides whether people searching in Chinese find the site.

> Baidu held 46.65% of the search engine market in China across all platforms in September 2026, by Statcounter's measure, and 60.15% on mobile.
> Source: Statcounter Global Stats, September 2026. https://gs.statcounter.com/search-engine-market-share/all/china and https://gs.statcounter.com/search-engine-market-share/mobile/china

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

> Once a filing is approved, the ICP number has to sit at the bottom of the site, linked to the register of the Ministry of Industry and Information Technology (工信部) at beian.miit.gov.cn. A site that leaves it off can be ordered to fix it and fined 5,000 to 10,000 yuan by the provincial Communications Administration (省级通信管理局).
> Source: Alibaba Cloud (阿里云) help centre, adding the filing number after ICP filing, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

## What a credible answer set sounds like

A vendor who does this work is specific about time and vague about nothing.

They'll explain that the filing goes through two reviews. The host the site is filed through checks the application first, then the provincial Communications Administration (省级通信管理局) reviews it. Alibaba Cloud (阿里云) publishes both windows.

> Alibaba Cloud completes its initial review in 1 to 2 working days. The provincial Communications Administration's review generally takes 1 to 20 working days. The public security filing (公安备案) is due within 30 days of the site going live.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

With the paperwork on either side (the entity documents, the domain in the filer's name), we plan three to six weeks for the filing, once your mainland entity exists.

The licence is a separate track. A site that charges users for information or online services needs an ICP licence (ICP许可证) on top of the filing. It's a value-added telecoms licence, with its own review. Where an online shop falls is a question for a licensed adviser, and a vendor who knows the work says so before you ask.

> A value-added telecoms licence application is reviewed and decided within 60 days of acceptance.
> Source: Shanghai Communications Administration (上海市通信管理局), value-added telecoms service guide, June 2015. https://shca.miit.gov.cn/bsfw/bszn/dxsc/blcx/art/2020/art_7426922df3754a189aaf4278ff0c7b1d.html

The clock starts at acceptance, once the file is complete, so we plan twelve to eighteen weeks for a licence.

They'll put the build on a dated plan, with the filing as its own line and the mainland server bought before it. Their load times will come from inside China, with the network and the date attached, and from projects they shipped.

They'll also tell you when the answer is no. A vendor who says yes to every requirement in the first meeting hasn't thought about your requirements.

## Signals worth taking seriously

Two of these are disqualifying on their own.

**No mainland entity.** An ICP filing is made by a company registered in the mainland or by a mainland resident, against a server inside the mainland. A Hong Kong or Singapore agency with no mainland company can advise on yours, but it can't file a site of its own, so there's no number at the bottom of its homepage to show you.

> Alibaba Cloud's international site does not accept ICP filing applications. The filing entity must be an enterprise registered in the Chinese mainland or a Chinese mainland resident, and the filing is made against a mainland Alibaba Cloud server on a subscription of three months or more (more than three for an ECS instance).
> Source: Alibaba Cloud help centre, ICP filing for enterprises outside the Chinese mainland, August 2026, and server and access information check, September 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland and https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

**A case study page with no case studies.** More common than you'd expect. Several agencies in this market publish dozens of case study URLs that search engines can see and visitors can't open.

The rest are softer, and they accumulate. Logos on a wall prove nothing without a project behind them, so ask which site and when. If the agency's own published service mix puts web design and development at five or ten percent of what it does, the website isn't the thing it sells, and you'll feel that in month two.

## How these engagements get priced

The market is barbelled, which makes comparison harder than it should be.

> Across 29 vendors reviewed in August 2026, published entry points ran from 299 USD a year for a template site and 400 USD a month for a WeChat package, through roughly 7,000 USD in year one for a delivery-layer subscription, up to project minimums of 10,000 to 25,000 USD at specialist agencies. The largest consultancies publish no pricing at all.
> Source: ChinaWebFoundry vendor pricing review, 29 vendors, August 2026.

At the bottom sit template shops and marketing retainers. In the middle, delivery-layer subscriptions and specialist project work. At the top, the consultancies serving luxury and pharma, quoting into six figures and disclosing nothing publicly.

Very little sits between those bands. A shortlist that mixes them produces quotes an order of magnitude apart for what reads like one brief, and the briefs are doing different jobs. Read the scope line by line, and specifically read whether the ICP filing, the mainland hosting, the Chinese copywriting and the Baidu work are included or quietly listed as client responsibilities.

That scope comparison is where an hour of your time saves the most money on this entire process.

Send us the proposals and the scope lines from a shortlist you already have. We'll tell you which of the four types each vendor really is, and where the scope gaps sit. If you'd rather start from evidence than from a call, run your current site through our [China readiness scan](/china-site-scanner/) first, or read how we work as a [web agency in China](/web-agency-china/).

## Frequently asked

**Should we use a local Chinese agency instead?**
Domestic agencies are strong on execution and on Baidu, and they're often cheaper. The friction is process, language, and expectations around design review and reporting. It works well when you have someone bilingual internally who owns the relationship.

**Do we need a China agency at all if our global agency is good?**
Your global agency can build the site. It can't file the ICP, it won't know what Baidu does with JavaScript, and it'll keep the dependencies that break inside the country. A common arrangement that works: global agency owns the design system, China specialist owns build, filing, hosting and search.

**How long before we see search results in China?**
For a site hosted on the mainland, nothing can rank before the filing clears, because the site stays closed while a first filing is reviewed. The provincial review alone generally takes 1 to 20 working days, by Alibaba Cloud's own figure (August 2026). After launch, the pace is Baidu's. Anyone who promises rankings by a date is usually selling paid placement and calling it SEO.

**What's the smallest sensible first step?**
An audit. It costs a fraction of a build, it tells you whether you need a rebuild or a repair, and it leaves you with a document you can hand to any vendor on your shortlist.
