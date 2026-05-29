<script>
  import { base } from '$app/paths';
  import Image from '$lib/components/Media/Image.svelte';

  let { data } = $props();
  const { clip } = data;
</script>

<svelte:head>
  <title>{clip.title} | Ashley Mowreader</title>
  <meta name="description" content={clip.description} />
</svelte:head>

<div class="container article-shell">
  <nav class="crumbs" aria-label="Breadcrumb">
    <a href={`${base}/clips`}>Back to clips</a>
  </nav>

  <article class="clip-detail">
    <header class="clip-header">
      <h1>{clip.title}</h1>
      <p class="dek">{clip.description}</p>
    </header>

    <Image src={clip.image} alt={clip.imageAlt ?? clip.title} size="large" />

    {#if clip.skills?.length}
      <section class="section">
        <h2>Skills</h2>
        <ul class="skills">
          {#each clip.skills as skill (skill)}
            <li>{skill}</li>
          {/each}
        </ul>
      </section>
    {/if}

    <section class="section prose">
      <h2>About this project</h2>
      {#each clip.body.split(/\n\n+/) as paragraph, index (index)}
        <p>{paragraph}</p>
      {/each}
    </section>

    {#if clip.url}
      <p class="external-link">
        <a href={clip.url} target="_blank" rel="noreferrer">Read the original story</a>
      </p>
    {/if}
  </article>
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  .article-shell {
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
  }

  .crumbs {
    margin-bottom: var(--spacing-md);
  }

  .crumbs a {
       font-family: var(--mono);
    font-size: var(--font-size-sm);
    color: var(--color-baby-blue-dark);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    gap: var(--spacing-xxs);
     text-transform: uppercase;
  }

  .clip-detail {
    display: grid;
    gap: var(--spacing-lg);
    max-width: 56rem;
  }

  .clip-header {
    max-width: 44rem;
  }


  h1 {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-5xl);
    line-height: var(--leading-tight);
  }

  .dek {
    margin: 0;
    font-size: var(--font-size-lg);
    line-height: var(--leading-relaxed);
  }

  .section h2 {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-l);
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills li {
    padding: 0.35rem 0.75rem;
    border: var(--border-width-thin) solid var(--color-baby-blue);
    border-radius: var(--border-radius-sm);
    background: var(--color-dark-baby-blue);
    font-size: var(--font-size-sm);
  }

  .prose p {
    margin: 0 0 var(--spacing-md);
    line-height: var(--leading-relaxed);
    max-width: 50rem;
  }

  .external-link {
    margin: 0;
  }
</style>
