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
    <span class="footer-name"><a href={logoHref} target="_blank">Ashley Mowreader</a></span>
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

  .footer-links:hover {
    color: var(--color-white);
  }

  .ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    unicode-bidi: isolate;
  }


</style>
