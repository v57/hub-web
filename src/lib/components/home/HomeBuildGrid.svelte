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

<style>
  .how-built-information {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 24px;
    font-size: 16px;
  }
</style>
