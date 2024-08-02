
const fetchPostData = async (id) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const page = async ({params}) => {
    
    const postData = await fetchPostData(params?.postId)
    console.log('params are',params, postData)

 


    return (
        <div className='mt-12 container mx-auto min-h-screen flex flex-col justify-center items-center'>
            <h1 className="text-center text-3xl">id: {params?.postId}</h1>
            <h1 className="text-center text-3xl">title {postData?.title}</h1>
        </div>
    );
};

export default page;