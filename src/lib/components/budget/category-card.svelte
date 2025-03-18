<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
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
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";

  let {
    category,
    budgetItemClicked = () => {},
    class: className = "",
  }: {
    category: Category;
    budgetItemClicked: (index: number) => void;
    class?: string
  } = $props();

  const budget = getBudgetContext();
  let isMobile = new IsMobile();

  let total = $derived(
    categoryTotal(category, budget.filters[budget.selectedFilterIndex].frequency)
  );

  function updateBudgetItem(e: Event, budgetItem: BudgetItem) {
    let input = e.target as HTMLInputElement;
    budgetItem.amount = dollarStringToNumber(input.value);
    input.value = numberToDollarString(budgetItem.amount);
  }
</script>

<Card.Root class={"max-w-[500px] min-w-[400px] m-auto " + className}>
  <Card.Header class="p-4 pr-6">
    <div class="pl-1 flex gap-1 flex-row items-center">
      <Button
        variant="ghost"
        class="hover:bg-transparent px-1 ml-[-6px]"
        onclick={() => (category.expanded = !category.expanded)}
      >
        {#if category.expanded}
          <ChevronUp />
        {:else}
          <ChevronDown />
        {/if}
      </Button>
      <Input
        bind:value={category.name}
        class="border-none max-w-[10rem] pl-1 text-xl md:text-xl font-medium"
      />
      <div class="grow"></div>

      {#if !category.expanded && budget.selectedFilterIndex != 0}
        <div class="pr-2 italic text-sm">{numberToDollarString(total)}</div>
      {/if}

      <Select.Root
        type="single"
        value={budget.filters[budget.selectedFilterIndex].name}
        onValueChange={(value) => {
          budget.selectedFilterIndex = budget.filters.findIndex((f) => f.name == value);
          if (budget.selectedFilterIndex == 0) {
            category.expanded = true;
          }
        }}
      >
        <Select.Trigger class="w-[8rem]">
          {budget.filters[budget.selectedFilterIndex].name}
        </Select.Trigger>
        <Select.Content>
          {#each budget.filters as filter, i}
            <Select.Item value={filter.name}>{filter.name}</Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
  </Card.Header>
  {#if category.expanded}
    <Card.Content class="pt-0 pr-7">
      {#each category.budgetItems as budgetItem, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <button
          class="w-full md:cursor-default border-b last:border-b-0 py-4 table-row"
          onclick={(e) => {
            e.stopPropagation();
            budgetItemClicked(i);
          }}
        >
          <div
            class="pointer-events-none md:pointer-events-auto grid grid-cols-[auto,1fr,6rem] items-center  w-full"
          >
            <Input
              bind:value={budgetItem.name}
              class="max-w-[10rem] pr-4 border-transparent hover:border hover:border-inherit disabled:opacity-100"
              disabled={isMobile.current}
            />
            {#if budget.selectedFilterIndex == 0}
              <FrequencyPicker
                disabled={isMobile.current}
                bind:frequency={budgetItem.frequency}
                class="justify-self-end"
              ></FrequencyPicker>
              <Input
                class="justify-self-end max-w-[6rem] text-right border-0 md:border disabled:opacity-100"
                value={numberToDollarString(budgetItem.amount)}
                onchange={(e) => updateBudgetItem(e, budgetItem)}
                disabled={isMobile.current}
              />
            {:else}
              <p class="select-text cursor-auto text-sm justify-self-end italic col-span-2 pr-3">
                {numberToDollarString(
                  changeFrequency(
                    budgetItem.amount,
                    budgetItem.frequency,
                    budget.filters[budget.selectedFilterIndex].frequency
                  )
                )}
              </p>
            {/if}
          </div>
        </button>
      {/each}
    </Card.Content>
  {/if}
</Card.Root>
