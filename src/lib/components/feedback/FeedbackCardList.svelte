<script lang="ts">
  import FeedbackCard from './FeedbackCard.svelte';
  import type { FeedbackCard as FeedbackCardData } from './content';

  export let cards: FeedbackCardData[] = [];
</script>

<div class="cards">
  {#each cards as card}
    <FeedbackCard {card} />
  {/each}
</div>
