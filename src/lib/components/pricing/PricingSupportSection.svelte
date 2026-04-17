<script lang="ts">
  import { onMount, tick } from 'svelte';
  import type { SupportButton } from './content';
  import IconLink from '../common/IconLink.svelte';

  export let buttons: SupportButton[] = [];
  export let description: string;
  export let title: string;

  let buttonsContainer: HTMLDivElement | null = null;
  let supportButtonWidth: number | null = null;

  const measureSupportButtons = () => {
    if (!buttonsContainer) return;

    const buttonElements = buttonsContainer.querySelectorAll<HTMLElement>('.support-button');
    let maxWidth = 0;

    buttonElements.forEach((button) => {
      const width = Math.ceil(button.getBoundingClientRect().width);
      if (width > maxWidth) maxWidth = width;
    });

    supportButtonWidth = maxWidth > 0 ? maxWidth : null;
  };

  onMount(async () => {
    await tick();
    measureSupportButtons();
  });
</script>

<div class="support-section">
  <div class="support-section-container">
    <div class="plan-name-parent">
      <div class="title2">
        <span class="plan-name">{title}</span>
      </div>
      <div class="support-text3">{description}</div>
    </div>
    <div
      bind:this={buttonsContainer}
      class="support-buttons-container"
      style={supportButtonWidth ? `--support-button-width:${supportButtonWidth}px;` : ''}
    >
      {#each buttons as button}
        <IconLink
          outerClass="support-button"
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
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 48px clamp(24px, 5vw, 80px) 120px;
    box-sizing: border-box;
    z-index: 1;
    font-size: 16px;
  }

  .support-section-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: clamp(16px, 2vw, 24px);
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
    font-weight: 600;
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
    max-width: none;
    height: auto;
    align-self: stretch;
  }

  .plan-name-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(12px, 1.5vw, 16px);
    flex: 0 0 auto;
    width: 100%;
    max-width: none;
    min-width: 0;
    align-self: stretch;
  }

  .support-buttons-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: start;
    justify-content: flex-start;
    gap: clamp(8px, 1.5vw, 24px);
    text-align: left;
    font-size: 12px;
  }

  .support-buttons-container :global(.icon-link) {
    flex: 0 0 auto;
    width: var(--support-button-width, auto);
  }

  @media (prefers-color-scheme: dark) {
    .support-buttons-container :global(.icon-link-tile) {
      box-shadow: 0px 4px 20px rgb(0 0 0 / 0.2);
    }

    .support-buttons-container :global(.icon-link:hover .icon-link-tile),
    .support-buttons-container :global(.icon-link:focus-visible .icon-link-tile) {
      box-shadow: 0px 4px 20px rgb(0 0 0 / 0.2);
    }
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .support-section {
      padding: 32px 16px 120px;
    }

    .support-section-container {
      gap: 16px;
    }

    .plan-name-parent {
      gap: 12px;
    }

    .support-buttons-container {
      gap: 8px;
    }
  }

</style>
