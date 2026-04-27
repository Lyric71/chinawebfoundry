export interface FAQEntry {
  question: string;
  answer: string;
}

export interface FAQTopic {
  title: string;
  shortTitle: string;
  icon: string;
  items: FAQEntry[];
}

export const faqTopics: FAQTopic[] = [
  {
    title: 'Why China Is Different',
    shortTitle: 'Different',
    icon: 'globe',
    items: [
      {
        question: "Why doesn't my current website work properly in China?",
        answer: "The Great Firewall. That's the short answer. China's national filtering system blocks or slows most of the Western services your site depends on. Google Fonts, Google Analytics, reCAPTCHA, YouTube, Facebook pixels, the major CDN providers. All blocked or throttled. A page that loads in two seconds in New York can easily take 15 seconds in Shanghai. Sometimes it just times out entirely. Without a China-specific setup, your site is pretty much invisible to anyone browsing from the mainland.",
      },
      {
        question: "Can't we just use a CDN to fix the speed problem?",
        answer: "Western CDNs like Cloudflare and Akamai don't have proper edge presence inside China without an ICP-licensed setup, and even then performance is inconsistent. The real fix is hosting on a Chinese provider like Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) or Huawei Cloud (华为云). Anything else is a workaround.",
      },
      {
        question: "Is Hong Kong hosting good enough for the China market?",
        answer: "It's better than US or European hosting, sure. But mainland users still see slower load times, Baidu treats it as foreign and ranks it lower, and you miss out on the trust signal that comes from a properly licensed mainland presence. For serious China business, mainland hosting is the answer.",
      },
      {
        question: "Do Chinese users really browse that differently?",
        answer: "Yes, fundamentally. Mobile first to an extreme, WeChat (微信) as the default sharing layer, QR codes everywhere, longer scrolling pages, more dense information layouts, completely different aesthetic conventions. Copy-pasting a Western site into Chinese rarely works. We rebuild the experience for how people actually use the internet here.",
      },
    ],
  },
  {
    title: 'Project Scoping & Discovery',
    shortTitle: 'Scoping',
    icon: 'compass',
    items: [
      {
        question: 'How do we know if we even need a China-specific website?',
        answer: 'If your current site loads slow from Shanghai, ranks nowhere on Baidu, or your sales team keeps hearing "we couldn\'t find you online" from Chinese leads, you probably need one. We do a free audit before any commitment. Takes about a week. You\'ll see the actual numbers, not a sales pitch.',
      },
      {
        question: "What's the minimum viable scope for entering the China market online?",
        answer: "A bilingual landing page on Chinese hosting with ICP (互联网内容提供商), Baidu Tongji (百度统计) installed, and one optimised Baidu (百度) landing experience. That's the floor. We've launched companies on that and built up from there once they had real traffic data.",
      },
      {
        question: 'Can you help us figure out if China is even worth it for our business?',
        answer: "Not our specialty but we'll tell you honestly when it's not. We've turned down projects where the market data didn't support the spend. If you need proper market entry consulting we can introduce you to firms in Shanghai who do that work.",
      },
      {
        question: 'Do you offer a discovery workshop before the actual project?',
        answer: 'Yes. Two formats. A half-day remote session that covers technical audit and strategy, or a two-day on-site workshop in Shanghai (上海) for bigger projects. Both are billed separately from the main engagement.',
      },
      {
        question: 'What information do you need from us to give a real quote?',
        answer: 'Your current site URL, traffic data if you have it, your goals for China (leads, sales, brand presence, all three), any existing Chinese entity status, and ideally a quick call. With those four things we can give a real number, not a range.',
      },
    ],
  },
  {
    title: 'Pricing & Budgets',
    shortTitle: 'Pricing',
    icon: 'wallet',
    items: [
      {
        question: 'How much does a China website project actually cost?',
        answer: 'Depends on scope. Migration projects sit at one end, full custom builds with WooCommerce or membership platforms at the other. We send fixed-price proposals after a discovery call, no hourly billing on project work, no surprises mid-project.',
      },
      {
        question: 'How does your pricing compare to Western agencies?',
        answer: "Honestly, comparable. Shanghai (上海) salaries are higher than Paris or Berlin, our team is senior, and the work we do isn't the kind of thing you template. What you get for the budget is a team based in mainland China who've actually filed Bei'an (备案), run Baidu Search Resource Platform (百度搜索资源平台) accounts, and know which hosting AM at Aliyun (阿里云) returns calls. That's the real value, not a discount.",
      },
      {
        question: 'Do you offer payment plans?',
        answer: "For larger projects yes. Standard split is across kickoff, midpoint and launch. For bigger engagements we can do monthly milestones. We don't do work for equity.",
      },
      {
        question: "What's NOT included in the project price?",
        answer: "ICP government fees (small but separate), translation costs if you need professional Chinese copywriting, stock photography licenses, paid plugin licenses if you want commercial extensions, and any third-party services like hosting which gets billed direct to you. We're transparent about all of this in the proposal.",
      },
      {
        question: 'Are there hidden costs we should know about?',
        answer: "Two that surprise people. First, ICP (互联网内容提供商) renewal admin every couple of years. It's small but non-zero. Second, ongoing Baidu (百度) SEO; if you actually want to rank you need monthly work, not a one-time launch. We flag both upfront so the budget conversation is honest.",
      },
      {
        question: 'Do you charge for proposals?',
        answer: "No. The proposal and the audit are free. We write detailed scopes because we want both sides to know exactly what's being built. If you take our proposal and shop it around to cheaper shops, well, that's happened. We still don't charge.",
      },
      {
        question: 'Can we start small and expand?',
        answer: 'Yes, and we usually recommend it. Phase one launches with the essentials. Phase two adds Baidu (百度) SEO depth, GEO China optimisation, content production. Phase three is e-commerce or advanced features. Splitting it spreads the spend and lets you validate before scaling.',
      },
    ],
  },
  {
    title: 'ICP Licensing & Legal',
    shortTitle: 'ICP & Legal',
    icon: 'shield',
    items: [
      {
        question: 'What exactly is an ICP license? Do I actually need one?',
        answer: "You do, and there's no workaround. ICP (互联网内容提供商) stands for Internet Content Provider. It's a permit from China's Ministry of Industry and Information Technology (工业和信息化部), required by law for any website hosted on a mainland Chinese server. Two types matter: ICP Bei'an (备案) for informational sites, and ICP Jing Ying (经营许可证) for sites that process transactions. We handle the application start to finish.",
      },
      {
        question: "What if we don't have a Chinese business entity yet?",
        answer: "Then ICP (互联网内容提供商) gets harder. You either need to set up a WFOE (外商独资企业) or partner with a Chinese entity that can sponsor the filing. We've helped clients navigate both routes. If you don't have an entity and don't want one, mainland China hosting isn't an option, but Hong Kong (香港) hosting still works as a fallback.",
      },
      {
        question: 'How long does ICP filing actually take?',
        answer: "Bei'an (备案) typically 2 to 4 weeks. Jing Ying (经营许可证) 2 to 3 months and sometimes longer. The variable is documentation completeness on your side. We give you a checklist in week one so the slow part doesn't slow us down.",
      },
      {
        question: 'What about data residency and PIPL compliance?',
        answer: "China data has to stay in China for most use cases. We architect for that from day one. If your project touches personal data we walk you through PIPL (个人信息保护法) implications. We've worked with legal counsel on dozens of these so we know where the gray areas are.",
      },
      {
        question: 'What happens if our ICP filing gets rejected?',
        answer: "It happens, usually for documentation reasons. We re-file at no extra cost. The only situations we can't fix are when the company structure itself doesn't qualify, which we'd flag in week one not week four.",
      },
    ],
  },
  {
    title: 'Timelines & Process',
    shortTitle: 'Timelines',
    icon: 'clock',
    items: [
      {
        question: 'How fast can you actually launch a site in China?',
        answer: "Fastest we've done is 3 weeks for a landing page with existing ICP (互联网内容提供商). Realistic for a real website is 8 to 12 weeks including ICP application. If you need ICP from scratch and don't have a Chinese entity, add another 4 to 6 weeks for that piece.",
      },
      {
        question: 'What does the typical project timeline look like?',
        answer: 'Week 1 to 2 audit and discovery. Week 3 to 6 ICP (互联网内容提供商) filing in parallel with design and tech setup. Week 7 to 10 build, content integration and testing. Week 11 to 12 staging, fixes, launch. Then maintenance kicks in. We share a Gantt chart in the proposal.',
      },
      {
        question: 'What slows projects down most often?',
        answer: 'ICP (互联网内容提供商) paperwork from the client side. We ask for documents in week one and sometimes get them in week four. The other big one is content. People underestimate how long Chinese copy takes when it\'s done properly, not just translated.',
      },
      {
        question: 'How often will we hear from you during the project?',
        answer: "Weekly status calls, written updates every Monday, WeChat (微信) channel for day-to-day questions. Plus access to our project tracker. You'll know exactly what's happening, no black box.",
      },
      {
        question: 'Who do we talk to on your team?',
        answer: "A project lead who runs your account end to end. They pull in our specialists (design, dev, SEO, content, hosting) when needed. You don't end up explaining your business to five different people.",
      },
      {
        question: 'Can we be involved in the design process?',
        answer: 'Yes. We share Figma access if your team wants to comment directly. Some clients are very hands-on, some hand it off completely. Both work fine.',
      },
      {
        question: 'What happens if we miss a deadline on our side?',
        answer: "The project pauses on our side too. We don't charge waiting fees, we just pick up when you're ready. But if a project pauses for more than 60 days we re-scope, because pricing in China shifts and so does our team availability.",
      },
    ],
  },
  {
    title: 'Team, Location & Communication',
    shortTitle: 'Team',
    icon: 'people',
    items: [
      {
        question: 'Where is your team actually based?',
        answer: "Shanghai (上海) is the main office. Some team members are in Hangzhou (杭州) and Shenzhen (深圳). We're physically in China, which matters for ICP (互联网内容提供商) filings, hosting relationships, and just understanding how the internet works here day to day.",
      },
      {
        question: 'Do you have non-Chinese staff?',
        answer: 'Yes. Founder is European, several team members are bilingual or trilingual. Project leads who work with international clients all speak business-level English. Internal comms happen in a mix of English and Chinese.',
      },
      {
        question: 'What time zone do you work in? How does that work for European or US clients?',
        answer: "We're on China Standard Time (中国标准时间, UTC+8). For European clients we have overlap most of the workday. For US east coast we run morning and evening calls; our team is flexible. West coast is harder but workable for milestone calls.",
      },
      {
        question: 'Can we visit your office?',
        answer: "Yes please. We host clients in Shanghai (上海) regularly. If you're coming through China we'll arrange a working session, dinner, and introduce you to whoever's relevant. It's useful to put faces to the team.",
      },
      {
        question: 'Do you fly to client offices?',
        answer: "For projects over a certain size, yes, kickoff meetings on-site are included. For smaller projects we do everything remote which actually works well. We have clients we've never met in person whose sites we've run for years.",
      },
      {
        question: 'What languages do you communicate in?',
        answer: 'English for international clients. Mandarin (普通话) internally and with Chinese vendors, hosting providers, and government offices. If your team has Chinese speakers we can mix. WeChat (微信) works for both.',
      },
      {
        question: 'Do you use WeChat for client comms?',
        answer: 'Yes, WeChat (微信) is the easiest channel for most clients. Email also works, whatever fits your team. We adapt to your tools, not the other way around.',
      },
    ],
  },
  {
    title: 'Contracts & Risk',
    shortTitle: 'Contracts',
    icon: 'document',
    items: [
      {
        question: 'What does the contract actually cover?',
        answer: 'Scope, deliverables, timeline, payment schedule, IP ownership, confidentiality, termination clauses, support terms post-launch. Standard professional services contract, governed by the law you and we agree on. Most international clients pick Hong Kong (香港) or Singapore (新加坡) law. Negotiable.',
      },
      {
        question: 'Who owns the website code and content after launch?',
        answer: 'You do. Full transfer of all assets, source code, design files, content, hosting credentials. We retain rights to use the project anonymously in our portfolio unless you specifically say no.',
      },
      {
        question: 'What if we want to leave you mid-project?',
        answer: "Termination clauses are clear in the contract. You pay for work completed to date, we hand over everything we've built so far in workable form. We don't hold projects hostage. We've never had to enforce a clawback because frankly clients don't leave mid-project.",
      },
      {
        question: 'Do you sign NDAs?',
        answer: "Yes, before any technical or commercial detail gets shared. Mutual NDAs are standard. We have our own template if you don't have one.",
      },
    ],
  },
  {
    title: 'Technology Decisions',
    shortTitle: 'Tech',
    icon: 'chip',
    items: [
      {
        question: 'WordPress or Astro? How do we choose?',
        answer: 'Depends on your team and your content workflow. WordPress if you have marketers who need to update content daily without dev help. Astro if performance is critical and you have dev support. We build both, and we can also do hybrid setups where the marketing site is one and the e-commerce piece is another.',
      },
      {
        question: 'Can you work with our existing tech stack?',
        answer: "Honestly, no. We don't try to bend Western stacks to work inside the Great Firewall; we've seen too many of those builds collapse six months in. We recommend Chinese tools that work natively here. Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信), the Chinese AI platforms. Different ecosystem, different rules. Trying to keep your global stack alive in China usually costs more in workarounds than just rebuilding properly.",
      },
      {
        question: "Why don't you just use a Western SaaS website builder for China?",
        answer: "Because they don't work properly in China. Most are partially blocked or heavily throttled, and none have ICP-compatible hosting on the mainland. We've migrated several clients off these platforms because their China sites were unusable. We build on tools that work inside the Firewall, full stop.",
      },
      {
        question: 'Do you build mobile apps too?',
        answer: 'No. We focus on web, mini programs (微信小程序) and Baidu Smart Mini Programs (智能小程序). For native iOS and Android apps we partner with specialists in Shenzhen (深圳).',
      },
      {
        question: 'Can you integrate with WeChat?',
        answer: "Yes. WeChat (微信) login, sharing, mini programs, payment. We've built dozens of WeChat integrations and we know the API quirks. Same with Alipay (支付宝) and UnionPay (银联).",
      },
      {
        question: 'What about AI and chatbots on our China site?',
        answer: "We integrate with Chinese AI platforms: DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), and Baidu AI (百度AI). Western AI tools are mostly blocked or unreliable from inside China, so they aren't an option. If you've been told otherwise we'll walk you through what actually works here.",
      },
      {
        question: 'Will our existing Elementor WordPress site work in China?',
        answer: 'Probably not in its current state. But it can usually be made to work. We strip out the Google dependencies, swap the fonts, reroute the integrations. Most Elementor sites we inherit are running cleanly inside the Firewall within a few weeks.',
      },
      {
        question: 'What about plugin auto-updates from wordpress.org?',
        answer: "They often fail or time out from inside China. We configure update routing through a proxy or run scheduled manual update windows. Either way, your team shouldn't have to think about it.",
      },
    ],
  },
  {
    title: 'SEO, Baidu & AI Search',
    shortTitle: 'SEO & AI',
    icon: 'search',
    items: [
      {
        question: "What's different about Baidu SEO compared to Google?",
        answer: "Pretty much everything. Baidu (百度) favours mainland-hosted sites, weighs Chinese content quality differently, has its own Search Resource Platform (百度搜索资源平台) for submission, treats meta tags differently, and ranks based on factors Google doesn't care about. Optimising for one isn't optimising for the other.",
      },
      {
        question: 'Do you guarantee Baidu rankings?',
        answer: "No, and avoid anyone who does. We guarantee best-practice Baidu (百度) SEO setup, Baidu Search Resource Platform (百度搜索资源平台) submission, technical optimisation, structured data. Ranking depends on competition, content quality, and time. We share monthly progress reports so you see what's moving.",
      },
      {
        question: 'What is GEO China and do we need it?',
        answer: "Generative Engine Optimisation for Chinese AI search. DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), Baidu AI (百度AI). Chinese users increasingly start research in these tools instead of Baidu (百度) directly. If your competitors are showing up in AI answers and you're not, that's traffic walking past your door.",
      },
      {
        question: 'How long until we see Baidu traffic after launch?',
        answer: 'Indexing usually starts within 2 to 4 weeks of submission to Baidu Search Resource Platform (百度搜索资源平台) with proper SEO setup. Real ranking momentum on competitive keywords takes 3 to 6 months minimum. Anyone promising faster is selling something.',
      },
    ],
  },
  {
    title: 'Content & Localisation',
    shortTitle: 'Content',
    icon: 'language',
    items: [
      {
        question: 'Do you handle Chinese translation, or do we provide it?',
        answer: "Both options work. We have in-house and trusted external Chinese copywriters who write for Chinese audiences, not just translate. If you have an existing translation partner we can work with their output but we'll flag where it reads as translated rather than written.",
      },
      {
        question: "What's the difference between translation and localisation?",
        answer: "Translation gives you the same words in Chinese. Localisation rewrites for the audience, the platform, the cultural references, and the search terms Chinese users actually type. A translated site reads foreign. A localised site doesn't.",
      },
      {
        question: 'Should we use Simplified or Traditional Chinese?',
        answer: 'Simplified Chinese (简体中文) for mainland China. Traditional Chinese (繁體中文) for Hong Kong (香港) and Taiwan (台湾). If you target both, we maintain separate versions. Mixing them on one site is a credibility killer.',
      },
    ],
  },
  {
    title: 'Performance & Results',
    shortTitle: 'Performance',
    icon: 'spark',
    items: [
      {
        question: 'What kind of performance gains can we expect?',
        answer: 'Existing slow sites moved to Aliyun (阿里云) typically go from 12 to 15 second load times to under 2 seconds. New builds hit under 1 second on mainland connections. Baidu (百度) indexing usually starts within 2 to 4 weeks of launch with proper SEO setup.',
      },
      {
        question: 'How do you measure success on China projects?',
        answer: "Depends on the project. For lead-gen sites it's form submissions and Baidu Tongji (百度统计) conversion goals. For e-commerce it's revenue and cart completion. For brand sites it's time on page, return visits, organic traffic. We agree KPIs in the kickoff and report against them monthly.",
      },
      {
        question: 'What if the site underperforms after launch?',
        answer: "We diagnose. Could be technical, could be content, could be a mismatch with what Chinese users expect. Bugs we fix, that's part of the deal. Bigger optimisation work, content rewrites, SEO depth, those run through the maintenance retainer.",
      },
    ],
  },
  {
    title: 'Working With Us Long-Term',
    shortTitle: 'Long-Term',
    icon: 'loop',
    items: [
      {
        question: "What's your client retention rate?",
        answer: "Most clients stay with us on maintenance retainers after launch. Some have been with us for many years. We don't track it as a marketing metric, but the answer is high. China hosting and ICP (互联网内容提供商) renewals essentially require ongoing local support, so the relationship continues by design.",
      },
      {
        question: 'Can we hire your team for ongoing development after launch?',
        answer: 'Yes. We do retainer-based dev hours, content production, SEO, GEO China work, hosting management. Most clients land on a monthly retainer that covers maintenance plus a bucket of dev hours for whatever comes up.',
      },
      {
        question: 'What if we want to bring it in-house eventually?',
        answer: "Fine, we'll help you transition. We've trained client teams to take over content updates, light dev, and Baidu (百度) SEO. We hand over documentation, do the knowledge transfer, and stay on call for the hard stuff. No drama.",
      },
      {
        question: 'Do you offer training for our internal team?',
        answer: "Yes. WordPress training, Baidu Tongji (百度统计) training, Baidu Search Resource Platform (百度搜索资源平台) basics, content workflow. Either remote sessions or on-site if you're in China. Format ranges from a couple of hours to multi-day workshops depending on what you need.",
      },
    ],
  },
  {
    title: 'Common Objections & Edge Cases',
    shortTitle: 'Edge Cases',
    icon: 'spark-question',
    items: [
      {
        question: 'We already work with a global digital agency. Why add you?',
        answer: "Because they can't file ICP (互联网内容提供商), they don't have hosting relationships in China, and they don't know Baidu (百度) the way we do. Most of our clients keep their global agency for global work and use us for the China-specific layer. We collaborate with global agencies all the time, no ego problems.",
      },
      {
        question: 'Our IT team thinks they can handle this internally. What do we say?',
        answer: "Tell them we said good luck, then call us in three months. Half-joking. Internal IT can absolutely do this if they have time to spend a year learning the regulations, building hosting relationships, and figuring out Baidu Search Resource Platform (百度搜索资源平台). Most internal teams realise that learning curve isn't where they should spend their time.",
      },
      {
        question: 'What if our company has political or regulatory sensitivity?',
        answer: "We've worked with clients in regulated industries, from healthcare to defense-adjacent tech. We don't take on every project. If your sector has compliance issues that make a China web presence risky we'll tell you upfront and recommend you talk to legal counsel first. Better to know in week one.",
      },
    ],
  },
];
