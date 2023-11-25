import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            details
        </div>
    );
};

export default PostDetails;