<script lang="ts">
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { getToolbarConfig } from '$lib/components/toolbar';

  const toolbar = getToolbarConfig('privacy');
</script>

<svelte:head>
  <title>Privacy Policy | Hub</title>
  <meta
    name="description"
    content="Privacy Policy for Hub, including local data, network connections, third-party servers, retention, and contact details."
  />
</svelte:head>

<div class="privacy">
  <main class="privacy-section" aria-labelledby="privacy-title">
    <article class="privacy-document">
      <header class="privacy-header">
        <h1 id="privacy-title">Privacy Policy</h1>
        <p class="effective-date">Effective date: 8 June 2026</p>
      </header>

      <p>Hub is provided by Dmitry Kozlov.</p>

      <p>
        Hub is designed to work without collecting personal data from users. We do not operate user
        accounts for this app, we do not use analytics, we do not use advertising SDKs, and we do
        not collect, store, sell, or share personal data through our own servers.
      </p>

      <section aria-labelledby="network-connections">
        <h2 id="network-connections">Network Connections</h2>
        <p>
          Hub may allow you to connect to servers, devices, services, IP addresses, hostnames, or
          URLs that you choose. For example, you may enter an IP address or server address manually,
          or connect to a server on your local network.
        </p>

        <p>
          When you connect to a server, Hub may send the information necessary to perform the action
          you requested to that server. This may include content you choose to process, files you
          choose to send, commands you initiate, connection details, or other data required by the
          selected server.
        </p>

        <p>
          These connections are made directly from your device to the server you choose. We do not
          receive, proxy, store, or monitor this traffic.
        </p>
      </section>

      <section aria-labelledby="third-party-servers">
        <h2 id="third-party-servers">Third-Party and User-Selected Servers</h2>
        <p>
          Servers that you choose to connect to are not operated or controlled by us unless we
          explicitly state otherwise. Any data sent to those servers is handled according to the
          privacy practices of the server owner or operator. You should only connect to servers you
          trust.
        </p>
      </section>

      <section aria-labelledby="local-data">
        <h2 id="local-data">Local Data</h2>
        <p>
          Hub may store settings locally on your device, such as server addresses, preferences, or
          recent connection information, to make the app function properly. This data remains on your
          device unless you choose to send it to a server.
        </p>
      </section>

      <section aria-labelledby="retention-deletion">
        <h2 id="retention-deletion">Data Retention and Deletion</h2>
        <p>
          Because we do not collect personal data through our own servers, we do not retain user
          personal data. You can delete locally stored app data by removing saved settings inside the
          app, if available, or by deleting the app from your device.
        </p>
      </section>

      <section aria-labelledby="childrens-privacy">
        <h2 id="childrens-privacy">Children’s Privacy</h2>
        <p>We do not knowingly collect personal data from children.</p>
      </section>

      <section aria-labelledby="open-source">
        <h2 id="open-source">Open Source</h2>
        <p>
          Hub is open source. Its source code may be publicly available so users can inspect how the
          app handles data.
        </p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make changes, we will update
          the effective date above.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p><a class="contact-link" href="mailto:v57s@icloud.com">v57s@icloud.com</a></p>
      </section>
    </article>
  </main>

  <Toolbar {...toolbar} />
</div>

<style>
  .privacy {
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: var(--color-page);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    isolation: isolate;
  }

  .privacy-section {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: clamp(104px, 10vw, 128px) clamp(20px, 6vw, 80px) clamp(72px, 8vw, 112px);
  }

  .privacy-document {
    width: min(100%, 820px);
    text-align: left;
    font-size: 16px;
    line-height: 1.7;
  }

  .privacy-header {
    margin-bottom: 32px;
  }

  h1,
  h2,
  p {
    margin: 0;
  }

  h1 {
    color: var(--color-text);
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.05;
    font-weight: 700;
  }

  .effective-date {
    margin-top: 12px;
    color: var(--color-text-muted);
    font-size: 15px;
    line-height: 1.5;
  }

  p + p,
  section {
    margin-top: 24px;
  }

  h2 {
    color: var(--color-text);
    font-size: clamp(20px, 2.4vw, 24px);
    line-height: 1.25;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  h2 + p {
    margin-top: 10px;
  }

  p {
    color: var(--color-text-muted);
    letter-spacing: 0;
  }

  .contact-link {
    color: var(--color-accent);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.16em;
  }

  @media (max-width: 680px) {
    .privacy-section {
      padding: 92px 20px 64px;
    }

    .privacy-document {
      font-size: 15px;
      line-height: 1.65;
    }

    .privacy-header {
      margin-bottom: 28px;
    }

    p + p,
    section {
      margin-top: 20px;
    }
  }
</style>
