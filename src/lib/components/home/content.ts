export type HomePlatform = {
  name: string
  src: string
  iconClass: string
  wrapperClass: string
  iconAdjustClass?: string
}

export type HomeFeatureCard = {
  icon: string
  title: string
  description: string
}

export type HomeBuildCard = {
  icon: string
  title: string
  description: string
}

export type HomeGetStartedStep = {
  title: string
  terminal: string
  command: string
}

export type HomeGetStartedPlatform = {
  name: string
  description?: string
  steps: HomeGetStartedStep[]
}

export type HomeCommunityLink = {
  outerClass: string
  href: string
  imageSrc: string
  darkImageSrc?: string
  imageClass: string
  title: string
  description: string
}

export const platforms: HomePlatform[] = [
  {
    name: 'macOS',
    src: '/files/platforms/ios.svg',
    iconClass: 'vector-icon',
    wrapperClass: 'iconplatform iconplatform-macos',
    iconAdjustClass: 'icon-adjust-macos',
  },
  {
    name: 'iOS',
    src: '/files/platforms/watchos.svg',
    iconClass: 'group-icon',
    wrapperClass: 'iconplatform',
    iconAdjustClass: 'icon-adjust-ios',
  },
  { name: 'tvOS', src: '/files/platforms/tvos.svg', iconClass: 'group-icon2', wrapperClass: 'iconplatform3' },
  {
    name: 'visionOS',
    src: '/files/platforms/web.svg',
    iconClass: 'group-icon3',
    wrapperClass: 'iconplatform3',
  },
]
export const futurePlatforms: HomePlatform[] = [
  { name: 'Web', src: '/files/platforms/visionos.svg', iconClass: 'group-icon5', wrapperClass: 'iconplatform8' },
  {
    name: 'Windows',
    src: '/files/platforms/windows.svg',
    iconClass: 'vector-icon2',
    wrapperClass: 'iconplatform',
    iconAdjustClass: 'icon-adjust-windows',
  },
  { name: 'Linux', src: '/files/platforms/macos.svg', iconClass: 'vector-icon', wrapperClass: 'logo' },
]

export const featureCards: HomeFeatureCard[] = [
  {
    icon: 'link',
    title: 'Device Mesh',
    description:
      'Connect iPhone, iPad, Mac, Windows, Linux, and server devices into one Hub so idle hardware can share work instead of sitting unused.',
  },
  {
    icon: 'cpu',
    title: 'Local Compute',
    description:
      'Use nearby devices for heavy jobs like image encoding, video compression, translation, LLM chat, content filtering, and other AI or media tasks.',
  },
  {
    icon: 'server.rack',
    title: 'Service APIs',
    description:
      'Turn app features, scripts, terminal commands, and reusable backend modules into services that Hub exposes as simple APIs across projects.',
  },
  {
    icon: 'externaldrive.connected.to.line.below',
    title: 'Shared Storage',
    description:
      'Combine storage from devices or S3 providers, including Local S3, so files, static assets, configs, and processing outputs can be shared through Hub.',
  },
  {
    icon: 'play.circle',
    title: 'Auto Launcher',
    description:
      'Keep hubs, services, servers, and any process online with automatic restarts, resource monitoring, updates, imports, and multi-instance scaling.',
  },
  {
    icon: 'scale.3d',
    title: 'Load Balance',
    description:
      'Automatically split identical service APIs across available devices, with Hub Pro controls for balancing strategy and active request limits.',
  },
  {
    icon: 'lock.shield',
    title: 'Access Control',
    description:
      'Use Hub Pro to invite people, connect multiple hubs, manage service permissions, and lock down access for teams or remote devices.',
  },
  {
    icon: 'heart.circle',
    title: 'Open Source',
    description:
      'Hub is free, transparent, dependency-light, and built without ads or tracking, with GitHub-based stores and feedback for community-driven services.',
  },
]

export const buildCards: HomeBuildCard[] = [
  {
    icon: 'network',
    title: 'Connect Devices',
    description:
      'Hub allows you to connect your devices into a single cluster. Give your old iPhone a chance to live and do something meaningful',
  },
  {
    icon: 'server.rack',
    title: 'Run Services',
    description:
      'Each service connects to Hub and publishes its API, turning tools like encoders, AI, file access, terminal commands, into reusable capabilities.',
  },
  {
    icon: 'arrow.trianglehead.branch',
    title: 'Balance Load',
    description: 'When multiple services provide the same API, Hub splits requests between them automatically.',
  },
  {
    icon: 'play.circle',
    title: 'Stay Online',
    description:
      'Hub Launcher keeps hubs, servers, services, and other processes running. If something crashes, it will restart it',
  },
  {
    icon: 'externaldrive.connected.to.line.below',
    title: 'Share Storage',
    description: 'Use your devices as remote storage or use any S3 Cloud Storage provider for you or your services',
  },
  {
    icon: 'lock.shield',
    title: 'Control Access',
    description: 'Hub Pro adds authorization, permission groups. Enter lockdown mode to keep strangers off your Hub',
  },
]

export const getStartedPlatforms: HomeGetStartedPlatform[] = [
  {
    name: 'macOS',
    steps: [
      {
        title: 'Install Bun',
        terminal: 'Terminal',
        command: 'curl -fsSL https://bun.sh/install | bash',
      },
      {
        title: 'Run',
        terminal: 'Terminal',
        command: 'bunx v57/hub',
      },
    ],
  },
  {
    name: 'Docker',
    description: 'Docker allows to run Hub server on a virtual machine. Available for macOS, Linux and Windows.',
    steps: [
      {
        title: 'Run',
        terminal: 'Terminal',
        command: 'docker pull v57dev/hub\ndocker run -d -p 1997:1997 --name Hub v57dev/hub',
      },
    ],
  },
  {
    name: 'Windows',
    steps: [
      {
        title: 'Install Bun',
        terminal: 'Powershell',
        command: 'powershell -c "irm bun.sh/install.ps1 | iex"',
      },
      {
        title: 'Run',
        terminal: 'Powershell',
        command: 'bunx v57/hub',
      },
    ],
  },
]

export const communityLinks: HomeCommunityLink[] = [
  {
    outerClass: 'link',
    href: 'https://github.com/v57',
    imageSrc: '/files/apps/github.svg',
    imageClass: 'vector-icon6 github-icon',
    title: 'GitHub',
    description: '@v57/hub · Source code & contributions',
  },
  {
    outerClass: 'link2',
    href: 'https://discord.gg/DqsS4zarJM',
    imageSrc: '/files/apps/discord.svg',
    imageClass: 'vector-icon6',
    title: 'Discord',
    description: '@v57/hub · Chat & updates',
  },
]
