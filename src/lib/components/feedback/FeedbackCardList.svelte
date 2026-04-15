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

<style>
  .cards {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    font-size: 16px;
    color: var(--color-text);
  }

  @media (max-width: 767px) {
    .cards {
      width: 100%;
      align-items: stretch;
    }
  }
</style>
