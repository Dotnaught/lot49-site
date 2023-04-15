<script lang="ts">
    import ac_nightshade_image from "$lib/assets/ac_nightshade.png";

    const myBreadcrumbs = [
	{ label: 'Lot 49', link: '/' },
	{ label: 'Nightshade', link: '/nightshade' }
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
    <img src="{ac_nightshade_image}" alt="Nightshade album cover" />
</div>

<div class="space-y-4">
<p>Andrea's debut recording "Nightshade" is available on <a href="https://www.amazon.com/Nightshade-Andrea-Claburn/dp/B01N5HPVZI" target="_blank">Amazon</a>, <a href="https://music.apple.com/us/artist/andrea-claburn/1172595434" target="_blank">iTunes</a>, <a href="https://soundcloud.com/andreaclaburn" target="_blank">Soundcloud</a> and <a href="https://open.spotify.com/artist/68GdtgwIc3ovpqQ2YZkagG" target="_blank">Spotify</a>.</p>

<p>"The jazz here is extraordinary."
<p>— David Wiegand, KQED's <a target="_blank" href="https://ww2.kqed.org/arts/2017/01/19/cy-and-davids-picks-a-young-photographer-a-jazz-singer-and-making-a-fun-home-for-theater/">The Do List</a>, January 19, 2017</p>

<p>"Claburn’s highly instrumental use of her voice is… riveting to hear… This is one of the most auspicious recording debuts for a jazz singer I’ve heard… Highly recommended."</p>
<p>— Lynn René Bayley, <a target="_blank" href="https://artmusiclounge.wordpress.com/2016/11/24/andrea-claburn-highly-individual-in-debut-recording/">The Art Music Lounge</a></p>

<p>"This is a well thought out record, an impressive calling card for a vocalist who has taken the time to grow into herself… Nightshade has a seriousness that is at the same time engaging and entertaining. Much respect is due to Andrea Claburn, a naturally gifted singer who has taken the time and done the hard work necessary to become something more – a very interesting and capable composer and arranger."</p>
<p>— Mark Christian Miller, <a target="_blank" href="https://web.archive.org/web/20201020225451/http://www.markchristianmiller.com/andrea-claburn-nightshade/">Mark Heard It First</a></p>
</div>
</div>