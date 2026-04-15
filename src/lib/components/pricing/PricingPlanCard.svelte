<script lang="ts">
  import PricingFeatureList from './PricingFeatureList.svelte';
  import type { PricingPlan } from './content';

  export let plan: PricingPlan;
</script>

<div class={`pricing-plan-card ${plan.cardClass}`.trim()}>
  <div class={plan.topRowClass}>
    <div class="plan-name-parent">
      <span class="plan-name">{plan.name}</span>
      <PricingFeatureList items={plan.features} />
    </div>
    <div class="buttonget">
      <div class="button-label">{plan.badgeLabel}</div>
    </div>
  </div>
  <div class="button-container">
    <div class={plan.ctaClass}>
      <span class="plan-name">{plan.ctaLabel}</span>
    </div>
    <div class="support-text">{plan.supportText}</div>
  </div>
</div>

<style>
  .pricing-plan-card {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    box-shadow:
      0 4px 12px rgb(var(--color-accent-rgb) / 0.06),
      0 4px 20px rgb(var(--color-shadow-rgb) / 0.06);
    border-radius: 16px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-soft);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    padding: 16px;
    transition:
      transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 220ms ease,
      border-color 220ms ease,
      background-color 220ms ease;
    will-change: transform, box-shadow;
  }

  .pricing-plan-card::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: radial-gradient(
      circle at top left,
      rgb(var(--color-accent-rgb) / 0.16),
      transparent 58%
    );
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
    z-index: 0;
  }

  .pricing-plan-card > * {
    position: relative;
    z-index: 1;
  }

  .pricing-plan-card:hover,
  .pricing-plan-card:focus-within {
    transform: translateY(-6px) scale(1.01);
    box-shadow:
      0 10px 24px rgb(var(--color-accent-rgb) / 0.08),
      0 18px 36px rgb(var(--color-shadow-rgb) / 0.12);
    border-color: rgb(var(--color-accent-rgb) / 0.25);
  }

  .pricing-plan-card:hover::before,
  .pricing-plan-card:focus-within::before {
    opacity: 1;
  }

  .price-card-left-container {
    justify-content: space-between;
    gap: 16px;
  }

  .price-card-right-container {
    gap: 16px;
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
    font-weight: 500;
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
    position: relative;
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
    transition:
      transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 220ms ease;
    will-change: transform;
  }

  .buttonget2::after,
  .buttonget4::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgb(255 255 255 / 0.25) 42%,
      rgb(255 255 255 / 0.08) 58%,
      transparent 100%
    );
    transform: translateX(-140%) skewX(-18deg);
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
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
    font-weight: 400;
    color: var(--color-text-subtle);
    text-align: center;
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 400;
  }

  .buttonget2 .plan-name,
  .buttonget4 .plan-name {
    position: relative;
    z-index: 1;
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .buttonget2:hover,
  .buttonget4:hover,
  .buttonget2:focus-visible,
  .buttonget4:focus-visible {
    transform: translateY(-4px) scale(1.05);
    filter: brightness(1.06);
  }

  .buttonget2:hover::after,
  .buttonget4:hover::after,
  .buttonget2:focus-visible::after,
  .buttonget4:focus-visible::after {
    transform: translateX(140%) skewX(-18deg);
  }

  .buttonget2:hover .plan-name,
  .buttonget4:hover .plan-name,
  .buttonget2:focus-visible .plan-name,
  .buttonget4:focus-visible .plan-name {
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    .pricing-plan-card,
    .pricing-plan-card::before,
    .buttonget2,
    .buttonget4,
    .buttonget2::after,
    .buttonget4::after,
    .buttonget2 .plan-name,
    .buttonget4 .plan-name {
      transition: none;
    }

    .pricing-plan-card:hover,
    .pricing-plan-card:focus-within,
    .buttonget2:hover,
    .buttonget4:hover,
    .buttonget2:focus-visible,
    .buttonget4:focus-visible,
    .buttonget2:hover::after,
    .buttonget4:hover::after,
    .buttonget2:focus-visible::after,
    .buttonget4:focus-visible::after,
    .buttonget2:hover .plan-name,
    .buttonget4:hover .plan-name,
    .buttonget2:focus-visible .plan-name,
    .buttonget4:focus-visible .plan-name {
      transform: none;
    }
  }
</style>
