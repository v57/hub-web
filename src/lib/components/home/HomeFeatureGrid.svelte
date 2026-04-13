<script lang="ts">
  import HomeFeatureCard from './HomeFeatureCard.svelte';
  import type { HomeFeatureCard as HomeFeatureCardData } from './content';

  export let cards: HomeFeatureCardData[] = [];
</script>

<div class="features-container">
  {#each cards as card}
    <HomeFeatureCard {card} />
  {/each}
</div>

<style>
  .features-container {
    align-self: stretch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(242px, 242px));
    justify-content: center;
    justify-items: start;
    gap: 12px;
    text-align: left;
    font-size: 16px;
    width: 100%;
    max-width: calc((242px * 3) + (12px * 2));
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .features-container {
      grid-template-columns: 1fr;
      justify-items: stretch;
      max-width: 100%;
      gap: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .features-container {
      grid-template-columns: repeat(2, 242px);
      max-width: calc((242px * 2) + 12px);
    }
  }
</style>
