<script lang="ts">
  import { cn } from "$lib/utils.js";

  export type BlockProps = {
    lock?: boolean;
    highlight?: boolean;
  };

  let { lock = false, highlight = false }: BlockProps = $props();
  let elm: HTMLSpanElement | undefined = $state();

  function handleClick() {
    if (lock) return; // Prevent deletion if locked
    if (!elm) return;
    console.log("clicked");
    // delete this component
    elm.parentElement?.remove();
  }
</script>

<button
  bind:this={elm}
  onclick={handleClick}
  class={cn(
    "cursor-pointer p-1 select-none bg-foreground text-background rounded text-xs inline-block",
    lock && "opacity-50",
    highlight && "ring-2 ring-primary"
  )}
  title={lock ? "This link is locked" : "Click to remove"}
>
  Block
</button>
