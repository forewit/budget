<script lang="ts">
  import { type Frequency, getFrequencyName } from "./budget.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import Check from "lucide-svelte/icons/check";
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import Button from "$lib/components/ui/button/button.svelte";

  let { frequency = $bindable(), class: className = "" }: { frequency: Frequency; class?: string } = $props();

  let open = $state(false);
</script>

<Collapsible.Root bind:open class="flex {className}">
  <Collapsible.Trigger>
    {#if !open}
      <Button variant="link" class="text-xs">{getFrequencyName(frequency)}</Button>
    {/if}
  </Collapsible.Trigger>
  <Collapsible.Content>
    <div class="flex flex-row items-center gap-1 w-min bg-blue-50 rounded-lg p-1 pl-2">
      <p class="font-medium text-xs">Every</p>
      <Input
        bind:value={frequency.interval}
        type="number"
        class="w-auto max-w-[5rem] h-min py-1 px-2 md:text-xs text-xs"
        style="field-sizing: content;"
      />
      <Select.Root bind:value={frequency.unit} type="single">
        <Select.Trigger class="w-auto text-xs font-medium p-1 h-min" style="field-sizing: content;">
          <span class="pr-2">{frequency.unit}s</span>
        </Select.Trigger>
        <Select.Content>
          {#each ["day", "week", "month", "year"] as unit}
            <Select.Item value={unit}>{unit}s</Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
      <Collapsible.Trigger>
          <Button variant="link" class="rounded-full h-min p-1" >
            <Check class="stroke-blue-500"/>
          </Button>
      </Collapsible.Trigger>
    </div>
  </Collapsible.Content>
</Collapsible.Root>
