<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { getStartedPlatforms, type HomeGetStartedPlatform } from './content';

  type PlatformName = HomeGetStartedPlatform['name'];

  let selectedPlatform: PlatformName = 'macOS';
  let selectedInstructions: HomeGetStartedPlatform = getStartedPlatforms[0];
  let pickerElement: HTMLDivElement | null = null;
  let pickerButtons: HTMLButtonElement[] = [];
  let capsuleLeft = 0;
  let capsuleWidth = 0;
  let copiedStepId: string | null = null;
  let copyResetTimer: ReturnType<typeof setTimeout> | undefined;

  $: selectedInstructions =
    getStartedPlatforms.find((platform) => platform.name === selectedPlatform) ?? getStartedPlatforms[0];
  $: if (pickerButtons.length > 0) {
    selectedPlatform;
    updateCapsule();
  }

  function updateCapsule() {
    const index = getStartedPlatforms.findIndex((platform) => platform.name === selectedPlatform);
    const button = pickerButtons[index];

    if (!button) {
      return;
    }

    capsuleLeft = button.offsetLeft;
    capsuleWidth = button.offsetWidth;
  }

  async function copyCommand(command: string, stepId: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = command;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      copiedStepId = stepId;
      if (copyResetTimer) {
        clearTimeout(copyResetTimer);
      }
      copyResetTimer = setTimeout(() => {
        if (copiedStepId === stepId) {
          copiedStepId = null;
        }
      }, 1200);
    } catch {
      // Keep the UI responsive even if clipboard access is blocked.
    }
  }

  onMount(() => {
    if (!pickerElement) {
      return;
    }

    pickerButtons = Array.from(pickerElement.querySelectorAll('button'));
    updateCapsule();

    const resizeObserver = new ResizeObserver(() => {
      updateCapsule();
    });

    resizeObserver.observe(pickerElement);

    return () => {
      resizeObserver.disconnect();
    };
  });

  onDestroy(() => {
    if (copyResetTimer) {
      clearTimeout(copyResetTimer);
    }
  });
</script>

<div class="get-started-section">
  <div class="section-container">
    <div class="title">
      <b class="logo-text">Get started in seconds</b>
    </div>
    <div class="steps-container">
      <div class="filterplatform" bind:this={pickerElement} role="group" aria-label="Installation platform">
        <span
          class="picker-capsule"
          aria-hidden="true"
          style:left={`${capsuleLeft}px`}
          style:width={`${capsuleWidth}px`}
        ></span>
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
        {#key selectedPlatform}
          <div class="instruction-stack" transition:fly={{ duration: 180, y: 10, opacity: 0 }}>
            {#each selectedInstructions.steps as step}
              {@const stepId = `${selectedPlatform}:${step.title}`}
              <div class="step-container">
                <div class="platform-name">{step.title}</div>
                <div class="step-terminal">
                  <div class="title-container">
                    <div class="icon-container">
                      <img class="frame-icon" src="/files/ui/terminal.svg" alt="" />
                      <div class:copied={copiedStepId === stepId} class="platform-name copied-label" aria-live="polite">
                        {copiedStepId === stepId ? 'Copied' : step.terminal}
                      </div>
                    </div>
                    <pre class="command-text"><code>{step.command}</code></pre>
                  </div>
                  <button
                    type="button"
                    class:copied={copiedStepId === stepId}
                    class="buttonicon"
                    aria-label={`Copy ${step.title} command`}
                    title={copiedStepId === stepId ? 'Copied' : 'Copy command'}
                    on:click={() => {
                      void copyCommand(step.command, stepId);
                    }}
                  >
                    <img class="icon" src="/files/ui/copy.svg" alt="" />
                  </button>
                </div>
              </div>
            {/each}
            {#if selectedInstructions.description}
              <p class="platform-description">{selectedInstructions.description}</p>
            {/if}
          </div>
        {/key}
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
    position: relative;
    isolation: isolate;
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

  .picker-capsule {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    z-index: 0;
    border-radius: 200px;
    background-color: #fa243c;
    transition:
      left 220ms cubic-bezier(0.22, 1, 0.36, 1),
      width 220ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: left, width;
    pointer-events: none;
  }

  .chip {
    appearance: none;
    border: 0;
    background: transparent;
    font: inherit;
    cursor: pointer;
    position: relative;
    z-index: 1;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e8e93;
    border-radius: 200px;
    padding: 4px 8px;
  }

  .chip.selected {
    color: #fff;
  }

  .instructions {
    display: grid;
    justify-items: center;
    align-items: start;
    width: fit-content;
    min-height: 176px;
  }

  .instruction-stack {
    grid-area: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
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
    appearance: none;
    border: 0;
    padding: 0;
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
    transition:
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 180ms ease,
      box-shadow 180ms ease;
    will-change: transform, background-color, box-shadow;
    cursor: pointer;
  }

  .buttonicon.copied {
    background-color: #fa243c;
    transform: scale(1.08);
    box-shadow: 0 6px 18px rgba(250, 36, 60, 0.28);
    animation: copy-pop 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .icon {
    align-self: stretch;
    height: 14px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    transition: filter 180ms ease, transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .buttonicon.copied .icon {
    filter: brightness(0) invert(1);
    transform: scale(1.05);
  }

  .copied-label {
    display: inline-block;
    transform-origin: center;
  }

  .copied-label.copied {
    animation: copied-bounce 440ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .platform-description {
    margin: 0;
    color: #8e8e93;
    line-height: 1.4;
    text-align: center;
  }

  @keyframes copy-pop {
    0% {
      transform: scale(0.92);
    }
    60% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1.08);
    }
  }

  @keyframes copied-bounce {
    0% {
      transform: scale(0.94);
    }
    42% {
      transform: scale(1.1);
    }
    72% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
