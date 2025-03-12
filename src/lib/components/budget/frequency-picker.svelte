<script lang="ts">
  import { type Frequency, getFrequencyName } from "./budget.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import Button from "../ui/button/button.svelte";

  let { frequency = $bindable() }: { frequency: Frequency } = $props();
</script>

<Popover.Root>
  <Popover.Trigger>
    <Button variant="link">{getFrequencyName(frequency)}</Button>
  </Popover.Trigger>
  <Popover.Content class="flex flex-row items-baseline gap-4 w-min">
    <p>Every</p>
    <Input
      bind:value={frequency.interval}
      type="number"
      class="w-auto max-w-[10rem]"
      style="field-sizing: content;"
    />
    <Select.Root bind:value={frequency.unit} type="single">
      <Select.Trigger class="w-auto font-medium" style="field-sizing: content;">
        <span class="pr-2">{frequency.unit}s</span>
      </Select.Trigger>
      <Select.Content>
        {#each ["day", "week", "month", "year"] as unit}
          <Select.Item value={unit}>{unit}s</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
  </Popover.Content>
</Popover.Root>
