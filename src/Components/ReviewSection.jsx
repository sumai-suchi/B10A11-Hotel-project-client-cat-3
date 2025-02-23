
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {   Pagination} from 'swiper/modules'
import gif from '../../src/assets/Animation - 1740229402827.gif'

// import required modules

import { useEffect, useState } from 'react';
import axios from 'axios';
const ReviewSection = () => {


     const [review,setReview]=useState([])
     console.log(review)
    useEffect(()=>
        {
            fetchReview()
        },[])

     const fetchReview=async()=>
        {
            try {
                const res= await axios.get(`https://b10-a11-hotel-project-server-cat-3.vercel.app/RoomReview`) 
                console.log(res.data)
                setReview(res.data)
            } catch (error) {
               console.log(error) 
            }

        }   
    return (
        <div className='mt-8 lg:mt-32 w-10/12 mx-auto '>
          <div className='flex justify-center items-center'>
            <img src={gif} alt="" />
          <h1 className='text-3xl md:text-6xl md:mb-6   text-gray-600 font-bold text-center italic'>Guest Review</h1>
          </div>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
       
       {
        review.map((view,i)=>(<SwiperSlide key={i} className='flex-col space-y-3.5 p-4 backdrop-opacity-80 '>
          <h1 className='text-xl font font-semibold text-gray-700'> {view.name}</h1>
          <p className='text-sm text-gray-400  space-y-3'>
              {view.comment}
          </p>
     </SwiperSlide>))
       }
       
        
      </Swiper>
        </div>
    );
};

export default ReviewSection;