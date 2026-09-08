<!--
@component

A cool way to top the article with a big, bold headline, kicker and dek
-->
<script>
  import { goto } from '$app/navigation';
  import { asset, base } from '$app/paths';

let {
    site = {
      role: 'Data Nerd & Journalist',
      name: 'Ashley Mowreader',
      bio: 'Experienced reporter, designer and coder specializing in data-driven journalism and news graphics. Fond of plants, dogs, the PNW and Red Bull.',
      location: 'New York, NY',
      availability: 'Available for freelance',
    },
    heroImage = '/mowreader-2.jpg',
    tickerItems = ['Data Reporting', 'Data Visualization', 'Graphic Design', ''],
    cards = [],
    navLinks = [
      {
        label: 'Résumé',
        href: `${base}/resume`,
      },
      {
        label: 'Clips',
        href: `${base}/clips`,
      },
      {
        label: 'Contact',
        href: `${base}/contact`,
      },
    ]
    } = $props();

  const resolvedHeroImage = $derived(
    heroImage && heroImage.startsWith('/') && !heroImage.startsWith('//')
      ? asset(heroImage)
      : heroImage
  );

  const heroImageSrcSet = `${asset('/mowreader-2-480.jpg')} 480w, ${asset('/mowreader-2-800.jpg')} 800w, ${asset('/mowreader-2-1200.jpg')} 1200w`;

  function onViewWork() {
    goto(`${base}/clips`);
  }

</script> 

 <div class="hero-left">
    

    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-name">
          {site.name.split(' ')[0]}<br />
          <em>{site.name.split(' ').slice(1).join(' ')}</em>
        </h1>
        <p class="hero-eyebrow">{site.role}</p>
        <p class="hero-bio">{site.bio}</p>
      </div>

      {#if heroImage}
        <div class="hero-photo-box">
          <picture>
            <source type="image/jpeg" srcset={heroImageSrcSet} sizes="(max-width: 768px) 44vw, 220px" />
            <img
              src={resolvedHeroImage}
              srcset={heroImageSrcSet}
              sizes="(max-width: 768px) 44vw, 220px"
              alt={site.name}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </picture>
        </div>
      {/if}
    </div>

    <div class="hero-cta-group">
      <button type="button" class="btn-primary" onclick={onViewWork}>
        View my work
      </button>
    </div>
  </div>

  <div class="hero-meta">
    <p class="hero-footer-note">{site.location}</p>

  </div>

<div class="ticker-strip">
  <div class="ticker-inner">
    {#each tickerItems as item}
      <span>{item}</span>
      <span class="ticker-dot">.</span>
    {/each}
  </div>
</div>

  <div class="home-cards-grid">
    {#each cards.slice(0, 4) as card}
      <article class="home-card">
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </article>
    {/each}
  </div>

<style lang="scss">
@use '$lib/styles' as *;

.hero-name {
    font-family: var(--font-serif);
    font-size: clamp(3.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
}

.hero-name em {
    font-style: italic;
    color: var(--color-baby-blue-dark);
}

.hero-content {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.hero-text {
    flex: 1;
}

.hero-photo-box {
  flex: 0 0 clamp(10rem, 20vw, 13.75rem);
  width: clamp(10rem, 20vw, 13.75rem);
  aspect-ratio: 3 / 4;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--color-paper-dark);
}

.hero-photo-box picture,
.hero-photo-box img {
  display: block;
  width: 100%;
  height: 100%;
}

.hero-photo-box img {
    object-fit: cover;
  object-position: center top;
}

.hero-bio {
    font-size: 1.15rem;
    color: var(--color-ink-light);
    line-height: 1.9;
    max-width: 440px;
    margin-bottom: 2.5rem;
    font-weight: 300;
}

.btn-primary {
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
}

.hero-eyebrow {
    font-family: var(--mono);
    font-size: var(--font-size-sm);
    color: var(--color-baby-blue-dark);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    gap: var(--spacing-xxs);
     text-transform: uppercase;
}

.hero-footer-note {
    font-family: var(--mono);
    font-size: var(--font-size-xs);
    color: var(--color-rule);
    letter-spacing: 0.05rem;
}

.hero-meta {
    text-align: right;
    flex-shrink: 0;
}

.hero-cta-group {
  display: flex;
}

.ticker-inner {
    display: flex;
    gap: var(--spacing-lg);
    white-space: nowrap;
    animation: ticker-scroll 25s linear infinite;
    padding-left: 100%;
}

.ticker-inner span {
    font-family: var(--mono);
    font-size: var(--font-size-sm);
    color: var(--color-ink);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight:500;

}

.ticker-dot {
    color: var(--color-ink);
    font-size: 16px;
    line-height: 1;

}

.ticker-strip {
    overflow: hidden;
    background-color: var(--color-baby-blue);
    height: 34px;
    display: flex;
    align-items: center;

}

@include mobile {
  .hero-content {
    gap: 1rem;
    align-items: center;
  }

  .hero-cta-group {
    justify-content: center;
  }

  .hero-text {
    min-width: 0;
  }

  .hero-photo-box {
    flex-basis: clamp(7.5rem, 34vw, 11rem);
    width: clamp(7.5rem, 34vw, 11rem);
    aspect-ratio: 3 / 4;
  }

  .hero-bio {
    max-width: none;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.75rem;
  }

  .hero-name {
    font-size: clamp(2.5rem, 14vw, 3.25rem);
  }
}

@keyframes ticker-scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>