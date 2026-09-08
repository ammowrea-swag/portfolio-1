<div class="container page-shell">
  <header class="page-intro">
    <h1>Résumé</h1>
    <p>See and download my résumé below.</p>
  </header>

  <section class="resume-embed" aria-label="Embedded resume">
    <div class="embed-frame">
      <iframe
        loading="lazy"
        title="Ashley Mowreader resume"
        src="https://www.canva.com/design/DAHUJXNs7aI/HvxvM4CXoCSNo777T81P1A/view?embed"
        allowfullscreen="allowfullscreen"
        allow="fullscreen"
      >
      </iframe>
    </div>

    <p class="download-link">
      <a href="https://canva.link/8sazmpv8z86g2p1" target="_blank" rel="noopener">Download my resume here</a>.
    </p>
  </section>
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  .page-shell {
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
  }

  .page-intro {
    max-width: 42rem;
    margin: 0 auto var(--spacing-lg);
    text-align: center;
  }

  .resume-embed {
    width: min(100%, 56rem);
    margin: 0 auto;
  }

  .embed-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 8.5 / 11;
    overflow: hidden;
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-border);
    background: var(--color-white);
  }

  .embed-frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .download-link {
    margin: var(--spacing-md) 0 0;
    text-align: center;
  }
</style>