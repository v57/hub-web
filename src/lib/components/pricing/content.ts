export type FeatureItem = {
  label: string;
  src: string;
};

export type PricingPlan = {
  name: string;
  features: FeatureItem[];
  cardClass: string;
  topRowClass: string;
  ctaClass: string;
  badgeLabel: string;
  ctaLabel: string;
  supportText: string;
};

export type SupportButton = {
  href: string;
  iconClass: string;
  label: string;
  src: string;
};

export const litePlan: PricingPlan = {
  name: 'Hub Lite',
  features: [
    { label: 'Fast', src: '/files/status/approved.svg' },
    { label: 'No security', src: '/files/status/approved.svg' }
  ],
  cardClass: 'price-card-left-container',
  topRowClass: 'frame-parent',
  ctaClass: 'buttonget2',
  badgeLabel: 'Free',
  ctaLabel: 'Download Lite',
  supportText: 'Always free · Support optional'
};

export const proPlan: PricingPlan = {
  name: 'Hub Pro',
  features: [
    { label: 'Authorization', src: '/files/status/approved.svg' },
    { label: 'Permission Groups', src: '/files/status/approved.svg' },
    { label: 'Whitelist Mode', src: '/files/status/approved.svg' },
    { label: 'Advanced Load Balancing', src: '/files/status/approved.svg' },
    { label: 'Proxy to Another Hub', src: '/files/status/approved.svg' },
    { label: 'Merge Hubs', src: '/files/status/approved.svg' }
  ],
  cardClass: 'price-card-right-container',
  topRowClass: 'frame-group',
  ctaClass: 'buttonget4',
  badgeLabel: 'Free',
  ctaLabel: 'Download Pro',
  supportText: 'Always free · Support optional'
};

export const supportButtons: SupportButton[] = [
  {
    href: 'https://discord.com/invite/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/discord.svg',
    label: 'Discord'
  },
  {
    href: 'https://www.patreon.com/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/patreon.svg',
    label: 'Patreon'
  },
  {
    href: 'https://boosty.to/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/boosty.svg',
    label: 'Boosty'
  },
  {
    href: 'https://github.com/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/github.svg',
    label: 'GitHub'
  },
  {
    href: 'https://www.buymeacoffee.com/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/buymeacoffee.svg',
    label: 'Buy Me a Coffee'
  },
  {
    href: 'https://ko-fi.com/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/kofi.svg',
    label: 'Ko-Fi'
  },
  {
    href: 'https://tether.to/en/',
    iconClass: 'vector-icon',
    src: '/files/apps/usdt.svg',
    label: 'USDT'
  },
  {
    href: 'https://bitcoin.org/en/',
    iconClass: 'vector-icon',
    src: '/files/apps/btc.svg',
    label: 'BTC'
  }
];

export const supportTitle = 'SUPPORT THE PROJECT';

export const supportDescription =
  'If Hub saves you time, you can support maintenance, docs, and long-term development. Support does not unlock features. It just keeps the project healthy.';
