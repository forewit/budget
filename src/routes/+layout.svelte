<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Jessica Helen Budget</title>
</svelte:head>

{@render children?.()}
