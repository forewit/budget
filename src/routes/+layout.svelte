<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import SafeAreas from "$lib/components/safe-areas.svelte";
  import "../app.css";

  let { children } = $props();

  let open = $state(true);
</script>

<SafeAreas>
  <Sidebar.Provider bind:open>
    <AppSidebar />
    <main>
      <Sidebar.Trigger ></Sidebar.Trigger>
      {@render children?.()}
    </main>
  </Sidebar.Provider>
</SafeAreas>