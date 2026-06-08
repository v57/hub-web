<script lang="ts">
  import type { HomeFeatureCard as HomeFeatureCardData } from './content';

  export let card: HomeFeatureCardData;

  $: iconSrc = `/files/features/${card.icon}.svg`;
</script>

<div class="cardfeature">
  <div class="container3">
    <div class="title7">
      <div class="iconframe">
        <div class="feature-icon-wrapper">
          <img class="feature-symbol-icon" src={iconSrc} alt="" />
        </div>
      </div>
      <span class="feature-title">{card.title}</span>
    </div>
    <div class="info">
      <div class="section-description2">{card.description}</div>
    </div>
  </div>
</div>

<style>
  .cardfeature {
    width: min(100%, 242px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  .container3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .title7 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .iconframe {
    box-shadow: 0 2px 13.9px rgb(var(--color-shadow-rgb) / var(--home-shadow-feature-icon-alpha, 0.06));
    border-radius: 16px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-soft);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    isolation: isolate;
  }

  .iconframe {
    width: 74px;
    height: 74px;
  }

  .feature-icon-wrapper {
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .feature-symbol-icon {
    width: 44px;
    height: 44px;
    object-fit: contain;
    display: block;
  }

  .feature-title {
    align-self: stretch;
    position: relative;
    font-weight: 500;
  }

  .info {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 12px;
    color: var(--color-text-muted);
  }

  .section-description2 {
    align-self: stretch;
    position: relative;
    font-size: 14px;
    letter-spacing: 0;
  }

  @media (prefers-color-scheme: dark) {
    .iconframe {
      border-color: var(--color-border);
      box-shadow: 0 4px 16px rgb(0 0 0 / 0.22);
    }
  }

  @media (max-width: 767px) {
    .cardfeature {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 12px;
      row-gap: 8px;
      align-items: start;
      justify-items: stretch;
    }

    .container3 {
      display: contents;
    }

    .title7 {
      display: contents;
    }

    .iconframe {
      grid-column: 1;
      grid-row: 1 / span 2;
      align-self: start;
    }

    .feature-title {
      grid-column: 2;
      grid-row: 1;
      align-self: start;
      height: auto;
    }

    .info {
      grid-column: 2;
      grid-row: 2;
      gap: 0;
      min-width: 0;
    }

    .section-description2 {
      text-align: left;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .cardfeature {
      gap: 12px;
    }
  }
</style>
