export type HomePlatform = {
  name: string;
  src: string;
  iconClass: string;
  wrapperClass: string;
};

export type HomeFeatureCard = {
  wrapperClass: string;
  iconFrameClass: string;
  iconWrapperClass: string;
  imageClass: string;
  src: string;
  title: string;
  sectionTitle: string;
  description: string;
  tagsClass: string;
  tags: string[];
};

export type HomeBuildCard = {
  iconWrapperClass: string;
  imageClass: string;
  src: string;
  title: string;
  description: string;
};

export type HomeCommunityLink = {
  outerClass: string;
  imageOneSrc: string;
  imageOneClass: string;
  imageTwoClass: string;
  imageTwoSrc: string;
  title: string;
  description: string;
};

export const platforms: HomePlatform[] = [
  { name: 'macOS', src: '/files/platforms/macos.svg', iconClass: 'vector-icon', wrapperClass: 'iconplatform' },
  { name: 'iOS', src: '/files/platforms/ios.svg', iconClass: 'group-icon', wrapperClass: 'iconplatform' },
  { name: 'tvOS', src: '/files/platforms/tvos.svg', iconClass: 'group-icon2', wrapperClass: 'iconplatform3' },
  {
    name: 'visionOS',
    src: '/files/platforms/visionos.svg',
    iconClass: 'group-icon3',
    wrapperClass: 'iconplatform3'
  },
  { name: 'watchOS', src: '/files/platforms/watchos.svg', iconClass: 'group-icon4', wrapperClass: 'iconplatform' },
  { name: 'Windows', src: '/files/platforms/windows.svg', iconClass: 'vector-icon2', wrapperClass: 'iconplatform' },
  { name: 'Linux', src: '/files/platforms/linux.svg', iconClass: 'vector-icon', wrapperClass: 'logo' },
  { name: 'Web', src: '/files/platforms/web.svg', iconClass: 'group-icon5', wrapperClass: 'iconplatform8' }
];

export const featureCards: HomeFeatureCard[] = [
  {
    wrapperClass: 'cardfeature',
    iconFrameClass: 'iconframe',
    iconWrapperClass: 'iconfeatures',
    imageClass: 'channel-icon',
    src: '/files/features/channel.svg',
    title: 'Channel',
    sectionTitle: 'Protocol layer',
    description:
      'The communication layer that keeps your apps talking in request, stream, and event modes with quick reconnects and clean message handling.',
    tagsClass: 'tags4',
    tags: ['Open in', 'Bun']
  },
  {
    wrapperClass: 'cardfeature2',
    iconFrameClass: 'iconframe2',
    iconWrapperClass: 'iconfeatures2',
    imageClass: 'lite-icon',
    src: '/files/features/lite.svg',
    title: 'Hub Lite',
    sectionTitle: 'Runtime',
    description:
      'A lighter setup for connecting worker services and routing calls across local devices with simple operational overhead.',
    tagsClass: 'tags5',
    tags: ['Bun']
  },
  {
    wrapperClass: 'cardfeature2',
    iconFrameClass: 'iconframe2',
    iconWrapperClass: 'iconfeatures3',
    imageClass: 'pro-icon',
    src: '/files/features/pro.svg',
    title: 'Hub Pro',
    sectionTitle: 'Production',
    description:
      'A production-ready hub with access rules, groups, proxy/merge topologies, and stronger operational controls.',
    tagsClass: 'tags5',
    tags: ['Bun']
  },
  {
    wrapperClass: 'cardfeature',
    iconFrameClass: 'iconframe2',
    iconWrapperClass: 'iconfeatures4',
    imageClass: 'service-icon',
    src: '/files/features/service.svg',
    title: 'Hub Service',
    sectionTitle: 'Service layer',
    description: 'A simple SDK for turning worker apps into callable services with typed endpoints and response types.',
    tagsClass: 'tags5',
    tags: ['Bun']
  },
  {
    wrapperClass: 'cardfeature',
    iconFrameClass: 'iconframe2',
    iconWrapperClass: 'iconfeatures5',
    imageClass: 'launcher-icon',
    src: '/files/features/launcher.svg',
    title: 'Hub Launcher',
    sectionTitle: 'Ops',
    description:
      'A handy controller for installing apps, starting services, and scaling or restarting fleets from one place.',
    tagsClass: 'tags5',
    tags: ['Bun']
  },
  {
    wrapperClass: 'cardfeature',
    iconFrameClass: 'iconframe2',
    iconWrapperClass: 'iconfeatures6',
    imageClass: 'web-icon',
    src: '/files/features/web.svg',
    title: 'Hub Web',
    sectionTitle: 'Docs shell',
    description: 'A clean, friendly docs site that gathers package and feature details for this whole hub stack.',
    tagsClass: 'tags4',
    tags: ['Open in site', 'Bun']
  }
];

export const buildCards: HomeBuildCard[] = [
  {
    iconWrapperClass: 'iconfeatures7',
    imageClass: 'web-icon2',
    src: '/files/features/worker-sdk.svg',
    title: 'Worker SDK',
    description: 'Hub Service lets each worker publish clean, secure APIs that your hub can call.'
  },
  {
    iconWrapperClass: 'iconfeatures8',
    imageClass: 'pro-icon2',
    src: '/files/features/production-control.svg',
    title: 'Production control',
    description: 'Hub Pro adds team controls, permissions, and safer routing for bigger installations.'
  },
  {
    iconWrapperClass: 'iconfeatures9',
    imageClass: 'service-icon2',
    src: '/files/features/services-sdk.svg',
    title: 'Services SDK',
    description: 'Hub Lite helps register workers and sends jobs to the right service automatically.'
  },
  {
    iconWrapperClass: 'iconfeatures10',
    imageClass: 'vector-icon4',
    src: '/files/features/transport.svg',
    title: 'Transport',
    description:
      'Channel handles message flow across request, stream, and event patterns, with automatic reconnect support.'
  },
  {
    iconWrapperClass: 'iconfeatures11',
    imageClass: 'vector-icon5',
    src: '/files/features/operations.svg',
    title: 'Operations',
    description: 'Hub Launcher packages app deployment and running process controls into one simple control area.'
  }
];

export const communityLinks: HomeCommunityLink[] = [
  {
    outerClass: 'link',
    imageOneSrc: '/files/apps/github.svg',
    imageOneClass: 'vector-icon6',
    imageTwoClass: 'vector-icon7',
    imageTwoSrc: '/files/apps/github.svg',
    title: 'GitHub',
    description: '@v57/hub · Source code & contributions'
  },
  {
    outerClass: 'link2',
    imageOneSrc: '/files/apps/reddit.svg',
    imageOneClass: 'vector-icon6',
    imageTwoClass: 'group-icon6',
    imageTwoSrc: '/files/apps/reddit.svg',
    title: 'Reddit',
    description: '@v57/hub · Discussions & feedback'
  },
  {
    outerClass: 'link3',
    imageOneSrc: '/files/apps/discord.svg',
    imageOneClass: 'vector-icon6',
    imageTwoClass: 'icon4',
    imageTwoSrc: '/files/apps/discord.svg',
    title: 'Discord',
    description: '@v57/hub · Chat & updates'
  },
  {
    outerClass: 'link4',
    imageOneSrc: '/files/apps/twitter.svg',
    imageOneClass: 'vector-icon6',
    imageTwoClass: 'vector-icon11',
    imageTwoSrc: '/files/apps/twitter.svg',
    title: 'Twitter',
    description: '@v57/hub · Announcements & releases'
  }
];
