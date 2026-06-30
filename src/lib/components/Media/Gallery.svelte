<script>
  import { browser } from '$app/environment';
  import { asset } from '$app/paths';
  import { onDestroy } from 'svelte';

  const defaultItems = [

    {
      src: '/design/S.A.F.E. art.png',
   
      
    },
    {
      src: '/design/Mowreader_Ashley_Gif pack 3.gif',
   
      
    },
           {
      src: '/design/dei-ban.png',
   
      
    },
    {
      src: '/design/jobs-report.png',
   
      
    },
    {
      src: '/design/final plant box.png',
      alt: '',
     
    },
    {
      src: '/design/financial vocab.png',
      alt: '',

    },
    {
      src: '/design/Mowreader_Ashley_Gif pack 6.gif',
   
      
    },
    {
      src: '/design/Westchester CC.png',
   
      
    },
       {
      src: '/design/Cornell University Food Insecurity.png',
   
      
    },

       {
      src: '/design/COVID-19 and IP timeline.png',
   
      
    },
       {
      src: '/design/rikers.png',
   
      
    },
  ];

  let {
    items = defaultItems, // Array of { src, alt, caption?, credit? }
  } = $props();

  let expandedIndex = $state(-1);

  // Resolve local images (those starting with /) using asset()
  const resolveImage = (src) => {
    return src.startsWith('/') && !src.startsWith('//') ? asset(src) : src;
  };

  const openModal = (index) => {
    expandedIndex = index;
    if (browser) {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    expandedIndex = -1;
    if (browser) {
      document.body.style.overflow = '';
    }
  };

  onDestroy(() => {
    if (browser) {
      document.body.style.overflow = '';
    }
  });

  const handleKeydown = (event) => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight' && expandedIndex < items.length - 1) {
      expandedIndex += 1;
    }
    if (event.key === 'ArrowLeft' && expandedIndex > 0) {
      expandedIndex -= 1;
    }
  };
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="gallery-grid">
  {#each items as item, index (index)}
    <button
      class="gallery-item"
      type="button"
      onclick={() => openModal(index)}
      aria-label="View {item.alt} in fullscreen"
    >
      <img src={resolveImage(item.src)} alt={item.alt} loading="lazy" />
    </button>
  {/each}
</div>

{#if expandedIndex >= 0}
  <div
    class="modal-overlay"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={(event) => {
      if (event.target === event.currentTarget) closeModal();
    }}
    onkeydown={handleKeydown}
  >
    <button
      class="modal-close"
      type="button"
      onclick={closeModal}
      aria-label="Close fullscreen view"
    >
      ✕
    </button>

    <div class="modal-content">
      <figure>
        <img
          src={resolveImage(items[expandedIndex].src)}
          alt={items[expandedIndex].alt}
        />
      </figure>
    </div>

    <div class="modal-nav">
      {#if expandedIndex > 0}
        <button
          type="button"
          class="nav-btn prev"
          onclick={() => (expandedIndex -= 1)}
          aria-label="Previous image"
        >
          ←
        </button>
      {/if}
      {#if expandedIndex < items.length - 1}
        <button
          type="button"
          class="nav-btn next"
          onclick={() => (expandedIndex += 1)}
          aria-label="Next image"
        >
          →
        </button>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  @use '$lib/styles' as *;

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    width: 100%;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .gallery-item {
    all: unset;
    cursor: pointer;
    display: block;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: var(--border-radius);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: var(--spacing-md);
    backdrop-filter: blur(4px);
  }

  .modal-content {
    max-width: 90vw;
    max-height: 90vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      max-width: 100%;
      max-height: 70vh;
      object-fit: contain;
      border-radius: var(--border-radius);
    }

    figcaption {
      margin-top: var(--spacing-md);
      text-align: center;
      color: var(--color-text-light);
      font-size: var(--font-size-sm);

      p {
        margin: var(--spacing-sm) 0;

        &.credit {
          font-style: italic;
          opacity: 0.8;
        }
      }
    }
  }

  .modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 1001;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 2px;
    }
  }

  .modal-nav {
    position: fixed;
    bottom: var(--spacing-lg);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: var(--spacing-md);
    z-index: 1001;
  }

  .nav-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 2px;
    }
  }
</style>