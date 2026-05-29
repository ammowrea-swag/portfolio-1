<!--
  ShowcaseCard.stories.svelte

  Stories for the ShowcaseCard component.
  Use this card for graphics, GIFs, and web projects.
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ShowcaseCard from '$lib/components/Data/ShowcaseCard.svelte';

  const { Story } = defineMeta({
    title: 'Data/ShowcaseCard',
    component: ShowcaseCard,
    tags: ['autodocs'],
    argTypes: {
      href: {
        control: 'text',
        description: 'Optional URL. If provided, the card becomes a clickable link.',
      },
      media: {
        control: 'text',
        description: 'Optional image or GIF used as the preview media.',
      },
      kind: {
        control: 'text',
        description: 'Short label for the type of work, such as Graphic or Web Project.',
      },
    },
  });
</script>

<Story name="Graphic">
  <ShowcaseCard
    kind="Graphic"
    title="Visualizing subway ridership"
    description="An explanatory chart package built for a breaking-news explainer."
    media="/photos/map.jpg"
    mediaAlt="A map graphic with highlighted neighborhoods"
    tags={['Illustration', 'Data viz', 'Breaking news']}
  />
</Story>

<Story name="GIF">
  <div style="max-width: 420px;">
    <ShowcaseCard
      kind="GIF"
      title="Animated forecast loop"
      description="A short motion graphic showing how the weather system moved across the city."
      media="/example-photo.gif"
      mediaAlt="Animated forecast visualization"
      tags={['Animation', 'Weather', 'Editorial']}
    />
  </div>
</Story>

<Story name="Web Project">
  <div style="max-width: 420px;">
    <ShowcaseCard
      kind="Web Project"
      title="Interactive school funding dashboard"
      description="A responsive project page with charts, filters, and sourced reporting."
      media="/photos/taxi.jpg"
      mediaAlt="Preview of a project page"
      href="https://example.com"
      tags={['Interactive', 'Dashboard', 'Reporting']}
      ctaLabel="View project"
    />
  </div>
</Story>
