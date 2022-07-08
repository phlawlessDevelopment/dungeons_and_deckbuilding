import { writable } from 'svelte/store';

export const DeckStore = writable([]);
export const ColorStore = writable({
        "Spe":'red-300',
        "Cla":'green-300',
        "Wea":'blue-300',
        "Ite":'yellow-300',
        "Att":'orange-300',
        "Mov":'pink-300',
})