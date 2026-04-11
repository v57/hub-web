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
      <b class="feature-title">{card.title}</b>
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
    width: 242px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .cardfeature2 {
    height: 244px;
    width: 242px;
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
    gap: 12px;
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
    box-shadow: 0 2px 13.9px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.03);
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
  }

  .info {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 12px;
    color: #8e8e93;
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
    color: #fa243c;
  }

  .button3 {
    border-radius: 200px;
    background-color: #fee9eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
  }
</style>
