<script lang="ts">
  import Scale from "lucide-svelte/icons/scale";
  import PiggyBank from "lucide-svelte/icons/piggy-bank";
  import Wallpaper from "lucide-svelte/icons/wallpaper";
  import Settings from "lucide-svelte/icons/settings";
  import PanelLeftClose from "lucide-svelte/icons/panel-left-close";
  import PanelLeftOpen from "lucide-svelte/icons/panel-left-open";
  import Menu from "lucide-svelte/icons/Menu";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import Button from "./ui/button/button.svelte";

  // Menu items.
  const items = [
    {
      title: "Our Money",
      url: `${base}/money/`,
      icon: PiggyBank,
    },
    {
      title: "Our Legal",
      url: `${base}/`,
      icon: Scale,
    },
    {
      title: "Our Digital Life",
      url: `${base}/`,
      icon: Wallpaper,
    },
    {
      title: "Settings",
      url: `${base}/`,
      icon: Settings,
    },
  ];

  const sidebar = Sidebar.useSidebar();
</script>

<Sidebar.Root collapsible="offcanvas" >
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={item.url == page.url.pathname}>
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
  <Sidebar.Footer>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton
          onclick={() => {
            if (sidebar.isMobile) {
              sidebar.setOpenMobile(false);
            } else {
              sidebar.setOpen(!sidebar.open);
            }
          }}
        >
          {#if sidebar.open || sidebar.openMobile}
            <PanelLeftClose />
            <span>Close sidebar</span>
          {:else}
            <PanelLeftOpen />
          {/if}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Footer>
</Sidebar.Root>

{#if sidebar.isMobile}
  <Button
    class="fixed bottom-4 left-4 z-50"
    variant="outline"
    onclick={() => {
      sidebar.setOpenMobile(true);
    }}
  >
    <Menu />
  </Button>
  {:else if !sidebar.open}
  <Button
  class="fixed bottom-4 left-4 z-50"
  variant="outline"
  onclick={() => {
    sidebar.setOpen(true);
  }}
>
  <Menu />
</Button>
{/if}
