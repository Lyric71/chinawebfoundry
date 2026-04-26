export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  column?: 'plan' | 'build' | 'grow';
  subColumn?: 'technology';
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      {
        label: 'Strategy & Audit',
        href: '/services/strategy-audit/',
        description: 'Assess your China-readiness',
        column: 'plan',
      },
      {
        label: 'China Migration',
        href: '/services/china-migration/',
        description: 'Move your site behind the Firewall',
        column: 'plan',
      },
      {
        label: 'Chinese Content',
        href: '/services/chinese-content/',
        description: 'Native copy that converts',
        column: 'build',
      },
      {
        label: 'UX/UI Design',
        href: '/services/ux-ui-design/',
        description: 'Design for Chinese users',
        column: 'build',
      },
      {
        label: 'WordPress',
        href: '/wordpress/',
        column: 'build',
        subColumn: 'technology',
      },
      {
        label: 'Astro',
        href: '/astro/',
        column: 'build',
        subColumn: 'technology',
      },
      {
        label: 'Hosting',
        href: '/services/china-hosting/',
        description: 'Fast, ICP-licensed servers',
        column: 'build',
      },
      {
        label: 'Baidu SEO',
        href: '/services/baidu-seo/',
        description: "Rank on China's top search engine",
        column: 'grow',
      },
      {
        label: 'GEO (Generative Engine Optimization)',
        href: '/services/geo/',
        description: 'Be cited by AI search engines',
        column: 'grow',
      },
      {
        label: 'Maintenance & Support',
        href: '/services/maintenance-support/',
        description: 'Ongoing updates and monitoring',
        column: 'grow',
      },
    ],
  },
  {
    label: 'Work',
    href: '/work/',
  },
  {
    label: 'Who We Are',
    href: '/who-we-are/',
  },
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      {
        label: 'China Site Scanner',
        href: '/china-site-scanner/',
        description: 'Test your site for China readiness',
      },
      {
        label: 'China Web Guide',
        href: '/resources/china-web-guide/',
        description: 'Your guide to the Chinese web',
      },
      {
        label: 'Frequently Asked Questions',
        href: '/resources/faq/',
        description: 'Common questions answered',
      },
    ],
  },
];

export const ctaNav: NavItem = {
  label: 'Contact Us',
  href: '/contact/',
};

export const footerNav = {
  services: mainNav[0].children!,
  company: [
    { label: 'Our Work', href: '/work/' },
    { label: 'Who We Are', href: '/who-we-are/' },
  ],
  resources: [
    { label: 'China Site Scanner', href: '/china-site-scanner/' },
    { label: 'China Web Guide', href: '/resources/china-web-guide/' },
    { label: 'FAQ', href: '/resources/faq/' },
  ],
};

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
];
