// Page settings
// These values are passed to the layout to control what appears on the page.

import content from '$lib/data/content.yaml';

export function load() {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: true,
    // Set to false to hide the site footer
    showFooter: true,
    content,
  };
}
