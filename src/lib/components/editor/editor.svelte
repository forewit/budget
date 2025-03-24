<script lang="ts">
  import { cn } from "$lib/utils.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { mount, tick, unmount } from "svelte";
  import Block, { type BlockProps } from "./block.svelte";

  let { class: className = "" } = $props();

  let editorRef: HTMLElement;
  let editorContent: (string | BlockProps)[] = $state([]);
  let selectionStart = 0;
  let selectionEnd = 0;

  const VALID_CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%^&*()_+-=[]{}|;':\",/.<>?";
  function isValidChar(char: string) {
    return VALID_CHARS.includes(char);
  }

  function syncSelection() {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    if (!editorRef.contains(range.startContainer) || !editorRef.contains(range.endContainer))
        return;

    let start = 0, end = 0, offset = 0;
    let lastBlock: HTMLElement | null = null;
    
    function traverse(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const textLength = node.textContent?.length ?? 0;
            if (node === range.startContainer) start = offset + range.startOffset;
            if (node === range.endContainer) end = offset + range.endOffset;
            offset += textLength;
        } else if (node instanceof HTMLElement && node.dataset.component === "block") {
            lastBlock = node; // Track last block for edge case handling
            if (node === range.startContainer || node.contains(range.startContainer)) start = offset;
            if (node === range.endContainer || node.contains(range.endContainer)) end = offset;
            offset += 1; // Treat block as a single character
        } else {
            for (let child of node.childNodes) traverse(child);
        }
    }

    traverse(editorRef);

    // **Handle the last block case**
    if (selection.anchorNode === editorRef && selection.anchorOffset === editorRef.childNodes.length) {
        selectionStart = selectionEnd = offset; // Set to total length
    } else {
        selectionStart = start;
        selectionEnd = end;
    }

    console.log(selectionStart, selectionEnd);
}

  function getNodeForCharacterOffset(
    root: Node,
    offset: number
): { node: Node; offset: number } | null {
    let currentOffset = 0;

    for (let node of root.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            const textLength = node.textContent?.length ?? 0;
            if (currentOffset + textLength >= offset) {
                return { node, offset: offset - currentOffset };
            }
            currentOffset += textLength;
        } else if (node instanceof HTMLElement && node.dataset.component === "block") {
            if (currentOffset === offset) return { node, offset: 0 };
            currentOffset += 1; // Treat as a single character
        } else {
            const result = getNodeForCharacterOffset(node, offset - currentOffset);
            if (result) return result;
        }
    }
    return null;
}

  async function setSelection(start: number, end: number) {
    await tick();

    const startData = getNodeForCharacterOffset(editorRef, start);
    const endData = getNodeForCharacterOffset(editorRef, end);

    if (startData && endData) {
      const range = document.createRange();
      range.setStart(startData.node, startData.offset);
      range.setEnd(endData.node, endData.offset);

      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      return;
    }

    e.preventDefault();
    const key = e.key;

    if (isValidChar(key)) {
      // remove everything from selectionStart to selectionEnd
      editorContent.splice(selectionStart, selectionEnd - selectionStart);
      // insert character at selectionStart
      editorContent.splice(selectionStart, 0, key);
      setSelection(selectionStart + 1, selectionStart + 1);
    }

    if (key === "Backspace") {
      if (selectionEnd === selectionStart && selectionStart > 0) {
        // remove character at selectionStart
        editorContent.splice(selectionStart - 1, 1);
        setSelection(selectionStart - 1, selectionStart - 1);
      } else {
        // remove everything from selectionStart to selectionEnd
        editorContent.splice(selectionStart, selectionEnd - selectionStart);
        setSelection(selectionStart, selectionStart);
      }
    }

    if (key === "Delete") {
      if (selectionEnd === selectionStart) {
        // remove character at selectionStart
        editorContent.splice(selectionStart, 1);
        setSelection(selectionStart, selectionStart);
      } else {
        // remove everything from selectionStart to selectionEnd
        editorContent.splice(selectionStart, selectionEnd - selectionStart);
        setSelection(selectionStart, selectionStart);
      }
    }

    if (e.key === "@") {
      // remove everything from selectionStart to selectionEnd
      editorContent.splice(selectionStart, selectionEnd - selectionStart);
      // insert Block at selectionStart
      editorContent.splice(selectionStart, 0, { lock: true });
      setSelection(selectionStart + 1, selectionStart + 1);

      log();
    }
  }

  function handlePaste(event: ClipboardEvent) {}

  function handleCut(event: ClipboardEvent) {}

  function handleCopy(event: ClipboardEvent) {}

  // 😥 DONT DO THIS
  function handleDrop(event: DragEvent) {}

  async function log() {
    await tick();
    await tick();
    console.log($state.snapshot(editorContent));
  }
</script>

<svelte:document onselectionchange={syncSelection} />

<div
  bind:this={editorRef}
  role="textbox"
  tabindex="0"
  spellcheck="false"
  onkeydown={handleKeyDown}
  contenteditable="plaintext-only"
  style="line-height:2rem"
  class={cn(
    "cursor-text leading-10 text-left w-full min-h-[82px] px-3 py-2 bg-background rounded-md border border-input ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:text-sm",
    className
  )}
>
  {#each editorContent as item}
    {#if typeof item === "string"}
      {item}
    {:else}
    <span data-component="block">
      <Block {...item} />
    </span>
    {/if}
  {/each}
</div>

<p class="text-right pt-4 pr-2 text-xs text-muted-foreground">Type @ to insert a link</p>
