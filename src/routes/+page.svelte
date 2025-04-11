<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import Ecard from "$lib/components/ecard/ecard.svelte";

  const budget = setBudgetContext();
</script>


<Ecard
display="100.23"
title="Forewit"
color="#487B65"
class="scale-75"
foil={true}
/>
<!-- {#each budget.categories as category}
  <h1 class="text-2xl md:text-4xl font-bold text-center">{category.name}</h1>
  <div class="flex items-center justify-center">
    <Carousel.Root class="w-[390px]">
      <Carousel.Content class="ml-0">
        {#each category.budgetItems as item}
          <Carousel.Item class="basis-1/3 md:basis-1/5 pl-0">
            <Ecard
              display={item.amount.toString()}
              title={item.name}
              color="#487B65"
              class="scale-75"
              foil={true}
              rotate={true}
            />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
{/each} -->