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
