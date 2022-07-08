<script>
  import {createEventDispatcher} from 'svelte'
 	import { DeckStore } from '../stores';
    const dispatch = createEventDispatcher();
    export let page = 'deck';

    const handleDeckBuilder = ()=>{
      dispatch('page' , 'deck_builder');  
    }

    const handleDecks = ()=>{
      dispatch('page' , 'decks');  
    }

    const handleCollections = ()=>{
      dispatch('page' , 'collections');  
    }

    const handleSaveDeck = ()=>{
      const deckName = document.getElementById('deck-name');
      if(deckName.value.length<1)
          return;
      const payload = {title:deckName.value, cards:$DeckStore.map(c=>c.id)};
      
      fetch(`${window.location.origin.replace('3','8')}/decks/`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
    }
    const handleNewDeck = ()=>{
      const deckName = document.getElementById('deck-name');
        deckName.value = ''; 
        $DeckStore = []
    }
</script>
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex justify-between items-center mx-auto">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dungeons and Deckbuilding</span>
    
              <ul class="flex mt-0 flex-row space-x-8 text-sm font-medium items-center">
                {#if page == 'deck_builder' }
                <li>
                  <button on:click={handleNewDeck} class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">New Deck</button>
                  </li>
                <li>
                  <button on:click={handleSaveDeck}  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Save Deck</button>
                  </li>
                  <li>
                    <input type="text" id="deck-name" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name your deck...">
                    </li>
                    {/if}
                    </ul>
  <ul class="flex flex-row space-x-8 mt-0 text-sm font-medium items-end">

  <li>
    <button on:click={handleCollections} class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Colections</button>
              </li>
              <li>
              <button on:click={handleDecks} class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Decks</button>
              </li>
              <li>
                <button on:click={handleDeckBuilder} class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Deck Builder</button>
                </li>
                
                </ul>
    </div>
  </nav>
  