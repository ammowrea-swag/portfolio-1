import { error } from '@sveltejs/kit';

import content from '$lib/data/content.yaml';

export function load({ params }) {
  const clip = content.clips.find((item) => item.slug === params.slug);

  if (!clip) {
    throw error(404, 'Clip not found');
  }

  return {
    clip,
  };
}
