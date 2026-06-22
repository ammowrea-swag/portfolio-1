
<script>
  import { base } from '$app/paths';
  import Hero from '$lib/components/Article/Hero.svelte';
  import CardGrid from '$lib/components/Data/CardGrid.svelte';
  import Card from '$lib/components/Data/Card.svelte';

   let { data } = $props();
  const content = data.content;

  // Article metadata
  let headline = 'Portfolio';
  
</script>

<!-- This sets the page title in the browser tab -->
<svelte:head>
  <title>{headline} | Ashley Mowreader </title>
  <meta
    name="description"
    content="Ashley Mowreader is a NYC-based data journalist, specializing in graphics, web design and news writing."
  />
</svelte:head>

<!-- Your page content goes here -->
<div class="container">
  <Hero />

  <div class="spacer" style="height: var(--spacing-xxl);"></div>
  <h1 style="text-align: center; font-family: var(--mono)"> Featured Works </h1>

  <div class="container wide">
    <CardGrid>
      {#each content.clips as clip (clip.title)}
        <Card
          href={`${base}/clips/${clip.slug}`}
          image={clip.image}
          imageAlt={clip.title}
        >
          <h3>{clip.title}</h3>
          <p>{clip.description}</p>
        </Card>
      {/each}
    </CardGrid>
  </div>

</div>
