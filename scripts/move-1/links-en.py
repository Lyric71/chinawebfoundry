# -*- coding: utf-8 -*-
"""Move 1, Task C: one contextual internal link per English guide article."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from insert import apply

HEAD = '/wordpress-in-china/'
WPA = '/wordpress-agency-china/'
WEB = '/web-agency-china/'

EDITS = {
# --- Group 1: platform / dependency level -> head-term page -------------------
'baiduspider-firewall': (HEAD,
 "We see it more than any other technical cause of a stalled China launch, and it is almost always a setting nobody remembers making.",
 "We see it more than any other technical cause of a stalled China launch, well ahead of anything in [the WordPress build itself](" + HEAD + "), and it is almost always a setting nobody remembers making."),

'china-website-hosting-guide': (HEAD,
 "Hosting is the most underestimated decision in any China web strategy.",
 "Hosting is the most underestimated decision in any China web strategy, and it decides more about page speed than [anything you change inside a WordPress build](" + HEAD + ")."),

'host-website-in-china': (HEAD,
 "That gap is almost always hosting. Where your server physically sits decides whether a Chinese visitor sees your homepage in under a second or gives up on a spinner.",
 "That gap is almost always hosting. Where your server physically sits decides whether a Chinese visitor sees your homepage in under a second or gives up on a spinner, and it outweighs every other choice in [a WordPress build for China](" + HEAD + ")."),

'great-firewall-what-it-blocks': (HEAD,
 "is delivering a broken experience to users in China.",
 "is delivering a broken experience to users in China, and [a default WordPress install carries several of them](" + HEAD + ")."),

'google-analytics-china': (HEAD,
 "or leave it in and quietly serve a slower site to everyone in Shanghai.",
 "or leave it in and quietly serve a slower site to everyone in Shanghai, which is one of the commonest ways [a WordPress site ends up broken in China](" + HEAD + ")."),

'china-website-localisation': (HEAD,
 "It touches payments, trust indicators, content tone, customer service speed, and cultural choices",
 "It touches payments, trust indicators, content tone, customer service speed, [what has to change in a WordPress build for China](" + HEAD + "), and cultural choices"),

'mobile-first-design-china': (HEAD,
 "you're building for an internet that Chinese users left behind years ago.",
 "you're building for an internet that Chinese users left behind years ago, and no amount of tuning [a WordPress theme for China](" + HEAD + ") rescues that decision afterwards."),

'woocommerce-china-store-guide': (HEAD,
 "WooCommerce can absolutely work in China.",
 "WooCommerce can absolutely work in China, on the same terms as [any WordPress site that runs behind the Great Firewall](" + HEAD + ")."),

'baidu-structured-data': (HEAD,
 "Most companies reading this cannot use it, which still leaves the question of what to ship.",
 "Most companies reading this cannot use it, which still leaves the question of what to ship from [a WordPress site built for China](" + HEAD + ")."),

'submitting-urls-to-baidu': (HEAD,
 "that tells Baidu a page exists.",
 "that tells Baidu a page exists, whether those pages come from [a WordPress install running in China](" + HEAD + ") or anything else."),

'baidu-search-resource-platform': (HEAD,
 "Skip it and a China search strategy is guesswork with a translation invoice attached.",
 "Skip it and a China search strategy is guesswork with a translation invoice attached, however carefully [the WordPress side of the site was built for China](" + HEAD + ")."),

'baidu-site-verification': (HEAD,
 "The job takes ten minutes, assuming the hosting cooperates.",
 "The job takes ten minutes, assuming the hosting cooperates and [the WordPress side is already China-ready](" + HEAD + ")."),

'baidu-verification-failed': (HEAD,
 "and what does break it sits between Baiduspider and your server.",
 "and what does break it sits between Baiduspider and your server rather than in [the WordPress install behind it](" + HEAD + ")."),

'baidu-verification-scope': (HEAD,
 "A site here is one protocol and one host, nothing wider.",
 "A site here is one protocol and one host, nothing wider, which matters if [your China WordPress site](" + HEAD + ") answers on more than one of them."),

'baidu-fast-inclusion-gone': (HEAD,
 "You pushed a URL into it and the page was supposed to jump the queue.",
 "You pushed a URL into it and the page was supposed to jump the queue, which made it the first plugin request on every [WordPress project aimed at China](" + HEAD + ")."),

'china-data-privacy-pipl-dsl': (HEAD,
 "or tracks user behaviour for visitors from China, you're in scope.",
 "or tracks user behaviour for visitors from China, you're in scope, and [a stock WordPress install does at least two of the three](" + HEAD + ")."),

# --- Group 2: buying intent close to the WordPress service -------------------
'icp-licence-filing-foreign-companies': (WPA,
 "means slower pages, lower rankings, and a site that Chinese users may never trust.",
 "means slower pages, lower rankings, and a site that Chinese users may never trust, which is why [an agency that files ICP applications routinely](" + WPA + ") is worth more here than a cheaper build."),

'baidu-seo-ranking-in-china': (WPA,
 "this is the search engine you need to crack.",
 "this is the search engine you need to crack, and it is the first thing to ask [a WordPress agency working in China](" + WPA + ") about."),

'china-content-marketing-strategy': (WPA,
 "That single difference changes how you approach platforms, formats, and the timing of everything you publish.",
 "That single difference changes how you approach platforms, formats, the timing of everything you publish, and what you should expect from [the agency building the site underneath it](" + WPA + ")."),

'china-search-landscape-beyond-baidu': (WPA,
 "Ignoring them means missing a real chunk of how Chinese people search.",
 "Ignoring them means missing a real chunk of how Chinese people search, and it is a gap [a China WordPress specialist](" + WPA + ") should raise before you sign anything."),

# --- Group 3: Baidu account / data / commerce operations -> web agency --------
'baidu-keyword-research-tools': (WEB,
 "plus a look at why Chinese keyword research has to be treated as its own thing.",
 "plus a look at why Chinese keyword research has to be treated as its own thing, whoever ends up running it, your team or [a web agency working inside China](" + WEB + ")."),

'baidu-index-traffic-data': (WEB,
 "each on its own clock, several of them empty for weeks by design.",
 "each on its own clock, several of them empty for weeks by design, which is why [the agency reading them for you](" + WEB + ") matters more than the dashboard does."),

'baidu-account-foreign-company': (WEB,
 "Budget a day for the easy version of this. Several weeks for the hard one.",
 "Budget a day for the easy version of this, or several weeks for the hard one, less if [a partner already operating in China](" + WEB + ") does the filing with you."),

'baidu-account-ownership': (WEB,
 "The identity on that account is the closest thing Baidu keeps to a title deed for your China search presence.",
 "The identity on that account is the closest thing Baidu keeps to a title deed for your China search presence, so check whose name it carries before [an agency on the ground](" + WEB + ") sets one up on your behalf."),

'baidu-ads-account-foreign': (WEB,
 "and the choice follows you into hosting and crawl performance long after launch.",
 "and the choice follows you into hosting and crawl performance long after launch, which is where [a web agency based in China](" + WEB + ") earns its fee."),

'baidu-aicaigou-b2b': (WEB,
 "That gap is where foreign marketing plans go wrong.",
 "That gap is where foreign marketing plans go wrong, and where [having someone run your China marketing on the ground](" + WEB + ") pays for itself."),

'baidu-merchant-center': (WEB,
 "Nothing in that sentence touches search results or the indexing of your website.",
 "Nothing in that sentence touches search results or the indexing of your website, which is the job [your web team in China](" + WEB + ") should be doing separately."),

'baidu-product-feed': (WEB,
 "Most of the build goes on problems nobody warned you about.",
 "Most of the build goes on problems nobody warned you about, which is the usual reason this work lands with [an agency that already operates in China](" + WEB + ")."),

'baidu-product-data-destinations': (WEB,
 "One sentence in Baidu's product FAQ lists everywhere that data can travel. All three destinations are bought.",
 "One sentence in Baidu's product FAQ lists everywhere that data can travel, and all three destinations are bought, which changes the budget conversation with [whoever runs your China web operation](" + WEB + ")."),
}

if __name__ == '__main__':
    for gid, (target, old, new) in EDITS.items():
        apply('src/content/guides/%s.md' % gid, [(old, new)])
    print('EN: %d articles linked' % len(EDITS))
