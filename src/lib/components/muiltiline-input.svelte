<script lang="ts">
  import { cn } from "$lib/utils";
  let {
    value = $bindable(""),
    placeholder = "",
    class: className = "",
  }: { value?: string; placeholder?: string; class?: string } = $props();

  let showPlaceholder = $derived(!value.trim());
</script>

<div
  bind:innerText={value}
  contenteditable="plaintext-only"
  aria-roledescription="textbox"
  {placeholder}
  spellcheck="false"
  class={cn(
    "before:opacity-50 before:pointer-events-none",
    "ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "align-bottom h-min p-1 rounded-md font-medium text-2xl md:text-2xl text-medium",
    showPlaceholder && "before:content-[attr(placeholder)]",
    className
  )}
></div>
