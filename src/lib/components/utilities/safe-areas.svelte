<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  let { children, class: className = "" }: { children: Snippet; class?: string } = $props();

  function updateSafeAreas() {
    if (!screen) throw new Error("Cannot update safe areas: screen is not defined");

    const root = document.documentElement;
    switch (screen.orientation.type) {
      case "portrait-primary":
        root.style.setProperty("--safe-area-top", "env(safe-area-inset-top)");
        root.style.setProperty("--safe-area-left", "0px");
        root.style.setProperty("--safe-area-right", "0px");
        break;
      case "landscape-primary":
        root.style.setProperty("--safe-area-top", "0px");
        root.style.setProperty("--safe-area-left", "env(safe-area-inset-left)");
        root.style.setProperty("--safe-area-right", "0px");
        break;
      case "landscape-secondary":
        root.style.setProperty("--safe-area-top", "0px");
        root.style.setProperty("--safe-area-left", "0px");
        root.style.setProperty("--safe-area-right", "env(safe-area-inset-right)");
        break;
    }
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
    --safe-area-inline: max(var(--safe-area-left), var(--safe-area-right));
  }
</style>
