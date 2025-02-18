/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import MyBookingCard from "./MyBookingCard";


const MyBooking = () => {

   const {user}=useContext(AuthContext)
   console.log(user?.email)
   const [myData,setMydata]=useState()
  console.log(myData)
   useEffect(()=>
    {
      fetchMyData()
    },[user?.email])


    const    fetchMyData = async () => {
      const { data } = await axios.get(`http://localhost:5000/MyBookedRoom?email=${user?.email}`)
      console.log(data)
      setMydata(data)
    }

    return (
   
       <div>
           {
            myData?.map((room,i)=><MyBookingCard key={i} room={room}></MyBookingCard>)
           }
       </div>
    );
};

export default MyBooking;