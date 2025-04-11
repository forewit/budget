<script lang="ts">
  import "./7segment.css";
  import { cn } from "$lib/utils";
  let { class: className = "", digits = "    ", dollarSign = false } = $props();

  let decimalIndex = digits.indexOf(".");
</script>

<div
  class={cn("select-none relative flex justify-end p-1 rounded bg-stone-800", dollarSign && "pl-4", className)}
>
  {#if dollarSign}
    <p class="absolute top-[1px] left-1.5 text-sm text-[#ff0] font-medium italic">$</p>
  {/if}
  {#each digits as digit, i}
    {#if digit === "."}
      <span class="px-0.5 text-[#ff0] text-lg leading-9 font-medium italic"></span>
    {:else}
      <svg
        class="digit"
        style={decimalIndex > -1 && i > decimalIndex ? "height: 60%" : ""}
        data-digit={digit}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53.1 71.9"
      >
        <g transform="translate(-3.9 -3.7)">
          <path
            class="segment"
            id="top"
            d="M17.8 5l5 6h25.5l6.2-5.3s-2-1.7-3.3-1.9c-1.4-.2-30.3 0-30.3 0-1.8 0-2.9 1-3 1.2z"
          />
          <path
            class="segment"
            id="top_r"
            d="M49.3 12l6-5c1 .7 1.5 2.3 1.7 4.3L52.6 36 49 38.6l-4-4.5z"
          />
          <path
            class="segment"
            id="top_l"
            d="M18 33.7l3.8-21.8-5-6.2a5 5 0 0 0-2 2.7L9.6 36l2.4 2.6z"
          />
          <path class="segment" id="middle" d="M12.9 39.7l4.3-3.8H45l3 3.8-4.1 3.6H15.7z" />
          <path class="segment" id="bottom_r" d="M43 45.6l5.8-4.9 2.5 2.5-5.1 27.4-2 3-5.2-6.3z" />
          <path class="segment" id="bottom_l" d="M8.3 43l3.4-2.6 4.2 4.8-3.8 22-6.7 5.2L3.9 68z" />
          <path
            class="segment"
            id="bottom"
            d="M6.3 73.3l6.3-5.2L38 68l5.2 6.2c-.8 1-1.9 1.3-3.5 1.4H9.9c-1.2-.1-2.3-.7-3.6-2.3z"
          />
        </g>
      </svg>
    {/if}
  {/each}
</div>
