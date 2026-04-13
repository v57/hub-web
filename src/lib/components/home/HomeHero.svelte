<script lang="ts">
  import type { HomePlatform } from './content'

  export let platforms: HomePlatform[] = []
</script>

<div class="hero-section">
  <div class="container">
    <div class="logo">
      <b class="logo-text">HUB</b>
    </div>
    <div class="button">
      <b class="logo-text">Download</b>
    </div>
  </div>
  <div class="container2">
    <div class="available-on">
      <b class="logo-text">Available on</b>
      <div class="platforms">
        {#each platforms as platform}
          <div class="platform">
            <div class="platform-name">{platform.name}</div>
            <div class={platform.wrapperClass}>
              <img class={platform.iconClass} src={platform.src} alt="" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .hero-section {
    align-self: stretch;
    min-height: 100svh;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    isolation: isolate;
    z-index: 0;
    text-align: left;
    font-size: 320px;
    color: #fa243c;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    z-index: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Rubik, ui-rounded, sans-serif;
  }

  .logo-text {
    position: relative;
  }

  .button {
    border-radius: 200px;
    background-color: var(--color-accent);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 40px;
    box-sizing: border-box;
    min-height: 32px;
    font-size: 16px;
    color: var(--color-accent-contrast);
  }

  .container2 {
    margin: 0 !important;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 80px;
    z-index: 1;
    font-size: 16px;
    color: var(--color-text-subtle);
  }

  .available-on {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 8px;
  }

  .platforms {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    font-size: 12px;
    color: var(--color-text-muted);
  }

  .platform {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .platform-name {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }

  .iconplatform {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iconplatform3 {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .iconplatform8 {
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .vector-icon,
  .group-icon,
  .group-icon2,
  .group-icon3,
  .group-icon4,
  .vector-icon2,
  .group-icon5 {
    position: relative;
    max-height: 100%;
  }

  .vector-icon {
    width: 12px;
  }

  .group-icon {
    width: 8.6px;
  }

  .group-icon2 {
    width: 17.8px;
  }

  .group-icon3 {
    width: 24.9px;
  }

  .group-icon4 {
    width: 9.7px;
  }

  .vector-icon2 {
    width: 14px;
  }

  .group-icon5 {
    width: 13.8px;
  }

  .available-on .platforms img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    flex-shrink: 0;
    display: block;
  }

  @media (min-width: 1024px) {
    .hero-section {
      min-height: max(100vh, 830px);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .logo {
      font-size: 200px;
    }
  }

  @media (max-width: 767px) {
    .logo {
      font-size: 160px;
    }
  }
</style>
