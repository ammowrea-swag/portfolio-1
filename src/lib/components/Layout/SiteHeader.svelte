<!--
@component
SiteHeader.svelte — NYCity News Service Style Header
-->
<script>
  let {
    navLinks = [
      {
        label: 'Résumé',
        href: '/resume',
      },
      {
        label: 'Graphics',
        href: '/graphics',
      },
       {
        label: 'Data',
        href: '/data',
      },
      {
        label: 'Reporting',
        href: '/reporting',
      },
        {
          label: 'Contact',
          href: '/contact'
        }
    ],
  } = $props();
</script>

<header class="site-header">
  <!-- Compact masthead with logo left and nav right -->
  <div class="masthead-wrapper">
      <a class="nav-logo" id="nav-logo" href="#home">Ashley Mowreader</a>
<div class="nav-links"> 
      <!-- Navigation inline with logo -->
      {#if navLinks.length > 0}
        <nav class="main-nav" aria-label="Main navigation">
          <ul class="nav-list">
            {#each navLinks as link (link.href)}
              <li>
                <a href={link.href} class="nav-link">{link.label}</a>
              </li>
            {/each}
          </ul>
        </nav>
      {/if}
    </div>
    </div>
</header>

<style lang="scss">
   @use '$lib/styles' as *;

  .site-header {
    border-bottom: 0px solid var(--color-baby-blue);
    box-shadow: 0 2px 4px var(--color-baby-blue-dark);
  }

  /* Compact Masthead - Mobile: centered */
  .masthead-wrapper {
    position: sticky;
    top:0;
    z-index:auto;
    background-color: var(--color-ink);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: var(--spacing-xs) var(--spacing-sm);
  
  }

  /* Navigation - hidden on mobile */
  .main-nav {
    display: none;
  }

  .nav-logo {
    font-family: var(--mono);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-baby-blue);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
      text-decoration: none;
  }

  .nav-links {
    display: flex;
    align-items: stretch;
    gap: 0;
    list-style: none;
  }

  .nav-list {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    gap: var(--spacing-md);
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    white-space: nowrap;
    transition: var(--transition-opacity);
  }

  .nav-link:hover {
    color: var(--color-white);
    opacity: var(--opacity-hover);
    text-decoration: none;
  }

  /* Desktop styles - show nav, space-between layout, larger logo */
  @include desktop {
    .masthead {
      justify-content: space-between;
      padding: var(--font-size-xs) var(--spacing-md);
    }

    .main-nav {
      display: flex;
      align-items: center;
    }
  }
</style>
