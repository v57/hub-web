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

<svelte:head>
  <link rel="stylesheet" href="/index.css" />
</svelte:head>

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
