<script lang="ts">
  import { type Snippet } from "svelte";
  import ThemeWrapper from "$lib/Theme/ThemeWrapper.svelte";

  let { children }: { children: Snippet } = $props(); 
</script>

<ThemeWrapper>
    {@render children()}
</ThemeWrapper>