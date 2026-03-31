export interface Problem {
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    title: '15+ Second Load Times',
    description: 'Pages take 15 seconds or more to load from mainland China \u2014 if they load at all. Most visitors leave after 3 seconds.',
  },
  {
    title: 'Great Firewall Blocking',
    description: 'Third-party plugins, external CDNs, and embedded scripts are silently blocked by the Great Firewall, breaking layouts and functionality.',
  },
  {
    title: 'Google Services Don\u2019t Work',
    description: 'Google Fonts, Google Analytics, reCAPTCHA, Google Maps \u2014 none of them load in China. Every dependency must be replaced.',
  },
  {
    title: 'ICP Licensing & Compliance',
    description: 'Hosting a website on a Chinese server requires an ICP licence. Content must meet local regulations. The process is opaque and entirely in Chinese.',
  },
  {
    title: 'Baidu SEO Works Nothing Like Google',
    description: 'Different ranking factors, different indexing rules, different webmaster tools. Your Google SEO playbook simply does not apply.',
  },
  {
    title: 'Reliable Hosting Is Hard to Find',
    description: 'Most international hosts have no mainland China presence. Choosing the wrong Chinese host means poor uptime, no English support, and limited WordPress compatibility.',
  },
];
