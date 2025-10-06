<div class="blog">
    <div class="blog-container">
        <div class="blog-title">
            <h1>Blog</h1>
        </div>
        <div class="blog-post-entry">
            <h2>Post 01</h2>
            <p>Post 01 description</p>
            <p><span>Topic</span></p>
        </div>
    </div>
</div>

<style>
    .blog { 
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .blog-container { width: 70%; }

    .blog-title { padding: 2rem 0; }

    span {
        margin: .2rem;
        padding: .3rem .7rem;
        width: auto;
        border-radius: 10px;
        font-size: 0.7rem;
        font-style: italic;
        background-color: var(--highlight-color);
    }
</style>