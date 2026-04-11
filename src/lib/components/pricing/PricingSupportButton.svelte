<script lang="ts">
  import type { SupportButton } from './content';

  export let button: SupportButton;
</script>

<a class="support-button" href={button.href} target="_blank" rel="noreferrer">
  <div class="container">
    <div class="support-button2">
      <img class={button.iconClass} src={button.src} alt="" />
      {#if button.secondaryIconClass && button.secondarySrc}
        <img class={button.secondaryIconClass} src={button.secondarySrc} alt="" />
      {/if}
    </div>
    <div class="button-label">{button.label}</div>
  </div>
</a>

<style>
  .support-button {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .support-button2 {
    width: 64px;
    height: 64px;
    position: relative;
    box-shadow: 0 2px 12.2px rgba(0, 0, 0, 0.1);
  }

  .screenshot-2026-02-27-at-1832 {
    position: absolute;
    inset: 0;
    border-radius: 14px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }

  .vector-icon,
  .vector-icon2,
  .icon,
  .idr5voioyc-logos-1-icon {
    position: absolute;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }

  .vector-icon {
    inset: 0;
  }

  .vector-icon2 {
    height: 79.06%;
    width: 81.25%;
    top: 10.45%;
    right: 9.38%;
    bottom: 10.49%;
    left: 9.38%;
  }

  .icon {
    height: 48.13%;
    width: 63.59%;
    top: 25.93%;
    right: 18.17%;
    bottom: 25.95%;
    left: 18.24%;
  }

  .idr5voioyc-logos-1-icon {
    inset: 0;
    object-fit: cover;
  }
</style>
