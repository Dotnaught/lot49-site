<script lang="ts">
	//import type { Products } from "../types/products";
  import { Avatar } from '@skeletonlabs/skeleton';
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
<main>
<div class="card-container">
  <div class="card p-4 dark:bg-gray-900 m-4">
    <div class="card-body p-4">
    <a href="{url}">
    <Avatar src="{image}?img=48" class="mx-auto w-16 md:w-32 lg:w-48 rounded-none hover:scale-95 ease-in duration-300" border="border-4 	border-surface-300-600-token hover:!border-primary-100"
    cursor="cursor-pointer" alt="" />
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