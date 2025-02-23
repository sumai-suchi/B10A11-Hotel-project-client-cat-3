/* eslint-disable react/prop-types */
import {  useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import axios from "axios";




const AuthProvider = ({children}) => {
   
    
  const provider = new GoogleAuthProvider();
    const [user,setUsers]=useState(null)
    const [Loader,setLoader]=useState(true)

    const createUser=(email,password)=>
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SingInWithGoogle=()=>
        {
            return signInWithPopup(auth,provider)
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
        const UnSubscribe= onAuthStateChanged(auth,async(currentUser)=>
        {
           
            setUsers(currentUser)
           
            if(currentUser?.email)
            {
           const {data}= await axios.post(`https://b10-a11-hotel-project-server-cat-3.vercel.app/jwt`,{
            email:currentUser?.email
         },{withCredentials:true})
         console.log(data)
      
            }
            else
            {
             
                setUsers(currentUser)
                const {data}= await axios.get(`   https://b10-a11-hotel-project-server-cat-3.vercel.app/logOut`,{withCredentials:true})
                console.log(currentUser)
                console.log(data)
            }
            setLoader(false)
        
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
        LogOut,
        Loader,
        setLoader,
        SingInWithGoogle
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;