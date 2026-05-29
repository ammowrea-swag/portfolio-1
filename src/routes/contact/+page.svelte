<script>
  const links = [
    {
      label: 'Twitter / X',
      href: 'http://twitter.com/amowreader',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ashley-mowreader',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/amowreader',
    },

     {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/amowreader.com',
    },
  ];
</script>

<svelte:head>
  <title>Contact | Ashley Mowreader</title>
  
</svelte:head>

<div class="container contact-page">
  <header class="page-intro">
    <p class="eyebrow">Get in touch</p>
    <h1>Contact</h1>
    <p> Let's connect! Follow me on any of the below social platforms to keep up with my work or to discuss potential opportunities.</p>
    
  </header>

  <div class="button-grid">
    {#each links as link (link.label)}
      <a class="contact-button" href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  .contact-page {
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

  .button-grid {
    display: grid;
    gap: var(--spacing-sm);

    @include tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .contact-button {
      background-color: var(--color-ink);
    color: var(--color-white);
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--color-baby-blue-dark);
    }

    &:focus-visible {
      outline: 2px solid var(--color-baby-blue-dark);
      outline-offset: 2px;
    }

}
  
</style>
