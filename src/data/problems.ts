export interface Problem {
  title: string;
  description: string;
  citation?: string;
}

export const problems: Problem[] = [
  {
    title: 'Your Content Doesn’t Resonate',
    description: 'Translated copy isn’t localised copy. Chinese audiences read for trust signals you weren’t taught to send: third-party validation, partnership logos, government-aligned language, founder credibility, certifications, awards. The hero copy that converts in Munich often reads as cold or boastful in Shanghai, and the longer the page goes the worse it gets.',
  },
  {
    title: 'Your UX Feels Foreign',
    description: 'Long-scroll. Dense pages. Bright accent colours. Live chat right on the homepage. WeChat QR codes where Western sites would put a phone number. Chinese users browse mobile-first, often inside the WeChat in-app browser, and they expect the page to behave a certain way. Western minimalism reads as empty or unfinished.',
  },
  {
    title: 'Baidu Doesn’t See You',
    description: 'Different ranking signals, different indexing rules, different webmaster tools. And Baidu won’t properly index a site without an ICP filing and a Chinese host, no matter how good the SEO. Your Google playbook does not transfer here.',
    citation: 'Baidu held roughly half of China’s search market in 2024, with Bing and Sogou trailing. Google sits at less than 3%. Source: Statcounter Global Stats, China desktop search engine share, 2024.',
  },
  {
    title: 'AI Engines Have Already Replaced Search For Many Buyers',
    description: 'Chinese consumers now ask Doubao, Kimi, DeepSeek and Baidu’s own Wenxin questions that used to go to a search engine. They get an answer with sources, and they often never click through. If your brand isn’t structured for Chinese AI engines to read and cite, you are invisible to a generation of buyers who are separate from the search results page entirely.',
  },
  {
    title: 'Hosting Outside China Is a Floor, Not a Ceiling',
    description: 'Slow loads, broken plugins, blocked scripts, dependencies that silently fail behind the Firewall. The infrastructure has to work, and we make sure it does. But it’s not the problem that wins you customers. Brand resonance is.',
  },
];
