<script lang="ts">
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";

  const budget = setBudgetContext();

  let selectedCategory = $state(-1);
  let selectedBudgetItem = $state(-1);

  function selectBudgetItem(catIndex: number, itemIndex: number) {
    selectedCategory = catIndex;
    selectedBudgetItem = itemIndex;
  }

  function clearSelection() {
    selectedCategory = -1;
    selectedBudgetItem = -1;
  }
</script>

<div class="h-full flex flex-col md:flex-row">
  <ScrollArea class="grow pt-4" onclick={clearSelection}>
    {#each budget.categories as category, catIndex}
      <CategoryCard 
      {category} 
      budgetItemClicked={(itemIndex) => selectBudgetItem(catIndex, itemIndex)} 
      selectedItem={selectedCategory == catIndex ? selectedBudgetItem : -1}
      />
    {/each}
  </ScrollArea>
  <ScrollArea class="h-64 md:h-full md:w-64 border-t md:border-l md:border-t-0" >
    {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
      <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
    {:else}
      <div class="h-full w-full flex flex-col items-center justify-center">
        <div class="text-xl">Select a category and expense to view details</div>
      </div>
    {/if}
  </ScrollArea>
</div>
