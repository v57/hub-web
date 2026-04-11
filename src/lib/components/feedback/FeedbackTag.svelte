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
    border: 1px solid #fa243c;
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
    background-color: #fee9eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
  }

  .button13 {
    border-radius: 200px;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    color: #8e8e93;
  }

  .button-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }
</style>
