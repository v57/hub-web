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
            <b>{pageName}</b>
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
    padding: 16px 112px 0;
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
    border-radius: 20px;
    border: 1px solid #eee;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
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
    color: #fa243c;
    font-size: 21px;
    text-decoration: none;
  }

  .toolbar__brand-group {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fa243c;
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
    color: #2b2b2c;
  }

  .toolbar__actions {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #8e8e93;
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
  }

  .toolbar__action--muted {
    background-color: #f4f4f4;
    color: #8e8e93;
  }

  .toolbar__action--solid {
    background-color: #fa243c;
    color: #fff;
  }

  .toolbar__action--outline {
    border: 1px solid #fa243c;
    color: #fa243c;
    padding: 4px 8px;
  }

  .toolbar__action-label {
    position: relative;
    letter-spacing: -0.32px;
    font-weight: 600;
  }
</style>
