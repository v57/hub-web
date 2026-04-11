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
