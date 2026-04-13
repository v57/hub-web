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
    gap: 24px;
    text-align: left;
    font-size: 16px;
    width: 100%;
    max-width: calc((242px * 3) + (24px * 2));
    margin: 0 auto;
  }
</style>
