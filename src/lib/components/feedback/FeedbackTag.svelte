<script lang="ts">
  import type { FeedbackTag as FeedbackTagData } from './content';

  export let className: FeedbackTagData['className'];
  export let label: string;
</script>

<div class={className}>
  <div class="button-label">{label}</div>
</div>
