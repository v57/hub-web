<script lang="ts">
  import type { SupportButton } from './content';

  export let button: SupportButton;
</script>

<a class="support-button" href={button.href} target="_blank" rel="noreferrer">
  <div class="container">
    <div class="support-button2">
      <img class={button.iconClass} src={button.src} alt="" />
      {#if button.secondaryIconClass && button.secondarySrc}
        <img class={button.secondaryIconClass} src={button.secondarySrc} alt="" />
      {/if}
    </div>
    <div class="button-label">{button.label}</div>
  </div>
</a>
