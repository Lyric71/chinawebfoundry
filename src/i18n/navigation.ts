import type { Locale } from './ui';
import { useTranslations, localePath } from './utils';
import type { NavItem } from '../data/navigation';

export function getMainNav(lang: Locale): NavItem[] {
  const t = useTranslations(lang);
  const lp = (path: string) => localePath(path, lang);

  return [
    {
      label: t('nav.services'),
      href: lp('/services/'),
      children: [
        {
          label: t('nav.label.strategyAudit'),
          href: lp('/services/strategy-audit/'),
          description: t('nav.desc.strategyAudit'),
          column: 'plan',
        },
        {
          label: t('nav.label.chinaMigration'),
          href: lp('/services/china-migration/'),
          description: t('nav.desc.chinaMigration'),
          column: 'plan',
        },
        {
          label: t('nav.label.uxUiDesign'),
          href: lp('/services/ux-ui-design/'),
          description: t('nav.desc.uxUiDesign'),
          column: 'build',
        },
        {
          label: t('nav.label.technicalIntegration'),
          href: lp('/services/technical-integration/'),
          description: t('nav.desc.technicalIntegration'),
          column: 'build',
        },
        {
          label: t('nav.label.pluginsExtensions'),
          href: lp('/services/plugins-extensions/'),
          description: t('nav.desc.pluginsExtensions'),
          column: 'build',
        },
        {
          label: t('nav.label.baiduSeo'),
          href: lp('/services/baidu-seo/'),
          description: t('nav.desc.baiduSeo'),
          column: 'grow',
        },
        {
          label: t('nav.label.chineseContent'),
          href: lp('/services/chinese-content/'),
          description: t('nav.desc.chineseContent'),
          column: 'grow',
        },
        {
          label: t('nav.label.chinaHosting'),
          href: lp('/services/china-hosting/'),
          description: t('nav.desc.chinaHosting'),
          column: 'grow',
        },
        {
          label: t('nav.label.maintenanceSupport'),
          href: lp('/services/maintenance-support/'),
          description: t('nav.desc.maintenanceSupport'),
          column: 'grow',
        },
      ],
    },
    {
      label: t('nav.work'),
      href: lp('/work/'),
    },
    {
      label: t('nav.whoWeAre'),
      href: lp('/who-we-are/'),
    },
    {
      label: t('nav.resources'),
      href: lp('/resources/'),
      children: [
        {
          label: t('nav.chinaSiteScanner'),
          href: lp('/china-site-scanner/'),
          description: t('nav.desc.chinaSiteScanner'),
        },
        {
          label: t('nav.chinaWebGuide'),
          href: lp('/resources/china-web-guide/'),
          description: t('nav.desc.chinaWebGuide'),
        },
        {
          label: t('nav.faq'),
          href: lp('/resources/faq/'),
          description: t('nav.desc.faq'),
        },
      ],
    },
  ];
}

export function getCtaNav(lang: Locale): NavItem {
  const t = useTranslations(lang);
  const lp = (path: string) => localePath(path, lang);
  return {
    label: t('nav.contactUs'),
    href: lp('/contact/'),
  };
}

export function getFooterNav(lang: Locale) {
  const t = useTranslations(lang);
  const lp = (path: string) => localePath(path, lang);
  const nav = getMainNav(lang);

  return {
    services: nav[0].children!,
    company: [
      { label: t('footer.ourWork'), href: lp('/work/') },
      { label: t('nav.whoWeAre'), href: lp('/who-we-are/') },
    ],
    resources: [
      { label: t('nav.chinaSiteScanner'), href: lp('/china-site-scanner/') },
      { label: t('nav.chinaWebGuide'), href: lp('/resources/china-web-guide/') },
      { label: t('nav.faqShort'), href: lp('/resources/faq/') },
    ],
  };
}

export function getLegalNav(lang: Locale): NavItem[] {
  const t = useTranslations(lang);
  const lp = (path: string) => localePath(path, lang);

  return [
    { label: t('legal.privacyPolicy'), href: lp('/privacy-policy/') },
    { label: t('legal.termsOfService'), href: lp('/terms-of-service/') },
    { label: t('legal.cookiePolicy'), href: lp('/cookie-policy/') },
  ];
}
