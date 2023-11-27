
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
    const axiosSecure = useAxiosSecure()

    const{ data : posts =[], isLoading} = useQuery({
        queryKey: ['cart' , ],
        queryFn: async ()=> {
            const res = await  axiosSecure(`/posts`)
            return res.data
        }
    })
 if(isLoading){
    return <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
 }
    return (

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            {
                posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
            }
        </div>
    );
};

export default Posts;