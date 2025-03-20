<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  let { children, class: className = "" }: { children: Snippet; class?: string } = $props();

  function updateSafeAreas() {
    if (!screen) throw new Error("Cannot update safe areas: screen is not defined");

    const root = document.documentElement;

    root.style.setProperty("--safe-area-left", "max(env(safe-area-inset-left), 0px)");
    root.style.setProperty("--safe-area-right", "max(env(safe-area-inset-right), 0px)");
    root.style.setProperty("--safe-area-top", "max(env(safe-area-inset-top), 0px)");
    root.style.setProperty("--safe-area-bottom", "max(env(safe-area-inset-bottom), 0px)");
  }

  onMount(() => {
    updateSafeAreas();
    screen.orientation.addEventListener("change", updateSafeAreas);
    return () => {
      screen.orientation.removeEventListener("change", updateSafeAreas);
    };
  });
</script>

<div class={className}>
  {@render children()}
</div>

<style>
  :root {
    --safe-area-left: 0px; /* overwritten by env("safe-area-inset-left") */
    --safe-area-right: 0px; /* overwritten by env("safe-area-inset-right") */
    --safe-area-top: 0px; /* overwritten by env("safe-area-inset-top") */
    --safe-area-bottom: 0px; /* overwritten by env("safe-area-inset-bottom") */
    --safe-area-inline: max(var(--safe-area-left), var(--safe-area-right));
  }
</style>
