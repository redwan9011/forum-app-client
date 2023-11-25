import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { FaComments } from "react-icons/fa";

const UserPost = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const [myPosts, setMyPosts] = useState([])
    
  
    useEffect(() => {
        axiosSecure.get('/posts')
            .then(res => {
                const alldata = res.data;
                const myPost = alldata.filter(post => post.email === user?.email)
                setMyPosts(myPost)
            })
    }, [axiosSecure, user?.email, setMyPosts])
    

    const handlePostDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/posts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })

            }
            const remaining = myPosts.filter(post => post._id !== id)
            setMyPosts(remaining)
        });
    }

    return (
        <div>
            
        {
            myPosts.length > 0 ?

            <div className="overflow-x-auto">
                 <h1 className="text-3xl font-bold my-7 text-center"> My All Posts</h1>
            <table className="table text-center">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Votes</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                {
                    myPosts.map((post) => <tr key={post._id} className="bg-base-200">
                    
                    <td>{post.title}</td>
                    <td>{post.upvote + post.downvote}</td>
                    <td className="text-3xl flex justify-center"> <FaComments /></td>
                    <td onClick={()=>handlePostDelete(post._id)} className="text-red-600 text-3xl cursor-pointer md:text-4xl "> <AiFillDelete /></td>
                </tr>
                )
                }

                </tbody>
            </table>
        </div>
        :
        <h1 className="text-3xl text-center font-bold h-screen flex justify-center items-center text-red-600"> You do  no create any post</h1>
        }
        </div>
    );
};

export default UserPost;