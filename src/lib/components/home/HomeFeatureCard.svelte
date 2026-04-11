<script lang="ts">
  import type { HomeFeatureCard as HomeFeatureCardData } from './content';

  export let card: HomeFeatureCardData;
</script>

<div class={card.wrapperClass}>
  <div class="container3">
    <div class="title7">
      <div class={card.iconFrameClass}>
        <div class={card.iconWrapperClass}>
          <img class={card.imageClass} src={card.src} alt="" />
        </div>
      </div>
      <b class="feature-title">{card.title}</b>
    </div>
    <div class="info">
      <div class="section-title2">{card.sectionTitle}</div>
      <div class="section-description2">{card.description}</div>
    </div>
  </div>
  <div class={card.tagsClass}>
    {#each card.tags as tag}
      <div class="button3">
        <div class="platform-name">{tag}</div>
      </div>
    {/each}
  </div>
</div>
