import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BigNumber from '$lib/components/Data/BigNumber.svelte';
import ShowcaseCard from '$lib/components/Data/ShowcaseCard.svelte';

describe('BigNumber', () => {
  it('renders the number and label', () => {
    render(BigNumber, { props: { number: '42%', label: 'Approval Rating' } });
    expect(screen.getByText('42%')).toBeTruthy();
    expect(screen.getByText('Approval Rating')).toBeTruthy();
  });

  it('renders a footnote when provided', () => {
    render(BigNumber, {
      props: {
        number: '$1.2M',
        label: 'Total Budget',
        footnote: 'As of 2024',
      },
    });
    expect(screen.getByText('As of 2024')).toBeTruthy();
  });

  it('does not render a footnote when omitted', () => {
    const { container } = render(BigNumber, {
      props: { number: '100', label: 'Count' },
    });
    expect(container.querySelector('.footnote')).toBeNull();
  });
});

describe('ShowcaseCard', () => {
  it('renders the title, description, and kind', () => {
    render(ShowcaseCard, {
      props: {
        kind: 'Graphic',
        title: 'Charting the city',
        description: 'A data visualization example.',
      },
    });

    expect(screen.getByText('Graphic')).toBeTruthy();
    expect(screen.getByText('Charting the city')).toBeTruthy();
    expect(screen.getByText('A data visualization example.')).toBeTruthy();
  });

  it('renders a link when href is provided', () => {
    render(ShowcaseCard, {
      props: {
        href: 'https://example.com',
        title: 'Interactive project',
        description: 'A linked showcase card.',
      },
    });

    const link = screen.getByRole('link', { name: /interactive project/i });
    expect(link.getAttribute('href')).toBe('https://example.com');
  });
});
