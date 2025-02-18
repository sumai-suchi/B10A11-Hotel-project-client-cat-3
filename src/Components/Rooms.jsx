import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";


const Rooms = () => {
      const roomData=useLoaderData();
      console.log(roomData)
    return (
        <div className=" grid grid-cols-2 gap-2 top-2">
           {
            roomData?.map((room,i)=><RoomCard key={i} room={room}></RoomCard>)
           }
        </div>
    );
};

export default Rooms;