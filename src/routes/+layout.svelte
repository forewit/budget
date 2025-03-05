<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import SafeAreas from "$lib/components/safe-areas.svelte";
  import "../app.css";
  import Button from "$lib/components/ui/button/button.svelte";

  let { children } = $props();

  let open = $state(true);
</script>

<SafeAreas>
  <Sidebar.Provider bind:open>
    <AppSidebar />
    <main>
      <Button onclick={()=>open = !open}>{open ? "👈 Close" : "👈 Open"}</Button>
      {@render children?.()}
    </main>
  </Sidebar.Provider>
</SafeAreas>