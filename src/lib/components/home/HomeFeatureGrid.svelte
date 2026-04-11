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
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 24px;
    text-align: left;
    font-size: 16px;
  }
</style>
