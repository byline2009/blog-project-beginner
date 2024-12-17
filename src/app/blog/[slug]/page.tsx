
import React from "react";
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    
    const { slug } = await params
    const res = await fetch(`https://houze-portal-api.houze.io/portal/blogs/${slug}`)
    const blog = await res.json();
    return (
        <article>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </article>
    )
}

export async function generateStaticParams() {
    const blogs = await fetch('https://houze-portal-api.houze.io/portal/blogs?is_hero=false&is_most_read=false&limit=1000&offset=0&ordering=-publish_time&section_id=1', {
        cache: 'force-cache',
    }).then((res) => res.json())

    return blogs.results.map((blog: any) => ({
        slug: String(blog.slug),
    }))
}