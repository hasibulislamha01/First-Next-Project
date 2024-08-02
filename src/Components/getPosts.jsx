
const getPosts = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')

    return data?.json()
};

export default getPosts;