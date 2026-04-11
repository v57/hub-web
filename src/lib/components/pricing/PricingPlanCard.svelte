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
