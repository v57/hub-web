<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { FeedbackTag as FeedbackTagData } from './content';

  export let className: FeedbackTagData['className'];
  export let label: string;
  export let selected = false;
  export let interactive = true;

  const dispatch = createEventDispatcher<{
    clear: void;
    select: string;
  }>();

  function handleClick() {
    if (selected) {
      dispatch('clear');
      return;
    }

    dispatch('select', label);
  }
</script>

{#if interactive}
  <button
    type="button"
    class={className}
    class:selected
    aria-pressed={selected}
    on:click={handleClick}
  >
    <div class="button-label">{label}</div>
    {#if selected}
      <svg class="clear-icon" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M2 2l8 8M10 2L2 10"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />
      </svg>
    {/if}
  </button>
{:else}
  <span class={`${className} static-tag`}>
    <span class="button-label">{label}</span>
  </span>
{/if}

<style>
  .button,
  .button2 {
    border-radius: 200px;
    border: 1px solid var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: nowrap;
    appearance: none;
    background: transparent;
    color: var(--color-accent);
    cursor: pointer;
    font: inherit;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 180ms ease,
      color 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;
    will-change: transform, background-color, color, box-shadow;
  }

  .button2 {
    min-height: 22px;
  }

  .button11 {
    border-radius: 200px;
    background-color: var(--color-surface-accent-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: nowrap;
    appearance: none;
    border: 0;
    color: var(--color-accent);
    cursor: pointer;
    font: inherit;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 180ms ease,
      color 180ms ease,
      box-shadow 180ms ease;
    will-change: transform, background-color, color, box-shadow;
  }

  .button13 {
    border-radius: 200px;
    background-color: var(--color-surface-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: nowrap;
    color: var(--color-text-muted);
    appearance: none;
    border: 0;
    cursor: pointer;
    font: inherit;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 180ms ease,
      color 180ms ease,
      box-shadow 180ms ease;
    will-change: transform, background-color, color, box-shadow;
  }

  .button:hover,
  .button2:hover,
  .button11:hover,
  .button13:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgb(var(--color-shadow-rgb) / 0.08);
  }

  .button:focus-visible,
  .button2:focus-visible,
  .button11:focus-visible,
  .button13:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .static-tag {
    pointer-events: none;
    cursor: default;
    transition: none;
    transform: none;
    box-shadow: none;
    will-change: auto;
  }

  .static-tag:hover,
  .static-tag:focus-visible {
    transform: none;
    box-shadow: none;
  }

  .selected {
    background-color: var(--color-accent) !important;
    border-color: var(--color-accent) !important;
    color: var(--color-accent-contrast) !important;
    box-shadow: 0 8px 18px rgb(var(--color-accent-rgb) / 0.18);
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 400;
  }

  .clear-icon {
    width: 12px;
    height: 12px;
    flex: none;
    display: block;
  }

  @media (prefers-color-scheme: dark) {
    .static-tag.button13 {
      background-color: #393733;
    }
  }
</style>
