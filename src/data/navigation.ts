export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  column?: 'plan' | 'build' | 'grow';
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
        label: 'UX/UI Design',
        href: '/services/ux-ui-design/',
        description: 'Design for Chinese users',
        column: 'build',
      },
      {
        label: 'Technical Integration',
        href: '/services/technical-integration/',
        description: 'CDN, payments, and performance',
        column: 'build',
      },
      {
        label: 'Plugins & Extensions',
        href: '/services/plugins-extensions/',
        description: 'Replace blocked plugins',
        column: 'build',
      },
      {
        label: 'Baidu SEO',
        href: '/services/baidu-seo/',
        description: "Rank on China's top search engine",
        column: 'grow',
      },
      {
        label: 'Chinese Content',
        href: '/services/chinese-content/',
        description: 'Native copy that converts',
        column: 'grow',
      },
      {
        label: 'China Hosting',
        href: '/services/china-hosting/',
        description: 'Fast, ICP-licensed servers',
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
    { label: 'China Web Guide', href: '/resources/china-web-guide/' },
    { label: 'FAQ', href: '/resources/faq/' },
  ],
};

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
];
