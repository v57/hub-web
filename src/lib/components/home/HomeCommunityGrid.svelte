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
