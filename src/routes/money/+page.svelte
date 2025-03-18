<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import BudgetOverview from "$lib/components/budget/budget-overview.svelte";

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

<div class="h-full grid md:grid-cols-[minmax(450px,1fr)_minmax(0,500px)]">
  <ScrollArea class="py-4 md:p-4" onclick={clearSelection}>
    {#each budget.categories as category, catIndex}
      <CategoryCard
        {category}
        budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)}
      />
    {/each}
  </ScrollArea>
  {#if isMobile.current}
    {#if selectedBudgetItem >= 0 && selectedCategory >= 0}
      <Drawer.Root bind:open={drawerOpen}>
        <Drawer.Content class="h-[calc(100vh-64px)]">
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        </Drawer.Content>
      </Drawer.Root>
    {/if}
  {:else}
    <ScrollArea class="border-l">
      {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
        <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
      {:else}
        <BudgetOverview />
      {/if}
    </ScrollArea>
  {/if}
</div>
