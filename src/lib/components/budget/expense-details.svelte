<script lang="ts">
  import { getBudgetContext } from "$lib/components/budget/budget.svelte";

  let { categoryIndex, budgetItemIndex }: { categoryIndex: number; budgetItemIndex: number } =
    $props();

  const budget = getBudgetContext();

  let category = $derived(budget.categories[categoryIndex]);
  let budgetItem = $derived(category.budgetItems[budgetItemIndex]);
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
  <div class="text-xl">
    {category.name}
    {budgetItem.name}
    {budgetItem.amount}
  </div>
</div>
