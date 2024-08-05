"use client"
import getPosts from '@/Components/getPosts';
import Link from 'next/link';
import React from 'react';
import PostCard from './postCard';




const page = async () => {

    const posts = await getPosts()
    // console.log(posts)

    return (
        <div className='container mx-auto min-h-screen py-6 flex flex-col gap-12 items-center justify-center'>

            <h1 className='text-2xl text-center'>Posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    posts?.map(post =>
                        <Link
                            key={post.id}
                            href={`/posts/${post.id}`}
                        >
                            <PostCard
                                post={post}>
                            </PostCard>
                            
                        </Link>
                    )
                }
            </div>

        </div>
    );
};

export default page;