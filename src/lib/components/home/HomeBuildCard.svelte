<script lang="ts">
  import type { HomeBuildCard as HomeBuildCardData } from './content';

  export let card: HomeBuildCardData;
</script>

<div class="cardpossibilities">
  <div class="container9">
    <div class={card.iconWrapperClass}>
      {#if card.imageClass === 'vector-icon5'}
        <div class="icon-wrapper">
          <img class={card.imageClass} src={card.src} alt="" />
        </div>
      {:else}
        <img class={card.imageClass} src={card.src} alt="" />
      {/if}
    </div>
    <b class="feature-title">{card.title}</b>
    <div class="description">{card.description}</div>
  </div>
</div>

<style>
  .cardpossibilities {
    height: 200px;
    box-shadow: 0 4px 20px rgb(var(--color-shadow-rgb) / 0.03);
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
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .iconfeatures7,
  .iconfeatures8,
  .iconfeatures9,
  .iconfeatures10,
  .iconfeatures11 {
    position: relative;
  }

  .iconfeatures7 {
    width: 48.2px;
    height: 48px;
  }

  .iconfeatures8 {
    width: 48.2px;
    height: 50.4px;
  }

  .iconfeatures9 {
    width: 48.2px;
    height: 52px;
  }

  .iconfeatures10 {
    width: 48.2px;
    height: 48.2px;
  }

  .iconfeatures11 {
    width: 48.2px;
    height: 48px;
  }

  .icon-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .web-icon2,
  .pro-icon2,
  .service-icon2,
  .vector-icon4,
  .vector-icon5 {
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 24.1px);
    width: 48px;
    height: 48px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }

  .pro-icon2 {
    top: calc(50% - 25.2px);
    left: calc(50% - 23.1px);
    width: 45.9px;
  }

  .service-icon2 {
    top: calc(50% - 26px);
    left: calc(50% - 22.1px);
    width: 44.4px;
  }

  .vector-icon4 {
    top: calc(50% - 24.1px);
  }

  .vector-icon5 {
    position: static;
    display: block;
    width: auto;
    height: 48px;
    max-height: 100%;
    object-fit: contain;
  }

  .description {
    align-self: stretch;
    position: relative;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--color-text-muted);
  }
</style>
