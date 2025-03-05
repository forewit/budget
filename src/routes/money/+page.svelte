<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import MoneySidebar from "../../lib/components/money-sidebar.svelte";

  let open = $state(true);
</script>

<Sidebar.Provider bind:open style="--sidebar-width: 20rem; --sidebar-width-mobile: 20rem;">
  <Button onclick={()=>open = !open}>{open ? "Close 👉" : "Open 👉"}</Button>
  <MoneySidebar />
</Sidebar.Provider>
