<script lang="ts">
  import "../app.css";
  import SafeAreas from "$lib/components/utilities/safe-areas.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#016c94" />
  <title>Jessica Helen Budget</title>
</svelte:head>

<SafeAreas>
  {@render children?.()}
</SafeAreas>
