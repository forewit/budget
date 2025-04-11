<script lang="ts">
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import Ecard from "$lib/components/ecard/ecard.svelte";

  const budget = setBudgetContext();
</script>

<div class="flex items-center justify-center h-full w-full bg-stone-50">
  <Ecard display="error" class="w-min" />
</div>

<style>
  :global(body, html) {
    height: 100%;
  }
</style>