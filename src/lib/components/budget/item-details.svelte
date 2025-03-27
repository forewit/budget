<script lang="ts">
  import {
    getBudgetContext,
    numberToDollarString,
    dollarStringToNumber,
    type BudgetItem,
  } from "./budget.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import Editor from "$lib/components/editor/editor.svelte";
  import FrequencyPicker from "./frequency-picker.svelte";
  import DollarInput from "./dollar-input.svelte";
  import WrappedInput from "$lib/components/wrapped-input.svelte";

  let { categoryIndex, budgetItemIndex }: { categoryIndex: number; budgetItemIndex: number } =
    $props();

  const budget = getBudgetContext();

  let category = $derived(budget.categories[categoryIndex]);
  let budgetItem = $derived(category.budgetItems[budgetItemIndex]);
</script>

<div class="p-4 pt-8 h-full w-full">
  <div class="pb-4 pr-2 justify-between items-end flex w-full h-min gap-2">
    <WrappedInput bind:value={budgetItem.name} placeholder="Untitled" />
    <div>
      <DollarInput bind:value={budgetItem.amount} class="border-none  font-medium text-xl md:text-xl w-min justify-self-end"/>
      <FrequencyPicker bind:frequency={budgetItem.frequency} class="mt-1  justify-self-end" />
    </div>
  </div>
  <Editor />
</div>

