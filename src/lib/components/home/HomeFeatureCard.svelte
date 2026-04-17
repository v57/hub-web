<script lang="ts">
  import type { HomeFeatureCard as HomeFeatureCardData } from './content';

  export let card: HomeFeatureCardData;
</script>

<div class={card.wrapperClass}>
  <div class="container3">
    <div class="title7">
      <div class={card.iconFrameClass}>
        <div class={card.iconWrapperClass}>
          <img class={card.imageClass} src={card.src} alt="" />
        </div>
      </div>
      <span class="feature-title">{card.title}</span>
    </div>
    <div class="info">
      <div class="section-title2">{card.sectionTitle}</div>
      <div class="section-description2">{card.description}</div>
    </div>
  </div>
  <div class={card.tagsClass}>
    {#each card.tags as tag}
      <div class="button3">
        <div class="platform-name">{tag}</div>
      </div>
    {/each}
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

  .cardfeature2 {
    height: 100%;
    width: min(100%, 242px);
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

  .iconframe,
  .iconframe2 {
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

  .iconframe2 {
    width: 72px;
    height: 72px;
  }

  .iconfeatures,
  .iconfeatures2,
  .iconfeatures3,
  .iconfeatures4,
  .iconfeatures5,
  .iconfeatures6 {
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 22px);
    z-index: 0;
  }

  .iconfeatures {
    width: 64px;
    height: 44px;
    left: calc(50% - 32px);
  }

  .iconfeatures2 {
    width: 27.9px;
    height: 44px;
    left: calc(50% - 13.95px);
  }

  .iconfeatures3 {
    width: 42px;
    height: 44px;
    left: calc(50% - 21.02px);
  }

  .iconfeatures4 {
    width: 40.7px;
    height: 44px;
    left: calc(50% - 20.36px);
  }

  .iconfeatures5 {
    width: 44px;
    height: 44px;
    left: calc(50% - 22.02px);
  }

  .iconfeatures6 {
    width: 44.1px;
    height: 44px;
    left: calc(50% - 22.07px);
  }

  .channel-icon,
  .lite-icon,
  .pro-icon,
  .service-icon,
  .launcher-icon,
  .web-icon {
    position: absolute;
    top: calc(50% - 22px);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }

  .channel-icon {
    left: calc(50% - 32px);
    width: 64px;
    height: 44px;
  }

  .lite-icon {
    left: calc(50% - 13.95px);
    width: 28px;
    height: 44px;
  }

  .pro-icon {
    left: calc(50% - 21px);
    width: 42px;
    height: 44px;
  }

  .service-icon {
    left: calc(50% - 21.35px);
    width: 41px;
    height: 44px;
  }

  .launcher-icon {
    left: calc(50% - 22px);
    width: 44px;
    height: 44px;
  }

  .web-icon {
    left: calc(50% - 22.05px);
    width: 44px;
    height: 44px;
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

  .section-title2 {
    align-self: stretch;
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }

  .section-description2 {
    align-self: stretch;
    position: relative;
    font-size: 14px;
    letter-spacing: -0.02em;
  }

  .tags4,
  .tags5 {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--color-accent);
  }

  .button3 {
    border-radius: 200px;
    background-color: var(--color-surface-accent-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
  }

  .cardfeature2 .container3 {
    flex: 1;
  }

  @media (max-width: 767px) {
    .cardfeature,
    .cardfeature2 {
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

    .iconframe,
    .iconframe2 {
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

    .tags4,
    .tags5 {
      grid-column: 2;
      grid-row: 3;
      align-self: start;
      justify-self: start;
      margin-top: 0;
      width: auto;
    }

    .section-description2 {
      text-align: left;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .cardfeature,
    .cardfeature2 {
      gap: 12px;
    }
  }
</style>
