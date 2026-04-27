export interface Problem {
  title: string;
  description: string;
  citation?: string;
}

export const problems: Problem[] = [
  {
    title: 'Your Content Doesn’t Resonate',
    description: 'Translated copy is not localised copy. Chinese audiences scan for trust signals foreign teams under-emphasise: founder credibility, certifications, partner logos, awards.',
  },
  {
    title: 'Your UX Feels Foreign',
    description: 'Mobile-first, often inside the WeChat in-app browser. Long-scroll, dense pages, trust signals up front. Western minimalism reads as empty or unfinished.',
  },
  {
    title: 'Baidu Doesn’t See You',
    description: 'Different ranking signals, different indexing rules. Baidu will not index a site properly without an ICP filing and a Chinese host. The Google playbook does not transfer.',
    citation: 'Baidu holds roughly half of China’s search market. Google sits under 3%. Source: Statcounter Global Stats, China, 2024.',
  },
  {
    title: 'AI Engines Have Already Replaced Search For Many Buyers',
    description: 'Doubao, Kimi, DeepSeek and Baidu’s Wenxin now answer questions that used to go to a search engine. The user rarely clicks through. If your site is not structured for AI to cite, you are invisible.',
  },
  {
    title: 'Hosting Outside China Is a Floor, Not a Ceiling',
    description: 'Slow loads, broken plugins, scripts that silently fail behind the Firewall. Infrastructure has to work, but it does not win you customers. Brand resonance does.',
  },
];
