<script lang="ts">
  import {
    getBudgetContext,
    numberToDollarString,
    dollarStringToNumber,
    type BudgetItem,
  } from "./budget.svelte";
  import FrequencyPicker from "./frequency-picker.svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Input } from "$lib/components/ui/input/index.js";

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
  <div class="py-4 flex gap-2 items-baseline">
    <Input
      bind:value={budgetItem.name}
      class="font-medium text-2xl md:text-2xl text-medium max-w-[10rem] border-transparent hover:border hover:border-inherit"
    />
    <div class="grow"></div>
    <Input
      class="font-medium text-xl md:text-xl justify-self-end max-w-[6rem] text-right border-0 md:border disabled:opacity-100 border-transparent hover:border hover:border-inherit"
      value={numberToDollarString(budgetItem.amount)}
      onchange={(e) => updateBudgetItem(e, budgetItem)}
    />
  </div>
  <Separator />
  <div class="py-4 pl-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet molestias facilis
    sequi qui pariatur quidem maiores omnis perspiciatis ducimus, neque ipsa dolorem commodi quas id
    fugit culpa? Temporibus, recusandae!
  </div>

  <div class="text-2xl font-medium py-6 pl-3">Links</div>
<Separator />
</div>
