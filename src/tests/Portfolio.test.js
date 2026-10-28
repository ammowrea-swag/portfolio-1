import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Profile from '$lib/components/Portfolio/Profile.svelte';
import PodcastFeatures from '$lib/components/Portfolio/PodcastFeatures.svelte';

describe('Profile', () => {
  it('renders the name as a heading', () => {
    render(Profile, { props: { name: 'Max Eastman' } });
    expect(screen.getByRole('heading', { name: 'Max Eastman' })).toBeTruthy();
  });

  it('renders the tagline when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', tagline: 'Editor of The Masses' },
    });
    expect(screen.getByText('Editor of The Masses')).toBeTruthy();
  });

  it('does not render a tagline element when omitted', () => {
    const { container } = render(Profile, { props: { name: 'Max Eastman' } });
    expect(container.querySelector('.tagline')).toBeNull();
  });

  it('renders an email link when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', email: 'max@example.com' },
    });
    const link = screen.getByRole('link', { name: /email/i });
    expect(link.getAttribute('href')).toBe('mailto:max@example.com');
  });

  it('renders a GitHub link when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', github: 'maxeastman' },
    });
    const link = screen.getByRole('link', { name: /github/i });
    expect(link.getAttribute('href')).toBe('https://github.com/maxeastman');
  });

  it('renders a LinkedIn link when provided', () => {
    render(Profile, {
      props: { name: 'Max Eastman', linkedin: 'maxeastman' },
    });
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link.getAttribute('href')).toBe(
      'https://linkedin.com/in/maxeastman'
    );
  });

  it('does not render contact links when none are provided', () => {
    const { container } = render(Profile, { props: { name: 'Max Eastman' } });
    expect(container.querySelectorAll('.contact li')).toHaveLength(0);
  });

  it('renders a photo with the name as default alt text', () => {
    render(Profile, {
      props: { name: 'Max Eastman', photo: '/photos/max.jpg' },
    });
    expect(screen.getByAltText('Max Eastman')).toBeTruthy();
  });

  it('renders a photo with explicit alt text when provided', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        photo: '/photos/max.jpg',
        photoAlt: 'Max Eastman in 1915',
      },
    });
    expect(screen.getByAltText('Max Eastman in 1915')).toBeTruthy();
  });

  it('keeps external photo URLs unchanged', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        photo: 'https://example.com/max.jpg',
        photoAlt: 'External photo',
      },
    });
    const img = screen.getByAltText('External photo');
    expect(img.getAttribute('src')).toBe('https://example.com/max.jpg');
  });

  it('renders bio bio paragraphs', () => {
    render(Profile, {
      props: {
        name: 'Max Eastman',
        bio: 'Currently editing The Masses.\n\nNext, translating Trotsky.',
      },
    });
    expect(screen.getByText('Currently editing The Masses.')).toBeTruthy();
    expect(screen.getByText('Next, translating Trotsky.')).toBeTruthy();
  });

  it('does not render the bio section when bio is omitted', () => {
    const { container } = render(Profile, { props: { name: 'Max Eastman' } });
    expect(container.querySelector('.now-next')).toBeNull();
  });
});

describe('PodcastFeatures', () => {
  const podcasts = [
    {
      title: 'How AI is impacting the entry-level job market',
      publisher: "Here's the Scoop (NBC News)",
      publishDate: '2026-07-11',
      blurb: 'A short segment on early-career hiring trends.',
      url: 'https://example.com/podcast-1',
    },
    {
      title: 'Trade war tariffs explained in charts',
      publisher: 'Data Download',
      publishDate: '2026-09-18',
      blurb: 'How data reporting clarified a complex policy story.',
    },
  ];

  it('renders section heading and blurb', () => {
    render(PodcastFeatures, {
      props: {
        heading: 'Podcast features',
        blurb: 'Recent audio appearances and interviews.',
        podcasts,
      },
    });

    expect(screen.getByRole('heading', { name: 'Podcast features' })).toBeTruthy();
    expect(screen.getByText('Recent audio appearances and interviews.')).toBeTruthy();
  });

  it('renders podcast title, publisher and formatted date', () => {
    render(PodcastFeatures, { props: { podcasts } });

    expect(screen.getByRole('heading', { name: podcasts[0].title })).toBeTruthy();
    expect(screen.getByText("Here's the Scoop (NBC News)")).toBeTruthy();
    expect(screen.getByText('July 11, 2026')).toBeTruthy();
  });

  it('renders listen link only when url exists', () => {
    const { container } = render(PodcastFeatures, { props: { podcasts } });

    const links = screen.getAllByRole('link', { name: 'Listen to episode' });
    expect(links).toHaveLength(1);
    expect(links[0].getAttribute('href')).toBe('https://example.com/podcast-1');

    const cards = container.querySelectorAll('.podcast-card');
    expect(cards).toHaveLength(2);
  });
});
