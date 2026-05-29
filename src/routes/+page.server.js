import content from '$lib/data/content.yaml';

export function load() {
  return {
    // Page UI flags
    showHeader: true,
    showFooter: true,
    // Content used by the page (ensures `data.content` is defined)
    content,
  };
}
