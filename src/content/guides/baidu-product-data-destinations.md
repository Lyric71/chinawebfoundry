---
title: "Baidu DPA: Where Product Feed Data Actually Goes"
subtitle: "Somewhere in the sales conversation, a product feed became free visibility. Load the catalog into Baidu Merchant Center and your products start showing up in Baidu search. That pitch survives because Baidu's own vocabulary invites it and English write-ups have repeated it for years. None of what follows says the feed does nothing. It says where the data is documented to go."
summary: "Baidu documents three destinations for product feed data, all paid: search DPA, feed DPA and paid Aladdin. No documented organic path exists."
visual: "/images/guides/baidu-product-data-destinations.webp"
order: 18
published: true
publishedAt: 2026-08-13
updatedAt: 2026-08-13
category: Search
---

Baidu Merchant Center, BMC, is the product data warehouse behind Baidu's ad systems. One sentence in Baidu's product FAQ lists everywhere that data can travel. All three destinations are bought.

## Baidu wrote down the destinations, and there are three

> 在BMC接入的商品数据，可用于搜索/信息流动态商品广告的投放和阿拉丁推广。
>
> Product data connected through BMC can be used for search and feed dynamic product ad delivery, and for Aladdin promotion.
>
> *Source: Baidu Marketing Academy, product FAQ*

Built as a list rather than an example, it names three things: search dynamic product ads, feed dynamic product ads, Aladdin promotion. Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) holds the data, and that sentence is its shipping manifest. Nothing on the manifest goes anywhere but an ad system. It is also old copy, from the last era of BMC documentation updates. Say so before a vendor says it to you.

## The three destinations, and what buying each one involves

Search dynamic product ads, DPA in every Baidu deck you will be shown, are the ones people picture. A user searches, Baidu matches the query against your catalog, and the ad gets assembled from the title, image and price in the record. Nobody writes creative product by product. The feed is the creative, which is the whole appeal of the format.

Feed DPA runs the same machinery against Baidu's content feed instead of a query, and the detail that catches teams out is administrative. Baidu's documentation puts it on the same account and funding pool (相同的账户及资金池, xiāngtóng de zhànghù jí zījīnchí) as the native ads account, so there is no separate wallet to open and nothing new to approve. The money sits inside a native advertising budget somebody already signed off, or it does not exist.

Aladdin is where English summaries fall over. Aladdin placements are the rich blocks above the blue links on a Baidu results page, and Baidu does run an unpaid card program of its own, further down this page. The Aladdin in Baidu's sentence is not that one. Baidu wrote Aladdin promotion (阿拉丁推广, Ālādīng tuīguǎng), and promotion (推广, tuīguǎng) is its word for something you buy. Drop half of that phrase in translation, as plenty of guides have, and a media line item enters the plan as free placement.

## We looked for the organic route in four places

An organic path would have to live somewhere. We checked the four candidates that come up with clients.

Start with the tool everyone gets pointed at. Baidu's structured data tool (结构化数据工具, jiégòuhuà shùjù gōngjù) launched in July 2013 with four supported types: general Q&A, online documents, file downloads, software downloads. Products were never among them, and it never opened to the public anyway.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Structured data is not yet fully open. We will proactively invite high quality sites to submit data.
>
> *Source: Baidu Search Resource Platform, structured data tool announcement, July 2013*

Its URL now returns a server error.

More telling is the live tool list, and reading it end to end is the check most people skip. Baidu's Search Resource Platform is well stocked: submission, crawl diagnosis, robots testing, index volume, traffic and keywords, site revision, mobile adaptation. No structured data tool of any kind survives on it, and nothing there touches products. There is no object type for a product, so there is not even a form to fill in wrongly.

OpenCard deserves an honest look, because it is a live organic channel doing very nearly what a retailer would want. You host a webhook, Baidu sends a normalized intent as JSON at query time, and your data comes back as a rich card in unpaid results, never crawled or indexed. OpenCard is the successor to the old Aladdin cards. Behind it you need a smart mini program (智能小程序, zhìnéng xiǎochéngxù), and there the eligibility rule names retail and shuts the door.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> The mini program must be consumer facing and must not fall into categories such as medical, news, recruitment or shopping platforms.
>
> *Source: Baidu OpenCard eligibility documentation*

That exclusion sits in the eligibility rule, ahead of the category list, which runs to roughly 120 entries: travel, finance, entertainment, government services, tools, education, property, motor vehicles, games, pets, astrology. Retail is not among them, and neither is anything resembling a product listing.

Last comes the Baidu transaction open platform at dianshang.baidu.com, which still resolves and so keeps turning up in research. Its copy advertises Xiongzhang ID (熊掌号, Xióngzhǎng Hào), taken offline in March 2020, and Nuomi, also gone. A page selling two dead products is a page nobody has opened in years. Four candidates, none of them open to a retailer.

## Baidu never said no, and that matters for how you argue this

Baidu has never published a sentence saying product feed data cannot appear in organic results. No announcement to that effect, nothing in the help pages. What exists is a list of three paid destinations, four closed doors, and silence in between.

So the defensible claim is the narrow one. There is no documented organic path for merchant feed data on Baidu. Not the same thing as proven impossible, and the difference protects you when you push back. Tell a vendor it is impossible and you have started an argument you cannot finish. Ask to see the documentation and the argument is over.

## If you want discovery rather than media, two things work

Demand was never the problem.

> China had 937 million online shoppers as of December 2025, or 83.2% of the country's 1.125 billion internet users.
>
> *Source: China Internet Network Information Center, 57th Statistical Report, March 17, 2026*

The feed was just not the route to it. Two other things are.

The first applies to everybody and it is dull work. Get Baidu crawling and indexing your product pages as pages: verified site in the Search Resource Platform, ICP number in site attributes, server-rendered HTML that Baiduspider can read, URLs pushed through the API. Each step has its own piece in this guide, from [verifying the site](/resources/china-web-guide/baidu-site-verification/) to [pushing URLs through the API](/resources/china-web-guide/submitting-urls-to-baidu/). Slower than uploading a spreadsheet, and the only unpaid route Baidu documents for commercial pages.

The second depends on who buys from you. If that is a purchasing manager rather than a shopper, Baidu Aicaigou (百度爱采购, Bǎidù Àicǎigòu) is the B2B vertical whose supplier listings sit in the top slots on commercial intent queries.

> Baidu Aicaigou matched more than 13 million business opportunities in a single year and accumulated over 200 million pieces of platform content.
>
> *Source: 南方都市报, June 14, 2023*

Membership is quoted at RMB 6,980 a year for the standard tier and has to be bought through an authorized service provider (服务商, fúwùshāng), with [its own piece in this guide](/resources/china-web-guide/baidu-aicaigou-b2b/) covering the rest. For a components manufacturer that budget often works harder there than in a DPA campaign, and none of it touches BMC. For consumer retail it is the wrong shape.

Baidu's destination statement is old copy, so check for a newer product FAQ before quoting it in a client deck.
