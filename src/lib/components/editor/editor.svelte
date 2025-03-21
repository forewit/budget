<script lang="ts">
  import { cn } from "$lib/utils.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { mount, unmount } from "svelte";
  import Block, { type BlockProps } from "./block.svelte";

  let { class: className = "" } = $props();

  let editorRef: HTMLElement;
  let nextId = 1;
  let content: (string | { id: string; props: BlockProps })[] = [];
  let blocks: Record<string, Block> = {};

  export function handleKeyDown(event: KeyboardEvent) {
    // backspace
    // delete
    // "/"
  }

  export function handlePaste(event: ClipboardEvent) {}

  export function handleCut(event: ClipboardEvent) {}

  export function handleCopy(event: ClipboardEvent) {}

  export function insertComponent(dom: HTMLElement, props: BlockProps) {
    blocks[(nextId++).toString()] = mount(Block, { target: dom, props });
  }
</script>

<div
  bind:this={editorRef}
  role="textbox"
  tabindex="0"
  spellcheck="false"
  onkeydown={handleKeyDown}
  contenteditable="plaintext-only"
  style="line-height:2rem"
  class="cursor-text leading-10 text-left w-full min-h-[82px] px-3 py-2 bg-background rounded-md border border-input ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:text-sm"
>
  placeholder
</div>

<p class="text-right pt-4 pr-2 text-xs text-muted-foreground">Press / to insert a link</p>
