<script lang="ts">
  import { cn } from "$lib/utils";
  import Check from "lucide-svelte/icons/check";

  let {
    class: className = "",
    label = "Have $200 by Jan 5",
    value = 85,
    color = "green",
  } = $props();
</script>

<div class={cn("w-full h-6", className)}>
  <div class="flex italic text-xs text-balance text-stone-800 font-medium pb-1 w-full justify-between">
    {label}
    {#if value >= 100}
      <Check class="p-0.5" size="1rem" />
    {/if}
  </div>
  <div class="h-1.5 w-full rounded-full" style="background-color: hsl(from {color} h s l / 0.4);">
    <div
      class="progress h-full rounded-full relative"
      style="width: {value}%; background-color: hsl(from {color} h s calc(l - 10) / 0.7);"
    ></div>
  </div>
</div>

<style>
  .progress {
    animation: progress 600ms ease-in-out forwards;
  }

  @keyframes progress {
    0% {
      width: 0;
    }
  }
</style>
