import { useLoaderData } from "react-router-dom";
import { AiFillLike ,AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const PostDetails = () => {
    const { name, title, tag, upvote, downvote, description, image, date, _id , email } = useLoaderData()
    const [ upVote , setUpVote] = useState(upvote)
    const [ downVote , setdownVote] = useState(downvote)
    const axiosPublic = useAxiosPublic()
    const handleComment = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form .comment.value;
        const commentsData = { comment, commentid:_id, email , name}
        axiosPublic.post('/comment' , commentsData)
        .then(res => {
            console.log(res.data);
            form.reset()
        })
    }
    return (
        <div className="mt-4 md:mt-10">
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body px-20">
                    <h2 className="card-title text-4xl ">{title}</h2>
                    <p className="text-slate-600 lg:mr-60">{description}</p>
                    <div className="flex gap-8 items-center">
                        <img src={image} alt='author' className="w-20 h-20 rounded-full" />
                        <h2>{name}</h2>
                    </div>
                    <p>#{tag}</p>
                    <p>Post Time: {date}</p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                        <button className="btn" onClick={() => setUpVote(() => upvote + 1)}>
                            UpVote <AiFillLike />
                            <div className="badge badge-secondary">{upVote}</div>
                        </button>

                        <button className="btn"  onClick={() => setdownVote(() => downvote + 1)}>
                            Down Vote <AiFillDislike />
                            <div className="badge badge-secondary">{downVote}</div>
                        </button>

                        <button className="btn">
                       Share <FaShare />
                        </button>
                    </div>

                    <form onSubmit={handleComment} className="mt-2"> 

                        <input type="text" name="comment" placeholder="type your comment"  className="focus:outline-none focus:border-black px-2 py-2 input-bordered border-0 border-b-2 w-2/4" required/>
                        <input type="submit" value="Comment" className="bg-slate-700 px-2 py-1 md:px-3 md:py-2 text-white cursor-pointer ml-5 rounded-md text-sm md:text-base" />
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default PostDetails;