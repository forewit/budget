<script lang="ts">
  import { cn } from "$lib/utils";
  let {
    value = $bindable(""),
    placeholder = "",
    class: className = "",
  }: { value?: string; placeholder?: string; class?: string } = $props();

  let showPlaceholder = $derived(!(value.length > 0));

  function oninput() {
    value = value.replace(/\n/g, "");
    
  }
</script>

<div
  contenteditable="plaintext-only"
  aria-roledescription="textbox"
  {oninput}
  {placeholder}
  spellcheck="false"
  class={cn(
    "ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "px-3 py-2 h-min rounded-md font-medium text-2xl md:text-2xl text-medium",
    showPlaceholder &&
      "before:content-[attr(placeholder)] before:opacity-50 before:pointer-events-none",
    className
  )}
>{value}</div>
