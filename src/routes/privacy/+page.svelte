<script lang="ts">
    const myBreadcrumbs = [
	{ label: 'Lot 49', link: '/' },
	{ label: 'Privacy', link: '/privacy' }
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
    <div>
        <p>Lot 49 Labs doesn't collect web data.</p>
        <p>We don't use unnecessary cookies.</p> 
        <p>We don't serve ads.</p>
        <p>We don't use analytics or third-party tracking scripts.</p>
        <p>We don't sell your data, which we don't have.</p>
        <p>If you email us, we'll have your email, which we won't sell.</p>
        <p>That's our Privacy Policy as of April 16, 2023.</p>
        <p>Things may change at some point. We'll revise this policy if so.</p>
    </div>
    
</div>