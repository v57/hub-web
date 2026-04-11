<div class="get-started-section">
  <div class="section-container">
    <div class="title">
      <b class="logo-text">Get started in seconds</b>
    </div>
    <div class="steps-container">
      <div class="filterplatform">
        <div class="chip">
          <div class="button2">
            <div class="platform-name">macOS</div>
          </div>
        </div>
        <div class="title">
          <div class="tags">
            <div class="platform-name">Docker</div>
          </div>
        </div>
        <div class="title">
          <div class="tags">
            <div class="platform-name">iOS/tvOs</div>
          </div>
        </div>
        <div class="title">
          <div class="tags">
            <div class="platform-name">Windows</div>
          </div>
        </div>
      </div>
      <div class="step-container">
        <div class="platform-name">Install Bun</div>
        <div class="step-terminal">
          <div class="title-container">
            <div class="icon-container">
              <img class="frame-icon" src="/files/ui/terminal.svg" alt="" />
              <div class="platform-name">Terminal</div>
            </div>
            <div class="command-text">
              <span>curl -fsSL </span>
              <span class="https">https</span>
              <span>://bun.sh/install | bash</span>
            </div>
          </div>
          <div class="buttonicon">
            <img class="icon" src="/files/ui/copy.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="step-container">
        <div class="platform-name">Run</div>
        <div class="step-terminal2">
          <div class="title-container">
            <div class="icon-container">
              <img class="frame-icon" src="/files/ui/terminal.svg" alt="" />
              <div class="platform-name">Terminal</div>
            </div>
            <div class="command-text">bunx v57/hub</div>
          </div>
          <div class="buttonicon">
            <img class="icon" src="/files/ui/copy.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .get-started-section {
    align-self: stretch;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    z-index: 1;
  }

  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .title {
    display: flex;
    align-items: flex-start;
  }

  .steps-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
    font-size: 12px;
    color: #8e8e93;
  }

  .filterplatform {
    align-self: stretch;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    border-radius: 200px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    gap: 20px;
  }

  .chip {
    display: flex;
    align-items: flex-start;
    color: #fff;
  }

  .button2 {
    border-radius: 200px;
    background-color: #fa243c;
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }

  .step-container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .step-terminal,
  .step-terminal2 {
    align-self: stretch;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 20px;
    color: #fa243c;
  }

  .step-terminal2 {
    justify-content: space-between;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .frame-icon {
    width: 18px;
    position: relative;
    max-height: 100%;
  }

  .command-text {
    position: relative;
    letter-spacing: -0.32px;
    color: #8e8e93;
    font-family: 'SF Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }

  .https {
    font-weight: 600;
  }

  .buttonicon {
    height: 26px;
    width: 26px;
    box-shadow: 0 2px 12.2px rgba(0, 0, 0, 0.1);
    border-radius: 200px;
    background-color: #fff;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    align-self: stretch;
    height: 14px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
</style>
