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
      <b class="logo-text">
        <span>Keep exploring </span>
        <span class="hub">Hub</span>
      </b>
      <HomeFeatureGrid cards={featureCards} />
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
      <HomeBuildGrid cards={buildCards} />
    </div>
  </div>

  <div class="join-our-community-section">
    <div class="section-container">
      <div class="how-built-title-container">
        <b class="logo-text">Join our community</b>
      </div>
      <HomeCommunityGrid links={communityLinks} />
    </div>
  </div>

  <Toolbar {...toolbar} />
</div>

<style>
  .home {
    width: 100%;
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
  }

  .keep-exploring-section {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 240px;
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
    background-color: var(--color-surface-muted);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 240px;
    z-index: 4;
  }

  .join-our-community-section {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0 120px;
    z-index: 5;
  }

  .logo-text {
    position: relative;
  }

  .hub {
    color: var(--color-accent);
  }
</style>
