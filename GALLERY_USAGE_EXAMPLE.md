<!-- Example usage of the Gallery component in a page -->
<script>
  import Gallery from '$lib/components/Media/Gallery.svelte';
</script>

<section>
  <h2>My Infographics & Art</h2>
  
  <Gallery
    items={[
      {
        src: '/design/bernie meme.png',
        alt: 'Bernie Sanders political humor infographic',
        caption: 'Political Humor Series',
      },
      {
        src: '/design/Economics of Love.png',
        alt: 'Economics of Love infographic exploring relationship value',
        caption: 'How to Think About Love Like an Economist',
      },
      {
        src: '/design/final plant box.png',
        alt: 'Hand-illustrated plant species identification chart',
        caption: 'Plant Field Guide',
      },
      {
        src: '/design/another-piece.png',
        alt: 'Description of artwork',
        caption: 'Art Title',
        credit: 'Created by Ashley Mowreader',
      },
    ]}
  />
</section>

<style lang="scss">
  @use '$lib/styles' as *;

  section {
    width: 100%;
  }

  h2 {
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-lg);
  }
</style>
