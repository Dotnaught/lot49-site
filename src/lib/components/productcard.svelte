<script lang="ts">
	//import type { Products } from "../types/products";
  import { Avatar } from '@skeletonlabs/skeleton';
    export let name: string, description: string, author: string, image: string, url: string;
  </script>
<main>
<div class="card-container">
  <div class="card p-4">
   
    <a href="{url}">
    <Avatar src="{image}?img=48" class="mx-auto w-16 md:w-32 lg:w-48" rounded="rounded-full" alt="" />
    </a>
  
    <div class="card-body p-4">
      <div>
      <div class="card-title">{name}</div>
      <div class="author">{author}</div>
      <div class="description text-tertiary-500">{description}</div>
  </div>
    </div>
  </div>
</div>
</main>