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

  let { categoryIndex, budgetItemIndex }: { categoryIndex: number; budgetItemIndex: number } =
    $props();

  const budget = getBudgetContext();

  let category = $derived(budget.categories[categoryIndex]);
  let budgetItem = $derived(category.budgetItems[budgetItemIndex]);

  function updateBudgetItem(e: Event, budgetItem: BudgetItem) {
    let input = e.target as HTMLInputElement;
    budgetItem.amount = dollarStringToNumber(input.value);
    input.value = numberToDollarString(budgetItem.amount);
  }
</script>

<div class="p-4 pt-8 h-full w-full">
  <div class="pb-4 justify-between items-end flex w-full h-min gap-2">
    <div
      bind:innerText={budgetItem.name}
      contenteditable="plaintext-only"
      aria-roledescription="textbox"
      class="align-bottom min-w-16 border h-min py-2 px-3 rounded-xl max-w-full bg-transparent font-medium text-2xl md:text-2xl text-medium"
    ></div>
    <div>
      <Input
        class="max-w-32 font-medium text-2xl md:text-2xl justify-self-end text-right border-none pr-1"
        value={numberToDollarString(budgetItem.amount)}
        onchange={(e) => updateBudgetItem(e, budgetItem)}
      />
      <FrequencyPicker bind:frequency={budgetItem.frequency} class="justify-self-end pr-1" />
    </div>
  </div>
  <Editor />
</div>

