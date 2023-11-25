/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    const { title, image, tag, date, upvote, downvote, comments, _id } = post || {}
    return (

        <Link to={`/details/${_id}`}>
            <div className="card shadow-md hover:shadow-2xl ">
                <div className="card-body">
                    <h2 className="card-title h-14">{title}</h2>
                    <div className="flex gap-8">
                    <p>Comments: {comments}</p>
                    <p>Votes: {upvote + downvote}</p>
                    </div>
                    
                    <div className="flex items-center gap-20">
                    <div className="w-16 h-16 rounded-full bg-slate-200"><img src={image} alt="author" className="w-16 h-16 rounded-full "/></div>
                    <p className="font-semibold">#{tag}</p>
                   </div> 
                   <p className="font-semibold">Post Time: {date}</p>
                </div>
                
            </div>
        </Link>
    );
};

export default PostCard;