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
    text-decoration: none;
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 180ms ease;
    will-change: transform, filter;
  }

  .icon-link:hover,
  .icon-link:focus-visible {
    transform: translateY(-2px);
    filter: drop-shadow(0 10px 20px rgb(var(--color-shadow-rgb) / 0.08));
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
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 180ms ease;
    will-change: transform, box-shadow;
  }

  .icon-link:hover .icon-link-tile,
  .icon-link:focus-visible .icon-link-tile {
    transform: scale(1.03);
    box-shadow: 0 8px 22px rgb(var(--color-shadow-rgb) / 0.14);
  }

  .icon-link-tile img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .icon-link:hover .icon-link-tile img,
  .icon-link:focus-visible .icon-link-tile img {
    transform: scale(1.06);
  }

  .icon-link-tile img.reddit-icon {
    inset: 16%;
    width: 68%;
    height: 68%;
    object-fit: contain;
  }

  @media (prefers-color-scheme: dark) {
    .icon-link-tile img.github-icon {
      filter: brightness(0) invert(1);
    }
  }
</style>
