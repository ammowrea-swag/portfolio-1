<!--
  PodcastFeatures.stories.svelte

  Stories for the PodcastFeatures component.
  PodcastFeatures renders a heading, optional blurb, and a responsive grid of
  podcast cards with title, publisher, publish date, and optional link.
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PodcastFeatures from '$lib/components/Portfolio/PodcastFeatures.svelte';

  const samplePodcasts = [
    {
      title: 'How AI is impacting the entry-level job market',
      publisher: "Here's the Scoop (NBC News)",
      publishDate: '2026-07-11',
      blurb:
        'A short segment on what hiring data says about opportunities for recent graduates.',
      url: 'https://www.nbcnews.com/video/shorts/how-ai-is-impacting-the-entry-level-job-market-267550789929',
    },
    {
      title: 'Following wildfire smoke across U.S. cities',
      publisher: 'NBC News Now',
      publishDate: '2026-08-03',
      blurb:
        'How we translated quickly changing air-quality data into clear maps and reporting.',
    },
  ];

  const { Story } = defineMeta({
    title: 'Portfolio/PodcastFeatures',
    component: PodcastFeatures,
    tags: ['autodocs'],
    args: {
      heading: 'Podcast features',
      blurb:
        'A few podcast episodes where I break down reporting, data methods and what these stories mean for audiences.',
      podcasts: samplePodcasts,
    },
    argTypes: {
      heading: {
        control: 'text',
        description: 'Section heading.',
      },
      blurb: {
        control: 'text',
        description: 'Optional section intro paragraph.',
      },
      podcasts: {
        control: 'object',
        description:
          'Array of podcast objects: { title, publisher, publishDate, blurb, url }.',
      },
    },
  });
</script>

<Story name="Default">
  {#snippet children(args)}
    <div style="max-width: 1000px; margin: 0 auto; padding: 2rem;">
      <PodcastFeatures {...args} />
    </div>
  {/snippet}
</Story>

<Story
  name="No Links"
  args={{
    podcasts: [
      {
        title: 'Trade war tariffs explained in charts',
        publisher: 'Data Download',
        publishDate: '2026-09-18',
        blurb:
          'A conversation about reporting the U.S.-Canada tariff story and what trade-code data reveals.',
      },
    ],
  }}
>
  {#snippet children(args)}
    <div style="max-width: 1000px; margin: 0 auto; padding: 2rem;">
      <PodcastFeatures {...args} />
    </div>
  {/snippet}
</Story>
