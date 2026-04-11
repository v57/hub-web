<script lang="ts">
  type FeatureItem = {
    label: string;
    src: string;
  };

  type SupportButton = {
    iconClass: string;
    src: string;
    secondaryIconClass?: string;
    secondarySrc?: string;
    label: string;
  };

  const liteFeatures: FeatureItem[] = [
    { label: 'Fast', src: '/files/status/approved.svg' },
    { label: 'No security', src: '/files/status/approved.svg' }
  ];

  const proFeatures: FeatureItem[] = [
    { label: 'Authorization', src: '/files/status/approved.svg' },
    { label: 'Permission Groups', src: '/files/status/approved.svg' },
    { label: 'Whitelist Mode', src: '/files/status/approved.svg' },
    { label: 'Advanced Load Balancing', src: '/files/status/approved.svg' },
    { label: 'Proxy to Another Hub', src: '/files/status/approved.svg' },
    { label: 'Merge Hubs', src: '/files/status/approved.svg' }
  ];

  const supportButtons: SupportButton[] = [
    { iconClass: 'screenshot-2026-02-27-at-1832', src: '/files/apps/bybit.png', label: 'Bybit' },
    {
      iconClass: 'vector-icon',
      src: '/files/apps/github.svg',
      secondaryIconClass: 'vector-icon2',
      secondarySrc: '/files/apps/github.svg',
      label: 'GitHub'
    },
    {
      iconClass: 'vector-icon',
      src: '/files/apps/discord.svg',
      secondaryIconClass: 'icon',
      secondarySrc: '/files/apps/discord.svg',
      label: 'Discord'
    },
    { iconClass: 'idr5voioyc-logos-1-icon', src: '/files/apps/coffee.png', label: 'Buy Me a Coffee' }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="/pricing/index.css" />
</svelte:head>

<div class="pricing">
  <div class="pricing-section">
    <div class="title">Both plans are free</div>
    <div class="price-card">
      <div class="price-card-left-container">
        <div class="frame-parent">
          <div class="plan-name-parent">
            <b class="plan-name">Hub Lite</b>
            <div class="feature-list">
              {#each liteFeatures as item}
                <div class="feature-item">
                  <img class="frame-icon" src={item.src} alt="" />
                  <div class="feature-description">{item.label}</div>
                </div>
              {/each}
            </div>
          </div>
          <div class="buttonget">
            <div class="button-label">Free</div>
          </div>
        </div>
        <div class="button-container">
          <div class="buttonget2">
            <b class="plan-name">Download Lite</b>
          </div>
          <div class="support-text">Always free · Support optional</div>
        </div>
      </div>

      <div class="price-card-right-container">
        <div class="frame-group">
          <div class="plan-name-parent">
            <b class="plan-name">Hub Pro</b>
            <div class="feature-list">
              {#each proFeatures as item}
                <div class="feature-item">
                  <img class="frame-icon" src={item.src} alt="" />
                  <div class="feature-description">{item.label}</div>
                </div>
              {/each}
            </div>
          </div>
          <div class="buttonget">
            <div class="button-label">Free</div>
          </div>
        </div>
        <div class="button-container">
          <div class="buttonget4">
            <b class="plan-name">Download Pro</b>
          </div>
          <div class="support-text">Always free · Support optional</div>
        </div>
      </div>
    </div>
  </div>

  <div class="support-section">
    <div class="support-section-container">
      <div class="plan-name-parent">
        <div class="title2">
          <b class="plan-name">SUPPORT THE PROJECT</b>
        </div>
        <div class="support-text3">
          If Hub saves you time, you can support maintenance, docs, <br />and long-term development. Support does not
          unlock features. <br />It just keeps the project healthy.
        </div>
      </div>
      <div class="support-buttons-container">
        {#each supportButtons as button}
          <a class="support-button" href="https://github.com/v57" target="_blank" rel="noreferrer">
            <div class="container">
              <div class="support-button2">
                <img class={button.iconClass} src={button.src} alt="" />
                {#if button.secondaryIconClass && button.secondarySrc}
                  <img class={button.secondaryIconClass} src={button.secondarySrc} alt="" />
                {/if}
              </div>
              <div class="button-label">{button.label}</div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="navigation">
    <div class="nav-bar-content">
      <div class="hub-link">
        <div class="logo-hub">
          <div class="logo-icon">
            <img class="idr5voioyc-logos-1-icon" src="/files/apps/coffee.png" alt="" />
          </div>
          <div class="wordmark">Hub</div>
        </div>
        <div class="name-of-the-page">
          <b class="plan-name">Pricing</b>
        </div>
      </div>
      <div class="nav-button">
        <a class="button" href="/feedback">
          <div class="button-label">Feedback</div>
        </a>
        <div class="button2">
          <div class="button-label">Download</div>
        </div>
        <div class="button3">
          <div class="button-label">Open</div>
        </div>
      </div>
    </div>
  </div>
</div>
