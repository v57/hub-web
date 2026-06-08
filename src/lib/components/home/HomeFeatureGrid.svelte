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
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    justify-content: center;
    justify-items: center;
    gap: clamp(12px, 2vw, 24px);
    text-align: left;
    font-size: 16px;
    width: 100%;
    max-width: 1040px;
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

</style>
