<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Envelopes</title>
</svelte:head>

{@render children?.()}
