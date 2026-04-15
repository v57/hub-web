<script lang="ts">
  import FeedbackTag from './FeedbackTag.svelte';
  import type { FeedbackTag as FeedbackTagData } from './content';

  export let promptText: string;
  export let tags: FeedbackTagData[] = [];
</script>

<div class="search-section">
  <div class="searchadd">
    <div class="search">
      <div class="container">
        <div class="icon-and-prompt">
          <img class="group-icon" src="/Button/search.svg" alt="" />
          <div class="prompt-text">{promptText}</div>
        </div>
      </div>
    </div>
    <div class="buttonicon">
      <div class="buttonicon-group">
        <div class="buttonicon-art">
          <img class="group-icon2" src="/Button/plus.svg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="tags">
    {#each tags as tag}
      <FeedbackTag {...tag} />
    {/each}
  </div>
</div>

<style>
  .search-section {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .searchadd {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .search {
    flex: 1;
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
    padding: 12px;
  }

  .icon-and-prompt {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .group-icon {
    width: 15.2px;
    position: relative;
    max-height: 100%;
  }

  .prompt-text {
    position: relative;
    letter-spacing: -0.02em;
  }

  .buttonicon {
    height: 36px;
    width: 36px;
    position: relative;
  }

  .buttonicon-group {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 36px;
    height: 36px;
    transform: translate(-50%, -50%);
  }

  .buttonicon-art {
    position: absolute;
    inset: -28.33% -32.49% -39.37% -33.89%;
  }

  .group-icon2 {
    display: block;
    max-width: none;
    width: 100%;
    height: 100%;
  }

  .tags {
    width: 378px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 12px;
    text-align: left;
    font-size: 12px;
    color: var(--color-accent);
  }
</style>
