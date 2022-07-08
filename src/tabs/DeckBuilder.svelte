<script>
  import { onMount } from "svelte";
  import { fade, scale } from 'svelte/transition';
  import Card from "../components/Card.svelte";
  import {DeckStore,ColorStore} from '../stores';
  import {objectMap} from '../helpers';
  
  let all_cards = [
    ];
  let cards = [
    ];
    onMount(()=>{
      fetch(`${window.location.origin.replace('3','8')}/cards/`).then((r)=>{
        return r.json();
      }).then(j=>{
        all_cards = [...j];
        cards = [...all_cards];
      })
    })
      const addToDeck =(e)=>{
        const cardId = e.detail;
        const card = cards.filter(c=>c.id === cardId)[0];
        $DeckStore = [...$DeckStore, card];

    }
    const removeFromDeck =(e)=>{
          const cardId = e.detail;
          const cardIndex = $DeckStore.findIndex(c=>c.id===cardId);
          $DeckStore = [...$DeckStore.slice(0, cardIndex), ...$DeckStore.slice(cardIndex + 1)];
      }
      const filterCardsByChecked = ()=>{
        const checked = Array.from(document.querySelectorAll('input:checked')).map(c => c.id);
        console.log(checked);
        cards = [...all_cards.filter(c=>checked.includes(c.card_set))]        
      };

      const backgrounds = objectMap($ColorStore,c=>`bg-${c}`);

    </script>
      <div class="flex flex-col w-full h-full">
        <div class="flex flex-row gap-2 ml-2 items-center justify-center my-2">

          <span class="{backgrounds['Att']} p-4 rounded-lg">
            
            <label for="atk">Attacks</label>
            <input type="checkbox" name="attacks" id="Att" checked on:change={filterCardsByChecked}>
          </span>
          <span class="{backgrounds['Spe']} p-4 rounded-lg">
            <label for="atk">Spells</label>
            <input type="checkbox" name="spells" id="Spe" checked on:change={filterCardsByChecked}>
          </span>
          <span class="{backgrounds['Wea']} p-4 rounded-lg">
            <label for="atk">Weapons</label>
            <input type="checkbox" name="weapons" id="Wea" checked on:change={filterCardsByChecked}>
          </span>
          <span class="{backgrounds['Ite']} p-4 rounded-lg">
            <label for="atk">Items</label>
            <input type="checkbox" name="weapons" id="Ite" checked on:change={filterCardsByChecked}>
          </span>
          <span class="{backgrounds['Cla']} p-4 rounded-lg">
            <label for="atk">Class Features</label>
            <input type="checkbox" name="weapons" id="Cla" checked on:change={filterCardsByChecked}>
          </span>
        </div>
          <div class="flex justify-between w-full h-full">     
          <div class="flex flex-wrap border-2 bg-gray-700 rounded-lg flex-grow gap-4 p-4 w-5/6 overflow-scroll  noscroll">    
        {#each cards as card }
        <Card cardId={card.id} title={card.title} description={card.description} cardSet={card.card_set} on:clicked={addToDeck}></Card>
        {/each}
      </div>
      {#if $DeckStore.length>0 }
        
      <div class="flex flex-col items-center h-full  pt-4 px-2 border-2 border-yellow-300 bg-gray-600 rounded-lg overflow-y-scroll  noscroll w-1/6">
        <h1 class="text-white text-center">
          Deck</h1>
          <div class="flex flex-col h-full items-center -space-y-48">
            {#each $DeckStore as card }
            <div in:scale out:fade>
              <Card cardId={card.id} title={card.title} description={card.description} cardSet={card.card_set} on:clicked={removeFromDeck}></Card>
            </div>
              {/each}
            </div>
          </div>
          {/if}
        </div>
      </div>
      
      