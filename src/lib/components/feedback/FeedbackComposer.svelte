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
          <img class="group-icon" src="/files/ui/copy.svg" alt="" />
          <div class="prompt-text">{promptText}</div>
        </div>
      </div>
    </div>
    <div class="buttonicon">
      <img class="group-icon2" src="/files/ui/add.svg" alt="" />
    </div>
  </div>

  <div class="tags">
    {#each tags as tag}
      <FeedbackTag {...tag} />
    {/each}
  </div>
</div>
