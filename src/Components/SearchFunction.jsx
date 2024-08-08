"use client"
import React, { useEffect, useState } from 'react';


const SearchFunction = () => {


    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    console.log(search);


    useEffect(() => {
       
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res?.json())
            .then(data => setUsers(data))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        const keyWord = e.target.keyWord.value
        setSearch(keyWord)
        // console.log('Searching', keyWord, typeof keyWord)
    }

    // console.log(users)
    return (
        <div>

            <form onSubmit={handleSearch} className=''>
                <input
                    type="text"
                    name='keyWord'
                    className='p-2 rounded-lg outline-none'
                    placeholder='Search here'
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    type='submit'
                    className='py-2 px-4 bg-red-400 rounded-md'>
                    Search
                </button>
            </form>

            <section className='mt-12'>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>zip code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.filter(filteredUsers => {
                                    return search.toLocaleLowerCase() === '' ?
                                        filteredUsers :
                                        filteredUsers.username.toLocaleLowerCase().includes(search)

                                }
                                )?.map(user =>
                                    <tr className='hover:bg-red-200 ' key={user.id}>
                                        <th>{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address.zipcode}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default SearchFunction;