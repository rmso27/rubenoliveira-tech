<nav>
    <a href="/">/home</a>
    <a href="/projects">/projects</a>
</nav>

<style>
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
</style>