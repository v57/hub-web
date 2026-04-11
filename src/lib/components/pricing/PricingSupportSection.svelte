<script lang="ts">
  import PricingSupportButton from './PricingSupportButton.svelte';
  import type { SupportButton } from './content';

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
        <PricingSupportButton {button} />
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
    color: #8e8e93;
    text-align: left;
  }

  .support-buttons-container {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    text-align: left;
    font-size: 12px;
  }
</style>
