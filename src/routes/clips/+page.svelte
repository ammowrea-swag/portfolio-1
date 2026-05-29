<script>
  import { base } from '$app/paths';
  import CardGrid from '$lib/components/Data/CardGrid.svelte';
  import Card from '$lib/components/Data/Card.svelte';
  import ShowcaseCard from '$lib/components/Data/ShowcaseCard.svelte';

  let { data } = $props();
  const content = $derived(data.content);

  const showcaseProjects = [
    {
      title: 'Red Bull price map',
      description:
        'An interactive map and graphic package built as a design-and-code project.',
      media: '',
      mediaAlt: 'A map graphic with circles and color overlays',
      href: 'https://www.ammowrea-github.io/redbull-map/',
    },
    {
      title: 'Taxi scam crackdown',
      description:
        'A web-first project combining reporting, data analysis, and visual storytelling.',
      media: '',
      mediaAlt: 'A NYC taxi cab driving through the city',
      href: 'https://ammowrea-swag.github.io/infodesign/',
      tags: ['Web design', 'Reporting', 'Data analysis'],
      ctaLabel: 'Open project',
    },
  ];

  const headline = 'Clips';
</script>

<svelte:head>
  <title>{headline} | Ashley Mowreader</title>
  <meta
    name="description"
    content="Selected journalism clips and projects by Ashley Mowreader."
  />
</svelte:head>

<div class="container page-shell">
  <header class="page-intro">
    <p class="eyebrow">Selected work</p>
    <h1>{headline}</h1>
    <p>
      A collection of reported stories, data projects, and visual journalism.
      Open any card to read more about the project.
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

  p {
    margin: 0;
    max-width: 38rem;
  }
</style>
