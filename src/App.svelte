<script>
import Navbar from "./components/Navbar.svelte";
import DeckBuilder from "./tabs/DeckBuilder.svelte";
import Collections from "./tabs/Collections.svelte";
import Decks from "./tabs/Decks.svelte";

 
let page = 'deck_builder';
const handlePage =(e)=>{
  console.log(e.detail);
  page = e.detail;
}
</script>

<main class="p-8 w-full h-full">
    <Navbar on:page={handlePage} page={page} />
    {#if page==='deck_builder'}
      <DeckBuilder/>
    {:else if page=='decks'}
      <Decks/>
    {:else if page=='collections'}
      <Collections/>
    {/if}    
 </main>

<style global>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }
.noscroll::-webkit-scrollbar {
  display: none;
}
.noscroll{
  -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
}

</style>
