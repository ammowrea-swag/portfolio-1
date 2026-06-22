<script>
  import { asset } from '$app/paths';

  let {
    src, // Required: Image source URL
    alt, // Required: Alt text for accessibility
    caption = '', // Optional: Caption text below image
    credit = '', // Optional: Photo credit
    size = 'full', // 'full', 'large', 'medium', 'small'
  } = $props();

  // Resolve local images (those starting with /) using asset()
  // but not external URLs (http://, https://, //, data:)
  const resolvedSrc = $derived(
    src.startsWith('/') && !src.startsWith('//') ? asset(src) : src
  );
</script>

  <div class="gallery-grid">

    <div class="gallery-item">
    <img src="/design/bernie meme.png">
        </div> 

        <div class="gallery-item">
    <img src="/design/Economics of Love.png">
        </div> 

        <div class="gallery-item">
    <img src="/design/final plant box.png">
        </div> 

</div> 

  <style lang="scss">
  @use '../../styles' as *;

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    padding: 0;
    justify-content: flex-start;

     @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }

     @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

     @include mobile {
      grid-template-columns: 1fr;
    }
}

    .gallery-item {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: var(--border-radius);
    }
  </style>