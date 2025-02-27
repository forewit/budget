import { getContext, setContext } from 'svelte';
import { themes } from '$lib/Theme/themes.svelte';

export type Frequency = {
    value: number,
    span: "days" | "weeks" | "months" | "years",
  }
export type Expense = {
    name: string;
    amount: number;
    frequency: Frequency;
};
export type Category = {
    name: string;
    expanded: boolean;
    expenses: Expense[];
};


function createApp() {

    let categories: Category[] = $state([
        {
            name: "Food",
            expanded: true,
            expenses: [
                { name: "Groceries", amount: 100, frequency: { value: 1, span: "months"} },
                { name: "Restaurants", amount: 50, frequency: { value: 1, span: "weeks"} },
            ],
        },
        {
            name: "Transportation",
            expanded: true,
            expenses: [
                { name: "Gas", amount: 50, frequency: { value: 1, span: "months"} },
                { name: "Public Transit", amount: 50, frequency: { value: 1, span: "months"} },
            ],
        },
    ]);
    let budgetFrequency = $state({ value: 1, span: "months"} as Frequency);
    let themeName = $state("Canvas")
    let theme = $derived(themes.find((t) => t.name === themeName) || themes[0]);

    return {
        // App state
        get theme() { return theme },
        get categories() { return categories },
        set categories(value) { categories = value },
        get budgetFrequency() { return budgetFrequency },
        set budgetFrequency(value) {budgetFrequency = value },
        get themeName() { return themeName },
        set themeName(value) { themeName = value },
    }
}

const APP_KEY = Symbol('app')

export const setAppContext = () => {
    const nApp = createApp();
    return setContext(APP_KEY, nApp)
}

export const getAppContext = (): ReturnType<typeof setAppContext> => {
    return getContext(APP_KEY)
}