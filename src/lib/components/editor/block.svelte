<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  export type BlockProps = {
    type: "A" | "B" | "C";
    lock: boolean;
    highlight?: boolean;
    class?: string;
    onclick?: () => void;
  };

  let {
    type,
    lock = false,
    highlight = false,
    class: className = "",
    onclick = () => {},
    ...restProps
  }: BlockProps & HTMLAttributes<HTMLButtonElement> = $props();

  let elm: HTMLElement;

  function highlightOnSelect() {
    const selection = window.getSelection();

    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);

    highlight =
      range.intersectsNode(elm) ||
      range.startContainer === elm ||
      range.endContainer === elm ||
      range.commonAncestorContainer === elm;
  }
</script>

<svelte:document on:selectionchange={highlightOnSelect} />
<button
  bind:this={elm}
  class={cn(
    "align-baseline cursor-pointer p-1 px-2 select-none bg-foreground text-background rounded-full text-xs font-medium",
    highlight && "ring-2 ring-primary",
    lock && "opacity-50",
    className
  )}
  {onclick}
  {...restProps}
>
  Block
</button>
