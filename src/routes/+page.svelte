<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import Menu from "lucide-svelte/icons/menu";
  import Button from "$lib/components/ui/button/button.svelte";

  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import BudgetOverview from "$lib/components/budget/budget-overview.svelte";
  import { base } from "$app/paths";
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
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="bg-no-repeat bg-center bg-cover overflow-y-scroll"
    style="background-image: url('{base}/images/field-background.jpg'); scrollbar-width: none; padding-left: var(--safe-area-left);"
    onclick={clearSelection}
  >
    <div class="py-12 px-2 flex flex-col gap-12 md:gap-8 w-full">
      {#each budget.categories as category, catIndex}
        <CategoryCard
          class="w-full backdrop-blur-md bg-card/80 min-w-[350px]"
          {category}
          budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)}
        />
      {/each}
    </div>
  </div>
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
      <Resizable.Pane minSize={30}>
        <div
          class="h-full overflow-y-scroll"
          style="scrollbar-width: none; padding-right: var(--safe-area-right);"
        >
          {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
            <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
          {:else}
            <BudgetOverview />
          {/if}
        </div>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  {/if}

  <BudgetToolbar class="fixed bottom-4 w-min -translate-x-1/2 left-1/2" />

</div>
