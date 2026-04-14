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

<style>
  .pricing {
    width: 100%;
    position: relative;
    background-color: var(--color-page);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    isolation: isolate;
    text-align: center;
    font-size: 20px;
    color: var(--color-text);
  }

  .pricing-section {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0 0;
    gap: 40px;
    z-index: 0;
  }

  .title {
    position: relative;
    letter-spacing: -0.02em;
    font-weight: 600;
  }

  .price-card {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    gap: 40px;
    text-align: left;
    font-size: 16px;
    color: var(--color-accent);
  }

  @media (max-width: 767px) {
    .pricing-section {
      padding: 96px 16px 0;
      gap: 24px;
    }

    .price-card {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      gap: 16px;
    }
  }
</style>
