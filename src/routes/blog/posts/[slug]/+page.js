// @ts-nocheck
import client from '$lib/sanityClient';

export async function load({params: {slug}}) {
    const post = await client.fetch(`*[_type == 'blog' && slug.current == '${slug}']{title, slug, publishedAt, content}`);

    if (post) {
        let postContent = {}
        postContent = {
            title: post[0].title,
            publishedAt: post[0].publishedAt,
            content: post[0].content
        }
        console.log(postContent)
        return {postContent}
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}