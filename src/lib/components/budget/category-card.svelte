<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import ChevronUp from "lucide-svelte/icons/chevron-up";
  import FrequencyPicker from "./frequency-picker.svelte";
  import {
    getBudgetContext,
    getFrequencyName,
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
  let total = $state(0);

  function updateBudgetItem(e: Event, budgetItem: BudgetItem) {
    let input = e.target as HTMLInputElement;
    budgetItem.amount = dollarStringToNumber(input.value);
    input.value = numberToDollarString(budgetItem.amount);
  }

  function updateSelectedFilter(value: string) {
    budget.selectedFilterIndex = budget.filters.findIndex((filter) => filter.name == value);
  }
</script>

<Card.Root class="max-w-[500px] m-auto">
  <Card.Header>
    <div class="pl-1 flex flex-row items-center">
      <Input
        bind:value={category.name}
        class="border-none w-min text-lg font-medium max-w-[10rem]"
        style="field-sizing: content;"
      />
      <Button
        variant="ghost"
        class="hover:bg-transparent pl-1"
        onclick={() => (category.expanded = !category.expanded)}
      >
        {#if category.expanded}
          <ChevronUp class="stroke-blue-500" />
        {:else}
          <ChevronDown class="stroke-blue-500" />
        {/if}
      </Button>
      <div class="grow"></div>

      {#if category.expanded}
        <Select.Root
          value={budget.filters[budget.selectedFilterIndex].name}
          type="single"
          onValueChange={updateSelectedFilter}
        >
          <Select.Trigger
            chevron="right"
            class="border-none w-auto font-medium"
            style="field-sizing: content;"
          >
            <span class="pr-2">{budget.filters[budget.selectedFilterIndex].name}</span>
          </Select.Trigger>
          <Select.Content>
            {#each budget.filters as filter, i}
              <Select.Item value={filter.name}>{filter.name}</Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      {:else}
        <div class="pr-4">{total}</div>
      {/if}
    </div>
  </Card.Header>
  <Card.Content class="pt-0">
    {#if category.expanded}
      <Table.Root>
        <Table.Body>
          {#each category.budgetItems as budgetItem, i}
            <Table.Row
              onclick={(e) => {
                e.stopPropagation();
                budgetItemClicked(i);
              }}
              onfocusin={(e) => {
                e.stopPropagation();
                budgetItemClicked(i);
              }}
              class={"flex items-center"}
            >
              <Table.Cell class="px-2"
                ><Input
                  bind:value={budgetItem.name}
                  class="w-auto max-w-[10rem]"
                  style="field-sizing: content;"
                /></Table.Cell
              >
              <div class="grow"></div>
              {#if budget.selectedFilterIndex == 0}
                <Table.Cell class="flex justify-end">
                  <div class="flex flex-row items-baseline gap-2">
                    <FrequencyPicker bind:frequency={budgetItem.frequency}></FrequencyPicker>
                    <Input
                      class="w-auto max-w-[5rem] text-right"
                      value={numberToDollarString(budgetItem.amount)}
                      style="field-sizing: content;"
                      onchange={(e) => updateBudgetItem(e, budgetItem)}
                    />
                  </div>
                </Table.Cell>
              {:else}
                <Table.Cell class="flex justify-end">
                  <div class="italic">
                    {numberToDollarString(
                      changeFrequency(
                        budgetItem.amount,
                        budgetItem.frequency,
                        budget.filters[budget.selectedFilterIndex].frequency
                      )
                    )}
                  </div>
                </Table.Cell>
              {/if}
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    {/if}
  </Card.Content>
</Card.Root>
