import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PostCard from "./PostCard";


const Posts = () => {
    const axiosSecure = useAxiosSecure()
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        axiosSecure.get('/posts')
        .then( res => {
            setPosts(res.data)
            
        })
    }, [axiosSecure])
    
    return (
        <div>
            {
                posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
            }
        </div>
    );
};

export default Posts;