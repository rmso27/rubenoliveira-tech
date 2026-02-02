<script>
    import SanityImage from "$lib/components/Sanity/SanityImage.svelte";
    export let content;
</script>

{#each content as block}
    {#if block._type === 'block'}
        {#if block.style === 'h3'}
            <h3>{block.children[0].text}</h3>
        {:else if block.listItem === 'bullet'}
            <ul>
                <li>{block.children[0].text}</li>
            </ul>
        {:else if block.children[0].marks.includes('strong')}
            <strong>{block.children[0].text}</strong>
        {:else if block.children[0].marks.includes('em')}
            <i>{block.children[0].text}</i>
        {:else}
            <p>
                {#each block.children as child}
                    {#if child.marks.includes('em')}
                        <i>{child.text}</i>
                    {:else if child.marks.includes('strong')}
                        <strong>{child.text}</strong>
                    {:else}
                        {child.text}
                    {/if}
                {/each}
            </p>
        {/if}
    {/if}
    {#if block._type === 'image'}
        <div class="content-content-image">
            <SanityImage image_ref = {block.asset._ref} />
        </div>
    {/if}
{/each}

<style>
    h3 {
        margin: 3rem 0;
        font-weight: 500;
    }
</style>