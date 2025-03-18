<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import BudgetOverview from "$lib/components/budget/budget-overview.svelte";
  import { base } from "$app/paths";

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

<div class="h-dvh grid md:grid-cols-[minmax(450px,1fr)_minmax(0,450px)]">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="bg-no-repeat bg-center bg-cover overflow-y-scroll"
    style="background-image: url('{base}/images/field-background.jpg'); scrollbar-width: none;"
    onclick={clearSelection}
  >
    <div class="py-12 px-2 flex flex-col gap-12 md:gap-8 w-full">
      {#each budget.categories as category, catIndex}
        <CategoryCard
          class="w-full backdrop-blur-md bg-card/80"
          {category}
          budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)}
        />
      {/each}
    </div>
  </div>
  {#if isMobile.current}
    {#if selectedBudgetItem >= 0 && selectedCategory >= 0}
      <Drawer.Root bind:open={drawerOpen}>
        <Drawer.Content class="h-[calc(100vh-64px)]">
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        </Drawer.Content>
      </Drawer.Root>
    {/if}
  {:else}
    <div class="h-full border-l overflow-y-scroll" style="scrollbar-width: none;">
      {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
        <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
      {:else}
        <BudgetOverview />
      {/if}
    </div>
  {/if}
</div>
