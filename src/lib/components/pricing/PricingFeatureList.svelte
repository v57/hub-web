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
