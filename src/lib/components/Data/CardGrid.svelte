<!--
@component
CardGrid.svelte — A responsive grid layout for Card components.

Displays children in a single column on mobile, two columns on tablet,
and three columns on desktop.
-->
<script>
  let { children } = $props();
</script>

<div class="card-grid">
  {@render children()}
</div>

<style lang="scss">
  @use '$lib/styles' as *;

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  padding: 0;

  & > * {
    flex: 1 1 100%; /* Mobile: Full width */
  }

  @include tablet {
    & > * {
      /* Takes roughly half width, minus the gap. Grows to fill the 5th card slot. */
      flex: 1 1 calc(50% - var(--spacing-lg));
    }
  }

  @include desktop {
    & > * {
      /* Two columns on desktop */
      flex: 1 1 calc(50% - var(--spacing-lg));
    }
  }
}
</style>
