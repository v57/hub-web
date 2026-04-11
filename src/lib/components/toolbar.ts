export type ToolbarPage = 'home' | 'feedback' | 'pricing';

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

export const toolbarConfigs = {
  home: {
    brandIconSrc: '/files/icon/compact.png',
    actions: [
      { label: 'Pricing', href: '/pricing', variant: 'muted' },
      { label: 'Feedback', href: '/feedback', variant: 'muted' },
      { label: 'Download', variant: 'solid' },
      { label: 'Open', variant: 'outline' }
    ]
  },
  feedback: {
    brandIconSrc: '/files/icon/compact.png',
    pageName: 'Feedback',
    actions: [
      { label: 'Pricing', href: '/pricing', variant: 'muted' },
      { label: 'Download', variant: 'solid' },
      { label: 'Open', variant: 'outline' }
    ]
  },
  pricing: {
    brandIconSrc: '/files/icon/compact.png',
    pageName: 'Pricing',
    actions: [
      { label: 'Feedback', href: '/feedback', variant: 'muted' },
      { label: 'Download', variant: 'solid' },
      { label: 'Open', variant: 'outline' }
    ]
  }
} as const satisfies Record<ToolbarPage, ToolbarConfig>;

export function getToolbarConfig(page: ToolbarPage): ToolbarConfig {
  return toolbarConfigs[page];
}
