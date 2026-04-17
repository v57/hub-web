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
        <span class="feature-title">{link.title}</span>
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
    font-weight: 500;
  }

  .community-link-description {
    position: relative;
    font-size: 12px;
    letter-spacing: -0.32px;
    font-weight: 400;
    color: var(--color-text-muted);
  }

  @media (prefers-color-scheme: dark) {
    .community-links-container :global(.link .icon-link-tile),
    .community-links-container :global(.link2 .icon-link-tile),
    .community-links-container :global(.link3 .icon-link-tile),
    .community-links-container :global(.link4 .icon-link-tile) {
      box-shadow:
        inset 0 0 0 1px var(--color-border),
        0 4px 20px rgb(0 0 0 / 0.24);
    }

    .community-links-container :global(.link:hover .icon-link-tile),
    .community-links-container :global(.link:focus-visible .icon-link-tile),
    .community-links-container :global(.link2:hover .icon-link-tile),
    .community-links-container :global(.link2:focus-visible .icon-link-tile),
    .community-links-container :global(.link3:hover .icon-link-tile),
    .community-links-container :global(.link3:focus-visible .icon-link-tile),
    .community-links-container :global(.link4:hover .icon-link-tile),
    .community-links-container :global(.link4:focus-visible .icon-link-tile) {
      box-shadow:
        inset 0 0 0 1px var(--color-border),
        0 8px 22px rgb(0 0 0 / 0.3);
    }
  }

  @media (max-width: 767px) {
    .community-links-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
</style>
