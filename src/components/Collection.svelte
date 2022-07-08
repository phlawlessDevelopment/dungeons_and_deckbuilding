<script>
   	import { createEventDispatcher } from 'svelte';

    export let collectionId = -1;
    export let title = '';
    export let decks = [];
    const dispatch = createEventDispatcher();
    
    const handleClick = ()=>{
        dispatch('clicked',collectionId);
    }
</script>

<div
class="block p-6 w-48 h-64 rounded-lg border-2 border-white hover:bg-gray-600  text-center bg-gray-500"
on:click|stopPropagation={handleClick}
>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
    {#each decks as deck }
    <p class="font-normal text-white">{deck.title}</p>
    {/each}
</div>
