<script lang="ts">
  import HomeCommunityLink from './HomeCommunityLink.svelte';
  import type { HomeCommunityLink as HomeCommunityLinkData } from './content';

  export let links: HomeCommunityLinkData[] = [];
</script>

<div class="community-links-container">
  {#each links as link}
    <HomeCommunityLink {link} />
  {/each}
</div>

<style>
  .community-links-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-content: start;
    gap: 24px;
    text-align: left;
    font-size: 16px;
  }
</style>
