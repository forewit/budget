<script lang="ts">
  import {
    getBudgetContext,
    numberToDollarString,
    dollarStringToNumber,
    type BudgetItem,
  } from "./budget.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import RichTextarea from "./rich-textarea.svelte";


  let { categoryIndex, budgetItemIndex }: { categoryIndex: number; budgetItemIndex: number } =
    $props();

  const budget = getBudgetContext();

  let category = $derived(budget.categories[categoryIndex]);
  let budgetItem = $derived(category.budgetItems[budgetItemIndex]);
  let links = ["Google", "Twitter", "Facebook"];

  function updateBudgetItem(e: Event, budgetItem: BudgetItem) {
    let input = e.target as HTMLInputElement;
    budgetItem.amount = dollarStringToNumber(input.value);
    input.value = numberToDollarString(budgetItem.amount);
  }
</script>



<div class="p-4 pt-8 h-full w-full flex flex-col">
  <div class="py-4 flex gap-3 items-baseline">
    <Input
      bind:value={budgetItem.name}
      class="font-medium text-2xl md:text-2xl text-medium border-none pr-1"
    />
    <Input
      class="max-w-32 font-medium text-2xl md:text-2xl justify-self-end text-right border-none pl-1"
      value={numberToDollarString(budgetItem.amount)}
      onchange={(e) => updateBudgetItem(e, budgetItem)}
    />
  </div>
  <Textarea class="py-4 pl-3" placeholder="Type your message here." />
  <RichTextarea></RichTextarea>
</div>
