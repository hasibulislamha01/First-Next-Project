import React from 'react';

const NavBar = () => {
    return (
        <nav className='h-[80px] px-12 bg-black text-white  flex justify-between items-center'>
            <div className='font-medium text-xl'>
                NextApp
            </div>
            <div>
                <ul className='text-lg flex justify-center items-center gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Settings</li>
                    <li>Dashboard</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;