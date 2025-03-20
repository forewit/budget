<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import BudgetOverview from "$lib/components/budget/budget-overview.svelte";
  import BudgetToolbar from "$lib/components/budget/budget-toolbar.svelte";

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
  <ScrollArea
    type="scroll"
    onclick={clearSelection}
    class="h-full pl-[max(env(safe-area-inset-left), 0px)]"
  >
    <div class="py-12 px-2 flex flex-col gap-12 md:gap-4">
      {#each budget.categories as category, catIndex}
        <CategoryCard
          class="w-full backdrop-blur-md bg-card/80 min-w-[350px]"
          {category}
          budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)}
        />
      {/each}
    </div>
  </ScrollArea>
{/snippet}

<div class="h-dvh">
  {#if isMobile.current}
    <!-- show drawer on mobile -->
    {@render budgetContent()}
    {#if selectedBudgetItem >= 0 && selectedCategory >= 0}
      <Drawer.Root bind:open={drawerOpen}>
        <Drawer.Content class="h-[calc(100dvh-64px)]">
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
      <Resizable.Pane minSize={30} class="pr-[var(--safe-area-right)]">
        {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        {:else}
          <BudgetOverview />
        {/if}
      </Resizable.Pane>
    </Resizable.PaneGroup>
  {/if}

  <BudgetToolbar
    class="fixed bottom-[max(env(safe-area-inset-bottom), 12px)] w-min -translate-x-1/2 left-1/2"
  />
</div>
