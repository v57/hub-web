<script lang="ts">
  export let href: string;
  export let imageClass = '';
  export let imageSrc: string;
  export let layout: 'horizontal' | 'vertical' = 'vertical';
  export let outerClass = '';
  export let radius = 16;
  export let size = 64;
  export let gap = 8;
  export let target = '_blank';
  export let rel = 'noreferrer';
</script>

<a
  class={`icon-link ${outerClass}`.trim()}
  class:horizontal={layout === 'horizontal'}
  class:vertical={layout === 'vertical'}
  href={href}
  {rel}
  {target}
  style={`--icon-size:${size}px;--icon-radius:${radius}px;--icon-gap:${gap}px;`}
>
  <div class="icon-link-tile">
    <img class={imageClass} src={imageSrc} alt="" />
  </div>
  <div class="icon-link-content">
    <slot />
  </div>
</a>

<style>
  .icon-link {
    display: flex;
    align-items: center;
    gap: var(--icon-gap);
    cursor: pointer;
  }

  .icon-link.vertical {
    flex-direction: column;
    align-items: center;
  }

  .icon-link.horizontal {
    text-align: left;
  }

  .icon-link-tile {
    width: var(--icon-size);
    height: var(--icon-size);
    position: relative;
    border-radius: var(--icon-radius);
    overflow: hidden;
    box-shadow: 0 2px 12.2px rgb(var(--color-shadow-rgb) / 0.1);
  }

  .icon-link-tile img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
</style>
