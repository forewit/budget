<script lang="ts">
  import { getAppContext, type Category, type Frequency } from "$lib/app.svelte";

  const app = getAppContext();

  function convertFrequency(value: number, oldFreq: Frequency, newFreq: Frequency): number {
    const oldDays =
      oldFreq.value *
      (oldFreq.span == "weeks"
        ? 7
        : oldFreq.span == "months"
          ? 30
          : oldFreq.span == "years"
            ? 365
            : 1);
    const newDays =
      newFreq.value *
      (newFreq.span == "weeks"
        ? 7
        : newFreq.span == "months"
          ? 30
          : newFreq.span == "years"
            ? 365
            : 1);
    return (value * newDays) / oldDays;
  }

  function humanizeFrequency(freq: Frequency): string {
    if (freq.value == 1) {
      switch (freq.span) {
        case "days":
          return "Daily";
        case "weeks":
          return "Weekly";
        case "months":
          return "Monthly";
        case "years":
          return "Yearly";
      }
    }
    return `Every ${freq.value} ${freq.span}`;
  }

  function humanizeAmount(amount: number): string {
    // add commas, $ sign, and 2 decimal places, only use decimal if needed
    return `$${amount.toFixed(amount % 1 ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  const DISPLAY_OPTIONS = ["Actual", "Monthly", "Yearly", "Custom"];
  let selectedDisplayOption = $state(DISPLAY_OPTIONS[1]);

  let selectedFrequency: Frequency = $derived.by(() => {
    switch (selectedDisplayOption) {
      case "Monthly":
        return { value: 1, span: "months" };
      case "Yearly":
        return { value: 1, span: "years" };
      case "Custom":
        return { value: 1, span: "days" };
      default:
        return { value: 1, span: "days" };
    }
  });
</script>

{#snippet Category(category: Category)}
  <table class="category">
    <thead>
      <tr>
        <th class="category-name">{category.name}</th>
        <th class="category-display-option" colspan={selectedDisplayOption == "Actual" ? 2 : 1}
          >{selectedDisplayOption}</th
        >
      </tr>
    </thead>
    <tbody>
      {#each category.expenses as expense}
        <tr>
          <td class="expense-name">{expense.name}</td>
          {#if selectedDisplayOption == "Actual"}
            <td class="expense-amount">{humanizeAmount(expense.amount)}</td>

            <td class="expense-frequency">{humanizeFrequency(expense.frequency)}</td>
          {:else}
            <td class="expense-amount"
              >{humanizeAmount(convertFrequency(expense.amount, expense.frequency, selectedFrequency))}</td
            >
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
{/snippet}

<div class="budget-container">
  {#each app.categories as category}
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
  .category-display-option {
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
