<script lang="ts">
	//import type { Products } from "../types/products";
  interface Props {
    name: string;
    description: string;
    author: string;
    image: string;
    url: string;
  }

  let {
    name,
    description,
    author,
    image,
    url
  }: Props = $props();
  </script>
<main style="background-color: #000000; color: #ffffff;">
<div class="card-container">
  <div class="card p-4 m-4" style="background-color: #000000;">
    <div class="card-body p-4">
    <a href="{url}">
    <img src="{image}?img=48" class="mx-auto w-16 md:w-32 lg:w-48 rounded-none hover:scale-95 ease-in duration-300 border-4 border-surface-300-600-token hover:!border-primary-100 cursor-pointer" alt="{name}" />
    </a>
  
    
      <div>
      <div class="card-title text-secondary-300">{name}</div>
      <div class="author text-secondary-300">{author}</div>
      <div class="description text-tertiary-500">{description}</div>
  </div>
    </div>
  </div>
</div>
</main>