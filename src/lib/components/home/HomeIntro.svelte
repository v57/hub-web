<div class="what-is-hub-section">
  <div class="title5">
    <div class="logo-hub">
      <div class="logo-icon">
        <img class="icon3" src="/files/icon/large.png" alt="" />
      </div>
      <span class="logo-text">Hub</span>
    </div>
    <div class="title6">
      <span class="logo-text">
        <span>Publish, connect, stream. All in one </span>
        <span class="hub">Hub</span>
        <span>.</span>
      </span>
    </div>
    <div class="section-description">
      <span
        >Hub is a local-first gateway for services. Publish APIs once, expose them through one endpoint. Use one
        protocol for request and stream. Lite is for isolated local use. Pro adds keys, groups, permissions, proxy, and
        merge.</span
      >
      <span class="span"> </span>
      <span class="less-glue-code">Less glue code, fewer “which port is this?” moments.</span>
    </div>
  </div>
</div>

<style>
  .what-is-hub-section {
    align-self: stretch;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
    z-index: 2;
    font-size: 16px;
  }

  .title5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .logo-hub {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    text-align: left;
  }

  .logo-icon {
    width: 64px;
    height: 64px;
    position: relative;
  }

  .icon3 {
    position: absolute;
    inset: 0;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }

  .title6 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 20px;
  }

  .hub {
    color: var(--color-accent);
  }

  .logo-text {
    font-weight: 500;
  }

  .section-description {
    width: 100%;
    max-width: 711px;
    position: relative;
    font-size: 14px;
    letter-spacing: -0.02em;
    display: block;
    color: var(--color-text-muted);
  }

  .span {
    color: var(--color-text);
  }

  .less-glue-code {
    color: var(--color-text-subtle);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .what-is-hub-section {
      padding: 120px 80px;
    }
  }

  @media (max-width: 767px) {
    .what-is-hub-section {
      padding: 48px 16px;
    }
  }
</style>
