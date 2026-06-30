<script module>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
</script>

<script>
  import Gallery from '$lib/components/Media/Gallery.svelte';
</script>

<Meta title="Media/Gallery" component={Gallery} />

<Story name="Default" let:args>
  <Gallery
    {...args}
    items={[
      {
        src: '/design/bernie meme.png',
        alt: 'Bernie Sanders meme infographic',
        caption: 'A humorous take on Bernie Sanders',
      },
      {
        src: '/design/Economics of Love.png',
        alt: 'Economics of Love infographic',
        caption: 'How to think about love like an economist',
      },
      {
        src: '/design/final plant box.png',
        alt: 'Plant identification art',
        caption: 'Hand-illustrated plant species',
      },
      {
        src: '/design/bernie meme.png',
        alt: 'Another infographic',
        caption: 'Sample gallery item for demonstration',
      },
    ]}
  />
</Story>

<Story name="With Credits" let:args>
  <Gallery
    {...args}
    items={[
      {
        src: '/design/bernie meme.png',
        alt: 'Bernie Sanders meme infographic',
        caption: 'Political humor series',
        credit: 'Art by Ashley Mowreader',
      },
      {
        src: '/design/Economics of Love.png',
        alt: 'Economics of Love infographic',
        caption: 'Personal project',
        credit: 'Illustration by Ashley Mowreader',
      },
    ]}
  />
</Story>

<Story name="Single Item" let:args>
  <Gallery
    {...args}
    items={[
      {
        src: '/design/final plant box.png',
        alt: 'Plant identification art',
        caption: 'Hand-illustrated plant species',
      },
    ]}
  />
</Story>
