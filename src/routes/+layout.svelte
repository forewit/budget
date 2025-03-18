<script lang="ts">
  import "../app.css";
  import SafeAreas from "$lib/components/safe-areas.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#016c94" />
  <title>Jessica Helen Budget</title>
</svelte:head>

<SafeAreas class="ml-[var(--safe-area-left)] mr-[var(--safe-area-right)]">
  {@render children?.()}
</SafeAreas>
