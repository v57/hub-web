<script lang="ts">
  import FeedbackTag from './FeedbackTag.svelte';
  import type { FeedbackTag as FeedbackTagData } from './content';

  export let promptText: string;
  export let tags: FeedbackTagData[] = [];

  let query = '';
  let selectedTags: string[] = [];

  function selectTag(label: string) {
    if (selectedTags.includes(label)) {
      return;
    }

    selectedTags = [...selectedTags, label];
  }

  function clearTag(label: string) {
    selectedTags = selectedTags.filter((tag) => tag !== label);
  }

  $: orderedTags = [
    ...selectedTags
      .map((label) => tags.find((tag) => tag.label === label))
      .filter((tag): tag is FeedbackTagData => Boolean(tag)),
    ...tags.filter((tag) => !selectedTags.includes(tag.label))
  ];
</script>

<div class="search-section">
  <div class="searchadd">
    <div class="search">
      <div class="container">
        <div class="icon-and-prompt">
          <img class="group-icon" src="/Button/search.svg" alt="" />
          <input
            class="prompt-input"
            bind:value={query}
            type="text"
            placeholder={promptText}
            aria-label={promptText}
            autocomplete="off"
            spellcheck="false"
          />
        </div>
      </div>
    </div>
    <div class="buttonicon">
      <img class="group-icon2" src="/Button/plus.svg" alt="" />
    </div>
  </div>

  <div class="tags">
    {#each orderedTags as tag}
      <FeedbackTag
        {...tag}
        selected={selectedTags.includes(tag.label)}
        on:select={(event) => selectTag(event.detail)}
        on:clear={() => clearTag(tag.label)}
      />
    {/each}
  </div>
</div>

<style>
  .search-section {
    align-self: stretch;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .searchadd {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 16px);
  }

  .search {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .container {
    align-self: stretch;
    border-radius: 200px;
    background-color: var(--color-surface-muted);
    border: 1px solid var(--color-border-soft);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: clamp(10px, 1.5vw, 12px);
  }

  .icon-and-prompt {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .group-icon {
    width: 15.2px;
    position: relative;
    max-height: 100%;
  }

  .prompt-input {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    padding: 0;
    color: #000;
    font: inherit;
    letter-spacing: -0.02em;
    outline: none;
    caret-color: #000;
  }

  .prompt-input::placeholder {
    color: inherit;
    opacity: 0.72;
  }

  .prompt-input:focus::placeholder {
    opacity: 0.52;
  }

  .buttonicon {
    height: 36px;
    width: 36px;
    position: relative;
    border-radius: 9999px;
    box-shadow: 0 2px 12.2px rgb(var(--color-shadow-rgb) / 0.1);
    cursor: pointer;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 180ms ease,
      filter 180ms ease;
    will-change: transform, box-shadow, filter;
  }

  .buttonicon:hover,
  .buttonicon:focus-visible {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 10px 22px rgb(var(--color-shadow-rgb) / 0.16);
    filter: brightness(1.02);
  }

  .group-icon2 {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: center;
  }

  .buttonicon:hover .group-icon2,
  .buttonicon:focus-visible .group-icon2 {
    transform: rotate(90deg);
  }

  .tags {
    width: 588px;
    max-width: 100%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 12px;
    min-width: 0;
    text-align: left;
    font-size: 12px;
    color: var(--color-accent);
  }

  @media (max-width: 653px) {
    .tags {
      width: 100%;
      align-self: stretch;
      justify-content: center;
      align-content: center;
      gap: 8px;
    }

    .searchadd {
      gap: 12px;
      align-items: stretch;
    }
  }
</style>
