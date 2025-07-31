<script lang="ts">
import ProductMenu from "$lib/components/products.svelte";
import Footer from "$lib/components/footer.svelte";
import Logo from "$lib/assets/lot49-logo-gold.png";
			  
</script>
<main style="background-color: #000000; min-height: 100vh; color: #ffffff;">
<img src="{Logo}" class="mx-auto" alt="Lot 49" />

<div>
	<ProductMenu />
</div>
</main>
<footer style="background-color: #000000; color: #ffffff;">
	<Footer />
</footer>
