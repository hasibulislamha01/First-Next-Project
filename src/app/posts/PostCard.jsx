import React from 'react';

const PostCard = ({post}) => {
    return (
        <div
            className='w-[350px] h-[150px] text-center flex items-center justify-center  bg-emerald-700 px-4 py-2 rounded-md'>
            <h1 className='text-white'>{post.title}</h1>
        </div>
    );
};

export default PostCard;