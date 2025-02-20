import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";


const Rooms = () => {
      const roomData=useLoaderData();
      console.log(roomData)
    return (
        <div className=" grid grid-cols-2 gap-2 top-2">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rooms- Rooms of the hotel </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           {
            roomData?.map((room,i)=><RoomCard key={i} room={room}></RoomCard>)
           }
        </div>
    );
};

export default Rooms;