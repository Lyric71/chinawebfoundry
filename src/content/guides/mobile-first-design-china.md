---
title: "Mobile-First Design for China: Actually, Make That Mobile-Only"
subtitle: "In China, 'mobile-first' is already outdated. Over 95% of internet users access the web from their phones. If your site isn't built for mobile, it doesn't exist."
summary: "China's internet is mobile-only. This guide covers design principles, WeChat browser compatibility, the super-app ecosystem and mini-program strategy for foreign brands."
visual: "/images/guides/mobile-first-design-china.webp"
order: 9
published: true
category: Design
---

1.3 billion internet users and almost all of them on their phones. 969 million paying for things by scanning a QR code. WeChat alone eating 34% of all internet traffic in the country. China didn't go through the desktop era the way the West did. It went straight to mobile, and the gap between what Chinese users expect from a mobile experience and what most foreign companies deliver is enormous. If you're still building desktop-first and adding responsive breakpoints after the fact, you're building for an internet that Chinese users left behind years ago.

## China's Mobile Internet by the Numbers

These aren't projections. These are where things stand right now.

| Metric | Value |
|---|---|
| Internet users in China | 1.30 billion (91.6% penetration) |
| Mobile broadband coverage | 100% (3G/4G/5G) |
| WeChat monthly active users | 1.481 billion |
| WeChat mini-program users | 949 million (90% of WeChat) |
| Mobile payment users | 969 million (96% of adults) |
| Mobile payment market | $15.86B today, $78.23B by 2030 (CAGR 37.59%) |
| WeChat share of all China traffic | 34% |

China has 1.3 billion internet users as of 2025. That's 91.6% of the population online. Mobile broadband coverage is at 100% across 3G, 4G, and 5G networks. Over 95% access the internet primarily through mobile devices.

WeChat has 1.481 billion monthly active users. 949 million of those are using mini-programs, which is 90% of WeChat's total user base. WeChat data traffic alone accounts for 34% of all internet traffic in China.

> WeChat: 1.481 billion monthly active users. 34% of all internet traffic in China. Not just a messaging app. The platform where most of the Chinese internet happens.

Then there's payments, and this is where the numbers get really striking. 969 million mobile payment users, covering 96% of Chinese adults. The market sits at $15.86 billion and is projected to reach $78.23 billion by 2030 at a 37.59% compound annual growth rate. This isn't a trend that's ramping up. It's already the established norm.

## Design Principles That Actually Matter

| Principle | Specification |
|---|---|
| Design approach | Mobile-only, not mobile-first (95%+ mobile users) |
| Primary browser to test | WeChat in-app browser (older WebKit) |
| Touch targets | Min 44x44px, optimal 48x48px, 8px spacing |
| CTA placement | Bottom third of screen (thumb-friendly zone) |
| Navigation | Vertical scrolling as primary pattern |
| Payment flow | QR code checkout (Alipay / WeChat Pay) |

Designing for mobile in China is not the same thing as responsive design for a Western audience. Expectations are higher, browsing context is different, and the browser most of your users are in isn't Chrome or Safari. It's WeChat's built-in browser.

Biggest shift: mobile-only, not mobile-first. When 95%+ of your users are on phones, the phone screen is the product. Desktop is the afterthought. Companies that design for desktop and then squeeze it into a responsive layout are working backwards and it shows.

WeChat's in-app browser trips people up more than anything else on this list. It runs an older version of WebKit, so CSS and JavaScript that render fine in modern browsers can break inside WeChat. If you're only testing in Chrome and Safari, you're not testing for your actual users. You have to load the site in WeChat's browser specifically and check everything.

Touch targets: 44 by 44 pixels minimum, 48 by 48 optimal, 8 pixels of spacing between them. This isn't a suggestion. Small buttons designed for a mouse cursor don't work when somebody's navigating with their thumb on a crowded subway at rush hour.

Put your main call-to-action buttons in the bottom third of the screen. That's where the thumb naturally rests during one-handed use. CTAs at the top of the screen force users to adjust their grip or use both hands. Small friction, but it costs conversions.

Vertical scrolling is the default. Chinese mobile users spend their day scrolling through long vertical feeds on WeChat, Douyin, Weibo. Horizontal swiping, burger menus, nested navigation structures feel foreign and awkward on mobile.

And payment flow. QR code. Not a form where someone types in 16 digits from a credit card. A QR code that opens Alipay or WeChat Pay. That's how transactions happen on mobile in China. If your checkout asks users to manually enter card information, you've already lost them.

> QR code checkout via Alipay or WeChat Pay. That's the standard. If your payment flow involves typing in card numbers, you're asking Chinese users to do something they haven't done in years.

## The Super-App Ecosystem

Chinese users don't live in a browser. They live inside apps that do everything.

WeChat, Alipay, Meituan. Each one is a super-app that bundles messaging, commerce, payments, and services into a single platform. WeChat isn't a messaging app. It's a browser, a wallet, a social feed, a storefront, and a mini-program platform all at once. Alipay handles the financial side of the same equation. Meituan covers food delivery, hotel bookings, local services, all in one place.

Mini-programs have basically replaced native apps for everyday tasks. Instead of downloading a separate app from the App Store, users open a mini-program inside WeChat or Alipay. 949 million people use them. Ordering food, booking a ride, checking into a hotel, buying a product - the mini-program is the expected way to do it. Downloading a standalone app is the fallback.

> 949 million people use WeChat mini-programs. For most everyday tasks, the mini-program is the product. The App Store download is the backup plan.

Expectations inside these platforms are brutal. Instant payment, no card entry. Automatic login via WeChat SSO. One-tap sharing to contacts and groups. Users have been trained by years of seamless in-app experiences to have zero tolerance for extra steps. Any friction and they're gone.

| Layer | Purpose |
|---|---|
| Responsive mobile website | Baidu SEO and organic search visibility |
| WeChat mini-program | In-app convenience and discoverability |
| Native app | Only if the product genuinely requires it |

For foreign brands, the setup that most people land on is: responsive mobile website for Baidu SEO and search visibility, a WeChat mini-program for in-app convenience, and a native app only if the product genuinely requires one. Most don't need the native app. Mobile site plus mini-program is enough for the vast majority of what Chinese users want from your brand.
