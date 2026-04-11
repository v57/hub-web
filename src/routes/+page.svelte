<script lang="ts">
  export let data: { body: string };
</script>

<svelte:head>
  <link rel="stylesheet" href="/index.css" />
</svelte:head>

{@html data.body}
