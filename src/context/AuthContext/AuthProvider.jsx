import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOUt =() =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect( () =>{
       const unSubserce= onAuthStateChanged(auth,currentUser =>{
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser);
                setLoading(false)
            }
        })
        return() =>{
            unSubserce()
        }
    },[])

    const userInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOUt,
        googleSignIn,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;