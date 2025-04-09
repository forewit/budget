<script lang="ts">
  /**
   * Credit:
   * - holographic effect → https://codepen.io/jasonhibbs/pen/zYVdVRJ
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { onMount } from "svelte";
  import { cn } from "$lib/utils";

  type EnvelopeProps = {
    class?: string;
    color?: string;
    title?: string;
    effect?: "holographic" | "none";
  };
  let {
    class: className = "",
    color = "#1d4ed8",
    title = "",
    effect: effectName = "none",
    children,
    ...restProps
  }: EnvelopeProps & HTMLAttributes<HTMLButtonElement> = $props();

  let x: number = $state(240);
  let y: number = $state(160);
  let cardElement: HTMLButtonElement | null = $state(null);
  let cardStylesString: string = $state("");

  function updatePointer(event: PointerEvent) {
    x = event.clientX;
    y = event.clientY;
  }

  onMount(() => {
    // Check if running in a browser environment before adding listener
    if (typeof document !== "undefined" && effectName === "holographic") {
      document.addEventListener("pointermove", updatePointer, true);

      // Return cleanup function
      return () => {
        document.removeEventListener("pointermove", updatePointer, true);
      };
    }
  });

  // Reactive declaration: Recalculates whenever x, y, or cardElement changes
  $effect(() => {
    if (effectName !== "holographic") return;
    if (cardElement && typeof window !== "undefined") {
      const rect = cardElement.getBoundingClientRect();
      const rX = x - rect.left;
      const rY = y - rect.top;
      const pX = rX / rect.width;
      const pY = rY / rect.height;
      const aX = x / window.innerWidth;
      const aY = y / window.innerHeight;

      // Construct the style string for the card element
      cardStylesString = `
          --x: ${pX * 100}%;
          --y: ${pY * 100}%;
          --rx: ${-20 * aY + 10}deg;
          --ry: ${20 * aX - 10}deg;
          --envelope-color: ${color};
        `;
    } else {
      // Default or fallback styles if element isn't mounted yet
      cardStylesString = `
          --x: 50%;
          --y: 50%;
          --rx: 0deg;
          --ry: 0deg;
          --envelope-color: ${color};
        `;
    }
  });
</script>

<button
  bind:this={cardElement}
  class={cn(
    "envelope group cursor-pointer relative w-48 h-24 rounded-xl text-white bg-[var(--envelope-color)]",
    className
  )}
  style={cardStylesString}
  {...restProps}
>
  <!-- content -->
  <div class="absolute inset-0 p-4 grid items-end">
    <h1 class="text-left leading-tight text-xl font-bold text-white">{title}</h1>
  </div>

  {#if effectName === "holographic"}
    <div class="foil absolute inset-0"></div>
    <div class="glare absolute inset-0"></div>
  {/if}

  <!-- inside -->
  <div
    class="absolute inset-x-4 inset-y-0"
    style="clip-path: polygon(50% 30%, 100% 0%, 100% -20%, 0% -20%, 0% 0%);
           background-color: hsl(from var(--envelope-color) h s calc(l - 10));"
  >
    <div
      class="rounded absolute left-1/2 top-[-10%] max-w-[100%] -translate-x-1/2 bg-stone-200 transition-top duration-100 group-hover:top-[-20%]"
    >
      {@render children?.()}
      <!-- {#if effectName === "holographic"}
        <div class="glare absolute inset-0 z-1"></div>
      {/if} -->
    </div>
  </div>
</button>

<style>
  .envelope {
    /* Dynamic transform using CSS variables set by the script */
    transform: rotateX(var(--rx)) rotateY(var(--ry));
    will-change: transform; /* Optimization hint */
    transition: transform 0.1s ease-out; /* Optional: smooth transition */
  }

  /* Ensure foil and glare respect border radius now that overflow is removed */
  .foil,
  .glare {
    border-radius: inherit;
  }

  .foil {
    --factor: -0.12;
    background-image: repeating-linear-gradient(
        30deg in oklab,
        hsl(40 100% 50%) 0%,
        hsl(55 100% 50%) 1%,
        hsl(120 100% 50%) 2%,
        hsl(180 100% 50%) 3%,
        hsl(300 100% 50%) 4%,
        hsl(40 100% 50%) 5%
      ),
      radial-gradient(
        farthest-corner circle at var(--x) var(--y),
        hsl(0 0 100%) 0%,
        hsl(0 0 20%) 20%,
        hsl(0 0 10%) 50%,
        hsl(0 0 40%) 300%
      );
    background-blend-mode: multiply;
    /* Dynamic background position using CSS variables */
    background-position:
      calc(50% + ((var(--x) / 18) - (var(--y) / 18))) 0,
      center;
    background-size: calc(100% * 20 * 2), 100%;
    mask-image: url('data:image/svg+xml;utf8,<svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 0H44M44 0L32 -12M44 0L32 12"/><path d="M12 56H44M44 56L32 44M44 56L32 68"/><path d="M-16 28H16M16 28L4 16M16 28L4 40"/><path d="M40 28H72M72 28L60 16M72 28L60 40"/></g></svg>');
    /* Dynamic mask position using CSS variables */
    mask-position: calc(50% + ((var(--x) - 50%) * var(--factor)))
      calc(50% + ((var(--y) - 50%) * var(--factor)));
    mask-size: 32px;
    filter: brightness(1.1) contrast(1.25) saturate(2);
    mix-blend-mode: plus-lighter;
    will-change: background-image, background-position, mask-position; /* Optimization hint */
  }

  .glare {
    /* Dynamic background image using CSS variables */
    background-image: radial-gradient(
      farthest-corner circle at var(--x) var(--y),
      hsl(200 20% 100% / 0.5) 0%,
      hsl(200 60% 2% / 1) 250%
    );
    filter: brightness(1.1) contrast(1.2) saturate(1.5);
    mix-blend-mode: overlay;
    will-change: background-image; /* Optimization hint */
  }
</style>
