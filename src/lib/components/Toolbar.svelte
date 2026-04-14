<script lang="ts">
  import type { ToolbarAction } from './toolbar'

  export let actions: ToolbarAction[] = []
  export let brandIconSrc: string
  export let pageName: string | undefined = undefined

  const variantClassMap: Record<ToolbarAction['variant'], string> = {
    muted: 'toolbar__action toolbar__action--muted',
    solid: 'toolbar__action toolbar__action--solid',
    outline: 'toolbar__action toolbar__action--outline',
  }

  function getActionClass(variant: ToolbarAction['variant']) {
    return variantClassMap[variant]
  }
</script>

<div class="toolbar" data-testid="toolbar">
  <div class="toolbar__shell">
    <div class="toolbar__content">
      <div class="toolbar__brand">
        <div class="toolbar__brand-group">
          <div class="toolbar__logo">
            <img class="toolbar__logo-image" src={brandIconSrc} alt="" />
          </div>
          <a class="toolbar__home-link" href="/">
            <div class="toolbar__wordmark">Hub</div>
          </a>
        </div>
        {#if pageName}
          <div class="toolbar__page-name">
            <span class="toolbar__page-name-text">{pageName}</span>
          </div>
        {/if}
      </div>

      <div class="toolbar__actions">
        {#each actions as action}
          {#if action.href}
            <a class={getActionClass(action.variant)} href={action.href}>
              <span class="toolbar__action-label">{action.label}</span>
            </a>
          {:else}
            <div class={getActionClass(action.variant)}>
              <span class="toolbar__action-label">{action.label}</span>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .toolbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 16px 80px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    pointer-events: none;
    text-align: left;
    font-family: Rubik;
  }

  .toolbar__shell {
    width: 100%;
    min-height: 60px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid var(--color-border);
    background: rgb(var(--color-surface-rgb) / 0.2);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    box-shadow: 0 4px 30px rgb(var(--color-shadow-rgb) / 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    pointer-events: auto;
  }

  .toolbar__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .toolbar__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-accent);
    font-size: 21px;
    text-decoration: none;
  }

  .toolbar__brand-group {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-accent);
  }

  .toolbar__logo {
    width: 24px;
    height: 24px;
    position: relative;
    flex-shrink: 0;
  }

  .toolbar__logo-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }

  .toolbar__wordmark {
    position: relative;
    letter-spacing: -0.02em;
    line-height: 110%;
    font-weight: 600;
  }

  .toolbar__home-link {
    color: inherit;
    text-decoration: none;
  }

  .toolbar__home-link:hover .toolbar__wordmark {
    text-decoration: underline;
    text-underline-offset: 0.14em;
  }

  .toolbar__page-name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--color-text);
  }

  .toolbar__page-name-text {
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -0.02em;
  }

  .toolbar__actions {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--color-text-muted);
    flex-shrink: 0;
  }

  .toolbar__action {
    border-radius: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: -0.32px;
    line-height: 1;
    box-sizing: border-box;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 180ms ease,
      background-color 180ms ease,
      color 180ms ease,
      border-color 180ms ease;
    will-change: transform, box-shadow, background-color, color, border-color;
  }

  .toolbar__action:hover,
  .toolbar__action:focus-visible {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 6px 18px rgb(var(--color-shadow-rgb) / 0.08);
  }

  .toolbar__action--muted {
    background-color: var(--color-surface-muted);
    color: var(--color-text-muted);
  }

  .toolbar__action--solid {
    background-color: var(--color-accent);
    color: var(--color-accent-contrast);
  }

  .toolbar__action--outline {
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    padding: 4px 8px;
  }

  .toolbar__action--muted:hover,
  .toolbar__action--muted:focus-visible {
    background-color: var(--color-surface-accent-soft);
    color: var(--color-accent);
  }

  .toolbar__action--solid:hover,
  .toolbar__action--solid:focus-visible {
    box-shadow: 0 8px 20px rgb(var(--color-accent-rgb) / 0.24);
  }

  .toolbar__action--outline:hover,
  .toolbar__action--outline:focus-visible {
    background-color: var(--color-surface-accent-soft);
  }

  .toolbar__action-label {
    position: relative;
    letter-spacing: -0.32px;
    line-height: 110%;
    font-weight: 600 !important;
  }

  @media (max-width: 767px) {
    .toolbar {
      padding: 16px 20px 0;
    }

    .toolbar__action--solid,
    .toolbar__action--outline {
      display: none;
    }
  }
</style>
