<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
  />
</svelte:head>

<slot />

<style>
  :global(:root) {
    --color-page: #ffffff;
    --color-page-rgb: 255 255 255;
    --color-surface: #ffffff;
    --color-surface-rgb: 255 255 255;
    --color-surface-muted: #f4f4f4;
    --color-surface-muted-rgb: 244 244 244;
    --color-surface-accent-soft: #fee9eb;
    --color-surface-accent-soft-rgb: 254 233 235;
    --color-text: #2b2b2c;
    --color-text-muted: #8e8e93;
    --color-text-subtle: #bbbbbe;
    --color-border: #efefef;
    --color-border-rgb: 239 239 239;
    --color-border-soft: rgb(0 0 0 / 0.03);
    --color-shadow-rgb: 0 0 0;
    --toolbar-shadow-alpha: 0.05;
    --toolbar-shadow-hover-alpha: 0.08;
    --color-accent: #fa243c;
    --color-accent-rgb: 250 36 60;
    --color-accent-contrast: #ffffff;
    --color-status-success: #34c759;
    --color-status-danger: #ff453a;
    --color-status-info: #5856d6;
    --color-status-warning: #ff9500;
    --color-status-success-alt: #30d158;
    --color-status-link: #007aff;
    color-scheme: light dark;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --color-page: #393733;
      --color-page-rgb: 57 55 51;
      --color-surface: #2b2b2c;
      --color-surface-rgb: 43 43 44;
      --color-surface-muted: #2b2b2c;
      --color-surface-muted-rgb: 43 43 44;
      --color-surface-accent-soft: rgb(250 36 60 / 0.12);
      --color-surface-accent-soft-rgb: 250 36 60;
      --color-text: #f4f4f5;
      --color-text-muted: #a5a5a9;
      --color-text-subtle: #8e8e93;
      --color-border: rgb(255 255 255 / 0.1);
      --color-border-rgb: 255 255 255;
      --color-border-soft: rgb(255 255 255 / 0.03);
      --color-shadow-rgb: 0 0 0;
      --toolbar-shadow-alpha: 0.08;
      --toolbar-shadow-hover-alpha: 0.12;
      --color-accent: #fa243c;
      --color-accent-rgb: 250 36 60;
      --color-accent-contrast: #ffffff;
      --color-status-success: #4ade80;
      --color-status-danger: #ff6b6b;
      --color-status-info: #8b8aff;
      --color-status-warning: #ffb347;
      --color-status-success-alt: #3ddc84;
      --color-status-link: #4da3ff;
    }
  }

  :global(body) {
    margin: 0;
    line-height: normal;
    font-family: Rubik, ui-rounded, sans-serif;
    background: var(--color-page);
    color: var(--color-text);
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }
</style>
