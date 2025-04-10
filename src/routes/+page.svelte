<script lang="ts">
  import { setBudgetContext } from "$lib/components/budget/budget.svelte";
  import { numberToDollarString } from "$lib/components/budget/budget.svelte";
  import Envelope from "$lib/components/envelope/envelope.svelte";

  const budget = setBudgetContext();
</script>

    <div class="h-full w-full p-12 bg-stone-50">
        {#each budget.categories as category, catIndex}
          <h1 class="text-2xl font-bold py-8 text-black ">{category.name}</h1>
          <div class="flex gap-6 flex-wrap">
              {#each category.budgetItems as item, itemIndex}
              {#if itemIndex === 0}
                <Envelope effect="holographic" title={item.name}>
                  <div class="grid items-center justify-center h-11 min-w-20">
                    <p class="text-lg text-black px-4">{numberToDollarString(item.amount)}</p>
                  </div>
                </Envelope>
              {:else}
                <Envelope title={item.name} color="#062f32">
                  <div class="grid items-center justify-center h-11 min-w-20">
                    <p class="text-lg text-black px-4">{numberToDollarString(item.amount)}</p>
                  </div>
                </Envelope>
              {/if}
            {/each}
          </div>
          
        {/each}
      
        <Envelope effect="holographic" title="Insurance">
          <div class="grid items-center justify-center h-11 min-w-20">
            <p class="text-lg text-black px-4">$12.00</p>
          </div>
        </Envelope>
      </div>
