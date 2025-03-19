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

export function categoryTotal(category: Category, frequency: Frequency): number {
    return category.budgetItems.reduce((total, item) => {
        return total + changeFrequency(item.amount, item.frequency, frequency);
    }, 0);
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
                { name: "Church", amount: 150, frequency: { interval: 1, unit: "month" } },
                { name: "Charitable Donations", amount: 75, frequency: { interval: 1, unit: "month" } },
                { name: "Sponsorships", amount: 50, frequency: { interval: 2, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Personal",
            budgetItems: [
                { name: "Groceries", amount: 700, frequency: { interval: 1, unit: "month" } },
                { name: "Clothing", amount: 100, frequency: { interval: 2, unit: "month" } },
                { name: "Entertainment", amount: 150, frequency: { interval: 1, unit: "month" } },
                { name: "Gym Membership", amount: 50, frequency: { interval: 1, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Housing",
            budgetItems: [
                { name: "Rent/Mortgage", amount: 1800, frequency: { interval: 1, unit: "month" } },
                { name: "Homeowners/Renters Insurance", amount: 100, frequency: { interval: 1, unit: "month" } },
                { name: "Property Taxes", amount: 250, frequency: { interval: 1, unit: "month" } },
                { name: "Utilities (Electric, Water, Gas)", amount: 250, frequency: { interval: 1, unit: "month" } },
                { name: "Internet", amount: 75, frequency: { interval: 1, unit: "month" } },
                { name: "Streaming Services", amount: 40, frequency: { interval: 1, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Transportation",
            budgetItems: [
                { name: "Car Payment", amount: 400, frequency: { interval: 1, unit: "month" } },
                { name: "Car Insurance", amount: 120, frequency: { interval: 1, unit: "month" } },
                { name: "Gas", amount: 200, frequency: { interval: 1, unit: "month" } },
                { name: "Maintenance & Repairs", amount: 50, frequency: { interval: 1, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Medical & Health",
            budgetItems: [
                { name: "Health Insurance", amount: 500, frequency: { interval: 1, unit: "month" } },
                { name: "Prescriptions", amount: 50, frequency: { interval: 1, unit: "month" } },
                { name: "Doctor Visits", amount: 100, frequency: { interval: 3, unit: "month" } },
                { name: "Dental & Vision", amount: 75, frequency: { interval: 2, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Savings & Investments",
            budgetItems: [
                { name: "Emergency Fund", amount: 300, frequency: { interval: 1, unit: "month" } },
                { name: "Retirement Contributions", amount: 500, frequency: { interval: 1, unit: "month" } },
                { name: "College Fund", amount: 200, frequency: { interval: 1, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Child Expenses",
            budgetItems: [
                { name: "Daycare/Preschool", amount: 800, frequency: { interval: 1, unit: "month" } },
                { name: "School Supplies", amount: 50, frequency: { interval: 1, unit: "month" } },
                { name: "Extracurricular Activities", amount: 100, frequency: { interval: 1, unit: "month" } }
            ],
            expanded: true
        },
        {
            name: "Debt Payments",
            budgetItems: [
                { name: "Credit Card Payment", amount: 200, frequency: { interval: 1, unit: "month" } },
                { name: "Student Loans", amount: 300, frequency: { interval: 1, unit: "month" } }
            ],
            expanded: true
        }
    ]
    );

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