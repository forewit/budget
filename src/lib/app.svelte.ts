import { getContext, setContext } from 'svelte';
import { themes } from '$lib/Theme/themes.svelte';


function createApp() {
    let themeName = $state("Canvas")
    let theme = $derived(themes.find((t) => t.name === themeName) || themes[0]);

    return {
        // App state
        get theme() { return theme },
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