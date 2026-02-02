<script>
    import Header from "$lib/components/Header.svelte";
    import PortableText from "$lib/components/Sanity/PortableText.svelte";

    export let data;
</script>

<Header />

<div class="blog">
    {#each data.postsList as block}
        <div class = "blog-post">
            <a href = {`/blog/posts/${block.slug.current}`}><h2>{block.title}</h2></a>
            <p class = "date">{block.publishedAt}</p>
            <PortableText content = {block.description} />
            <p>
                {#each block.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </p>
        </div>
    {/each}
</div>

<style>
    .blog {
        width: 100%;
        padding: 2rem;
        margin: 0 2rem 2rem 2rem;
    }

    .blog-post { margin-bottom: 5rem; }

    .blog-post p { padding: .5rem 0; }

    .date {
        font-size: 0.9rem;
        color: gray;
    }

    span {
        margin-right: 0.5rem;
        padding: .3rem .7rem;
        width: auto;
        border-radius: 10px;
        font-size: 0.8rem;
        font-style: italic;
        background-color: var(--highlight-color);
    }

    @media (max-width: 1280px) {
        .blog { margin: 0;}
    }
</style>