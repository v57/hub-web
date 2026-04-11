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
  secondaryIconClass?: string;
  secondarySrc?: string;
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
    href: 'https://github.com/v57',
    iconClass: 'screenshot-2026-02-27-at-1832',
    src: '/files/apps/bybit.png',
    label: 'Bybit'
  },
  {
    href: 'https://github.com/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/github.svg',
    secondaryIconClass: 'vector-icon2',
    secondarySrc: '/files/apps/github.svg',
    label: 'GitHub'
  },
  {
    href: 'https://github.com/v57',
    iconClass: 'vector-icon',
    src: '/files/apps/discord.svg',
    secondaryIconClass: 'icon',
    secondarySrc: '/files/apps/discord.svg',
    label: 'Discord'
  },
  {
    href: 'https://github.com/v57',
    iconClass: 'idr5voioyc-logos-1-icon',
    src: '/files/apps/coffee.png',
    label: 'Buy Me a Coffee'
  }
];

export const supportTitle = 'SUPPORT THE PROJECT';

export const supportDescription =
  'If Hub saves you time, you can support maintenance, docs, and long-term development. Support does not unlock features. It just keeps the project healthy.';
