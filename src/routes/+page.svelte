<script lang="ts">
  import { extractBody } from '$lib/raw-html';
  import html from '../../index.html?raw';

  const body = extractBody(html);
</script>

<svelte:head>
  <link rel="stylesheet" href="/index.css" />
</svelte:head>

{@html body}
