import SideNav from '@/Components/SharedComponents/SideNav';
import React from 'react';

const dashboardLayout = ({children}) => {
    return (
        <div className=' container mx-auto flex items-center justify-center'>
            <div className=''>
                {children}
            </div>
            <SideNav />
        </div>
    );
};

export default dashboardLayout;