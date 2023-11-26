/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export  const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()
    const auth = getAuth(app);

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect( ()=> {
     const unsubscribe =    onAuthStateChanged( auth, currentUser=> {
            setuser(currentUser)
            console.log('currentUser' , currentUser);
            if(currentUser){
                const userInfo = { email: currentUser?.email}
                
                axiosPublic.post('/jwt'  , userInfo)
                .then(res => {
                   
                    if(res.data.token){
                        localStorage.setItem('access-token' , res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
               
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            setLoading(false)
        })

        return ()=> {
          return  unsubscribe()
        }
    }, [auth, user, axiosPublic])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        signUp,
        login,
        logOut
    }
 
    return (
     <AuthContext.Provider value={authInfo}>

        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;