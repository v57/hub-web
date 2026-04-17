<script lang="ts">
  import type { FeatureItem } from './content';

  export let items: FeatureItem[] = [];
  let isTwoColumn = false;

  $: isTwoColumn = items.length > 3;
</script>

<div class:feature-list--two-column={isTwoColumn} class="feature-list">
  {#each items as item}
    <div class="feature-item">
      <img class="frame-icon" src={item.src} alt="" />
      <div class="feature-description">{item.label}</div>
    </div>
  {/each}
</div>

<style>
  .feature-list {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(6px, 0.8vw, 8px);
    font-size: 14px;
    color: var(--color-text);
  }

  .feature-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: clamp(4px, 0.5vw, 6px);
  }

  .frame-icon {
    height: 16px;
    width: 16px;
    border-radius: 16px;
  }

  .feature-description {
    position: relative;
    letter-spacing: -0.02em;
  }

  @media (max-width: 600px) {
    .feature-list--two-column {
      display: grid;
      width: 100%;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, auto);
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: clamp(10px, 1.5vw, 12px);
      row-gap: clamp(6px, 1vw, 8px);
      align-items: start;
    }
  }
</style>
