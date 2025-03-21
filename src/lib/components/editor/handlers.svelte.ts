// todo:
import { mount, unmount } from "svelte";
import Block, { type BlockProps } from "./block.svelte";

let nextId = 1;
let content: (string | { id: string, props: BlockProps })[] = [];
let blocks: Record<string, Block> = {};


export function handleKeyDown(event: KeyboardEvent) {
    // backspace
    // delete
    // "/"
}

export function handlePaste(event: ClipboardEvent) {
}

export function handleCut(event: ClipboardEvent) {
}

export function handleCopy(event: ClipboardEvent) {
}

export function insertComponent(dom: HTMLElement, props: BlockProps) {
    blocks[(nextId++).toString()] = mount(Block, { target: dom, props: { lock: true } });
}
