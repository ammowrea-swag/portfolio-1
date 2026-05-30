<!--
@component
ShowcaseCard.svelte — A flexible card for graphics, GIFs, and web projects.
-->
<script>
  import Image from '$lib/components/Media/Image.svelte';

  let {
    href = '',
    title = '',
    description = '',
    media = '',
    mediaAlt = '',
    kind = '',
  } = $props();
</script>

{#snippet content()}
  {#if media}
    <div class="showcase-media">
      <Image src={media} alt={mediaAlt || title} size="full" />
    </div>
  {/if}

  <div class="showcase-body">
    {#if kind}
      <p class="kind">{kind}</p>
    {/if}
    <h3>{title}</h3>
    <p class="description">{description}</p>
  </div>
{/snippet}

{#if href}
  <a class="showcase-card is-link" {href} target="_blank" rel="noreferrer">
    {@render content()}
  </a>
{:else}
  <article class="showcase-card">
    {@render content()}
  </article>
{/if}

<style lang="scss">
  @use '$lib/styles' as *;

  .showcase-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border: var(--border-width-thin) solid var(--color-border);
    border-radius: var(--border-radius-sm);
    background: var(--color-white);
    color: inherit;
    text-decoration: none;
    box-shadow: 0 1px 2px rgba(15, 25, 35, 0.04);
  }

  .is-link {
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      border-color: var(--color-baby-blue-dark);
      box-shadow: 0 12px 30px rgba(15, 25, 35, 0.12);
    }

    &:focus-visible {
      outline: 2px solid var(--color-baby-blue-dark);
      outline-offset: 2px;
    }
  }

  .showcase-media :global(.image-figure) {
    margin: 0;
  }

  .showcase-media :global(.image) {
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: var(--color-paper-dark);
  }

  .showcase-body {
     padding: var(--spacing-md, 1rem);
    flex: 1;

    :global(h3) {
      font-size: 1.1rem;
      margin: 0 0 0.5rem;
      line-height: 1.3;
      color: var(--color-baby-blue-dark);
      font-weight: var(--font-weight-bold);
    }

    :global(p) {
      font-size: 0.9rem;
      margin: 0;
      line-height: 1.5;
      color: var(--color-text-secondary, #555);
    }
  }

  .kind {
    margin: 0;
    color: var(--color-baby-blue-dark);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
  }

  .description {
    margin: 0;
    color: var(--color-ink-light);
    line-height: var(--leading-relaxed);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    list-style: none;
    padding: 0;
    margin: var(--spacing-xs) 0 0;
  }

  .tags li {
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background: var(--color-paper-dark);
    font-size: var(--font-size-xs);
    color: var(--color-ink-mid);
  }

  .showcase-footer {
    margin-top: auto;
    padding: var(--spacing-sm) var(--spacing-md);
    border-top: var(--border-width-thin) solid var(--color-border);
    background: linear-gradient(
      90deg,
      var(--color-paper),
      var(--color-white)
    );
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
  }
</style>
