<script>
  import { base } from '$app/paths';
  import CardGrid from '$lib/components/Data/CardGrid.svelte';
  import Card from '$lib/components/Data/Card.svelte';
  import ShowcaseCard from '$lib/components/Data/ShowcaseCard.svelte';
  import Gallery from '$lib/components/Media/Gallery.svelte';

  let { data } = $props();
  const content = $derived(data.content);

  const showcaseProjects = [];

  const headline = 'Clips';
</script>

<svelte:head>
  <title>{headline} | Ashley Mowreader</title>
  <meta
    name="description"
    content="Selected journalism clips and projects by Ashley Mowreader."
  />
</svelte:head>

<div class="container wide page-shell">
  <header class="page-intro">
    <p class="eyebrow">Selected work</p>
    <h1>{headline}</h1>
    <p class="dek">
      A collection of reported stories, data projects, and visual journalism. Open any card to read more about the project.
    </p>
  </header>

  <CardGrid>
    {#each content.clips as clip (clip.slug)}
      <Card href={`${base}/clips/${clip.slug}`} image={clip.image} imageAlt={clip.imageAlt ?? clip.title}>
        <h3>{clip.title}</h3>
        <p>{clip.description}</p>
      </Card>
    {/each}

     {#each showcaseProjects as project (project.title)}
      <ShowcaseCard {...project} />
    {/each}
  </CardGrid>

  <Gallery>
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  .page-shell {
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
  }

  .page-intro {
    max-width: 42rem;
    margin-bottom: var(--spacing-lg);
  }


  h1 {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-6xl);
    line-height: var(--leading-tight);
  }

  .dek {
    margin: 0;
    max-width: 100%;
  }
</style>
