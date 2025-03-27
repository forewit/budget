<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { onMount, tick } from "svelte";
  import Block, { type BlockProps } from "./block.svelte";

  let { class: className = "" } = $props();

  let editorRef: HTMLElement;
  let editorContent: (string | BlockProps)[] = $state([]);
  let selectionStart = $state(0);
  let selectionEnd = $state(0);

  function syncSelection() {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    if (!editorRef.contains(range.startContainer) || !editorRef.contains(range.endContainer))
      return;

    const nodes = [...editorRef.childNodes].filter((n) => n.textContent?.length ?? 0 > 0);

    if (nodes.length === 0) {
      selectionStart = 0;
      selectionEnd = 0;
      return;
    }

    let start = 0,
      end = 0,
      startOffset = 0,
      endOffset = 0;

    for (let node of nodes) {
      if (node === range.startContainer) start = startOffset + (range.startOffset > 0 ? 1 : 0);
      if (node === range.endContainer) end = endOffset + (range.endOffset > 0 ? 1 : 0);
      endOffset++;
      startOffset++;
    }
    if (range.startContainer === editorRef) {
      if (range.startOffset <= 0) start = 0;
      else start = nodes.length;
    }
    if (range.endContainer === editorRef) {
      if (range.endOffset <= 0) end = 0;
      else end = nodes.length;
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
    else if (start === nodes.length) range.setStart(nodes[start - 1], 1);
    else range.setStart(nodes[start], 0);

    if (end === 0) range.setEnd(editorRef, 0);
    else if (end === nodes.length) range.setEnd(nodes[end - 1], 1);
    else range.setEnd(nodes[end], 0);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  function safeDelete(behavior = "selection-only" as "delete" | "backspace" | "selection-only") {
    if (editorContent.length === 0) return;

    if (selectionStart === selectionEnd) {
      if (behavior === "delete") selectionEnd = Math.min(editorContent.length, selectionEnd + 1);
      else if (behavior === "backspace") selectionStart = Math.max(0, selectionStart - 1);
      else return;
    }

    editorContent = editorContent.filter(
      (item, index) =>
        index < selectionStart || index >= selectionEnd || (typeof item !== "string" && item.lock)
    );

    setSelection(selectionStart, selectionStart);
  }

  const VALID_CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%^&*()_+-=[]{}|;':\",/.<>?";

  async function safeInsert(...items: (string | BlockProps)[]) {
    const content = items.filter(
      (item) =>
        (typeof item === "string" && item.length === 1 && VALID_CHARS.includes(item)) ||
        (typeof item === "object" && item.type !== undefined)
    );
    if (content.length === 0) return;

    safeDelete("selection-only");
    editorContent.splice(selectionStart, 0, ...content);
    setSelection(selectionStart + content.length, selectionStart + content.length);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "Tab" ||
      (e.key === "a" && e.ctrlKey)
    ) {
      return;
    }

    e.preventDefault();
    const key = e.key;

    switch (key) {
      case "Backspace":
        safeDelete("backspace");
        break;
      case "Delete":
        safeDelete("delete");
        break;
      case "@":
        safeInsert({ type: "A", lock: false });
        break;
      default:
        safeInsert(key);
        break;
    }
  }

  function onBlockClick(index: number) {
    console.log("button clicked", index);
    setSelection(index, index + 1);
  }

  function handlePaste(event: ClipboardEvent) {}
  function handleCut(event: ClipboardEvent) {}
  function handleCopy(event: ClipboardEvent) {}
  function handleDrop(event: DragEvent) {} // 😥 DONT DO THIS -scope creep-

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
    "cursor-text leading-10 text-left w-full min-h-[82px] px-3 py-2 bg-background rounded-md border border-input ring-offset-background focus-within:ring-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 md:text-sm",
    className
  )}
>
  {#each editorContent as item, i}
    {#if typeof item === "string"}
      {item}
    {:else}
      <p class="inline-block">
        <Block {...item} onclick={() => onBlockClick(i)} contenteditable="false" />
      </p>
    {/if}
  {/each}
</div>

  <p class="text-right pt-4 text-xs text-muted-foreground">Type @ to insert a link</p>

  <!-- <p class="text-left pt-4 pr-2 text-xs text-muted-foreground">
    Selection: {selectionStart}, {selectionEnd}
  </p> -->
