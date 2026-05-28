
<script>
  // Import all the news furniture components

  import Hero from "../lib/components/Article/Hero.svelte";

 
   let { data } = $props();
  const content = data.content;

  // Article metadata
  let headline = 'Portfolio';

  // Related stories
  
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

<Hero>
  
</Hero>
 
</div>
