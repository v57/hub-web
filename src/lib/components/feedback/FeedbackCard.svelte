<script lang="ts">
  import FeedbackTag from './FeedbackTag.svelte';
  import type { FeedbackCard as FeedbackCardData } from './content';

  export let card: FeedbackCardData;
  export let href = 'https://github.com/v57';
  export let voteCount = 95;
</script>

<a class="cardfeedback" href={href} target="_blank" rel="noreferrer">
  <div class="sortfilter">
    <div class="text">
      <b class="platform-description">{card.title}</b>
    </div>
    <div class={card.statusClass}>
      <div class="status-item">
        <div class="button-label">{card.statusLabel}</div>
        <img class="frame-icon" src={card.statusSrc} alt="" />
      </div>
    </div>
  </div>

  <div class={card.contentClass}>
    <div class="content3">
      <div class="description">{card.description}</div>
      <div class="date-and-tags">
        <div class="date">{card.date}</div>
        {#each card.tags as tag}
          <FeedbackTag {...tag} />
        {/each}
      </div>
    </div>

    <div class="card-aside">
      <b class="platform-description">{voteCount}</b>
      <div class="buttonicon2">
        <img class="group-icon3" src="/files/ui/vote.svg" alt="" />
      </div>
    </div>
  </div>
</a>
