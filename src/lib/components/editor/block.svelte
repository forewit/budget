<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { onDestroy } from "svelte";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Button from "../ui/button/button.svelte";

  export type BlockProps = {
    lock?: boolean;
    highlight?: boolean;
  };

  let { highlight = false }: BlockProps = $props();

  let elm: HTMLElement;
  let error = $state(false);

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

  onDestroy(() => {
    //console.log("💥 destroyed");
  });
</script>

<svelte:document on:selectionchange={highlightOnSelect} />

<button
  bind:this={elm}
  class={cn(
    "mx-0.5 cursor-pointer p-1 select-none bg-foreground text-background rounded text-xs inline-block",
    error && "ring-1 ring-red-500",
    highlight && "ring-2 ring-primary"
  )}
  onclick={() => {
    error = !error;
  }}
>
  Block
  <ChevronRight class="inline-block size-3" />
  <ChevronRight class="inline-block size-3" />
  <div class="inline-block">
    <p class="inline-block text-xs text-muted-foreground">test</p>
    <p class="inline-block text-xs text-muted-foreground">test</p>
  </div>
</button>
