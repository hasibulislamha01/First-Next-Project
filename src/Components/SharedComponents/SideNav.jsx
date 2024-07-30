import Link from 'next/link';
import React from 'react';

const SideNav = () => {
    const options = [
        {
            id: 1,
            title: 'Profile',
            link: '/profile'
        },
        {
            id: 2,
            title: 'Statistics',
            link: '/profile'
        },
        {
            id: 3,
            title: 'History',
            link: '/profile'
        },
        {
            id: 4,
            title: 'Profile Settings',
            link: '/profile'
        },
        {
            id: 5,
            title: 'Logout',
            link: '/profile'
        },
    ]
    return (
        <nav className='w-[350px] bg-blue-200 px-2 min-h-screen flex flex-col items-center gap-1 pt-32'>
            
            {
                options?.map(option =>
                    <Link
                        key={option?.id}
                        href={option?.link}
                        className='w-full bg-blue-200 hover:bg-red-200 py-2 px-4 rounded-md'
                    >{option?.title}</Link>
                )
            }

        </nav>
    );
};

export default SideNav;