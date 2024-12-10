import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
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

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;