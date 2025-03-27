<script lang="ts">
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
  import Pencil from "lucide-svelte/icons/pencil";
  import { cn } from "$lib/utils";

  import { getBudgetContext } from "./budget.svelte";

  let { class: className = "" } = $props();

  const budget = getBudgetContext();
</script>

<ToggleGroup.Root
  onValueChange={(v) => {
    budget.selectedFilterIndex = parseInt(v);
  }}
  type="single"
  orientation="vertical"
  class={cn("flex flex-col bg-background rounded-xl shadow-2xl px-1 py-2", className)}
>
  <ToggleGroup.Item value="0"><Pencil class="w-4 h-4" /></ToggleGroup.Item>
  <ToggleGroup.Item value="1">M</ToggleGroup.Item>
  <ToggleGroup.Item value="2">2W</ToggleGroup.Item>
  <ToggleGroup.Item value="3">Y</ToggleGroup.Item>
</ToggleGroup.Root>
