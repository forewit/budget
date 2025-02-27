<script lang="ts">
  import { type Snippet } from "svelte";
  import ThemeWrapper from "$lib/Theme/ThemeWrapper.svelte";
  import { setAppContext } from "$lib/app.svelte";
  import { base } from "$app/paths";

  let { children }: { children: Snippet } = $props();

  const app = setAppContext();
</script>

<ThemeWrapper>
  <div class="layout-grid">
    <nav class="navbar">
      <ul>
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/budget">Budget</a></li>
      </ul>
    </nav>
    <main class="main">
      {@render children()}
    </main>
  </div>
</ThemeWrapper>

<style>
  .layout-grid {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 5em 1fr;
    height: 100%;
  }

  .navbar {
    grid-area: sidebar;
    background-color: var(--bg-alt);
  }

  .main {
    grid-area: main;
  }
</style>
