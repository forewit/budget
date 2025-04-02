<script lang="ts">
  import { getBudgetContext } from "./budget.svelte";
  import Editor from "$lib/components/editor/editor.svelte";
  import WrappedInput from "$lib/components/wrapped-input.svelte";

  let { categoryIndex, budgetItemIndex }: { categoryIndex: number; budgetItemIndex: number } =
    $props();

  const budget = getBudgetContext();

  let category = $derived(budget.categories[categoryIndex]);
  let budgetItem = $derived(category.budgetItems[budgetItemIndex]);

</script>

<div class="p-4 pt-8 h-full w-full flex flex-col gap-2">
  <WrappedInput bind:value={budgetItem.name} placeholder="Untitled" />
  <Editor bind:editorContent={budgetItem.content} />
</div>
