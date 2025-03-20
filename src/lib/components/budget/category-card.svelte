<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
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
  import { cn } from "$lib/utils.js";

  let {
    category,
    budgetItemClicked = () => {},
    class: className = "",
    selectedItemIndex = -1,
  }: {
    category: Category;
    budgetItemClicked: (index: number) => void;
    selectedItemIndex?: number;
    class?: string;
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

<Card.Root class={cn("max-w-[500px] m-auto", className)}>
  <Card.Header class="p-4 pb-2 pr-6">
    <div class="pl-1 flex gap-1 flex-row items-center">
      <Button
        variant="ghost"
        class="hover:bg-transparent px-1 ml-[-6px]"
        onclick={() => (category.expanded = !category.expanded)}
      >
        {#if category.expanded}
          <ChevronDown class="mt-1 opacity-50" />
        {:else}
          <ChevronRight class="mt-1 opacity-50" />
        {/if}
      </Button>
      <Input
        bind:value={category.name}
        class="border-none bg-transparent max-w-40 pl-1 text-xl md:text-xl font-medium"
      />
      <div class="grow"></div>

      {#if budget.selectedFilterIndex != 0}
        <div class="pr-4 text-lg font-medium">{numberToDollarString(total)}</div>
      {/if}
    </div>
  </Card.Header>
  {#if category.expanded}
    <Card.Content class="p-0 pb-4">
      {#each category.budgetItems as budgetItem, i}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class={cn("w-full cursor-pointer md:cursor-default py-3 px-6",
            (i === selectedItemIndex ? "md:shadow-lg md:bg-muted/50" : ""))}
          onclick={(e) => {
            e.stopPropagation();
            budgetItemClicked(i);
          }}
          onfocusin={()=>budgetItemClicked(i)}

        >
          <div class="pointer-events-none md:pointer-events-auto flex gap-1 items-center w-full">
            <Input
              bind:value={budgetItem.name}
              class="pr-4 disabled:opacity-100 border-none bg-transparent"
              disabled={isMobile.current}
            />
            {#if budget.selectedFilterIndex == 0}
              <FrequencyPicker
                disabled={isMobile.current}
                bind:frequency={budgetItem.frequency}
                class="justify-self-end"
                open={selectedItemIndex === i ? undefined : false}
              ></FrequencyPicker>
              <Input
                class="justify-self-end w-[5.2rem] text-right disabled:opacity-100 border-none bg-transparent"
                value={numberToDollarString(budgetItem.amount)}
                onchange={(e) => updateBudgetItem(e, budgetItem)}
                disabled={isMobile.current}
              />
            {:else}
              <p class="select-text cursor-auto text-sm justify-self-end italic col-span-2 px-3">
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
        </div>
        {#if i < category.budgetItems.length - 1}
          <div
            class={cn("h-[2px] bg-muted/30 place-self-center w-[calc(100%)]",
              (selectedItemIndex === i ? "md:bg-transparent" : ""))}
          ></div>
        {/if}
      {/each}
    </Card.Content>
  {:else}
    <div class="h-2"></div>
  {/if}
</Card.Root>
