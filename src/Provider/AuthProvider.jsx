/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


import app from "../Firebase/firebase.config";
export  const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

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
            // if(currentUser){
            //     const userInfo = { email: currentUser?.email}
            //     // get token and store client
            //     axiosPublic.post('/jwt'  , userInfo)
            //     .then(res => {
            //         // console.log(res.data);
            //         if(res.data.token){
            //             localStorage.setItem('access-token' , res.data.token)
            //             setLoading(false)
            //         }
            //     })
            // }
            // else{
            //     // TODO: remove token(if token store in the client side)
            //     localStorage.removeItem('access-token')
            //     setLoading(false)
            // }
            setLoading(false)
        })

        return ()=> {
          return  unsubscribe()
        }
    }, [auth, user])

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