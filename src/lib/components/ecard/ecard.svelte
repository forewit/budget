<script lang="ts">
  import { cn } from "$lib/utils";
  import { parse } from "svelte/compiler";
  import Segment from "./7segment.svelte";

  let {
    class: className = "",
    title = "New Card",
    display = "",
  }: { class?: string; title?: string; display?: string } = $props();

  const num = Number(display);
  const isDisplayNumber = !isNaN(num) && isFinite(num); 
</script>

<div class={cn("stage", className)}>
  <div class="card">
    <div class="content p-2 flex flex-col justify-between h-full">
      <div class="flex justify-end">
        <Segment class="w-24 h-8" digits={display} dollarSign={isDisplayNumber} />
      </div>

      <h1 class="p-1 leading-tight text-xl text-white">{title}</h1>
    </div>
    <div class="foil"></div>
    <div class="glare"></div>
  </div>
</div>

<style>
  .stage {
    perspective: 800px;
    transform-style: preserve-3d;
  }
  .card {
    cursor: pointer;
    transform-style: preserve-3d;
    position: relative;
    width: 8em;
    height: 12em;
    border-radius: 0.75em;
    background-color: hsl(220, 70%, 40%);
    color: white;
    overflow: hidden;
    transform: rotateX(0deg) rotateY(0deg);
    animation: rotateCard 10s infinite alternate ease-in-out;
    transition: scale 100ms ease-in-out;
    margin: auto;
  }

  @keyframes rotateCard {
    0% {
      transform: rotateX(-10deg) rotateY(-10deg);
    }
    100% {
      transform: rotateX(10deg) rotateY(10deg);
    }
  }

  .content,
  .foil,
  .glare {
    position: absolute;
    inset: 0;
  }

  .foil {
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
        farthest-corner circle at 50% 50%,
        hsl(0 0 100%) 0%,
        hsl(0 0 20%) 20%,
        hsl(0 0 10%) 50%,
        hsl(0 0 40%) 300%
      );
    background-blend-mode: multiply;
    background-position:
      50% 50%,
      center;
    background-size: 200%, 100%;
    mask-image: url('data:image/svg+xml;utf8,<svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 0H44M44 0L32 -12M44 0L32 12"/><path d="M12 56H44M44 56L32 44M44 56L32 68"/><path d="M-16 28H16M16 28L4 16M16 28L4 40"/><path d="M40 28H72M72 28L60 16M72 28L60 40"/></g></svg>');
    mask-position: 50% 50%;
    mask-size: 32px;
    filter: brightness(1.1) contrast(1.25) saturate(2);
    mix-blend-mode: plus-lighter;
    transition: transform 0.5s ease-in-out;
    animation: moveFoil 5s infinite alternate ease-in-out;
  }

  @keyframes moveFoil {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  .glare {
    background-image: radial-gradient(
      farthest-corner circle at 50% 50%,
      hsl(200 20% 100% / 0.5) 0%,
      hsl(200 60% 2% / 1) 250%
    );
    filter: brightness(1.1) contrast(1.2) saturate(1.5);
    mix-blend-mode: overlay;
  }

  .card:hover {
    scale: 1.05;
  }
</style>
