import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PostCard from "../../../Pages/Home/PostCard";
import { useLoaderData } from "react-router-dom";



const UsersProfile = () => {
    const userData = useLoaderData();
    console.log(userData);
    const { user , loading} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [ posts, setPosts] = useState([])
    const [ users , setUsers] = useState({})
   console.log(users);
    useEffect(()=> {
        axiosPublic.get('/posts')
        .then(res => {
            const allposts = res.data;
            const myPosts = allposts.filter(post => post?.email === user?.email) 
            setPosts(myPosts)
        })
    },[axiosPublic, user?.email])

    useEffect( ()=> {
      const currentUser =   userData.find( users => users?.email === user?.email);
      setUsers(currentUser)
    }, [user?.email, userData])
  

    if(loading){
        return <div>
             <span className="loading loading-spinner loading-lg"></span>
         </div>
     }

     
    return (
        <div>
            <div className="flex flex-col items-center mt-10">
                <img src={users?.photo} alt="" className="w-36 h-36 rounded-full" /> 
                <h1 className="mt-4 text-2xl font-bold">{users?.name}</h1>
                <p className="font-semibold">email: {users?.email}</p>
              
            </div>
           {
            posts.length > 0 ?  <h1 className="text-2xl font-bold my-5 text-center">My Recent  Posts</h1> 
            : 
            <h1 className="text-2xl font-bold my-5 text-center">You Have No post Right Now</h1>
           }
            <div className="grid grid-cols-2 gap-7">
                {
                     posts.slice(0, 3).map(post  => <PostCard  key={post._id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default UsersProfile;