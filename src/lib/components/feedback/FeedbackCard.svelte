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

<style>
  .cardfeedback {
    align-self: stretch;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.03);
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
    color: #34c759;
  }

  .status2 {
    color: #ff453a;
  }

  .status3 {
    color: #34c759;
  }

  .status4 {
    color: #5856d6;
  }

  .status5 {
    color: #ff9500;
  }

  .status7 {
    color: #30d158;
  }

  .status8 {
    color: #007aff;
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
    color: #8e8e93;
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
    color: #fa243c;
  }

  .date {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: #bbbbbe;
  }

  .card-aside {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    text-align: left;
    font-size: 16px;
    color: #2b2b2c;
  }

  .buttonicon2 {
    height: 24px;
    width: 26px;
    position: relative;
  }

  .group-icon3 {
    position: absolute;
    top: calc(50% - 11.76px);
    left: calc(50% - 12.73px);
    filter: drop-shadow(0 2px 12.2px rgba(0, 0, 0, 0.1));
    width: 26px;
    height: 24px;
  }
</style>
