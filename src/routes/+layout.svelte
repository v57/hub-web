<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@600;700&display=swap" />
</svelte:head>

<slot />

<style>
  :global(body) {
    margin: 0;
    line-height: normal;
    font-family: Rubik, sans-serif;
    background: #fff;
    color: #2b2b2c;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }
</style>
