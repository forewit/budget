<script lang="ts">
  import { mount } from "svelte";
  import { cn } from "$lib/utils.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import ItemLink from "./item-link.svelte";

  let editorRef: HTMLElement | undefined = $state();

  let { class: className = "" } = $props();

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "/") {
      event.preventDefault();
      insertComponent();
    }
  }

  function insertComponent() {
    if (!editorRef) return;
    editorRef.focus();
  
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      // create and mount an ItemLink component
      const componentElement = document.createElement("span");
      componentElement.contentEditable = "false";
      range.insertNode(componentElement);
      mount(ItemLink, { target: componentElement });

      // Move cursor after the inserted component
      const newRange = document.createRange();
      newRange.setStartAfter(componentElement);
      newRange.collapse(false);
      selection.removeAllRanges();
      selection.addRange(newRange);
    }
  }
</script>

<div class={cn("grid gap-2", className)}>
  <button onkeydown={handleKeyDown}>
    <div
      bind:this={editorRef}
      contenteditable="plaintext-only"
      class="cursor-text text-left w-full min-h-[80px] px-3 py-2 bg-background rounded-md border border-input ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:text-sm"
    >
      Placeholder
    </div>
  </button>

  <Button class="w-min justify-self-end" onclick={insertComponent}>Insert</Button>
</div>
