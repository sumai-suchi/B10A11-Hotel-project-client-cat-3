/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import MyBookingCard from "./MyBookingCard";
import { Helmet } from "react-helmet";


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
      const { data } = await axios.get(`   http://localhost:5000/MyBookedRoom?email=${user?.email}`,{ withCredentials: true })
      console.log(data)
      setMydata(data)
    }

    return (
   
       <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>MyBooking - Rooms you have book </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           {
            myData?.map((room,i)=><MyBookingCard key={i} room={room} setMydata={setMydata} ></MyBookingCard>)
           }
       </div>
    );
};

export default MyBooking;