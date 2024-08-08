import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center gap-4'>
            <span className="loading loading-spinner text-accent text-3xl font-semibold"></span>
            <h1 className='text-center text-lg'>Loading...</h1>
        </div>
    );
};

export default loading;