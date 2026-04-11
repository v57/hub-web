<script lang="ts">
  import HomeBuildCard from './HomeBuildCard.svelte';
  import type { HomeBuildCard as HomeBuildCardData } from './content';

  export let cards: HomeBuildCardData[] = [];
</script>

<div class="how-built-information">
  {#each cards as card}
    <HomeBuildCard {card} />
  {/each}
</div>
