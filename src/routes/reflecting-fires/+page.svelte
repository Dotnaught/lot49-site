<script lang="ts">
    import reflecting_fires_image from "$lib/assets/reflecting_fires_cover2242x1598.png";

    const myBreadcrumbs = [
	{ label: 'Lot 49', link: '/' },
	{ label: 'Reflecting Fires', link: '/reflecting-fires' }
    ];
</script>

<div class="box-content sm:w-1 md:w-2/3 lg:w-1/3 p-4 space-y-4 mx-auto">
    <div>
        <ol class="breadcrumb">
            {#each myBreadcrumbs as crumb, i}
                <!-- If crumb index is less than the breadcrumb length minus 1 -->
                {#if i < myBreadcrumbs.length - 1}
                    <li class="crumb"><a href={crumb.link}>{crumb.label}</a></li>
                    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
                {:else}
                    <li class="crumb">{crumb.label}</li>
                {/if}
            {/each}
        </ol>
    </div>  
<div>
    <img src="{reflecting_fires_image}" alt="Reflecting Fires books cover" />
</div>

<p>Reflecting Fires is available at:</p>

<p><a href="https://www.amazon.com/Reflecting-Fires-Thomas-Claburn/dp/0967631211/" target="_blank">Amazon</a></p>

<p>In the distant future, the priestess Dahlia has a vision of a boy who will end the strife between man and machine. But when the savior she foresaw appears, backed by the powerful Cardinal Skye, Dahlia must unravel the boy's secret before war consumes the Empire.</p>

<p>&nbsp;</p>

<p>Tom Claburn is a new, lyrical voice in the clichéd realms of fantasy. His inventive use of language and symbols reminds me of Gene Wolfe's creative word-play in his multi-volume series, The Book of the New Sun.</p>

<p>— E. A. Lovitt, Amazon Top 500 Reviewer, August 20, 2001</p>
</div>