<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import ChevronUp from "lucide-svelte/icons/chevron-up";
  import { type Category } from "$lib/components/budget/budget.svelte";
  import { getBudgetContext } from "$lib/components/budget/budget.svelte";

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
        <Select.Root type="single" bind:value={budget.selectedFilter}>
          <Select.Trigger class="border-none w-auto font-medium" style="field-sizing: content;">
            <span class="pr-2">{budget.selectedFilter}</span>
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
              class={"relative" + (selectedItem == i ? " after:pointer-events-none after:absolute after:border-2 after:border-blue-300 after:rounded after:inset-0" : "")}
            >
              <Table.Cell class="px-2 py-0"
                ><Input
                  bind:value={budgetItem.name}
                  class="z-20 border-none w-auto max-w-[10rem]"
                  style="field-sizing: content;"
                /></Table.Cell
              >
              <Table.Cell class="flex justify-end ">
                <Input
                  class="border-none w-auto max-w-[5rem] text-right"
                  bind:value={budgetItem.amount}
                  style="field-sizing: content;"
                />
              </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    {/if}
  </Card.Content>
</Card.Root>