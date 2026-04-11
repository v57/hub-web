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

<svelte:head>
  <link rel="stylesheet" href="/feedback/index.css" />
</svelte:head>

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
