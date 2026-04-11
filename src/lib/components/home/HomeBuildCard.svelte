<script lang="ts">
  import type { HomeBuildCard as HomeBuildCardData } from './content';

  export let card: HomeBuildCardData;
</script>

<div class="cardpossibilities">
  <div class="container9">
    <div class={card.iconWrapperClass}>
      <img class={card.imageClass} src={card.src} alt="" />
    </div>
    <b class="feature-title">{card.title}</b>
    <div class="description">{card.description}</div>
  </div>
</div>
