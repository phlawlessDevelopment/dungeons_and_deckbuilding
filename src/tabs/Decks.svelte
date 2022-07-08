<script>
    import { onMount } from "svelte";
    import Deck from "../components/Deck.svelte";
    
    let decks = [
      ];
      onMount(()=>{
        fetch(`${window.location.origin.replace('3','8')}/decks/`).then((r)=>{
          return r.json();
        }).then(j=>{
          decks = [...j];
          console.log(decks);
        })
      })
  
      </script>
        <div class="flex flex-col w-full h-full">
          <div class="flex flex-row gap-2 ml-2 items-center justify-center my-2 w-full h-full ">
            <div class="flex justify-between w-full h-full">     
            <div class="flex flex-wrap border-2 bg-gray-700 rounded-lg flex-grow gap-4 p-4 w-full h-full overflow-scroll noscroll ">    
          {#each decks as deck }
          <Deck deckId={deck.id} title={deck.title} cards={deck.cards} />
          {/each}
        </div>
          
        </div>
        </div>
        </div>
        
        