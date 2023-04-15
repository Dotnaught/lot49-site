<script lang="ts">
    import oversight_image from "$lib/assets/oversight_cover1500x1085.png";
    import kirkus_image from "$lib/assets/kirkus_2015.png";

    const myBreadcrumbs = [
	{ label: 'Lot 49', link: '/' },
	{ label: 'Oversight', link: '/oversight' }
    ];
</script>
<div class="box-content w-1/3 p-4 space-y-4 mx-auto">
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
    <img src="{oversight_image}" alt="Oversight book cover" />
</div>
<div class="space-y-4">
<p>Oversight is available at:</p>

<p><a href="http://www.amazon.com/Oversight-Thomas-Claburn/dp/0986101605/" target="_blank">Amazon</a> | <a href="http://www.barnesandnoble.com/w/oversight-thomas-claburn/1121462114?ean=9780986101601" target="_blank">Barnes & Noble</a> | <a href="https://play.google.com/store/books/details/Thomas_Claburn_Oversight?id=JA1bCwAAQBAJ" target="_blank">Google Play</a> | <a href="https://itunes.apple.com/us/book/oversight/id977300622?mt=11" target="_blank">iTunes</a> | <a href="https://store.kobobooks.com/en-US/ebook/oversight-3" target="_blank">Kobo</a> | <a href="https://www.smashwords.com/books/view/527446" target="_blank">Smashwords</a></p>

<p>Disgraced detective Sam Crane would do anything to help his comatose daughter recover. But when he's told to turn a blind eye to the murder of a reclusive scientist, he refuses, seeing his resolve as atonement for failing his family and his colleagues. Sam's determination to persevere endangers his friends, even as it reveals a secret sought by a deluded advertising magnate, a set of look-alike terrorists, and government agents: a way to alter the visible world. If only he could have seen the truth through his own eyes. Confronting a deceptive, hyper-commercial world amid a pandemic of blindness, Sam realizes he must embrace the artifice he resents to maintain his integrity. He plays his adversaries against each other in a gamble that puts his investigation at risk but offers a way to mend his fractured life–if he can survive.</p>

<div>
    <img src="{kirkus_image}" alt="Kirkus Reviews – The Best Books of 2015" />
</div>
<p>"An invigorating sci-fi mystery that’s so plugged in it may leave readers’ brains buzzing."</p>

<p>— Kirkus Reviews</p>

<p>"The story is well written with language often becoming poetic before coming back to being candid and incisive. This was a short novel that hit all the right notes for me.</p>

<p>— The Hungry Monster Book Review</p>

<p>"Claburn’s novel is all the more tense and frightening for feeling only one step away from today, a feeling relieved by Sam’s old-fashioned cynicism mixed with his willingness to do anything for his daughter. His deep emotions make him the most real and absorbing feature of this vivid story about a virtual world overloaded with real danger."</p>

<p>— Publishers Weekly Self-Publishing Stars of 2015</p>

<p>Share your thoughts at <a href="https://www.goodreads.com/book/show/25144014-oversight" target="_blank">Goodreads</a>.</p>
</div>
</div>