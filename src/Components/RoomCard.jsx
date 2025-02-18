/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RoomCard = ({room}) => {
    console.log(room)

    const navigate=useNavigate()

    const handleSingleDetails=()=>
    {
      navigate(`/SingleRoomDetails/${room._id}`)
    }
    return (
        <div onClick={handleSingleDetails} className="card  bg-amber-100 shadow-xl">
            <figure className="w-100%">
                <img
                    src={room.image}
                    alt="Room" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{room.name}</h2>
                <p>{room.description}</p>
                <div className="flex ">
                <FaRegStar />
                {room.reviews}

                </div>
                
            </div>
        </div>
    );
};

export default RoomCard;