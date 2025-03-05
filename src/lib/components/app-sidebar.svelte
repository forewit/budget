<script lang="ts">
  import Scale from "lucide-svelte/icons/scale";
  import PiggyBank from "lucide-svelte/icons/piggy-bank";
  import Wallpaper from "lucide-svelte/icons/wallpaper";
  import Settings from "lucide-svelte/icons/settings";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  
  // Menu items.
  const items = [
   {
    title: "Our Money",
    url: "#",
    icon: PiggyBank,
   },
   {
    title: "Our Legal",
    url: "#",
    icon: Scale,
   },
   {
    title: "Our Digital ",
    url: "#",
    icon: Wallpaper,
   },
   {
    title: "Settings",
    url: "#",
    icon: Settings,
   },
  ];
 </script>
  
 <Sidebar.Root collapsible="icon">
  <Sidebar.Content>
   <Sidebar.Group>
    <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
    <Sidebar.GroupContent>
     <Sidebar.Menu>
      {#each items as item (item.title)}
       <Sidebar.MenuItem>
        <Sidebar.MenuButton>
         {#snippet child({ props })}
          <a href={item.url} {...props}>
           <item.icon />
           <span>{item.title}</span>
          </a>
         {/snippet}
        </Sidebar.MenuButton>
       </Sidebar.MenuItem>
      {/each}
     </Sidebar.Menu>
    </Sidebar.GroupContent>
   </Sidebar.Group>
  </Sidebar.Content>
 </Sidebar.Root>