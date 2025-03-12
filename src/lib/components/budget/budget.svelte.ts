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

const DAYS_IN_UNIT: Record<Frequency["unit"], number> = {
    day: 1,
    week: 7,
    month: 30,
    year: 365,
};

export function changeFrequency(amount: number, oldFrequency: Frequency, newFrequency: Frequency): number {
    const oldDays = oldFrequency.interval * DAYS_IN_UNIT[oldFrequency.unit];
    const newDays = newFrequency.interval * DAYS_IN_UNIT[newFrequency.unit];
    return amount * newDays / oldDays;
}

export function getFrequencyName(frequency: Frequency): string {
    if (frequency.interval == 1) {
        switch (frequency.unit) {
            case "day":
                return "daily";
            case "week":
                return "weekly";
            case "month":
                return "monthly";
            case "year":
                return "yearly";
        }
    } else if (frequency.interval == 2 && frequency.unit == "week") {
        return "biweekly";
    }
    return `every ${frequency.interval} ${frequency.unit}s`;
}

export function dollarStringToNumber(dollarString: string): number {
    let num = parseFloat(dollarString.replace("$", "").replace(",", ""));
    return isNaN(num) ? 0 : num;
}

export function numberToDollarString(num: number): string {
    return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createBudget() {
    let filters: Filter[] = $state([
        { name: "Actual", frequency: { interval: 1, unit: "day" } },
        { name: "Monthly", frequency: { interval: 1, unit: "month" } },
        { name: "Biweekly", frequency: { interval: 2, unit: "week" } },
        { name: "Yearly", frequency: { interval: 1, unit: "year" } },
    ])
    let selectedFilterIndex = $state(0);

    let categories: Category[] = $state([
        {
            name: "Giving",
            budgetItems: [
                { name: "Church", amount: 100, frequency: { interval: 1, unit: "month" } },
                { name: "Missionaries", amount: 50, frequency: { interval: 3, unit: "week" } },
                { name: "Generosity", amount: 200, frequency: { interval: 1, unit: "month" } },
            ],
            expanded: true,
        }
    ])

    function nextFilter() {
        selectedFilterIndex = (selectedFilterIndex + 1) % filters.length;
    }

    return {
        get categories() { return categories },
        set categories(value) { categories = value },
        get filters() { return filters },
        set filters(value) { filters = value },
        get selectedFilterIndex() { return selectedFilterIndex },
        set selectedFilterIndex(value: number) { selectedFilterIndex = value },
        nextFilter,
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