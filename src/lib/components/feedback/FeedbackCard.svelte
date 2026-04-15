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
        <div class="buttonicon2-group">
          <div class="buttonicon2-art">
            <img class="group-icon3" src="/Button/like.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</a>

<style>
  .cardfeedback {
    align-self: stretch;
    box-shadow: 0 4px 20px rgb(var(--color-shadow-rgb) / 0.03);
    border-radius: 16px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-soft);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 8px;
    cursor: pointer;
  }

  .sortfilter {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .text {
    display: flex;
    align-items: center;
  }

  .platform-description {
    position: relative;
  }

  .status,
  .status2,
  .status3,
  .status4,
  .status5,
  .status7,
  .status8 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .status {
    color: var(--color-status-success);
  }

  .status2 {
    color: var(--color-status-danger);
  }

  .status3 {
    color: var(--color-status-success);
  }

  .status4 {
    color: var(--color-status-info);
  }

  .status5 {
    color: var(--color-status-warning);
  }

  .status7 {
    color: var(--color-status-success-alt);
  }

  .status8 {
    color: var(--color-status-link);
  }

  .status-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .frame-icon {
    width: 12px;
    position: relative;
    max-height: 100%;
  }

  .content2,
  .content4 {
    width: 588px;
    display: flex;
    align-items: center;
    gap: 32px;
    text-align: justify;
    font-size: 14px;
    color: var(--color-text-muted);
  }

  .content3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .description {
    align-self: stretch;
    position: relative;
    letter-spacing: -0.02em;
  }

  .date-and-tags {
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: left;
    font-size: 12px;
    color: var(--color-accent);
  }

  .date {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: var(--color-text-subtle);
  }

  .card-aside {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    text-align: left;
    font-size: 16px;
    color: var(--color-text);
  }

  .buttonicon2 {
    height: 24px;
    width: 26px;
    position: relative;
  }

  .buttonicon2-group {
    position: absolute;
    left: calc(50% + 0.26px);
    top: calc(50% + 0.24px);
    width: 25.961px;
    height: 24px;
    transform: translate(-50%, -50%);
  }

  .buttonicon2-art {
    position: absolute;
    inset: -42.5% -46.99% -59.17% -46.99%;
  }

  .group-icon3 {
    display: block;
    max-width: none;
    width: 100%;
    height: 100%;
  }
</style>
