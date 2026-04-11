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

<style>
  .link,
  .link2,
  .link3,
  .link4 {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    grid-column: 1;
    grid-row: 1;
  }

  .link2 {
    grid-column: 2;
  }

  .link3 {
    grid-row: 2;
  }

  .link4 {
    grid-column: 2;
    grid-row: 2;
  }

  .buttoncontacts {
    height: 60px;
    width: 60px;
    position: relative;
    box-shadow: 0 2px 12.2px rgba(0, 0, 0, 0.1);
  }

  .vector-icon6,
  .vector-icon7,
  .group-icon6,
  .icon4,
  .vector-icon11 {
    position: absolute;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }

  .vector-icon6 {
    inset: 0;
  }

  .vector-icon7 {
    height: 79.17%;
    width: 81.33%;
    top: 10.45%;
    right: 9.29%;
    bottom: 10.38%;
    left: 9.38%;
  }

  .group-icon6 {
    height: 69.5%;
    width: 79.67%;
    top: 13.65%;
    right: 10.18%;
    bottom: 16.85%;
    left: 10.16%;
  }

  .icon4 {
    height: 48.17%;
    width: 63.5%;
    top: 25.93%;
    right: 18.26%;
    bottom: 25.91%;
    left: 18.24%;
  }

  .vector-icon11 {
    height: 47.67%;
    width: 58.83%;
    top: 26.14%;
    right: 20.54%;
    bottom: 26.19%;
    left: 20.63%;
  }

  .community-link-description {
    position: relative;
    font-size: 12px;
    letter-spacing: -0.32px;
    font-weight: 600;
    color: #8e8e93;
  }
</style>
