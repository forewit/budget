<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { onDestroy } from "svelte";

  export type BlockProps = {
    lock?: boolean;
    highlight?: boolean;
  };

  let { highlight = false }: BlockProps = $props();

  let elm: HTMLElement;

  function highlightOnSelect() {
    const selection = window.getSelection();

    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const elmRange = document.createRange();
    elmRange.selectNodeContents(elm);

    highlight = range.intersectsNode(elm);
  }

  onDestroy(() => {
    console.log("💥 destroyed");
  });
</script>

<svelte:document on:selectionchange={highlightOnSelect} />

<div
  bind:this={elm}
  contenteditable="false"
  class={cn(
    "cursor-pointer p-1 select-none bg-foreground text-background rounded text-xs inline-block",
    highlight && "ring-2 ring-primary"
  )}
>
  Block
</div>
