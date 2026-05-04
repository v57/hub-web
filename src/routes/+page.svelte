<script lang="ts">
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { getToolbarConfig } from '$lib/components/toolbar';
  import HomeBuildGrid from '$lib/components/home/HomeBuildGrid.svelte';
  import HomeCommunityGrid from '$lib/components/home/HomeCommunityGrid.svelte';
  import HomeFeatureGrid from '$lib/components/home/HomeFeatureGrid.svelte';
  import HomeGetStarted from '$lib/components/home/HomeGetStarted.svelte';
  import HomeHero from '$lib/components/home/HomeHero.svelte';
  import HomeIntro from '$lib/components/home/HomeIntro.svelte';
  import { buildCards, communityLinks, featureCards, platforms } from '$lib/components/home/content';
  const toolbar = getToolbarConfig('home');
</script>

<div class="home">
  <HomeHero {platforms} />
  <HomeGetStarted />
  <HomeIntro />
  <div class="keep-exploring-section">
    <div class="exploration-container">
      <span class="logo-text">
        <span>Keep exploring </span>
        <span class="hub">Hub</span>
      </span>
      <HomeFeatureGrid cards={featureCards} />
    </div>
  </div>

  <div class="how-it-built-section">
    <div class="exploration-container">
      <div class="how-built-title-container">
        <span class="logo-text">
          <span>How </span>
          <span class="hub">Hub</span>
          <span> works</span>
        </span>
      </div>
      <HomeBuildGrid cards={buildCards} />
    </div>
  </div>

  <div class="join-our-community-section">
    <div class="section-container">
      <div class="how-built-title-container">
        <span class="logo-text">Join our community</span>
      </div>
      <HomeCommunityGrid links={communityLinks} />
    </div>
  </div>

  <Toolbar {...toolbar} />
</div>

<style>
  .home {
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    position: relative;
    background-color: var(--color-page);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    isolation: isolate;
    text-align: center;
    font-size: 20px;
    color: var(--color-text);
    --home-section-padding-block: clamp(64px, 7vw, 80px);
    --home-section-padding-inline: clamp(80px, 10vw, 240px);
    --home-section-padding-inline-soft: clamp(64px, 8vw, 80px);
    --home-section-padding-block-wide: clamp(80px, 10vw, 120px);
    --home-shadow-elevated-alpha: 0.03;
    --home-shadow-icon-alpha: 0.06;
    --home-shadow-accent-alpha: 0.22;
    --home-shadow-accent-strong-alpha: 0.28;
    --home-shadow-chip-alpha: 0.08;
    --home-shadow-feature-card-alpha: 0.03;
    --home-shadow-feature-icon-alpha: 0.06;
  }

  @media (prefers-color-scheme: dark) {
    .home {
      --home-shadow-elevated-alpha: 0.02;
      --home-shadow-icon-alpha: 0.04;
      --home-shadow-accent-alpha: 0.16;
      --home-shadow-accent-strong-alpha: 0.22;
      --home-shadow-chip-alpha: 0.05;
      --home-shadow-feature-card-alpha: 0.2;
      --home-shadow-feature-icon-alpha: 0.2;
    }
  }

  .keep-exploring-section {
    align-self: stretch;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--home-section-padding-block) var(--home-section-padding-inline);
    z-index: 3;
  }

  .exploration-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    max-width: 100%;
  }

  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .how-built-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how-it-built-section {
    align-self: stretch;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--color-surface-muted);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--home-section-padding-block) var(--home-section-padding-inline);
    z-index: 4;
  }

  .join-our-community-section {
    align-self: stretch;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--home-section-padding-block) var(--home-section-padding-inline-soft)
      var(--home-section-padding-block-wide);
    z-index: 5;
  }

  .logo-text {
    position: relative;
    font-weight: 600;
  }

  .hub {
    color: var(--color-accent);
  }

  @media (max-width: 767px) {
    .keep-exploring-section {
      padding: 48px 16px;
    }

    .how-it-built-section {
      padding: 48px 16px;
    }

    .keep-exploring-section .exploration-container {
      gap: 32px;
    }

    .how-it-built-section .exploration-container {
      gap: 32px;
    }

    .join-our-community-section {
      padding: 48px 16px 80px;
    }

    .join-our-community-section .section-container {
      gap: 32px;
    }
  }
</style>
