<header>
    <div class = "banner">
        <div class="banner-container">
            <div class="banner-title">
                <h1>Ruben Oliveira</h1>
            </div>
            <div class="banner-caption">
                <h3>A DevOps Engineer with a soft-spot for Web Development</h3>
            </div>
            <div class="banner-social">
                <span><a href="https://github.com/rmso27">GitHub</a></span>
                <span><a href="https://www.linkedin.com/in/rubenmsoliveira/">LinkedIn</a></span>
            </div>
        </div>
    </div>
</header>

<style>
    header { 
        width: 100%;
        margin: 5rem 0;
    }

    .banner {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .banner-container { width: 70%; }

    .banner-title {
        padding: 2rem 0;
        text-align: center;
    }

    .banner-caption {
        padding: 2rem 0;
        text-align: center;
    }

    .banner-social {
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .banner-social span {
        padding: 1.1rem 1.3rem;
        background-color: #1C1C1C;
    }

    .banner-social span:hover {
        background-color: var(--highlight-color);
    }

    @media (max-width: 600px) {
        .banner-container { width: 100%; }
    }
</style>