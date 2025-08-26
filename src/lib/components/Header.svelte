<header>
    <div class="header-container">
        <nav>
            <a href="/projects">/projects</a>
            <a href="/blog">/blog</a>
        </nav>
        <div class="header-title">
            <h1>Ruben Oliveira</h1>
        </div>
        <div class="header-caption">
            <h2>A DevOps Engineer with a soft-spot for Web Development</h2>
        </div>
        <div class="header-social">
            <span><a href="https://github.com/rmso27">GitHub</a></span>
            <span><a href="https://www.threads.net/@rubenoliveira.27">Threads</a></span>
            <span><a href="https://www.linkedin.com/in/rubenmsoliveira/">LinkedIn</a></span>
        </div>
    </div>
</header>

<style>
    header {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
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
    }

    .header-title {
        padding: 2rem 0;
        text-align: center;
    }

    .header-caption {
        padding: 2rem 0;
        text-align: center;
    }

    .header-social {
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .header-social span {
        padding: .3rem .5rem;
        background-color: #1C1C1C;
    }

    .header-social span:hover {
        background-color: var(--highlight-color);
    }
</style>