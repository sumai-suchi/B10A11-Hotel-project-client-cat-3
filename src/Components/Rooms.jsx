
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";


const Rooms = () => {
     
      const [min,setMin]=useState('') 
      const [max,setMax]=useState('') 
      console.log(min)
      console.log(max)

      const [myData,setMydata]=useState()
      console.log(myData)
       useEffect(()=>
        {
            const  fetchMyData = async () => {
                const { data } = await axios.get(`http://localhost:5000/RoomData?min=${min}&max=${max}`)
                console.log(data)
                 setMydata(data)
                  }
          fetchMyData()
        },[min,max])
    
      
        
    return (
       <div className="w-full">
      
     <div className="flex join w-full my-8 gap-0.5" >
     <input type="number"className="w-full lg:w-18 " placeholder="min" onChange={(e)=>setMin(e.target.value) } />
     <input type="number"className="w-full lg:w-18 " placeholder="max" onChange={(e)=>setMax(e.target.value) } />
     <button className="btn">filter by price</button>
     </div>
         <div className=" grid grid-cols-2 gap-2 top-2">
          
          <Helmet>
              <meta charSet="utf-8" />
              <title>Rooms- Rooms of the hotel </title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          
         {
          myData?.map((room,i)=><RoomCard key={i} room={room}></RoomCard>)
         }
      </div>
       </div>
    );
};

export default Rooms;