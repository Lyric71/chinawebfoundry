---
title: "Baidu Structured Data: What Still Works"
subtitle: "The markup ships in the first sprint. JSON-LD in the head, Organization and BreadcrumbList and Product, the same block that goes out on every site the team builds. Then somebody asks how you confirm Baidu picked it up, and the room goes quiet. There is no report to open."
summary: "Baidu never published a schema.org spec or a validator. What died, how OpenCard actually works, and which markup is still worth shipping anyway."
visual: "/images/guides/baidu-structured-data.webp"
order: 16
published: true
publishedAt: 2026-08-12
updatedAt: 2026-08-12
category: Search
---

Baidu has never published a schema.org specification. No supported types, no validator, no report anywhere in its webmaster tooling. The tool it did build has been broken for years. One live channel will put your data into an organic result, and it works nothing like markup. Most companies reading this cannot use it, which still leaves the question of what to ship.

## Baidu built a structured data tool once, in 2013

Baidu announced its structured data tool (结构化数据工具, jiégòuhuà shùjù gōngjù) on July 25, 2013, at a schema address on the webmaster platform. It accepted four content types and only four: general Q&A (通用问答, tōngyòng wèndá), online documents (在线文档, zàixiàn wéndàng), file downloads (资料下载, zīliào xiàzài) and software downloads (软件下载, ruǎnjiàn xiàzài).

Products were never on that list. Not deprecated later, not quietly withdrawn, just never included, and that turns out to be a pattern instead of an oversight.

The tool was invite-only from the day it launched.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Structured data is not yet fully open. We will proactively invite high-quality sites to submit data.
>
> *Source: Baidu Search Resource Platform, structured data tool announcement, July 2013*

It never did open to general submission. The URL today returns a server error, not a 404 and not a redirect to a successor. An error page is what a service looks like when nobody has been paid to switch it off properly.

## Baidu has never said whether markup does anything

The dead tool is only half of it. You will hear two confident answers about markup on Baidu and both are wrong. Baidu has not said it reads schema.org. It has also never said it ignores schema.org. There is no documentation in either direction, and the silence is the finding.

That matters more than it sounds, because it removes the debugging loop a developer expects. On Google you write markup, run a test, read a report, fix what it flagged. On Baidu none of those steps exist.

One product keeps muddying this. Baidu does sell something with Schema in the name, the knowledge graph schema (知识图谱Schema, zhīshi túpǔ Schema) tooling on its AI site. That is a modeling interface for building your own knowledge graph inside Baidu's AI cloud, unrelated to search markup or to your pages. It still gets cited in English write-ups as proof that Baidu supports structured data, and we have walked clients back off it more than once.

## The rich results on the page are not coming from your markup

Look at a Baidu results page and it is thick with cards and generated answers. The reasonable assumption is that some of it gets earned through markup.

> Roughly 70% of Baidu's mobile search result pages contained AI-generated content in October 2025.
>
> *Source: Baidu Inc., third quarter 2025 results, November 18, 2025*

Baidu built all of that on the answer side of the engine while its structured data documentation sat untouched since 2013. A good share of what you are looking at is paid, and another share belongs to Baidu's own properties. The organic rich cards come through OpenCard, which took over from the old Aladdin cards. That is the only live organic route from your data onto the results page.

## OpenCard asks you at query time instead of crawling you

OpenCard runs backwards compared with almost everything a Google-trained developer has built.

You stand up a webhook and register it. A user searches. If Baidu decides your service is the right answer, and that call is entirely Baidu's, it resolves the query into a normalized intent expressed as JSON and posts it to your endpoint. Your system answers with data, and Baidu renders that answer as a rich card in the organic results.

No crawl is involved anywhere in that, and nothing gets indexed. The data does not have to live on a public page at all. What shows is whatever your service returned at the moment somebody asked, which favors anything a crawled snapshot would get wrong.

So what you are signing up for is an always-on production service. The failure mode is a card that disappears on the afternoon your endpoint has trouble.

## Most companies reading this are ineligible by category

OpenCard is not a standalone product. It runs on top of Baidu smart mini programs (百度智能小程序, Bǎidù zhìnéng xiǎochéngxù), so a mini program is the entry ticket. That is a real build, against a platform Baidu has deprioritized for years.

Eligibility narrows it further.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> The mini program must primarily serve consumer users and must not fall into categories such as medical, news, recruitment or shopping platforms.
>
> *Source: Baidu OpenCard eligibility documentation*

Shopping platforms are excluded by name, along with medical, news and recruitment. Baidu's published category list runs to roughly 120 entries: travel, finance, entertainment, government services, utilities, education, property, motor vehicles, games, pets, even astrology. No retail card on it, and no product listing card.

Between the named exclusions and the missing retail card, that covers most of the foreign companies who read this guide, and the conclusion is to stop scoping a mini program for a card you were never going to get. Run a hotel group, an airline or a consumer app in a live category and the calculation changes. Then the mini program is an argument worth having.

Put the two ends of the timeline side by side. Baidu's 2013 tool never covered products at all. Thirteen years later the live channel excludes shopping platforms by name. Product data moves through the advertising account instead, which the Baidu Merchant Center piece covers, and every documented outlet for it is paid.

## Ship the markup, then take it off the Baidu roadmap

So what does a team ship on Monday? Clean schema.org markup, same as anywhere else. On a modern stack the cost rounds to nothing, and it earns its keep on Google and Bing whatever Baidu does with it. We put the block in the base template, check it once and move on. Well-formed markup also tends to travel with well-formed HTML, which is the thing Baiduspider genuinely needs.

Just do not book it as a Baidu deliverable. Nothing validates it and no Baidu surface will confirm it changed anything, so a proposal that prices markup as a Baidu SEO line item is selling you a result nobody can measure.

The levers that do move Baidu results are duller, and they are documented. Baiduspider has to reach the site from inside mainland China. Pages have to serve real HTML instead of a JavaScript shell. URLs go through the API push endpoint, the ICP number goes in site attributes, and index volume gets read rather than guessed at. Other pieces here cover each of those.

OpenCard category lists change quietly, so re-check eligibility before scoping a mini program.
