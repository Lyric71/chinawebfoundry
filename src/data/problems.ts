export interface Problem {
  title: string;
  description: string;
  citation?: string;
}

export const problems: Problem[] = [
  {
    title: 'Your content doesn’t resonate',
    description: 'Chinese audiences scan for trust signals foreign teams under-emphasise: founder credibility, certifications, partner logos, awards. A native Chinese writer puts them on the page in the right order.',
  },
  {
    title: 'Your UX feels foreign',
    description: 'Mobile-first, often inside the WeChat in-app browser. Long-scroll, dense pages, trust signals up front. Western minimalism reads as empty or unfinished.',
  },
  {
    title: 'Baidu doesn’t see you',
    description: 'Different ranking signals, different indexing rules. Baidu will not index a site properly without an ICP filing and a Chinese host. The Google playbook does not transfer.',
    citation: 'Baidu holds roughly half of China’s search market. Google sits under 3%. Source: Statcounter Global Stats, China, 2024.',
  },
  {
    title: 'AI engines have already replaced search for many buyers',
    description: 'Doubao, Kimi, DeepSeek and Baidu’s Wenxin now answer questions that used to go to a search engine. The user rarely clicks through. If your site is not structured for AI to cite, you are invisible.',
  },
  {
    title: 'China hosting is just the floor',
    description: 'Slow loads, broken plugins, scripts that silently fail behind the Firewall. Once the infrastructure works, brand resonance is what wins customers.',
  },
];
