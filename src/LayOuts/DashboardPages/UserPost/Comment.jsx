import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";



const Comment = () => {
    const { id } = useParams()
    console.log(id);
    const axiosPublic = useAxiosPublic();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axiosPublic.get('/comment')
            .then(res => {
                const allcomments = res.data;
                console.log();
                const comment = allcomments.filter(comment => comment.commentid === id)
                setComments(comment)
            })
    }, [axiosPublic, id])
    console.log(comments);
    return (
        <div>
            
           {
            comments.length > 0 ? 

         <div>
               <h1 className="text-center font-bold text-3xl my-8">Total comments: {comments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Comment</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                      {
                        comments.map( (comment, ind)=>  <tr key={ind}>
                            <th>{ind + 1}</th>
                            <td>{comment?.name}</td>
                            <td>{comment.comment}</td>
                            
                        </tr>)
                      }
                       

                    </tbody>
                </table>
            </div>
         </div>
         : 

         <div>
            <h1 className="flex justify-center items-center h-screen font-bold text-3xl"> This post has no comment yet</h1>
         </div>


           }
        </div>
    );
};

export default Comment;