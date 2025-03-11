<script lang="ts">
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
  import BudgetCard from "$lib/components/budget-card.svelte";
</script>



<div class="h-full flex flex-col md:flex-row">
  <ScrollArea class="grow p-4">
    <BudgetCard />
  </ScrollArea>
  <ScrollArea class="h-64 md:h-full md:w-64 border-t md:border-l md:border-t-0"></ScrollArea>
</div>
