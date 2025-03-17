<script lang="ts">
  import { getBudgetContext } from "$lib/components/budget/budget.svelte";
  import FrequencyPicker from "./frequency-picker.svelte";

  let { categoryIndex, budgetItemIndex }: { categoryIndex: number; budgetItemIndex: number } =
    $props();

  const budget = getBudgetContext();

  let category = $derived(budget.categories[categoryIndex]);
  let budgetItem = $derived(category.budgetItems[budgetItemIndex]);
</script>

<!-- Title -->
<!-- Details -->
<!-- Links (from details) -->
<!-- Footer -->

<div class="p-8 h-full w-full flex flex-col items-center justify-center">
  <div class="text-xl">
    {category.name}
    {budgetItem.name}
    {budgetItem.amount}
  </div>
</div>
