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
  import { base } from "$app/paths";
  import BudgetHeader from "$lib/components/budget/budget-header.svelte";

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
    class="h-full bg-no-repeat bg-center bg-cover pl-[max(env(safe-area-inset-left),0px)]"
    style="background-image: url('{base}/images/field-background.jpg');"
    scrollbarYClasses="opacity-50"
  >
    <div class="pt-28 pb-28 px-2.4 flex flex-col gap-4 md:gap-4 @container">
      {#each budget.categories as category, catIndex}
        <CategoryCard
          class="w-full backdrop-blur-md bg-card/80 min-w-[350px] rounded-none @[500px]:rounded-lg"
          {category}
          budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)}
          selectedItemIndex={catIndex === selectedCategory ? selectedBudgetItem : -1}
        />
      {/each}
    </div>
  </ScrollArea>
{/snippet}

<div class="h-dvh relative">
  <BudgetHeader class="shadow-xl bg-background absolute top-0 left-0 right-0 z-10"></BudgetHeader>

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
      <Resizable.Pane minSize={30} >
        {@render budgetContent()}
      </Resizable.Pane>
      <Resizable.Handle withHandle />
      <Resizable.Pane minSize={30} class="pt-20 pr-[max(env(safe-area-inset-right),0px)]">
        {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        {:else}
          <BudgetOverview />
        {/if}
      </Resizable.Pane>
    </Resizable.PaneGroup>
  {/if}

  <BudgetToolbar class="fixed bottom-[max(env(safe-area-inset-bottom),2rem)] w-min -translate-x-1/2 left-1/2" />
</div>
