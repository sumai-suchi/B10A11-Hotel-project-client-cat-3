/* eslint-disable react/prop-types */
import {  useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";




const AuthProvider = ({children}) => {

    const [user,setUsers]=useState(null)

    const createUser=(email,password)=>
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }
     
    const updateData=(upDate)=>
    {
       return updateProfile(auth.currentUser,upDate)
    }

    const LoginUser=(email,password)=>
    {
       return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut=()=>
    {
        return signOut(auth);
    }

    useEffect(()=>{
        const UnSubscribe= onAuthStateChanged(auth,(currentUser)=>
        {
            setUsers(currentUser)
        
        })
        return ()=>
        {
            UnSubscribe();
        }
    },[])









    const Info={
        createUser,
        user,
        setUsers,
        updateData,
        LoginUser,
        LogOut
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;