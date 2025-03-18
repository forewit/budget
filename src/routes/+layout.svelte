<script lang="ts">
  import "../app.css";
  import SafeAreas from "$lib/components/safe-areas.svelte";

  let { children } = $props();
</script>

<SafeAreas class="ml-[var(--safe-area-left)] mr-[var(--safe-area-right)]">
  {@render children?.()}
</SafeAreas>
