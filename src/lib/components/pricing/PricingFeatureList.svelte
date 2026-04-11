<script lang="ts">
  import type { FeatureItem } from './content';

  export let items: FeatureItem[] = [];
</script>

<div class="feature-list">
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
    gap: 8px;
    font-size: 14px;
    color: #2b2b2c;
  }

  .feature-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
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
</style>
