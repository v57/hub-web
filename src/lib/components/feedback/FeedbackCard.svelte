<script lang="ts">
  import FeedbackTag from './FeedbackTag.svelte';
  import type { FeedbackCard as FeedbackCardData } from './content';

  export let card: FeedbackCardData;
  export let href = 'https://github.com/v57';
  export let voteCount = 95;

  let liked = false;
  let likePulse = false;
  let pulseTimer: ReturnType<typeof setTimeout> | undefined;

  function toggleLike() {
    liked = !liked;
    likePulse = false;

    if (pulseTimer) {
      clearTimeout(pulseTimer);
    }

    requestAnimationFrame(() => {
      likePulse = true;
      pulseTimer = setTimeout(() => {
        likePulse = false;
      }, 220);
    });
  }
</script>

<a class="cardfeedback" href={href} target="_blank" rel="noreferrer">
  <div class="sortfilter">
    <div class="text">
      <span class="platform-description">{card.title}</span>
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
            <FeedbackTag {...tag} interactive={false} />
          {/each}
        </div>
      </div>
    </div>

    <div class="card-aside">
      <span class="platform-description">{voteCount}</span>
      <button
        type="button"
        class="buttonicon2"
        class:liked
        class:like-pulse={likePulse}
        aria-pressed={liked}
        aria-label={liked ? 'Unlike feedback' : 'Like feedback'}
        on:click|preventDefault|stopPropagation={toggleLike}
    >
        <svg class="group-icon3" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.44.81 4.5 2.09C13.06 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"
            fill={liked ? 'currentColor' : 'none'}
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
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
    padding: clamp(14px, 1.5vw, 16px);
    gap: clamp(6px, 1vw, 8px);
    cursor: pointer;
  }

  .sortfilter {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(14px, 2vw, 20px);
  }

  .text {
    display: flex;
    align-items: center;
  }

  .platform-description {
    position: relative;
    font-weight: 500;
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
    gap: clamp(24px, 3vw, 32px);
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
    font-weight: 400;
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
    width: 24px;
    height: 24px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 0;
    background-color: transparent;
    box-shadow: none;
    flex: none;
    padding: 0;
    appearance: none;
    cursor: pointer;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 180ms ease,
      box-shadow 180ms ease,
      filter 180ms ease;
    will-change: transform, background-color, box-shadow, filter;
    color: var(--color-accent);
  }

  .buttonicon2:hover,
  .buttonicon2:focus-visible {
    transform: translateY(-2px) scale(1.08);
    background-color: rgb(var(--color-accent-rgb) / 0.08);
    box-shadow: 0 8px 18px rgb(var(--color-shadow-rgb) / 0.1);
  }

  .buttonicon2:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .group-icon3 {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 180ms ease;
  }

  .liked {
    background-color: transparent;
    box-shadow: none;
  }

  .liked .group-icon3 {
    transform: scale(1.08);
  }

  .like-pulse {
    animation: like-pop 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  @media (max-width: 653px) {
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

  @keyframes like-pop {
    0% {
      transform: scale(1);
    }

    45% {
      transform: scale(1.18);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
