<script>
    import PortableText from '$lib/components/Sanity/PortableText.svelte'

    export let data
</script>

<div class = "post">
    <div class = "post-content">
        <h2>{data.postContent.title}</h2>
        <PortableText content = {data.postContent.content} />
    </div>
</div>

<style>
    .post {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .post-content {
        width: 60% ;
        margin: 2rem 0;
    }

    .post-content h2 { margin-bottom: 4rem; }

    @media (max-width: 1280px) {
        .post-content { width: 95%; }

        h2 { font-size: 2rem; }
    }
</style>