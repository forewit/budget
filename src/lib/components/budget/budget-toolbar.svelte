<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Settings from "lucide-svelte/icons/settings";
  import Pencil from "lucide-svelte/icons/pencil";
  import { cn } from "$lib/utils";

  import { getBudgetContext } from "./budget.svelte";

  let { class: className = "" } = $props();

  const budget = getBudgetContext();
</script>

  <Card.Root class={cn("flex flex-row justify-between items-center rounded-xl shadow-2xl", className)}>
    <Card.Content class="flex flex-row items-center gap-2 p-2">
      <Button variant="ghost" class="hover:bg-transparent">
        <Settings class="w-4 h-4" />
      </Button>
      <Button variant="ghost" class="hover:bg-transparent">
        <Pencil class="w-4 h-4" />
      </Button>

      <ToggleGroup.Root type="single">
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
        <ToggleGroup.Item value="c">C</ToggleGroup.Item>
      </ToggleGroup.Root>

      <Select.Root
        type="single"
        value={budget.filters[budget.selectedFilterIndex].name}
        onValueChange={(value) => {
          budget.selectedFilterIndex = budget.filters.findIndex((f) => f.name == value);
        }}
      >
        <Select.Trigger class="justify-self-end w-28">
          {budget.filters[budget.selectedFilterIndex].name}
        </Select.Trigger>
        <Select.Content>
          {#each budget.filters as filter, i}
            <Select.Item value={filter.name}>{filter.name}</Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Card.Content>
  </Card.Root>
