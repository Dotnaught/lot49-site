<script lang="ts">
    import Productcard from "$lib/productcard.svelte";
import ProductCard from "$lib/productcard.svelte";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-col-3 gap-4">
		<div class=col-span-3>
			<h1 class="text-4xl font-bold">Lot 49 Labs</h1>
		</div>
		<Productcard />
		<div class=col-span-3>
			<button class="btn variant-filled-primary">Non-functional button</button>
		</div>
	</div>
</div>
