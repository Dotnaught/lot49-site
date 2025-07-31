<script lang="ts">
    import ProductCard from "$lib/components/productcard.svelte";
    import ac_nightshade_image from "$lib/assets/ac_nightshade.png";
    import oversight_image from "$lib/assets/oversight500x500.png";
    import reflecting_image from "$lib/assets/reflecting500x500.png";
    import type { Products } from "../../types/products";
    
    
      let obj : Products[] = [
        {
        name: "Nightshade",
        description: "A recording",
        author: "Andrea Claburn",
        image: ac_nightshade_image,
        url: "/nightshade"
      },	
      {
        name: "Oversight",
        description: "A novel",
        author: "Thomas Claburn",
        image: oversight_image,
        url: "/oversight"
      }, {
        name: "Reflecting Fires",
        description: "A novel",
        author: "Thomas Claburn",
        image: reflecting_image,
        url: "/reflecting-fires"
      }];
    </script>
    
    
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center" style="background-color: #000000; color: #ffffff;">
        {#each obj as item}
        <ProductCard name={item.name}
            description={item.description}
            author={item.author}
            image={item.image}
            url={item.url}
        />
        {/each}
    
    </div>