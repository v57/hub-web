<script lang="ts">
  import { extractBody } from '$lib/raw-html';
  import html from '../../../feedback.html?raw';

  const body = extractBody(html);
</script>

<svelte:head>
  <link rel="stylesheet" href="/feedback/index.css" />
</svelte:head>

{@html body}
