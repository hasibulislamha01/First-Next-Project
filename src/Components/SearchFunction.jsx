"use client"
import React from 'react';

const SearchFunction = () => {

    const handleSearch = (e) => {
        e.preventDefault()
        console.log('Searching')
    }
    
    return (
        <form onSubmit={handleSearch} className=''>
            <input
                type="text"
                className='p-2 rounded-lg outline-none'
                placeholder='Search here'
            />
            <button
                type='submit'
                className='py-2 px-4 bg-red-400 rounded-md'>
                Search
            </button>
        </form>
    );
};

export default SearchFunction;