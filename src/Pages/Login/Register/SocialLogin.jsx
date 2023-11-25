import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
   const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn =() => {
        
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate('/')
            const userInfo = {
                email: result?.user?.email,
                name: result?.user?.displayName,
                photo: result?.user?.photoURL,
                badge: "Bronze"
            }
            axiosPublic.post('/users' , userInfo)
            .then(res => {
                console.log(res.data);
            })
        })
        .catch( err => {
            console.log(err);
        })
    }
    return (
        <div>
            <button className="btn" onClick={handleGoogleSignIn}>
                <FaGoogle className="text-red-500"/>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;