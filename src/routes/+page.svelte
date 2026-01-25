<script>
    import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div class="blog">
    <div class="blog-post">
        <h2>Post 01</h2>
        <p class = "date">01.01.2026</p>
        <p>This is my first blog post</p>
        <p><span>category</span></p>
    </div>
</div>

<style>
    .blog {
        width: 100%;
        padding: 2rem;
        margin: 0 2rem 2rem 2rem;
    }

    .blog-post p { padding: .5rem 0; }

    .date {
        font-size: 0.9rem;
        color: gray;
    }

    span {
        margin: .5rem 0;
        padding: .3rem .7rem;
        width: auto;
        border-radius: 10px;
        font-size: 0.8rem;
        font-style: italic;
        background-color: var(--highlight-color);
    }
</style>