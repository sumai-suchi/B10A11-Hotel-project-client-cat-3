import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingSpiner from "./LoadingSpiner";


// eslint-disable-next-line react/prop-types
const PrivateRout = ({children}) => {

    const {Loader,user}=useContext(AuthContext)

    if(Loader)
    {
        return <LoadingSpiner></LoadingSpiner>
    }

    if(user && user?.email)
    {
        return children;
    }






    return <Navigate to={'/Login'}></Navigate>

};

export default PrivateRout;