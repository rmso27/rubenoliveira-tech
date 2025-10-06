<header>
    <nav>
        <a href="/">/home</a>
        <a href="/projects">/projects</a>
        <a href="/blog">/blog</a>
    </nav>
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
                <span><a href="https://www.threads.net/@rubenoliveira.27">Threads</a></span>
                <span><a href="https://www.linkedin.com/in/rubenmsoliveira/">LinkedIn</a></span>
            </div>
        </div>
    </div>
</header>

<style>
    header { 
        width: 100%;
        margin-bottom: 2rem;
        border-bottom: 1px dashed #292929;
    }

    nav {
        padding: 2rem;
        margin: 0 2rem 2rem 2rem; 
    }

    nav a {
        margin-right: 1rem;
        font-style: normal;
        position: relative;
        text-decoration: none;
    }

    nav a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 3px;
        background: var(--highlight-color);
        transition: width 0.3s ease;
    }

    nav a:hover::after {
        width: 100%;
    }

    @media (max-width: 600px) {
        nav  { text-align: center; }

        nav a {
            text-decoration: underline;
            text-decoration-color: var(--highlight-color);
            text-decoration-thickness: 3px;
            text-underline-offset: 6px;
        }
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
        padding: 1.2rem 1.4rem;
        background-color: #1C1C1C;
    }

    .banner-social span:hover {
        background-color: var(--highlight-color);
    }

    @media (max-width: 600px) {
        .banner-container { width: 100%; }
    }
</style>