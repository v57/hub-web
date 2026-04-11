<script lang="ts">
  import type { HomeCommunityLink as HomeCommunityLinkData } from './content';

  export let link: HomeCommunityLinkData;
</script>

<a class={link.outerClass} href="https://github.com/v57" target="_blank" rel="noreferrer">
  <div class="buttoncontacts">
    <img class={link.imageOneClass} src={link.imageOneSrc} alt="" />
    <img class={link.imageTwoClass} src={link.imageTwoSrc} alt="" />
  </div>
  <div class="title-container">
    <b class="feature-title">{link.title}</b>
    <div class="community-link-description">{link.description}</div>
  </div>
</a>
