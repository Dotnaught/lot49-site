<script lang="ts">
    import "../app.css";
	import "../app.pcss";
    // The ordering of these imports is critical to your app working properly
    //import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    //import '@skeletonlabs/skeleton/styles/all.css';
    // Most of your app wide CSS should be put in this file
    import '../app.postcss';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

{@render children?.()}
