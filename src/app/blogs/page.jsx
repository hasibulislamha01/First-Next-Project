import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogBanner from '../../../public/blog.jpg'

const page = () => {
    const blogs = [
        {
            id: 1,
            title: 'Blog 1',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis molestiae rem porro quaerat excepturi aut itaque neque temporibus ratione consectetur aperiam veniam, accusamus necessitatibus! Id odio facere ipsam eaque deleniti?'
        },
        {
            id: 2,
            title: 'Blog 2',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis molestiae rem porro quaerat excepturi aut itaque neque temporibus ratione consectetur aperiam veniam, accusamus necessitatibus! Id odio facere ipsam eaque deleniti?'
        },
        {
            id: 3,
            title: 'Blog 3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis molestiae rem porro quaerat excepturi aut itaque neque temporibus ratione consectetur aperiam veniam, accusamus necessitatibus! Id odio facere ipsam eaque deleniti?'
        },
    ]
    return (
        <div className='min-h-screen container mx-auto pt-12 space-y-12'>

            <h1 className='text-center text-3xl '>Blogs</h1>
            <Image
                src={blogBanner}
                alt='Blog Banner'
                placeholder='blur'
                className='h-[300px] object-cover rounded-lg'
            ></Image>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    blogs?.map(blog =>
                        <Link
                            key={blog?.id}
                            href={`/blogs/${blog?.id}`}
                            className='h-[100px] border border-gray-500 bg-stone-300 rounded-lg  text-2xl flex items-center justify-center cursor-pointer hover:scale-105 duration-500'
                        >
                            {blog?.title}
                        </Link>
                    )
                }
            </div>


        </div>
    );
};

export default page;