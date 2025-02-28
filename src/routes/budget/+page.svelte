<script lang="ts">
  import { setBudgetContext, type Category } from "$lib/budget.svelte";

  const budget = setBudgetContext();
</script>

{#snippet Category(category: Category)}
  <table class="category">
    <thead>
      <tr>
        <th class="category-name">{category.name}</th>
        <th class="category-filter" colspan=2>
          <select name="filters" bind:value={budget.filterIndex} class="filter">
            {#each budget.allFilters as filter, index}
              <option selected={budget.filterIndex == index} value={index} class="filter-option">
                {filter.name}
              </option>
            {/each}
          </select>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each category.expenses as expense}
        <tr>
          <td class="expense-name">{expense.name}</td>
          {#if budget.filterIndex == 0}
            <td class="expense-amount">{budget.toDollarString(expense.amount)}</td>

            <td class="expense-frequency">{budget.toFrequencyString(expense.frequency)}</td>
          {:else}
            <td class="expense-amount"
              >{budget.toDollarString(
                budget.changeFrequency(
                  expense.amount,
                  expense.frequency,
                  budget.currentFilter.frequency
                )
              )}</td
            >
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
{/snippet}

<div class="budget-container">
  {#each budget.categories as category}
    {@render Category(category)}
  {/each}
</div>

<style>
  .budget-container {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    min-width: 25em;
    max-width: 40em;
  }

  /* Category (table) */
  .category {
    background-color: var(--bg-alt);
    border-radius: 0.5em;
    padding: 1.5em;
  }
  .category-name {
    text-align: left;
    padding-bottom: 1em;
  }
  .category-filter {
    text-align: right;
    padding-bottom: 1em;
  }
  /* Expense (table row) */
  .expense-name {
    text-align: left;
  }
  .expense-amount {
    text-align: right;
  }
  .expense-frequency {
    text-align: right;
    width: 6em;
  }
</style>
