<script lang="ts">
  import Scale from "lucide-svelte/icons/scale";
  import PiggyBank from "lucide-svelte/icons/piggy-bank";
  import Wallpaper from "lucide-svelte/icons/wallpaper";
  import Settings from "lucide-svelte/icons/settings";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { base } from "$app/paths";
  import { page } from "$app/state";

  let { open = $bindable(true) }: { open?: boolean } = $props();

  // Menu items.
  const items = [
    {
      title: "Our Money",
      url: `${base}/money/`,
      icon: PiggyBank,
    },
    {
      title: "Our Legal",
      url: `${base}/legal/`,
      icon: Scale,
    },
    {
      title: "Our Digital Life",
      url: `${base}/digital/`,
      icon: Wallpaper,
    },
    {
      title: "Settings",
      url: `${base}/settings/`,
      icon: Settings,
    },
  ];
</script>

  <Sidebar.Root collapsible="icon" variant="floating">
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
  </Sidebar.Root>
