<script lang="ts">
  import type { HomeBuildCard as HomeBuildCardData } from './content';

  export let card: HomeBuildCardData;

  $: iconSrc = `/files/features/${card.icon}.svg`;
</script>

<div class="cardpossibilities">
  <div class="container9">
    <div class="build-icon-wrapper">
      <img class="build-symbol-icon" src={iconSrc} alt="" />
    </div>
    <span class="feature-title">{card.title}</span>
    <div class="description">{card.description}</div>
  </div>
</div>

<style>
  .cardpossibilities {
    width: min(100%, 200px);
    min-height: 200px;
    height: auto;
    box-shadow: 0 4px 20px rgb(var(--color-shadow-rgb) / var(--home-shadow-feature-card-alpha, 0.03));
    border-radius: 32px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-soft);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  .container9 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .build-icon-wrapper {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .build-symbol-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    display: block;
  }

  .description {
    align-self: stretch;
    position: relative;
    font-size: 14px;
    letter-spacing: 0;
    color: var(--color-text-muted);
  }

  .feature-title {
    font-weight: 500;
  }

  @media (max-width: 767px) {
    .cardpossibilities {
      width: 100%;
      max-width: 100%;
      height: auto;
      min-height: unset;
      border-radius: 16px;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .container9 {
      width: 100%;
      max-width: 100%;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      column-gap: 12px;
      row-gap: 8px;
      align-items: start;
    }

    .container9 > .build-icon-wrapper {
      grid-column: 1;
      grid-row: 1 / span 2;
      flex: 0 0 auto;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .container9 > .feature-title {
      grid-column: 2;
      grid-row: 1;
      align-self: start;
      text-align: left;
      min-width: 0;
    }

    .container9 > .description {
      grid-column: 2;
      grid-row: 2;
      align-self: start;
      margin-top: 0;
      text-align: left;
      min-width: 0;
      overflow-wrap: anywhere;
    }

    .container9 .build-symbol-icon {
      width: 36px;
      height: 36px;
    }
  }
</style>
