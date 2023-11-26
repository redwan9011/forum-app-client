import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const AdminProfile = () => {
    const {user} = useContext(AuthContext)
    const userData = useLoaderData();
    const axiosPublic = useAxiosPublic()
    const [ users , setUsers] = useState({})
    const [ posts, setPosts] = useState([])
    useEffect( ()=> {
        const currentUser =   userData.find( users => users?.email === user?.email);
        setUsers(currentUser)
      }, [userData,user?.email])


    useEffect( ()=> {
        axiosPublic.get('/posts')
        .then(res => {
            setPosts(res.data)
        })
    } ,[axiosPublic])


    return (
        <div>
              <div className="flex flex-col items-center mt-10">
                <img src={users?.photo} alt="" className="w-36 h-36 rounded-full" /> 
                <p className="text-lg font-semibold mt-1"> ADMIN</p>
                <h1 className="mt-4 text-2xl font-bold">{users?.name}</h1>
                <p className="font-semibold my-1">email: {users?.email}</p>
                
                <h2 className="text-2xl font-bold my-1">Total Posts: {posts.length}</h2>
                <p className="text-xl font-bold my-2">Total Users: {userData.length}</p>
            </div>
        </div>
    );
};

export default AdminProfile;