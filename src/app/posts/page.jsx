"use client"
import getPosts from '@/Components/getPosts';
import React from 'react';

const page = async () => {

    const posts = await getPosts()
    // console.log(posts)

    return (
        <div className='container mx-auto min-h-screen py-6 flex flex-col gap-12 items-center justify-center'>

            <h1 className='text-2xl text-center'>Posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    posts?.map(post =>
                        <div
                            key={post.id}
                            className='w-[350px] h-[150px] flex items-center justify-center  bg-orange-300 px-4 py-2 rounded-md'>
                            <h1>{post.title}</h1>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default page;