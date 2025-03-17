<script lang="ts">
  import { getBudgetContext } from "$lib/components/budget/budget.svelte";
  import { type BudgetItem } from "./budget.svelte";

  let { categoryClicked = () => {} }: { categoryClicked?: (index: number) => void } = $props();

  const budget = getBudgetContext();
</script>

<div class="p-8 h-full w-full flex flex-col items-center justify-center">
  <div class="text-xl">Budget Overview</div>
</div>
