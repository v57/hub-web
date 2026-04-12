<script lang="ts">
  import type { FeedbackTag as FeedbackTagData } from './content';

  export let className: FeedbackTagData['className'];
  export let label: string;
</script>

<div class={className}>
  <div class="button-label">{label}</div>
</div>

<style>
  .button,
  .button2 {
    border-radius: 200px;
    border: 1px solid var(--color-accent);
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }

  .button2 {
    height: 22px;
    box-sizing: border-box;
  }

  .button11 {
    border-radius: 200px;
    background-color: var(--color-surface-accent-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
  }

  .button13 {
    border-radius: 200px;
    background-color: var(--color-surface-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    color: var(--color-text-muted);
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }
</style>
