<script lang="ts">
  type Platform = {
    name: string;
    src: string;
    iconClass: string;
    wrapperClass: string;
  };

  type FeatureCard = {
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

  type BuildCard = {
    iconWrapperClass: string;
    imageClass: string;
    src: string;
    title: string;
    description: string;
  };

  type CommunityLink = {
    outerClass: string;
    imageOneSrc: string;
    imageOneClass: string;
    imageTwoClass: string;
    imageTwoSrc: string;
    title: string;
    description: string;
  };

  const platforms: Platform[] = [
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

  const featureCards: FeatureCard[] = [
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

  const buildCards: BuildCard[] = [
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

  const communityLinks: CommunityLink[] = [
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
</script>

<svelte:head>
  <link rel="stylesheet" href="/index.css" />
</svelte:head>

<div class="home">
  <div class="hero-section">
    <div class="container">
      <div class="logo">
        <b class="logo-text">HUB</b>
      </div>
      <div class="button">
        <b class="logo-text">Download</b>
      </div>
    </div>
    <div class="container2">
      <div class="available-on">
        <b class="logo-text">Available on</b>
        <div class="platforms">
          {#each platforms as platform}
            <div class="platform">
              <div class="platform-name">{platform.name}</div>
              <div class={platform.wrapperClass}>
                <img class={platform.iconClass} src={platform.src} alt="" />
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="get-started-section">
    <div class="section-container">
      <div class="title">
        <b class="logo-text">Get started in seconds</b>
      </div>
      <div class="steps-container">
        <div class="filterplatform">
          <div class="chip">
            <div class="button2">
              <div class="platform-name">macOS</div>
            </div>
          </div>
          <div class="title">
            <div class="tags">
              <div class="platform-name">Docker</div>
            </div>
          </div>
          <div class="title">
            <div class="tags">
              <div class="platform-name">iOS/tvOs</div>
            </div>
          </div>
          <div class="title">
            <div class="tags">
              <div class="platform-name">Windows</div>
            </div>
          </div>
        </div>
        <div class="step-container">
          <div class="platform-name">Install Bun</div>
          <div class="step-terminal">
            <div class="title-container">
              <div class="icon-container">
                <img class="frame-icon" src="/files/ui/terminal.svg" alt="" />
                <div class="platform-name">Terminal</div>
              </div>
              <div class="command-text">
                <span>curl -fsSL </span>
                <span class="https">https</span>
                <span>://bun.sh/install | bash</span>
              </div>
            </div>
            <div class="buttonicon">
              <img class="icon" src="/files/ui/copy.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="step-container">
          <div class="platform-name">Run</div>
          <div class="step-terminal2">
            <div class="title-container">
              <div class="icon-container">
                <img class="frame-icon" src="/files/ui/terminal.svg" alt="" />
                <div class="platform-name">Terminal</div>
              </div>
              <div class="command-text">bunx v57/hub</div>
            </div>
            <div class="buttonicon">
              <img class="icon" src="/files/ui/copy.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="what-is-hub-section">
    <div class="title5">
      <div class="logo-hub">
        <div class="logo-icon">
          <img class="icon3" src="/files/icon/large.png" alt="" />
        </div>
        <b class="logo-text">Hub</b>
      </div>
      <div class="title6">
        <b class="logo-text">
          <span>Publish, connect, stream. All in one </span>
          <span class="hub">Hub</span>
          <span>.</span>
        </b>
      </div>
      <div class="section-description">
        <span
          >Hub is a local-first gateway for services. Publish APIs once, expose them through one endpoint. Use one
          protocol for request and stream. Lite is for isolated local use. Pro adds keys, groups, permissions, proxy,
          and merge.</span
        >
        <span class="span"> </span>
        <span class="less-glue-code">Less glue code, fewer “which port is this?” moments.</span>
      </div>
    </div>
  </div>

  <div class="keep-exploring-section">
    <div class="exploration-container">
      <b class="logo-text">
        <span>Keep exploring </span>
        <span class="hub">Hub</span>
      </b>
      <div class="features-container">
        {#each featureCards as card}
          <div class={card.wrapperClass}>
            <div class="container3">
              <div class="title7">
                <div class={card.iconFrameClass}>
                  <div class={card.iconWrapperClass}>
                    <img class={card.imageClass} src={card.src} alt="" />
                  </div>
                </div>
                <b class="feature-title">{card.title}</b>
              </div>
              <div class="info">
                <div class="section-title2">{card.sectionTitle}</div>
                <div class="section-description2">{card.description}</div>
              </div>
            </div>
            <div class={card.tagsClass}>
              {#each card.tags as tag}
                <div class="button3">
                  <div class="platform-name">{tag}</div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="how-it-built-section">
    <div class="exploration-container">
      <div class="how-built-title-container">
        <b class="logo-text">
          <span>How </span>
          <span class="hub">Hub</span>
          <span> works</span>
        </b>
      </div>
      <div class="how-built-information">
        {#each buildCards as card}
          <div class="cardpossibilities">
            <div class="container9">
              <div class={card.iconWrapperClass}>
                <img class={card.imageClass} src={card.src} alt="" />
              </div>
              <b class="feature-title">{card.title}</b>
              <div class="description">{card.description}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="join-our-community-section">
    <div class="section-container">
      <div class="how-built-title-container">
        <b class="logo-text">Join our community</b>
      </div>
      <div class="community-links-container">
        {#each communityLinks as link}
          <a class={link.outerClass} href="https://github.com/v57" target="_blank" rel="noreferrer">
            <div class="buttoncontacts">
              <img class={link.imageOneClass} src={link.imageOneSrc} alt="" />
              <img class={link.imageTwoClass} src={link.imageTwoSrc} alt="" />
            </div>
            <div class="title-container">
              <b class="feature-title">{link.title}</b>
              <div class="community-link-description">{link.description}</div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="navigation">
    <div class="nav-bar-content">
      <div class="hub-link">
        <div class="logo-hub2">
          <div class="logo-icon2">
            <img class="logocompact-icon" src="/files/icon/compact.png" alt="" />
          </div>
          <div class="wordmark">Hub</div>
        </div>
      </div>
      <div class="nav-button">
        <a class="button11" href="/pricing">
          <div class="platform-name">Pricing</div>
        </a>
        <a class="button11" href="/feedback">
          <div class="platform-name">Feedback</div>
        </a>
        <div class="button13">
          <div class="platform-name">Download</div>
        </div>
        <div class="button14">
          <div class="platform-name">Open</div>
        </div>
      </div>
    </div>
  </div>
</div>
