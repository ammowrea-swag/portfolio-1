<!--
@component
PodcastFeatures.svelte — A portfolio section for featured podcast appearances.

Displays a short intro blurb and a responsive grid of podcast episodes with
title, publisher, publish date, and optional external link.
-->
<script>
  let { heading = 'Podcast features', blurb = '', podcasts = [] } = $props();

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formatDate = (value) => {
    if (!value) return '';
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
    const parsed = isDateOnly ? new Date(`${value}T12:00:00`) : new Date(value);
    return Number.isNaN(parsed.getTime()) ? value : dateFormatter.format(parsed);
  };
</script>

<section class="podcast-features" aria-labelledby="podcast-features-title">
  <h2 id="podcast-features-title">{heading}</h2>

  {#if blurb}
    <p class="section-blurb">{blurb}</p>
  {/if}

  {#if podcasts?.length}
    <ul class="podcast-grid">
      {#each podcasts as podcast (`${podcast.title}-${podcast.publishDate ?? ''}`)}
        <li>
          <article class="podcast-card">
            <h3>{podcast.title}</h3>

            <p class="meta">
              {#if podcast.publisher}
                <span>{podcast.publisher}</span>
              {/if}

              {#if podcast.publisher && podcast.publishDate}
                <span aria-hidden="true">•</span>
              {/if}

              {#if podcast.publishDate}
                <time datetime={podcast.publishDate}>{formatDate(podcast.publishDate)}</time>
              {/if}
            </p>

            {#if podcast.blurb}
              <p class="description">{podcast.blurb}</p>
            {/if}

            {#if podcast.url}
              <p class="listen-link">
                <a href={podcast.url} target="_blank" rel="noreferrer">Listen to episode</a>
              </p>
            {/if}
          </article>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style lang="scss">
  @use '$lib/styles' as *;

  .podcast-features {
    margin-top: var(--spacing-xxl);
    margin-bottom: var(--spacing-xxl);
  }

  .podcast-features h2 {
    margin-bottom: var(--spacing-xs);
    color: var(--color-baby-blue-dark);
    font-size: var(--font-size-3xl);
    line-height: var(--leading-tight);
    font-weight: var(--font-weight-semibold);
  }

  .section-blurb {
    margin: 0 0 var(--spacing-lg);
    max-width: 42rem;
    color: var(--color-text-secondary, #555);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .podcast-grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: 1fr;

    @include tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .podcast-card {
    height: 100%;
    border: 1px solid var(--color-dark-baby-blue, #ddd);
    background: var(--color-white);
    border-radius: 4px;
    padding: var(--spacing-md);
  }

  .podcast-card h3 {
    margin: 0 0 var(--spacing-xs);
    font-size: 1.1rem;
    line-height: 1.3;
    color: var(--color-baby-blue-dark);
    font-weight: var(--font-weight-bold);
  }

  .meta {
    margin: 0 0 var(--spacing-sm);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--color-text-secondary, #555);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: var(--font-size-sm);
    letter-spacing: var(--letter-spacing-wide);
  }

  .description {
    margin: 0;
    color: var(--color-text-secondary, #555);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .listen-link {
    margin: var(--spacing-md) 0 0;
    font-weight: var(--font-weight-semibold);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

  .listen-link a {
    color: var(--color-baby-blue-dark);
    text-decoration: none;
  }

  .listen-link a:hover {
    text-decoration: underline;
  }
</style>