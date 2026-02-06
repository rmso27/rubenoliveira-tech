import client from '$lib/sanityClient';

export async function load() {
    const posts = await client.fetch(`*[_type == 'blog']{title, slug, publishedAt, description, "tags": tags[]->title}`);

    if (posts) {
        let postsList = []
        for (let i = 0;  i < posts.length; i++) {
            postsList.push({
                title: posts[i].title,
                slug: posts[i].slug,
                publishedAt: posts[i].publishedAt,
                description: posts[i].description,
                tags: posts[i].tags
            })
        }
        return {postsList}
    }
        return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}