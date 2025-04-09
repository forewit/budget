<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  export type BlockProps = {
    lock: boolean;
    highlight?: boolean;
    class?: string;
    id: string;
  };

  let {
    lock = false,
    highlight = false,
    class: className = "",
    children,
    ...restProps
  }: BlockProps & HTMLAttributes<HTMLSpanElement> = $props();

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

<span
  bind:this={elm}
  class={cn(
    "align-baseline cursor-pointer p-1 px-2 select-none bg-foreground text-background rounded-full text-xs font-medium",
    highlight && "ring-2 ring-primary",
    lock && "opacity-50",
    className
  )}
  {...restProps}
>
  <!-- &ensp is REQUIRED by the editor so that textlength is > 0 -->
  &ensp;
  {@render children?.()}
</span>
