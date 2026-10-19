
import React from 'react';

export async function getServerSideProps(context) {
    const { id } = context.params;

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await res.json();

    return {
        props: { post: data }
    };
}
export default function SSRPage({ post }) {
    return (
        <div>
            <h1>Dynamic SSR Page</h1>
            <h2>Post ID: {post.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}
