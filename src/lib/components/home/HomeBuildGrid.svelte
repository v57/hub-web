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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
    justify-items: center;
    gap: clamp(16px, 2vw, 24px);
    font-size: 16px;
    width: 100%;
    max-width: 672px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .how-built-information {
      grid-template-columns: 1fr;
      justify-items: stretch;
      max-width: 100%;
      gap: 16px;
    }
  }
</style>
