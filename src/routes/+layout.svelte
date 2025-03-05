<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import SafeAreas from "$lib/components/safe-areas.svelte";
  
  import "../app.css";
  let { children } = $props();
</script>

<SafeAreas>
  <Sidebar.Provider>
    <AppSidebar />
    <main>
      <Sidebar.Trigger />
      {@render children?.()}
    </main>
  </Sidebar.Provider>
</SafeAreas>
