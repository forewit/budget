<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { tick } from "svelte";
  import Block, { type BlockProps } from "./block.svelte";

  let { class: className = "" } = $props();

  let editorRef: HTMLElement;
  let editorContent: (string | BlockProps)[] = $state([]);
  let selectionStart = $state(0);
  let selectionEnd = $state(0);

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

    const nodes = [...editorRef.childNodes].filter((n) => n.textContent?.length ?? 0 > 0);

    let start = 0,
      end = 0,
      startOffset = 0,
      endOffset = 0;

    for (let node of nodes) {
      if (node === range.startContainer) start = startOffset + range.startOffset;
      if (node === range.endContainer) end = endOffset + range.endOffset;
      endOffset++;
      startOffset++;
    }
    if (range.startContainer === editorRef) {
      start = range.startOffset <= 0 ? 0 : nodes.length;
    }
    if (range.endContainer === editorRef) {
      end = range.endOffset <= 0 ? 0 : nodes.length;
    }

    selectionStart = start;
    selectionEnd = end;
  }

  async function setSelection(start: number, end: number) {
    await tick();

    const nodes = [...editorRef.childNodes].filter((n) => n.textContent?.length ?? 0 > 0);

    start = Math.max(0, Math.min(start, nodes.length));
    end = Math.max(0, Math.min(end, nodes.length));

    const range = document.createRange();
    if (start === 0) range.setStart(editorRef, 0);
    else range.setStart(nodes[start - 1], 1);
    if (end === 0) range.setEnd(editorRef, 0);
    else range.setEnd(nodes[end - 1], 1);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight" || (e.key === "a" && e.ctrlKey)) {
      return;
    }

    e.preventDefault();
    const key = e.key;

    if (isValidChar(key)) {
      editorContent.splice(selectionStart, selectionEnd - selectionStart);
      editorContent.splice(selectionStart, 0, key);
      setSelection(selectionStart + 1, selectionStart + 1);
    }

    if (key === "Backspace") {
      if (selectionEnd === selectionStart && selectionStart > 0) {
        editorContent.splice(selectionStart - 1, 1);
        setSelection(selectionStart - 1, selectionStart - 1);
      } else {
        editorContent.splice(selectionStart, selectionEnd - selectionStart);
        setSelection(selectionStart, selectionStart);
      }
    }

    if (key === "Delete") {
      if (selectionEnd === selectionStart) {
        editorContent.splice(selectionStart, 1);
        setSelection(selectionStart, selectionStart);
      } else {
        editorContent.splice(selectionStart, selectionEnd - selectionStart);
        setSelection(selectionStart, selectionStart);
      }
    }

    if (e.key === "@") {
      editorContent.splice(selectionStart, selectionEnd - selectionStart);
      editorContent.splice(selectionStart, 0, { lock: true });
      setSelection(selectionStart + 1, selectionStart + 1);
    }
  }

  function handlePaste(event: ClipboardEvent) {}

  function handleCut(event: ClipboardEvent) {}

  function handleCopy(event: ClipboardEvent) {}

  // 😥 DONT DO THIS
  function handleDrop(event: DragEvent) {}
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
      <p class="inline-block" data-component="block">
        <span contenteditable="false">
          <Block {...item} />
        </span>
      </p>
    {/if}
  {/each}
</div>
<div class="flex justify-between">
  <p class="text-left pt-4 pr-2 text-xs text-muted-foreground">
    Selection: {selectionStart}, {selectionEnd}
  </p>
  <p class="text-right pt-4 pr-2 text-xs text-muted-foreground">Type @ to insert a link</p>
</div>
