<script lang="ts">
  import { cn } from "$lib/utils";
  import { numberToDollarString, dollarStringToNumber } from "./budget.svelte";

  let {
    value = $bindable(0),
    disabled = false,
    class: className = "",
  }: {
    value?: number;
    disabled?: boolean;
    class?: string;
  } = $props();

  // svelte-ignore non_reactive_update
  let elm: HTMLDivElement;
  let dollarString = $state(numberToDollarString(value));

  function updateValue() {
    value = dollarStringToNumber(dollarString);
    dollarString = numberToDollarString(value);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateValue();
      elm.blur();
    }
  }

  function selectAllContent(event: FocusEvent) {
    const el = event.target as HTMLElement;
    if (el) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(el);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }

  function clearSelection() {
    const selection = window.getSelection();
    selection?.removeAllRanges();
  }
</script>

{#if disabled}
  <div
    bind:this={elm}
    class={cn(
      "flex items-center justify-end h-10 pl-3 pr-2 rounded-md border border-input cursor-text md:text-sm",
      className
    )}
  >
    {numberToDollarString(value)}
  </div>
{:else}
  <div
    bind:this={elm}
    bind:innerText={dollarString}
    contenteditable="plaintext-only"
    role="textbox"
    tabindex="0"
    inputmode="decimal"
    class={cn(
      "ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "overflow-hidden flex items-center justify-end h-10 pl-3 pr-2 rounded-md border border-input cursor-text md:text-sm",
      className
    )}
    onfocusout={() => {
      updateValue();
      clearSelection();
    }}
    onkeydown={handleKeyDown}
    onfocusin={selectAllContent}
  >
    {numberToDollarString(value)}
  </div>
{/if}
