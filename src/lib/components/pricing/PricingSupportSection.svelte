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
    align-self: center;
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
    justify-content: flex-start;
    align-self: stretch;
    width: 100%;
    gap: 24px;
    flex-shrink: 0;
  }

  .title2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .plan-name {
    position: relative;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--color-text);
  }

  .support-text3 {
    position: relative;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: var(--color-text-muted);
    text-align: left;
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  .plan-name-parent {
    display: flex;
    flex: 0 1 300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: 300px;
    min-width: 0;
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

  @media (min-width: 768px) {
    .support-section {
      padding-top: 48px;
    }

    .support-text3 {
      max-width: 460px;
    }

    .plan-name-parent {
      flex-basis: 460px;
      max-width: 460px;
    }
  }

  @media (min-width: 1024px) {
    .support-section-container {
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 24px;
    }

    .support-buttons-container {
      width: 100%;
      flex-basis: 100%;
      flex-shrink: 1;
      justify-content: flex-start;
    }
  }
</style>
