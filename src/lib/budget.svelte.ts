import { getContext, setContext } from 'svelte';

export type Frequency = {
    value: number,
    span: "days" | "weeks" | "months" | "years",
}
export type Expense = {
    name: string;
    amount: number;
    frequency: Frequency;
    dueDate: Date;
};
export type Category = {
    name: string;
    expanded: boolean;
    expenses: Expense[];
};

export type Filter = {
    name: string;
    frequency: Frequency;
}



function createBudget() {
    let categories: Category[] = $state([
        {
            name: "Food",
            expanded: true,
            expenses: [
                { name: "Groceries", amount: 100, frequency: { value: 1, span: "months" }, dueDate: new Date() },
                { name: "Restaurants", amount: 50, frequency: { value: 1, span: "weeks" }, dueDate: new Date() },
            ],
        }
    ]);

    let customFrequency: Frequency = $state({ value: 30, span: "days" });

    let filterIndex = $state(1);
    let allFilters: Filter[] = $derived([
        { name: "Actual", frequency: { value: 1, span: "days" } },
        { name: "Bi-Weekly", frequency: { value: 2, span: "weeks" } },
        { name: "Monthly", frequency: { value: 1, span: "months" } },
        { name: "Yearly", frequency: { value: 1, span: "years" } },
        { name: `Every ${customFrequency.value} ${customFrequency.span}`, frequency: customFrequency },
    ])
    let currentFilter = $derived(allFilters[filterIndex]);

    const changeFrequency = (value: number, oldFreq: Frequency, newFreq: Frequency): number => {
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

    const toFrequencyString = (freq: Frequency): string => {
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
        if (freq.value == 2 && freq.span == "weeks") {
            return "Bi-Weekly";
        }
        return `Every ${freq.value} ${freq.span}`;
    }

    const toDollarString = (amount: number): string => {
        // add commas, $ sign, and 2 decimal places, only use decimal if needed
        return `$${amount.toFixed(amount % 1 ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    return {
        // state
        get categories() { return categories },
        set categories(value) { categories = value },
        get allFilters() { return allFilters },
        get filterIndex() { return filterIndex },
        set filterIndex(value) { filterIndex = value },
        get currentFilter() { return currentFilter },
        get customFrequency() { return customFrequency },
        set customFrequency(value) { customFrequency = value },

        // untility functions
        changeFrequency,
        toFrequencyString,
        toDollarString
    }
}

const BUDGET_KEY = Symbol('budget')

export const setBudgetContext = () => {
    const nApp = createBudget();
    return setContext(BUDGET_KEY, nApp)
}

export const getBudgetContext = (): ReturnType<typeof setBudgetContext> => {
    return getContext(BUDGET_KEY)
}
