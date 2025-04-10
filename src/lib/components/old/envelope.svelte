<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { onMount } from "svelte";
  import { cn } from "$lib/utils"; // Assuming $lib/utils provides a class utility

  type EnvelopeProps = {
    class?: string;
    color?: string;
    title?: string;
    effect?: "holographic" | "none";
  };

  let {
    class: className = "",
    color = "#1d4ed8", // Default color
    title = "",
    effect: effectName = "none",
    children,
    ...restProps
  }: EnvelopeProps & HTMLAttributes<HTMLButtonElement> = $props();

  let cardElement: HTMLButtonElement;
  let animationFrameId: number | null = null;
  let animationOffset = Math.random()*1000;

  function animate(timestamp: number) {
    if (!cardElement) {
        animationFrameId = requestAnimationFrame(animate);
        return;
    }

    const time = (timestamp * 0.0007) + animationOffset;
    const xPercent = 50 + 50 * Math.sin(time);
    const yPercent = 50 + 50 * Math.cos(1.2 * time);

    cardElement.style.setProperty('--x', `${xPercent}%`);
    cardElement.style.setProperty('--y', `${yPercent}%`);

    animationFrameId = requestAnimationFrame(animate);
  }

  onMount(() => {
    if (effectName === "holographic" && typeof window !== 'undefined') {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };
  });

</script>

<button
  bind:this={cardElement} 
  class={cn(
    "envelope perspective-[800px] group cursor-pointer relative w-48 h-24 rounded-xl text-white bg-[var(--color)] border border-white shadow-lg",
    className
  )}
  style="--color: {color}; --x: 50%; --y: 50%;" 
  {...restProps}
>
  <div class="absolute inset-0 p-4 py-3.5 grid items-end z-10"> 
    <h1 class="text-left leading-tight text-xl text-white">{title}</h1>
  </div>

  {#if effectName === "holographic"}
    <div class="foil absolute inset-0"></div>
    <div class="glare absolute inset-0"></div>
  {/if}

  <div
    class="absolute inset-x-4 inset-y-0"
    style="clip-path: polygon(50% 30%, 100% 0%, 100% -20%, 0% -20%, 0% 0%);
           background-color: hsl(from var(--color) h s calc(l - 10));"
  >
    <div
      class="rounded absolute left-1/2 top-[-10%] max-w-[100%] -translate-x-1/2 bg-stone-200 transition-top duration-100 group-hover:top-[-20%]"
    >
      {@render children?.()}
    </div>
  </div>
</button>

<style>
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
    background-position:
      calc(50% + ((var(--x) / 18) - (var(--y) / 18))) 0,
      center;
    background-size: calc(100% * 20 * 2), 100%;

    /* Mask */
    mask-image: url('data:image/svg+xml;utf8,<svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 0H44M44 0L32 -12M44 0L32 12"/><path d="M12 56H44M44 56L32 44M44 56L32 68"/><path d="M-16 28H16M16 28L4 16M16 28L4 40"/><path d="M40 28H72M72 28L60 16M72 28L60 40"/></g></svg>');
    mask-size: 2rem;
    filter: brightness(1.1) contrast(1.25) saturate(2);
    mix-blend-mode: plus-lighter;

    /* optimization hint */
    will-change: background-image, background-position; 
  }

  .glare {
    background-image: radial-gradient(
      farthest-corner circle at var(--x) var(--y),
      hsl(200 20% 100% / 0.5) 0%,
      hsl(200 60% 2% / 1) 250%
    );
    filter: brightness(1.1) contrast(1.2) saturate(1.5);
    mix-blend-mode: overlay;

    /* optimization hint */
    will-change: background-image;
  }
</style>