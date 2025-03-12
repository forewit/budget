<script lang="ts">
  import { type Frequency, getFrequencyName } from "./budget.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import Button from "$lib/components/ui/button/button.svelte";

  let {
    frequency = $bindable(),
    class: className = "",
    open = $bindable(false),
  }: { frequency: Frequency; class?: string; open?: boolean } = $props();

  let delayedCloseTimer: ReturnType<typeof setTimeout>;
  function delayClose() {
    delayedCloseTimer = setTimeout(() => {
      open = false;
    }, 1000);
  }

  function stopDelayClose() {
    if (delayedCloseTimer) {
      clearTimeout(delayedCloseTimer);
    }
  }
</script>

<Collapsible.Root bind:open class="flex {className}">
  {#if !open}
    <Collapsible.Trigger
      class="outline-offset-2 p-2 rounded-lg hover:underline underline-offset-4 font-medium text-xs"
    >
      {getFrequencyName(frequency)}
    </Collapsible.Trigger>
  {/if}
  <Collapsible.Content onfocusin={stopDelayClose} onfocusout={delayClose}>
    <div class="flex flex-row items-center gap-1 w-min bg-muted rounded-lg p-1 pl-2">
      <Collapsible.Trigger
        class="outline-offset-2 rounded-sm hover:underline underline-offset-4 font-medium text-xs p-0 h-min px-1"
        >every
      </Collapsible.Trigger>
      <Input
        bind:value={frequency.interval}
        type="number"
        class="w-auto max-w-[3rem] h-min py-1 pr-0 font-medium md:text-xs text-xs"
        style="field-sizing: content;"
      />
      <Select.Root bind:value={frequency.unit} type="single">
        <Select.Trigger class="w-auto text-xs font-medium p-1 h-min" style="field-sizing: content;">
          <span class="px-1">{frequency.unit}s</span>
        </Select.Trigger>
        <Select.Content>
          {#each ["day", "week", "month", "year"] as unit}
            <Select.Item value={unit}>{unit}s</Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
  </Collapsible.Content>
</Collapsible.Root>
