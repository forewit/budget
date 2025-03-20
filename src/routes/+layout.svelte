<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <meta name="theme-color" content="#016c94" />
  <title>Jessica Helen Budget</title>
</svelte:head>

<div ontouchstart={(e)=>{e.preventDefault()}}>
  {@render children?.()}
</div>
