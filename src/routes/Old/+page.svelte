<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
  import CategoryCard from "$lib/components/budget/category-card.svelte";
  import ItemDetails from "$lib/components/budget/item-details.svelte";
  import BudgetOverview from "$lib/components/budget/budget-overview.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import { base } from "$app/paths";
  import Settings from "lucide-svelte/icons/settings";
  import Pencil from "lucide-svelte/icons/pencil";
  import PieChart from "lucide-svelte/icons/chart-pie";
  import Button from "$lib/components/ui/button/button.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";

  const budget = setBudgetContext();

  let isMobile = new IsMobile();
  let drawerOpen = $state(false);
  let selectedCategory = $state(-1);
  let selectedBudgetItem = $state(-1);
  let showPieChart = $derived(selectedCategory < 0);

  function selectBudgetItem(catIndex: number, itemIndex: number) {
    drawerOpen = true;
    selectedCategory = catIndex;
    selectedBudgetItem = itemIndex;
  }

  function clearSelection() {
    selectedCategory = -1;
    selectedBudgetItem = -1;
  }

  function clearWindowSelection() {
    if (document.activeElement && document.activeElement !== document.body) {
      (document.activeElement as HTMLElement).blur();
    }
    window.getSelection()?.removeAllRanges(); // Deselect any selected text
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      clearSelection();
      clearWindowSelection();
    }
  }
</script>

<svelte:window onkeydown={handleKeyDown} />

<div class="h-lvh relative overscroll-none">
  <Resizable.PaneGroup direction={isMobile.current ? "vertical" : "horizontal"}>
    <Resizable.Pane>
      <div
        class="min-w-[400px] flex h-full bg-no-repeat bg-center bg-cover pl-[max(env(safe-area-inset-left),0px)] overscroll-none"
        style="background-image: url('{base}/images/field-background.jpg');"
      >
        <div class="bg-background rounded-xl shadow-xl px-1 py-2 w-min h-min ml-1.5 place-self-center">
          <ToggleGroup.Root
            onValueChange={(v) => {
              budget.selectedFilterIndex = parseInt(v);
            }}
            value="0"
            type="single"
            orientation="vertical"
            class="flex flex-col"
          >
            <ToggleGroup.Item value="0" class="w-10 h-10"><Pencil /></ToggleGroup.Item>
            <ToggleGroup.Item value="1" class="w-10 h-10">M</ToggleGroup.Item>
            <ToggleGroup.Item value="2" class="w-10 h-10">2W</ToggleGroup.Item>
            <ToggleGroup.Item value="3" class="w-10 h-10">Y</ToggleGroup.Item>
          </ToggleGroup.Root>
          <Separator class="my-2" />
          <Button
            variant="ghost"
            onclick={() => {
              clearSelection();
              drawerOpen = true;
            }}
            class="w-10 h-10 hover:bg-transparent"><PieChart /></Button
          >
          <a href={`${base}/settings/`} class="w-10 h-10">
            <Button
            variant="ghost"
            class="w-10 h-10 hover:bg-transparent"><Settings /></Button
          >
          </a>
        </div>
        <ScrollArea
          class="w-full"
          type="scroll"
          onclick={clearSelection}
          scrollbarYClasses="opacity-50"
        >
          <div
            class="flex flex-col gap-4 md:gap-4 pl-1.5 pr-2.5 pt-[max(env(safe-area-inset-top),1rem)] pb-[max(env(safe-area-inset-bottom),1rem)]"
          >
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
    </Resizable.Pane>
    <Resizable.Handle withHandle />
    <Resizable.Pane class="pr-[max(env(safe-area-inset-right),0px)]">
      <div class="min-w-[400px]">
        {#if selectedCategory >= 0 && selectedBudgetItem >= 0}
          <ItemDetails categoryIndex={selectedCategory} budgetItemIndex={selectedBudgetItem} />
        {:else}
          <BudgetOverview />
        {/if}
      </div>
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
