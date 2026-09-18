<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import CardGrid from '$lib/components/Data/CardGrid.svelte';
  import Card from '$lib/components/Data/Card.svelte';
  import Gallery from '$lib/components/Media/Gallery.svelte';

  let { data } = $props();
  const content = $derived(data.content);

  const headline = 'Clips';

  let graphicSection;

  onMount(() => {
    if (!browser) return;
    // If `?section=` query param is present and targets graphic design, scroll there
    const params = new URLSearchParams(location.search);
    const section = (params.get('section') || params.get('s') || '').toLowerCase();
    const graphicKeys = ['graphic', 'graphics', 'graphic-design', 'design', 'data-graphics', 'data-graphics'];
    if (section && graphicKeys.includes(section)) {
      const el = document.getElementById('graphic-design-heading');
      if (el) {
        // Scroll after paint so layout is settled
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  });
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
    <h1>{headline}</h1>
    <div class="dek">
      A collection of reported stories, data projects, and visual journalism. Open any card to read more about the project.
    </div>
  </header>

  <CardGrid>
    {#each content.clips as clip (clip.slug)}
     <Card href={`${base}/clips/${clip.slug}`} image={clip.image} imageAlt={clip.imageAlt ?? clip.title} target={clip.pdf ? "_blank" : null} rel={clip.pdf ? "noopener" : null}>
  <h3>{clip.title}</h3>
  <p>{clip.description}</p>
</Card>
      
    {/each}
  </CardGrid>

  <section class="graphic-design-section" aria-labelledby="data-graphics">
    <header class="graphic-design-header">
      <h2 id="data-graphics">Data Graphics</h2>
      <p class="section-dek">
        Some examples of work I've done using Adobe Illustrator, Photoshop, ai2html, JavaScript, Datawrapper, Canva and other data visualization tools. Click on an image to see it full-sized. 
      </p>
    </header>
    <Gallery />
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
    margin-bottom: var(--spacing-lg);
  }

  .graphic-design-section {
    margin-top: var(--spacing-xl);
    padding: var(--spacing-lg);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-sm);
    background: var(--color-white);
    box-shadow: 0 1px 2px rgba(15, 25, 35, 0.04);

    .graphic-design-header {
      margin-bottom: var(--spacing-md);
    }
  }

  .graphic-design-section :global(.gallery-grid) {
    margin-top: 0;
  }

  .graphic-design-section h2 {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-2xl);
    line-height: var(--leading-tight);
  }

  .section-dek {
    margin: 0;
    font-size: var(--font-size-md);
    font-family: var(--font-sans);
    color: var(--color-text-secondary, #555);
  }

  h1 {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-6xl);
    line-height: var(--leading-tight);
  }

  h2 {
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-3xl);
    line-height: var(--leading-tight);
    color: var(--color-baby-blue-dark);
    font-weight: 600;
  }
</style>
