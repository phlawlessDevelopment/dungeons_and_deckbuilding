<script>
   	import { createEventDispatcher } from 'svelte';
   	import { ColorStore } from '../stores';
   	import { objectMap } from '../helpers';

    export let cardId = -1;
    export let title = '';
    export let description = '';
    export let cardSet = '';
    const dispatch = createEventDispatcher();


    
    const backgrounds = objectMap($ColorStore,c=>`bg-${c}`)
    const borders = objectMap($ColorStore,c=>`hover:border-${c}`)
    
    const handleClick = ()=>{
        dispatch('clicked',cardId);
    }
</script>

<div
class="block p-6 w-48 h-64 rounded-lg border-2 border-white hover:bg-gray-100  text-center {borders[cardSet]} {backgrounds[cardSet]}"
on:click|stopPropagation={handleClick}
>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
    <p class="font-normal text-gray-700">{description}</p>
</div>
