<script lang="ts">
  import { getStartedPlatforms, type HomeGetStartedPlatform } from './content';

  type PlatformName = HomeGetStartedPlatform['name'];

  let selectedPlatform: PlatformName = 'macOS';
  let selectedInstructions: HomeGetStartedPlatform = getStartedPlatforms[0];

  $: selectedInstructions =
    getStartedPlatforms.find((platform) => platform.name === selectedPlatform) ?? getStartedPlatforms[0];
</script>

<div class="get-started-section">
  <div class="section-container">
    <div class="title">
      <b class="logo-text">Get started in seconds</b>
    </div>
    <div class="steps-container">
      <div class="filterplatform" role="group" aria-label="Installation platform">
        {#each getStartedPlatforms as platform}
          <button
            type="button"
            class:selected={selectedPlatform === platform.name}
            class="chip"
            aria-pressed={selectedPlatform === platform.name}
            on:click={() => {
              selectedPlatform = platform.name;
            }}
          >
            <span class="platform-name">{platform.name}</span>
          </button>
        {/each}
      </div>
      <div class="instructions">
        {#each selectedInstructions.steps as step}
          <div class="step-container">
            <div class="platform-name">{step.title}</div>
            <div class="step-terminal">
              <div class="title-container">
                <div class="icon-container">
                  <img class="frame-icon" src="/files/ui/terminal.svg" alt="" />
                  <div class="platform-name">{step.terminal}</div>
                </div>
                <pre class="command-text"><code>{step.command}</code></pre>
              </div>
              <div class="buttonicon">
                <img class="icon" src="/files/ui/copy.svg" alt="" />
              </div>
            </div>
          </div>
        {/each}
        {#if selectedInstructions.description}
          <p class="platform-description">{selectedInstructions.description}</p>
        {/if}
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
    align-items: center;
  }

  .steps-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    font-size: 12px;
    color: #8e8e93;
    width: fit-content;
  }

  .filterplatform {
    align-self: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    border-radius: 200px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    gap: 4px;
    width: fit-content;
  }

  .chip {
    appearance: none;
    border: 0;
    background: transparent;
    font: inherit;
    cursor: pointer;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e8e93;
    border-radius: 200px;
    padding: 4px 8px;
  }

  .chip.selected {
    background-color: #fa243c;
    color: #fff;
  }

  .instructions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: fit-content;
    min-height: 176px;
  }

  .step-container {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .step-terminal {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.03);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    gap: 20px;
    color: #fa243c;
    width: fit-content;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    min-width: 0;
  }

  .icon-container {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: flex-start;
  }

  .frame-icon {
    width: 18px;
    position: relative;
    max-height: 100%;
  }

  .command-text {
    margin: 0;
    position: relative;
    letter-spacing: -0.32px;
    color: #8e8e93;
    font-family: 'SF Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    white-space: pre-wrap;
    word-break: break-word;
    text-align: left;
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

  .platform-description {
    margin: 0;
    color: #8e8e93;
    line-height: 1.4;
    text-align: center;
  }
</style>
