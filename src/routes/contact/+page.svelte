<script lang="ts">
    const myBreadcrumbs = [
	{ label: 'Lot 49', link: '/' },
	{ label: 'Contact', link: '/contact' }
];
</script>

<div class="box-content sm:w-1 md:w-2/3 lg:w-1/3 p-4 space-y-4 mx-auto">
    <div>
        <ol class="breadcrumb">
            {#each myBreadcrumbs as crumb, i}
                <!-- If crumb index is less than the breadcrumb length minus 1 -->
                {#if i < myBreadcrumbs.length - 1}
                    <li class="crumb"><a href={crumb.link}>{crumb.label}</a></li>
                    <li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
                {:else}
                    <li class="crumb">{crumb.label}</li>
                {/if}
            {/each}
        </ol>
    </div>
    <div>Send email to support at lot49 dot com.</div>
    
</div>