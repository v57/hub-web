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

<style>
  .sortfilter {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .filtersearch {
    width: 346px;
    box-shadow: 0 4px 20px rgb(var(--color-shadow-rgb) / 0.03);
    border-radius: 200px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-soft);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    gap: 0;
  }

  .chip {
    display: flex;
    align-items: flex-start;
    color: var(--color-accent-contrast);
  }

  .button10 {
    border-radius: 200px;
    background-color: var(--color-accent);
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }

  .chip2 {
    display: flex;
    align-items: flex-start;
  }

  .tags2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }

  .sort-options {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--color-text-subtle);
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }

  .button-label12 {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: var(--color-accent);
  }

  .sort-option {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  @media (max-width: 767px) {
    .sortfilter {
      gap: 12px;
    }

    .filtersearch {
      width: 100%;
      max-width: none;
      flex: 1 1 auto;
    }

    .sort-options {
      gap: 3px;
    }
  }
</style>
