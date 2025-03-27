<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import BudgetOverview from "$lib/components/budget/budget-overview.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import { base } from "$app/paths";
  import Pencil from "lucide-svelte/icons/pencil";

  const budget = setBudgetContext();

  let isMobile = new IsMobile();
  let drawerOpen = $state(false);

  let selectedCategory = $state(-1);
  let selectedBudgetItem = $state(-1);

  function selectBudgetItem(catIndex: number, itemIndex: number) {
    drawerOpen = true;

    selectedCategory = catIndex;
    selectedBudgetItem = itemIndex;
  }

  function clearSelection() {
    selectedCategory = -1;
    selectedBudgetItem = -1;
  }
</script>

{#snippet budgetContent()}
  <div
    class="min-w-[340px] flex h-full bg-no-repeat bg-center bg-cover pl-[max(env(safe-area-inset-left),0px)]"
    style="background-image: url('{base}/images/field-background.jpg');"
  >
    <ToggleGroup.Root
      onValueChange={(v) => {
        budget.selectedFilterIndex = parseInt(v);
      }}
      value="0"
      type="single"
      orientation="vertical"
      class={"flex flex-col bg-background rounded-xl shadow-xl px-1 py-2 h-min mx-1.5 place-self-center"}
    >
      <ToggleGroup.Item value="0"><Pencil class="w-4 h-4" /></ToggleGroup.Item>
      <ToggleGroup.Item value="1">M</ToggleGroup.Item>
      <ToggleGroup.Item value="2">2W</ToggleGroup.Item>
      <ToggleGroup.Item value="3">Y</ToggleGroup.Item>
    </ToggleGroup.Root>
    <ScrollArea class="w-full" type="scroll" onclick={clearSelection} scrollbarYClasses="opacity-50">
      <div class="pt-12 pb-28 pr-2.5 flex flex-col gap-4 md:gap-4">
        {#each budget.categories as category, catIndex}
          <CategoryCard
            class="w-full backdrop-blur-md bg-card/80"
            {category}
            budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)}
            selectedItemIndex={catIndex === selectedCategory ? selectedBudgetItem : -1}
          />
        {/each}
      </div>
    </ScrollArea>
  </div>
{/snippet}

<div class="h-dvh relative">
  {#if isMobile.current}
    <!-- show drawer on mobile -->
    {@render budgetContent()}
    {#if selectedBudgetItem >= 0 && selectedCategory >= 0}
      <Drawer.Root bind:open={drawerOpen}>
        <Drawer.Content class="h-[calc(100dvh-7rem)]">
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        </Drawer.Content>
      </Drawer.Root>
    {/if}
  {:else}
    <!-- show resizable sidebar on desktop -->
    <Resizable.PaneGroup direction="horizontal">
      <Resizable.Pane minSize={30}>
        {@render budgetContent()}
      </Resizable.Pane>
      <Resizable.Handle withHandle />
      <Resizable.Pane minSize={30} class="pr-[max(env(safe-area-inset-right),0px)]">
        {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        {:else}
          <BudgetOverview />
        {/if}
      </Resizable.Pane>
    </Resizable.PaneGroup>
  {/if}
</div>
