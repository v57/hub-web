<script lang="ts">
  import type { SupportButton } from './content';
  import IconLink from '../common/IconLink.svelte';

  export let buttons: SupportButton[] = [];
  export let description: string;
  export let title: string;
</script>

<div class="support-section">
  <div class="support-section-container">
    <div class="plan-name-parent">
      <div class="title2">
        <b class="plan-name">{title}</b>
      </div>
      <div class="support-text3">{description}</div>
    </div>
    <div class="support-buttons-container">
      {#each buttons as button}
        <IconLink
          href={button.href}
          imageSrc={button.src}
          imageClass={button.iconClass}
          layout="vertical"
          size={64}
        >
          <div class="button-label">{button.label}</div>
        </IconLink>
      {/each}
    </div>
  </div>
</div>

<style>
  .support-section {
    align-self: stretch;
    height: 246px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 80px 120px;
    box-sizing: border-box;
    z-index: 1;
    font-size: 16px;
  }

  .support-section-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 0 40px;
    flex-shrink: 0;
  }

  .title2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .support-text3 {
    position: relative;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--color-text-muted);
    text-align: left;
  }

  .support-buttons-container {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    text-align: left;
    font-size: 12px;
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }
</style>
