<script lang="ts">
  import type { HomePlatform } from './content';

  export let platforms: HomePlatform[] = [];
</script>

<div class="hero-section">
  <div class="container">
    <div class="logo">
      <b class="logo-text">HUB</b>
    </div>
    <div class="button">
      <b class="logo-text">Download</b>
    </div>
  </div>
  <div class="container2">
    <div class="available-on">
      <b class="logo-text">Available on</b>
      <div class="platforms">
        {#each platforms as platform}
          <div class="platform">
            <div class="platform-name">{platform.name}</div>
            <div class={platform.wrapperClass}>
              <img class={platform.iconClass} src={platform.src} alt="" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
