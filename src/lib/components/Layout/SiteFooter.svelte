<!--
@component
SiteFooter.svelte — Site Footer Component

USAGE EXAMPLE:
<SiteFooter />
-->
<script>
  let {
    logoHref = 'https://www.amowreader.com/',
    orgName = 'Ashley Mowreader',
  } = $props();

  const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="footer-main">
    <span class="footer-name">Ashley Mowreader</span>
  <ul class="footer-links">
   <li>
   <a href="http://twitter.com/amowreader" target="_blank">Twitter</a>
   </li>
    <li>
   <a href="https://www.linkedin.com/in/ashley-mowreader" target="_blank">LinkedIn</a>
    </li>
      <li>
      <a href="https://github.com/amowreader" target="_blank">GitHub</a>
   </li>
   </ul>
   <span class="footer-copy">© 2026</span>
  </div>

  
</footer>

<style lang="scss">
  @use '../../styles' as *;

  .site-footer {
    margin-top: var(--spacing-xxl);
  }

  .footer-name {
    font-family: var(--font-serif);
    font-size: 1.3rem;
    font-weight: 700;
    font-style: italic;
    color: var(--color-white);
}

  .footer-main {
    background: var(--color-ink);
    color: var(--color-paper);
    border-top: 3px solid var(--color-baby-blue);
    padding: 2.5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  .footer-container {
    max-width: var(--max-width-wide);
    margin: 0 auto;
  }

  /* Brand column */
  .footer-brand {
    text-align: left;
  }

  .footer-logo-link {
    display: inline-block;
    text-decoration: none;
    color: var(--color-white);
  }

  .footer-logo-link:hover .cuny-logo {
    opacity: var(--opacity-hover);
  }

  .footer-tagline {
    color: var(--color-baby-blue-dark);
    font-family: var(--font-serif);
    font-size: var(--font-size-sm);
    line-height: var(--leading-normal);
    margin-top: var(--spacing-sm);
    margin-bottom: 0;
  }

  /* Column headings */
  .footer-heading {
    color: var(--color-white);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    margin-bottom: var(--spacing-sm);
    padding-bottom: var(--spacing-xs);
    border-bottom: var(--border-width-thin) solid var(--color-baby-blue-dark);
  }

  /* Link lists */
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .footer-links li {
    margin-bottom: 0;
    font-family: var(--mono);
    font-size: var(--font-size-sm);
    text-transform: uppercase; 
    text-decoration: none;

  }

  .footer-link {
    color: var(--color-baby-blue);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--letter-spacing-wider);
    transition: var(--color-ink);
  }

  .footer-link:hover {
    color: var(--color-white);
  }

  .ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    unicode-bidi: isolate;
  }

  /* Tablet and up: multi-column layout */
  @include tablet {

    .footer-brand {
      text-align: left;
    }

    .cuny-logo {
      margin: 0;
    }
  }
</style>
