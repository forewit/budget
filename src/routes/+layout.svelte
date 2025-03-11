<script lang="ts">
  import "../app.css";

  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import SafeAreas from "$lib/components/safe-areas.svelte";

  let { children } = $props();

  let open = $state(true);
</script>

<SafeAreas class="h-full ml-(--safe-area-left) mr-(--safe-area-right) border-2">
  <Sidebar.Provider bind:open onOpenChange={()=>console.log(open)} >
    <AppSidebar />
    <main class="flex-auto">
      {@render children?.()}
    </main>
  </Sidebar.Provider>
</SafeAreas>
