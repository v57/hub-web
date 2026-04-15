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
        <div class="tags">
          {#each card.tags as tag}
            <FeedbackTag {...tag} />
          {/each}
        </div>
      </div>
    </div>

    <div class="card-aside">
      <b class="platform-description">{voteCount}</b>
      <div class="buttonicon2">
        <img class="group-icon3" src="/Button/like.svg" alt="" />
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

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
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
    border-radius: 9999px;
    box-shadow: 0 2px 12.2px rgb(var(--color-shadow-rgb) / 0.1);
  }

  .group-icon3 {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    .cardfeedback {
      width: 100%;
      box-sizing: border-box;
      gap: 8px;
    }

    .sortfilter {
      gap: 12px;
    }

    .content2,
    .content4 {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      grid-template-areas:
        "description description"
        "tags tags"
        "date aside";
      column-gap: 16px;
      row-gap: 0;
      align-items: end;
    }

    .content3 {
      display: contents;
    }

    .description {
      grid-area: description;
      min-width: 0;
    }

    .date-and-tags {
      display: contents;
    }

    .tags {
      grid-area: tags;
      min-width: 0;
      margin-top: 8px;
    }

    .date {
      grid-area: date;
      align-self: end;
    }

    .card-aside {
      grid-area: aside;
      width: auto;
      align-self: end;
    }
  }
</style>
