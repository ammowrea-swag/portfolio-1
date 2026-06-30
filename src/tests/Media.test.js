import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Image from '$lib/components/Media/Image.svelte';
import Gallery from '$lib/components/Media/Gallery.svelte';

describe('Image', () => {
  it('renders an image with alt text', () => {
    render(Image, { props: { src: '/photo.jpg', alt: 'A test photo' } });
    const img = screen.getByAltText('A test photo');
    expect(img).toBeTruthy();
    expect(img.getAttribute('loading')).toBe('lazy');
  });

  it('renders a caption when provided', () => {
    render(Image, {
      props: {
        src: '/photo.jpg',
        alt: 'A photo',
        caption: 'Downtown Manhattan',
      },
    });
    expect(screen.getByText('Downtown Manhattan')).toBeTruthy();
  });

  it('renders a credit when provided', () => {
    render(Image, {
      props: {
        src: '/photo.jpg',
        alt: 'A photo',
        credit: 'Photo by Jane Doe',
      },
    });
    expect(screen.getByText('Photo by Jane Doe')).toBeTruthy();
  });

  it('does not render figcaption when no caption or credit', () => {
    const { container } = render(Image, {
      props: { src: '/photo.jpg', alt: 'A photo' },
    });
    expect(container.querySelector('figcaption')).toBeNull();
  });

  it('keeps external URLs unchanged', () => {
    render(Image, {
      props: { src: 'https://example.com/photo.jpg', alt: 'External' },
    });
    const img = screen.getByAltText('External');
    expect(img.getAttribute('src')).toBe('https://example.com/photo.jpg');
  });

  it('resolves local paths through asset()', () => {
    render(Image, {
      props: { src: '/images/local.jpg', alt: 'Local' },
    });
    const img = screen.getByAltText('Local');
    // Our mock returns the path unchanged
    expect(img.getAttribute('src')).toBe('/images/local.jpg');
  });
});

describe('Gallery', () => {
  const mockItems = [
    { src: '/image1.jpg', alt: 'Image 1', caption: 'First image' },
    { src: '/image2.jpg', alt: 'Image 2', caption: 'Second image' },
    { src: '/image3.jpg', alt: 'Image 3' },
  ];

  it('renders all gallery items', () => {
    render(Gallery, { props: { items: mockItems } });
    expect(screen.getByAltText('Image 1')).toBeTruthy();
    expect(screen.getByAltText('Image 2')).toBeTruthy();
    expect(screen.getByAltText('Image 3')).toBeTruthy();
  });

  it('renders empty gallery with no items', () => {
    const { container } = render(Gallery, { props: { items: [] } });
    const galleryGrid = container.querySelector('.gallery-grid');
    expect(galleryGrid).toBeTruthy();
    expect(galleryGrid.children.length).toBe(0);
  });

  it('opens modal when clicking a gallery item', async () => {
    const user = userEvent.setup();
    render(Gallery, { props: { items: mockItems } });
    
    const firstItem = screen.getByRole('button', { name: /View Image 1/ });
    await user.click(firstItem);
    
    const overlay = document.querySelector('.modal-overlay');
    expect(overlay).toBeTruthy();
  });

  it('closes modal when clicking close button', async () => {
    const user = userEvent.setup();
    render(Gallery, { props: { items: mockItems } });
    
    const firstItem = screen.getByRole('button', { name: /View Image 1/ });
    await user.click(firstItem);
    
    const closeBtn = screen.getByRole('button', { name: /Close fullscreen/ });
    await user.click(closeBtn);
    
    const overlay = document.querySelector('.modal-overlay');
    expect(overlay).toBeFalsy();
  });

  it('displays caption and credit in modal', async () => {
    const user = userEvent.setup();
    const itemsWithCredit = [
      { src: '/image1.jpg', alt: 'Image 1', caption: 'My caption', credit: 'Photo credit' },
    ];
    
    render(Gallery, { props: { items: itemsWithCredit } });
    
    const item = screen.getByRole('button', { name: /View Image 1/ });
    await user.click(item);
    
    expect(screen.getByText('My caption')).toBeTruthy();
    expect(screen.getByText('Photo credit')).toBeTruthy();
  });

  it('navigates to next image with arrow button', async () => {
    const user = userEvent.setup();
    render(Gallery, { props: { items: mockItems } });
    
    const firstItem = screen.getByRole('button', { name: /View Image 1/ });
    await user.click(firstItem);
    
    const nextBtn = screen.getByRole('button', { name: /Next image/ });
    await user.click(nextBtn);
    
    // Check that the modal now displays image 2
    const modalImg = document.querySelector('.modal-content img');
    expect(modalImg.getAttribute('alt')).toBe('Image 2');
  });

  it('navigates to previous image with arrow button', async () => {
    const user = userEvent.setup();
    render(Gallery, { props: { items: mockItems } });
    
    const secondItem = screen.getByRole('button', { name: /View Image 2/ });
    await user.click(secondItem);
    
    const prevBtn = screen.getByRole('button', { name: /Previous image/ });
    await user.click(prevBtn);
    
    const modalImg = document.querySelector('.modal-content img');
    expect(modalImg.getAttribute('alt')).toBe('Image 1');
  });

  it('hides next button on last image', async () => {
    const user = userEvent.setup();
    render(Gallery, { props: { items: mockItems } });
    
    const lastItem = screen.getByRole('button', { name: /View Image 3/ });
    await user.click(lastItem);
    
    const nextBtn = screen.queryByRole('button', { name: /Next image/ });
    expect(nextBtn).toBeFalsy();
  });

  it('hides previous button on first image', async () => {
    const user = userEvent.setup();
    render(Gallery, { props: { items: mockItems } });
    
    const firstItem = screen.getByRole('button', { name: /View Image 1/ });
    await user.click(firstItem);
    
    const prevBtn = screen.queryByRole('button', { name: /Previous image/ });
    expect(prevBtn).toBeFalsy();
  });
});
