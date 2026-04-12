<script lang="ts">
  import PricingFeatureList from './PricingFeatureList.svelte';
  import type { PricingPlan } from './content';

  export let plan: PricingPlan;
</script>

<div class={plan.cardClass}>
  <div class={plan.topRowClass}>
    <div class="plan-name-parent">
      <b class="plan-name">{plan.name}</b>
      <PricingFeatureList items={plan.features} />
    </div>
    <div class="buttonget">
      <div class="button-label">{plan.badgeLabel}</div>
    </div>
  </div>
  <div class="button-container">
    <div class={plan.ctaClass}>
      <b class="plan-name">{plan.ctaLabel}</b>
    </div>
    <div class="support-text">{plan.supportText}</div>
  </div>
</div>

<style>
  .price-card-left-container,
  .price-card-right-container {
    box-shadow:
      0 4px 12px rgb(var(--color-accent-rgb) / 0.06),
      0 4px 20px rgb(var(--color-shadow-rgb) / 0.06);
    border-radius: 16px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-soft);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }

  .price-card-left-container {
    justify-content: space-between;
    gap: 20px;
  }

  .price-card-right-container {
    gap: 32px;
  }

  .frame-parent,
  .frame-group {
    align-self: stretch;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  .frame-group {
    gap: 13px;
  }

  .plan-name-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .plan-name {
    position: relative;
  }

  .buttonget {
    border-radius: 200px;
    background-color: var(--color-surface-accent-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    font-size: 12px;
  }

  .button-container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: var(--color-accent-contrast);
  }

  .buttonget2,
  .buttonget4 {
    height: 35px;
    border-radius: 200px;
    background-color: var(--color-accent);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height: 32px;
  }

  .buttonget2 {
    width: 239px;
    padding: 8px 40px;
  }

  .buttonget4 {
    padding: 8px 64px;
  }

  .support-text {
    position: relative;
    font-size: 12px;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: var(--color-text-subtle);
    text-align: center;
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }
</style>
