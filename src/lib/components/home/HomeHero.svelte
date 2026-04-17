<script lang="ts">
  import type { HomePlatform } from './content'

  export let platforms: HomePlatform[] = []
</script>

<div class="hero-section">
  <div class="container">
    <div class="logo">
      <span class="logo-text">HUB</span>
    </div>
    <div class="button">
      <span class="logo-text">Download</span>
    </div>
  </div>
  <div class="container2">
    <div class="available-on">
      <span class="logo-text">Available on</span>
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
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    min-height: 820px;
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
    font-weight: 700;
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
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 180ms ease,
      background-color 180ms ease;
    will-change: transform, box-shadow, background-color;
    cursor: pointer;
  }

  .button:hover,
  .button:focus-visible {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 8px 20px rgb(var(--color-accent-rgb) / 0.22);
  }

  .button:hover .logo-text,
  .button:focus-visible .logo-text {
    animation: button-pop 220ms cubic-bezier(0.16, 1, 0.3, 1);
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

  @media (min-width: 768px) and (max-width: 1023px) {
    .hero-section {
      min-height: 900px;
    }

    .logo {
      font-size: 200px;
    }
  }

  @media (max-width: 767px) {
    .hero-section {
      min-height: 700px;
    }

    .container2 {
      left: 0;
      right: 0;
      padding: 0 16px 48px;
      justify-content: center;
    }

    .available-on {
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .platforms {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .logo {
      font-size: 160px;
    }
  }

  @keyframes button-pop {
    0% {
      transform: scale(0.98);
    }
    60% {
      transform: scale(1.04);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
