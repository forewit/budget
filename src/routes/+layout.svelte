<script lang="ts">
  import SafeAreas from "$lib/components/SafeAreas.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<SafeAreas>
  {@render children()}
</SafeAreas>
