<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import ChevronUp from "lucide-svelte/icons/chevron-up";

  let title = "Giving";
  let lineItems = [
    { name: "Church", amount: 100, frequency: { interval: 1, unit: "month" } },
    { name: "Missionaries", amount: 50, frequency: { interval: 2, unit: "week" } },
    { name: "Generosity", amount: 200, frequency: { interval: 1, unit: "month" } },
  ];
  let expanded = $state(true);
  let filter = $state("Actual");
  let total = $state(100);
</script>

<Card.Root class="max-w-[500px] m-auto">
  <Card.Header>
    <div class="pl-1 flex flex-row items-center">
      <Input
        value={title}
        class="border-none w-min text-lg font-medium max-w-[200px]"
        style="field-sizing: content;"
      />
      <Button
        variant="ghost"
        class="hover:bg-transparent pl-1"
        onclick={() => (expanded = !expanded)}
      >
        {#if expanded}
          <ChevronUp class="stroke-blue-500" />
        {:else}
          <ChevronDown class="stroke-blue-500" />
        {/if}
      </Button>
      <div class="grow"></div>

      {#if expanded}
        <Select.Root type="single" bind:value={filter}>
          <Select.Trigger class="border-none w-auto font-medium" style="field-sizing: content;">
            <span class="pr-2">{filter}</span>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="Actual">Actual</Select.Item>
            <Select.Item value="Biweekly">Biweekly</Select.Item>
            <Select.Item value="Monthly">Monthly</Select.Item>
            <Select.Item value="Yearly">Yearly</Select.Item>
            <Select.Item value="Custom">Custom</Select.Item>
          </Select.Content>
        </Select.Root>
      {:else}
        <div class="pr-4">{total}</div>
      {/if}
    </div>
  </Card.Header>
  <Card.Content class="pt-0">
    {#if expanded}
      <Table.Root>
        <Table.Body>
          {#each lineItems as lineItem}
            <Table.Row>
              <Table.Cell class="px-2 py-0"
                ><Input
                  bind:value={lineItem.name}
                  class="border-none w-auto max-w-[10rem]"
                  style="field-sizing: content;"
                /></Table.Cell
              >
              <Table.Cell class="flex justify-end ">
                <Input
                  class="border-none w-auto max-w-[5rem] text-right"
                  bind:value={lineItem.amount}
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
