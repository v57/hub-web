export type ToolbarPage = 'home' | 'pricing' | 'privacy';

export type ToolbarVariant = 'muted' | 'solid' | 'outline';

export type ToolbarAction = {
  href?: string;
  label: string;
  variant: ToolbarVariant;
};

export type ToolbarConfig = {
  actions: ToolbarAction[];
  brandIconSrc: string;
  pageName?: string;
};

const appStoreDownloadHref = 'https://apps.apple.com/app/hub-connect-your-devices/id6777729021';

export const toolbarConfigs = {
  home: {
    brandIconSrc: '/files/icon/compact.png',
    actions: [
      { label: 'Pricing', href: '/pricing', variant: 'muted' },
      { label: 'Download', href: appStoreDownloadHref, variant: 'solid' },
      { label: 'Open', variant: 'outline' }
    ]
  },
  pricing: {
    brandIconSrc: '/files/icon/compact.png',
    pageName: 'Pricing',
    actions: [
      { label: 'Pricing', href: '/pricing', variant: 'muted' },
      { label: 'Download', href: appStoreDownloadHref, variant: 'solid' },
      { label: 'Open', variant: 'outline' }
    ]
  },
  privacy: {
    brandIconSrc: '/files/icon/compact.png',
    pageName: 'Privacy Policy',
    actions: [
      { label: 'Pricing', href: '/pricing', variant: 'muted' },
      { label: 'Download', href: appStoreDownloadHref, variant: 'solid' },
      { label: 'Open', variant: 'outline' }
    ]
  }
} as const satisfies Record<ToolbarPage, ToolbarConfig>;

export function getToolbarConfig(page: ToolbarPage): ToolbarConfig {
  return toolbarConfigs[page];
}
