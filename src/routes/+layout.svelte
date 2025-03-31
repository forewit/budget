<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";
  import Loader from "$lib/components/loader.svelte";
  import Activity from "lucide-svelte/icons/activity"

  let { children } = $props();

  let loading = $state(true);

  $effect(() => {
    const img = new Image();
    img.src = `${base}/images/field-background.jpg`;
    img.onload = () => (loading = false);
  });
</script>

<svelte:head>
  <title>Jessica Helen Budget</title>
</svelte:head>

{#if loading}
  <div class="h-lvh flex justify-center items-center text-xl"><Activity /></div>
{:else}
  {@render children?.()}
{/if}