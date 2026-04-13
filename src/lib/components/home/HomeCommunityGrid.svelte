<script lang="ts">
  import type { HomeCommunityLink as HomeCommunityLinkData } from './content';
  import IconLink from '../common/IconLink.svelte';

  export let links: HomeCommunityLinkData[] = [];
</script>

<div class="community-links-container">
  {#each links as link}
    <IconLink
      href="https://github.com/v57"
      imageSrc={link.imageSrc}
      imageClass={link.imageClass}
      layout="horizontal"
      outerClass={link.outerClass}
      size={60}
    >
      <div class="title-container">
        <b class="feature-title">{link.title}</b>
        <div class="community-link-description">{link.description}</div>
      </div>
    </IconLink>
  {/each}
</div>

<style>
  .link,
  .link2,
  .link3,
  .link4 {
    grid-column: 1;
    grid-row: 1;
  }

  .link2 {
    grid-column: 2;
  }

  .link3 {
    grid-row: 2;
  }

  .link4 {
    grid-column: 2;
    grid-row: 2;
  }

  .community-links-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-content: start;
    gap: 24px;
    text-align: left;
    font-size: 16px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .feature-title {
    align-self: stretch;
    position: relative;
  }

  .community-link-description {
    position: relative;
    font-size: 12px;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  @media (max-width: 767px) {
    .community-links-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
</style>
