import { getContext, setContext } from 'svelte';

export type Frequency = {
    interval: number,
    unit: "day" | "week" | "month" | "year",
}
export type BudgetItem = {
    name: string,
    amount: number,
    frequency: Frequency,
}
export type Category = {
    name: string,
    budgetItems: BudgetItem[],
    expanded: boolean,
}
export type Filter = {
    name: string,
    frequency: Frequency
}

function createBudget() {
    let filters: Filter[] = $state([
        { name: "Monthly", frequency: { interval: 1, unit: "month" } },
        { name: "Biweekly", frequency: { interval: 2, unit: "week" } },
        { name: "Yearly", frequency: { interval: 1, unit: "year" } },
    ])
    let selectedFilter = $state("Monthly");

    let categories: Category[] = $state([
        {
            name: "Giving",
            budgetItems: [
                { name: "Church", amount: 100, frequency: { interval: 1, unit: "month" } },
                { name: "Missionaries", amount: 50, frequency: { interval: 2, unit: "week" } },
                { name: "Generosity", amount: 200, frequency: { interval: 1, unit: "month" } },
            ],
            expanded: true,
        }])


    return {
        get categories() { return categories },
        set categories(value) { categories = value },
        get filters() { return filters },
        set filters(value) { filters = value },
        get selectedFilter() { return selectedFilter },
        set selectedFilter(value: string) { selectedFilter = value },
    }
}

const BUDGET_KEY = Symbol('budget')

export const setBudgetContext = () => {
    const nBudget = createBudget();
    return setContext(BUDGET_KEY, nBudget)
}

export const getBudgetContext = (): ReturnType<typeof setBudgetContext> => {
    return getContext(BUDGET_KEY)
}