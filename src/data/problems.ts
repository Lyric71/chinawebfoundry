export interface Problem {
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    title: 'Blocked by the Great Firewall',
    description: 'Your website loads slowly or not at all for users in mainland China.',
  },
  {
    title: 'No ICP licence',
    description: 'Without an ICP licence, your site cannot legally be hosted on Chinese servers.',
  },
  {
    title: 'Google services break everything',
    description: 'Google Fonts, Analytics, reCAPTCHA, and Maps are all blocked in China.',
  },
  {
    title: 'Invisible on Baidu',
    description: 'Your site isn\'t indexed by Baidu, so Chinese users can\'t find you.',
  },
  {
    title: 'Plugins fail in China',
    description: 'Many WordPress plugins depend on external services that are blocked or throttled.',
  },
  {
    title: 'No team on the ground',
    description: 'Managing a China website from overseas means slow debugging and blind spots.',
  },
];
