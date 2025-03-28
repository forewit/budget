<script lang="ts">
  import { type Frequency, getFrequencyName } from "./budget.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { cn } from "$lib/utils";
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { tick } from "svelte";

  let {
    frequency = $bindable(),
    class: className = "",
    open = $bindable(false),
    disabled = false,
  }: {
    frequency: Frequency;
    class?: string;
    open?: boolean;
    disabled?: boolean;
  } = $props();

  let delayedCloseTimer: ReturnType<typeof setTimeout>;

  function delayClose() {
    if (disabled) return;
    delayedCloseTimer = setTimeout(() => {
      open = false;
    }, 1);
  }

  function stopDelayClose() {
    if (open) clearTimeout(delayedCloseTimer);
  }

  let inputRef: HTMLInputElement | null = $state(null);

  async function onOpenChange() {
    stopDelayClose();
    await tick();

    if (inputRef) {
      inputRef.select();
    }
  }

  function validateInterval(value: number | string) {
    // Convert to number and ensure it's a positive integer
    const parsedValue = Number(value);
    
    // Check if it's a valid positive number
    if (isNaN(parsedValue) || parsedValue <= 0 || !Number.isInteger(parsedValue)) {
      // Default to 1 if invalid
      frequency.interval = 1;
    } else {
      frequency.interval = parsedValue;
    }
  }
</script>

<Collapsible.Root bind:open class={cn("flex h-8", className)} {onOpenChange}>
  {#if !open}
    <Collapsible.Trigger
      class={cn(
        "px-3 bg-primary/10 text-right text-nowrap outline-offset-2 rounded-lg hover:underline underline-offset-4 font-medium text-xs border-input ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        disabled && "hover:no-underline"
      )}
      {disabled}
    >
      {getFrequencyName(frequency)}
    </Collapsible.Trigger>
  {/if}
  <Collapsible.Content onfocusin={stopDelayClose} onfocusout={delayClose}>
    <div class="px-1 flex flex-row items-center gap-1 w-min h-full bg-primary/20 rounded-lg">
      <Collapsible.Trigger
        class={cn(
          "font-medium text-xs h-min pl-1 pr-0.5 py-1 hover:underline underline-offset-4 border-input rounded-md ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          disabled && "hover:no-underline"
        )}
        {disabled}
        >every
      </Collapsible.Trigger>
      <Input
        bind:value={frequency.interval}
        bind:ref={inputRef}
        onfocusout={(e) => validateInterval(e.currentTarget.value)}
        type="number"
        inputmode="decimal"
        class="w-auto max-w-[3rem] h-min py-1 font-medium md:text-xs text-xs appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
