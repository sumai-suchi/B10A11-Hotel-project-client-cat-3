
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import { AuthContext } from "../Provider/AuthContext";
import 'animate.css';
import axios from "axios";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const SingleRoomDetails = () => {
  const {user}=useContext(AuthContext)
  const { id } = useParams()
  console.log(id)
  const navigate=useNavigate()

  const [room, setRoom] = useState({})
  const [roomReview, setRoomReview] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

 console.log(roomReview)
  // console.log(room)
  const [startDate, setStartDate] = useState(new Date());
  const day = startDate.getDate()
  console.log(day)
  console.log(startDate)

  const ThisRoom=roomReview?.filter(rooms=>rooms.RoomName === room.name)
  console.log(ThisRoom)

  useEffect(() => {
  

    fetchData()



  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchData = async () => {
    const { data } = await axios.get(`https://b10-a11-hotel-project-server-cat-3.vercel.app/Room/${id}`)
    console.log(data)
    setRoom(data)
  }
  
  useEffect(() => {
  

    fetchReview()

 
  }, [id])

  const fetchReview = async () => {
    const { data } = await axios.get(`https://b10-a11-hotel-project-server-cat-3.vercel.app/RoomReview`)
    console.log(data)
    setRoomReview(data)
  }

  const handleBooking = async (id) => {


    try {
      console.log(room?._id)
      const res = await axios.put(`https://b10-a11-hotel-project-server-cat-3.vercel.app/Room-update/${id}`,
        {
          availability: false,
          date:startDate,
          buyer_email:user?.email
        });
      console.log(res)
     
   
   
      const response = await axios.post(`https://b10-a11-hotel-project-server-cat-3.vercel.app/MyBookedRoom`,
        {
          image:room?.image,
          RoomName:room?.name,
          price:room?.price,
          availability:room?.availability,
          id:room?._id,
          
          date:new Date(startDate),
          buyer_email:user?.email
        });
      console.log(response)
     
      toast.success('🦄  Booking confirm successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
      setIsModalOpen(false);
      fetchData()
      
      
    }
    catch (
    error
    ) {
      console.log(error)

      toast.error('🦄 You cant book this room!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
   



  }









 



  return (
    <div className="bg-amber-100 space-y-2 w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <img className="w-4/6 h-[200px] md:h-[400px]" src={room?.image} alt="" />
      <hr className=" w-2xs font-bold mt-2 animate__animated animate__fadeInRight" />
      <h1 className="text-2xl md:text-3xl font-bold animate__animated animate__fadeInRight">Room Name :{room?.name}</h1>
      <p className="font-semibold text-2xl animate__animated animate__fadeInRight ">Description: {room?.description}</p>
      <p className="font-semibold text-2xl animate__animated animate__fadeInRight ">Availablity: {room?.availability ? "Available" : "Booked"}</p>
      <h2 className="font-semibold text-xl animate__animated animate__fadeInRight">Price:${room?.price}/day</h2>
      <div className="lg:flex justify-between w-3xl">
        <div></div>

        <button className={`bg-black text-white text-3xl font-bold   rounded-none md:py-3 md:px-4 justify-end animate__animated  animate__bounce
            animate__repeat-2 `}  disabled={!room?.availability}   onClick={() => {
              user && user?.email ? setIsModalOpen(true) : navigate('/Login')
            }} >{room?.availability? 'Book Now!':'Already Booked'}</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>Book Now!



        <h2 className="text-xl font-bold"><strong>Room name:</strong> {room?.name}</h2>
        <h2 className="text-xl font-bold"><strong>Availiblity:</strong>{room?.availability ? "Booked" : "Available"}</h2>
        <h2 className="text-xl font-bold"><strong>Price:</strong>$ {room?.price}</h2>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" ></DatePicker>
        <p className="py-2"><strong>description:</strong>{room?.description}</p>
        <button
          type="submit"
          className="bg-amber-200 text-white px-4 py-2 rounded mt-4"
          onClick={() => {
            console.log("Room booked!");
            handleBooking(room?._id)
            console.log(room?._id)

            

          }}
        >
          Confirm Booking
        </button>





      </Modal>

      <div className=" ">
                         <h1 className="text-center text-3xl italic mb-4 ">Review Section</h1>
                    <>
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      
                      {
                        ThisRoom.map((t,i)=> <SwiperSlide key={i} className="flex-col space-y-1.5  " >
                          <h1 className="font-bold text-2xl italic text-center">{t.name}</h1>
                          <p className=" italic text-center text-gray-500">
                            {t.comment}
                          </p>
                        </SwiperSlide>
                      )
                      }
                     
                     
                    </Swiper>
                  </>
              
      </div>

    </div >
  );
};

export default SingleRoomDetails;