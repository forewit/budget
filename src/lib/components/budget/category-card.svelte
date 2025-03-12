<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import ChevronUp from "lucide-svelte/icons/chevron-up";
  import FrequencyPicker from "./frequency-picker.svelte";
  import {
    getBudgetContext,
    categoryTotal,
    changeFrequency,
    dollarStringToNumber,
    numberToDollarString,
    type BudgetItem,
    type Category,
  } from "./budget.svelte";

  let {
    category,
    budgetItemClicked = () => {},
    selectedItem = -1,
  }: {
    category: Category;
    budgetItemClicked: (index: number) => void;
    selectedItem: number;
  } = $props();

  const budget = getBudgetContext();

  // TODO: make derived
  let total = $derived(
    categoryTotal(category, budget.filters[budget.selectedFilterIndex].frequency)
  );

  function updateBudgetItem(e: Event, budgetItem: BudgetItem) {
    let input = e.target as HTMLInputElement;
    budgetItem.amount = dollarStringToNumber(input.value);
    input.value = numberToDollarString(budgetItem.amount);
  }
</script>

<Card.Root class="max-w-[500px] m-auto">
  <Card.Header class="p-4 pr-8">
    <div class="pl-1 flex gap-2 flex-row items-center">
      <Input
        bind:value={category.name}
        class="border-none w-min ml-1 text-xl md:text-xl font-medium"
        style="field-sizing: content;"
      />
      <div class="grow"></div>

      {#if !category.expanded && budget.selectedFilterIndex != 0}
        <div class="pr-2 text-blue-400">{numberToDollarString(total)}</div>
      {/if}

      <Button variant="secondary" onclick={budget.nextFilter}>
        {budget.filters[budget.selectedFilterIndex].name}
      </Button>

      <Button
        variant="ghost"
        class="hover:bg-transparent px-1"
        onclick={() => (category.expanded = !category.expanded)}
      >
        {#if category.expanded}
          <ChevronUp class="stroke-blue-500" />
        {:else}
          <ChevronDown class="stroke-blue-500" />
        {/if}
      </Button>
    </div>
  </Card.Header>
  {#if category.expanded}
    <Card.Content class="pt-0 pr-7">
      {#each category.budgetItems as budgetItem, i}
        <button
          class="grid grid-cols-[auto,1fr,6rem] items-center gap-1 w-full cursor-default border-b last:border-b-0 py-4 rounded table-row"
          onclick={(e) => {
            e.stopPropagation();
            budgetItemClicked(i);
          }}
          onfocusin={(e) => {
            e.stopPropagation();
            budgetItemClicked(i);
          }}
        >
          <Input
            bind:value={budgetItem.name}
            class="w-min max-w-[10rem] pr-4 border-none hover:bg-muted focus:bg-muted"
            style="field-sizing: content"
          />
          {#if budget.selectedFilterIndex == 0}
            <FrequencyPicker bind:frequency={budgetItem.frequency} class="justify-self-end"
            ></FrequencyPicker>
            <Input
              class="justify-self-end w-min max-w-[6rem] pl-4 text-right border-none hover:bg-muted focus:bg-muted "
              value={numberToDollarString(budgetItem.amount)}
              style="field-sizing: content;"
              onchange={(e) => updateBudgetItem(e, budgetItem)}
            />
          {:else}
            <p class="select-text cursor-auto justify-self-end  text-blue-400 col-span-2 pr-3">
              {numberToDollarString(
                changeFrequency(
                  budgetItem.amount,
                  budgetItem.frequency,
                  budget.filters[budget.selectedFilterIndex].frequency
                )
              )}
            </p>
          {/if}
        </button>
      {/each}
    </Card.Content>
  {/if}
</Card.Root>
