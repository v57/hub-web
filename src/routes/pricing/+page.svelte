<script lang="ts">
  import { extractBody } from '$lib/raw-html';
  import html from '../../../pricing.html?raw';

  const body = extractBody(html);
</script>

<svelte:head>
  <link rel="stylesheet" href="/pricing/index.css" />
</svelte:head>

{@html body}
