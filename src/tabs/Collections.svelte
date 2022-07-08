<script>
    import { onMount } from "svelte";
    import Collection from "../components/Collection.svelte";
    
    let collections = [
      ];
      onMount(()=>{
        fetch(`${window.location.origin.replace('3','8')}/collections/`).then((r)=>{
          return r.json();
        }).then(j=>{
          collections = [...j];
        })
      })
  
      </script>
   <div class="flex flex-col w-full h-full">
    <div class="flex flex-row gap-2 ml-2 items-center justify-center my-2 w-full h-full ">
      <div class="flex justify-between w-full h-full">     
      <div class="flex flex-wrap border-2 bg-gray-700 rounded-lg flex-grow gap-4 p-4 w-full h-full overflow-scroll noscroll">   
          {#each collections as collection }
          <Collection collectionId={collection.id} title={collection.title} decks={collection.decks} />
          {/each}
        </div>
          
        </div>
        </div>
        </div>
        
        