<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { FeedbackFilterChip } from './content';

  export let filters: FeedbackFilterChip[] = [];
  export let sortLabel = 'Sort:';
  export let sortPrimary = 'new';
  export let sortSecondary = 'best';

  const dispatch = createEventDispatcher<{ select: string; sort: string }>();

  let activeFilter = filters.find((filter) => filter.active)?.label ?? filters[0]?.label ?? 'All';
  let activeSort = sortPrimary;

  $: if (filters.length && !filters.some((filter) => filter.label === activeFilter)) {
    activeFilter = filters.find((filter) => filter.active)?.label ?? filters[0]?.label ?? 'All';
  }

  $: if (activeSort !== sortPrimary && activeSort !== sortSecondary) {
    activeSort = sortPrimary;
  }

  function selectFilter(label: string) {
    activeFilter = label;
    dispatch('select', label);
  }

  function selectSort(label: string) {
    activeSort = label;
    dispatch('sort', label);
  }
</script>

<div class="sortfilter">
  <div class="filtersearch">
    {#each filters as filter}
      <button
        type="button"
        class="button-label"
        class:button10={filter.label === activeFilter}
        class:tags2={filter.label !== activeFilter}
        aria-pressed={filter.label === activeFilter}
        on:click={() => selectFilter(filter.label)}
      >
        <span class="platform-name">{filter.label}</span>
      </button>
    {/each}
  </div>

  <div class="sort-options">
    <div class="button-label">{sortLabel}</div>
    <button
      type="button"
      class="button-label sort-option sort-button"
      class:sort-active={activeSort === sortPrimary}
      aria-pressed={activeSort === sortPrimary}
      on:click={() => selectSort(sortPrimary)}
    >
      {sortPrimary}
    </button>
    <div class="button-label">|</div>
    <button
      type="button"
      class="button-label sort-option sort-button"
      class:sort-active={activeSort === sortSecondary}
      aria-pressed={activeSort === sortSecondary}
      on:click={() => selectSort(sortSecondary)}
    >
      {sortSecondary}
    </button>
  </div>
</div>

<style>
  .sortfilter {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(14px, 2vw, 20px);
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
    padding: clamp(3px, 0.5vw, 4px);
    gap: 0;
  }

  .sort-options {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--color-text-subtle);
  }

  .button-label {
    appearance: none;
    position: relative;
    box-sizing: border-box;
    z-index: 1;
    flex: 0 0 auto;
    letter-spacing: -0.32px;
    font-weight: 600;
    border: 0;
    cursor: pointer;
    padding: 0;
    font: inherit;
    color: var(--color-text-muted);
    border-radius: 200px;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 180ms ease,
      color 180ms ease,
      box-shadow 180ms ease;
    will-change: transform, background-color, color, box-shadow;
  }

  .button-label:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: 9999px;
  }

  .button10 {
    border-radius: 200px;
    background-color: var(--color-accent);
    color: var(--color-accent-contrast);
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }

  .tags2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    background: transparent;
    color: inherit;
  }

  .tags2:hover {
    background-color: var(--color-surface-accent-soft);
    color: var(--color-accent);
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 12px rgb(var(--color-shadow-rgb) / 0.08);
  }

  .tags2:focus-visible {
    background-color: var(--color-surface-accent-soft);
    color: var(--color-accent);
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 12px rgb(var(--color-shadow-rgb) / 0.08);
  }

  .tags2:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgb(var(--color-shadow-rgb) / 0.06);
  }

  .tags2:hover .platform-name,
  .tags2:focus-visible .platform-name {
    animation: chip-pop 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .platform-name {
    display: block;
    font-weight: 500;
  }

  .sort-option {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 500;
    color: var(--color-text-muted);
  }

  .sort-button {
    appearance: none;
    background: transparent;
    border: 0;
    padding: 0;
    line-height: 1;
    cursor: pointer;
  }

  .sort-button:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: 9999px;
  }

  .sort-button:hover {
    color: var(--color-accent);
  }

  .sort-active {
    color: var(--color-accent);
  }

  @media (max-width: 653px) {
    .sortfilter {
      gap: 12px;
    }

    .sort-options {
      gap: 3px;
    }
  }

  @keyframes chip-pop {
    0% {
      transform: scale(0.98);
    }

    60% {
      transform: scale(1.04);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
