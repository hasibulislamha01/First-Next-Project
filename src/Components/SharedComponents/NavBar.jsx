"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {

    const pathName = usePathname()

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Posts",
            path: '/posts'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Dashboard",
            path: '/dashboard'
        },
        {
            title: "Settings",
            path: '/Dummy'
        },
    ]
    return (
        <nav className='h-[80px] px-12 bg-black bg-opacity-75 text-white  flex justify-between items-center'>
            <div className='font-medium text-xl'>
                NextApp
            </div>
            <div>
                <ul className='text-lg flex justify-center items-center gap-5'>
                    {
                        links?.map(link =>
                            <Link
                                key={link.path}
                                href={link.path}
                                className={pathName === link.path && `text-sky-400`}
                            >
                                {link.title}
                            </Link>
                        )
                    }
                    <Link href={'/login'}>
                        <button className='px-4 py-1 bg-red-400 rounded-md'>Login</button>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;