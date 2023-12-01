
import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";



const Adpost = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {user } = useContext(AuthContext)
    const [ posts, setPosts] = useState([])
    // useEffect( ()=> {
    //     axiosPublic( '/posts')
    //     .then( res => {
    //         const allposts = res.data
    //         const postLimit = allposts.filter( post => post?.email === user?.email);
    //         setPosts(postLimit)
    //     })
    // }, [axiosPublic,  user?.email])
    
    const { refetch, data: allposts = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/posts')
            return res.data
        }
    })
    console.log(posts);
    useEffect(()=> {
        console.log(allposts);
        const postLimit = allposts.filter( post => post?.email === user?.email);
                setPosts(postLimit)
    }, [allposts, user?.email])

    console.log(allposts);
    const handleAddPost = e => {
        e.preventDefault();
       
        const form = e.target;
        const name = form.name.value
        const email = user?.email;
        const title = form.title.value;
        const tag = form.tag.value;
        const upvote = parseInt(form.upvote.value);
        const downvote = parseInt(form.downvote.value);
        const description = form.description.value;
        const image = form.image.value;
        const date = new Date()
        const postTime = date.toISOString();
        const comments = 0
        const postData = { name, email, title, tag, upvote, downvote, description, image, date, postTime, comments };

        console.log(postData);

      
        if( posts.length >= 5){
            return alert('you have already 5 post')
        }
      
       else{
        axiosSecure.post('/posts', postData)
      
        .then(res => {
            console.log(res.data);
            refetch()
            Swal.fire("Post Add Succesfully");
        })
       }
       
      
    }
    return (
    
        <div className="bg-slate-300 h-screen">
               
            <form className="card-body" onSubmit={handleAddPost} >
                <div className="flex gap-5 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="name" placeholder="author name" className="input input-bordered" required />
                    </div>

                </div>

                <div className="flex gap-5 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Post title" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Select a tag</span>
                        </label>
                        <select name="tag" className="select sinput input-bordered">
                            <option disabled defaultValue='Select a tag'>Select a tag</option>
                            <option value='ImmersiveTech'>#ImmersiveTech</option>
                            <option value='GamingInVR'>#GamingInVR</option>
                            <option value='TechEnthusiast'>#TechEnthusiast</option>
                            <option value='DigitalExploration'>#DigitalExploration</option>
                            <option value='VRCommunity'>#VRCommunity</option>
                            <option value='FutureTech'>#FutureTech</option>
                            <option value='VRRecommendations'>#VRRecommendations</option>
                            <option value='TechWonders'>#TechWonders</option>
                            <option value='VirtualWorlds'>#VirtualWorlds</option>
                            <option value='TechWonders'>#TechWonders</option>
                            <option value='nnovationHub'>#nnovationHub</option>

                        </select>
                    </div>
                </div>

                <div className="flex gap-5 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Up Vote</span>
                        </label>
                        <input type="text" name="upvote" defaultValue={0} placeholder="up vote" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Down Vote</span>
                        </label>
                        <input type="text" name="downvote" placeholder="downvote" defaultValue={0} className="input input-bordered" required />

                    </div>
                </div>

                <div className="flex gap-5 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex gap-5 w-full" >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Author Image</span>
                        </label>
                        <input type="text" name="image" placeholder="author image" className="input input-bordered" required />
                    </div >
                </div>


                <div className="form-control mt-6">
                    <input  className="w-full btn btn-outline text-xl" type="submit" value="Add Post" />
                    
                </div>
            </form>
        </div>
    );
};

export default Adpost;