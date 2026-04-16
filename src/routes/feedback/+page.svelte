<script lang="ts">
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { getToolbarConfig } from '$lib/components/toolbar';
  import FeedbackCardList from '$lib/components/feedback/FeedbackCardList.svelte';
  import FeedbackComposer from '$lib/components/feedback/FeedbackComposer.svelte';
  import FeedbackFilterBar from '$lib/components/feedback/FeedbackFilterBar.svelte';
  import {
    cardCount,
    composerPrompt,
    feedbackCards,
    filterChips,
    topTags
  } from '$lib/components/feedback/content';
  const toolbar = getToolbarConfig('feedback');
</script>

<div class="feedback">
  <div class="feedback-section">
    <div class="content">
      <FeedbackComposer promptText={composerPrompt} tags={topTags} />
      <div class="cards-section">
        <FeedbackFilterBar filters={filterChips} />
        <div class="card-count">{cardCount}</div>
        <FeedbackCardList cards={feedbackCards} />
      </div>
    </div>
  </div>

  <Toolbar {...toolbar} />
</div>

<style>
  .feedback {
    width: 100%;
    position: relative;
    background-color: var(--color-page);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    isolation: isolate;
    text-align: center;
    font-size: 14px;
    color: var(--color-text-muted);
  }

  .feedback-section {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
    z-index: 0;
  }

  .content {
    width: min(100%, 760px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }

  .cards-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    text-align: left;
    font-size: 12px;
  }

  .card-count {
    align-self: stretch;
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }

  @media (max-width: 767px) {
    .feedback-section {
      padding: 80px 16px 80px;
    }

    .content {
      width: 100%;
      gap: 32px;
    }

    .cards-section {
      width: 100%;
      align-items: stretch;
    }
  }
</style>
