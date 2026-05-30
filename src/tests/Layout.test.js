import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import SiteHeader from '$lib/components/Layout/SiteHeader.svelte';
import SiteFooter from '$lib/components/Layout/SiteFooter.svelte';

describe('SiteHeader', () => {
  it('renders the logo', () => {
    render(SiteHeader);
    expect(screen.getByText('Ashley Mowreader')).toBeTruthy();
  });

  it('renders default navigation links', () => {
    render(SiteHeader);
    expect(screen.getByText('Résumé')).toBeTruthy();
    expect(screen.getByText('Clips')).toBeTruthy();
    expect(screen.getByText('Contact')).toBeTruthy();
  });

  it('renders custom navigation links', () => {
    render(SiteHeader, {
      props: {
        navLinks: [{ label: 'Sports', href: '/sports' }],
      },
    });
    expect(screen.getByText('Sports')).toBeTruthy();
  });

  it('hides nav when navLinks is empty', () => {
    const { container } = render(SiteHeader, {
      props: { navLinks: [] },
    });
    expect(container.querySelector('nav')).toBeNull();
  });
});

describe('SiteFooter', () => {
  it('renders the footer name', () => {
    render(SiteFooter);
    expect(screen.getByText('Ashley Mowreader')).toBeTruthy();
  });

  it('renders footer navigation links', () => {
    render(SiteFooter);
    expect(screen.getByText('Twitter')).toBeTruthy();
    expect(screen.getByText('LinkedIn')).toBeTruthy();
    expect(screen.getByText('GitHub')).toBeTruthy();
  });
});
