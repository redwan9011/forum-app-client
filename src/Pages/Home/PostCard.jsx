/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PostCard = ({post}) => {
    const { title , image, tag, date ,upvote, downvote,comments, _id} = post || {}
    return (
    
        <tr  >
        <td>
       
               <div className="flex justify-center">
               <img src={image} alt="author image" className="w-14 h-14 rounded-full " />
               </div>
             
        </td>
        <td>
         <h2 className="font-bold text-lg"> {title}</h2> <br />
            {date}
        
        </td>
        <td>
            #{tag} 
        </td>
        <td>
            {upvote + downvote}
        </td>
        <td>
            {comments}
        </td>
        <td> <Link to={`/details/${_id}`}>View Details</Link></td>
      </tr>
      
    );
};

export default PostCard;