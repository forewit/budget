<script lang="ts">
  import { cn } from "$lib/utils";
  import { numberToDollarString, dollarStringToNumber } from "./budget.svelte";

  let {
    value = $bindable(0),
    disabled = false,
    class: className = "",
  }: { value?: number; disabled?: boolean; class?: string } = $props();

  function updateValue(e: Event) {
    let div = e.target as HTMLDivElement;
    value = dollarStringToNumber(div.innerText);
    div.innerText = numberToDollarString(value);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") e.preventDefault();
  }
</script>

<div
  contenteditable="plaintext-only"
  role="textbox"
  tabindex="0"
  class={cn(
    "ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:text-sm",
    "flex items-center justify-end h-10 pl-3 pr-2 rounded-md border border-input cursor-text",
    disabled && "pointer-events-none",
    className
  )}
  onfocusout={(e) => updateValue(e)}
  onkeydown={handleKeyDown}
>
  {numberToDollarString(value)}
</div>
