<script lang="ts">
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { getToolbarConfig } from '$lib/components/toolbar';
  import PricingPlanCard from '$lib/components/pricing/PricingPlanCard.svelte';
  import PricingSupportSection from '$lib/components/pricing/PricingSupportSection.svelte';
  import {
    litePlan,
    proPlan,
    supportButtons,
    supportDescription,
    supportTitle
  } from '$lib/components/pricing/content';

  const toolbar = getToolbarConfig('pricing');
</script>

<svelte:head>
  <link rel="stylesheet" href="/pricing/index.css" />
</svelte:head>

<div class="pricing">
  <div class="pricing-section">
    <div class="title">Both plans are free</div>
    <div class="price-card">
      <PricingPlanCard plan={litePlan} />
      <PricingPlanCard plan={proPlan} />
    </div>
  </div>

  <PricingSupportSection buttons={supportButtons} description={supportDescription} title={supportTitle} />

  <Toolbar {...toolbar} />
</div>
