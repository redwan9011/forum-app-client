import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PostCard from "./PostCard";


const Posts = () => {
    const axiosSecure = useAxiosSecure()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axiosSecure.get('/posts')
            .then(res => {
                setPosts(res.data)

            })
    }, [axiosSecure])

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead >
                        <tr className="text-lg font-bold text-black">
                            <th>Author image</th>
                            <th>Title</th>
                            <th>Favorite Color</th>
                            <th>Vote Counts</th>
                            <th>Comment Counts</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Posts;