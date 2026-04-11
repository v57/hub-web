<script lang="ts">
  import type { FeedbackFilterChip } from './content';

  export let filters: FeedbackFilterChip[] = [];
  export let sortLabel = 'Sort:';
  export let sortPrimary = 'new';
  export let sortSecondary = 'best';
</script>

<div class="sortfilter">
  <div class="filtersearch">
    {#each filters as filter}
      {#if filter.active}
        <div class="chip">
          <div class="button10">
            <div class="button-label">{filter.label}</div>
          </div>
        </div>
      {:else}
        <div class="chip2">
          <div class="tags2">
            <div class="button-label">{filter.label}</div>
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <div class="sort-options">
    <div class="button-label">{sortLabel}</div>
    <div class="button-label12">{sortPrimary}</div>
    <div class="button-label">|</div>
    <div class="sort-option">{sortSecondary}</div>
  </div>
</div>
