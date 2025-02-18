

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './FileCSS/styles.css';
import image1 from '../../src/assets/climate-landscape-paradise-hotel-sunset_1203-5734.avif'
import image2 from '../../src/assets/environment_Friendly_room.avif'
import image3 from '../../src/assets/hotel-7885138_640.jpg'
import image4 from '../../src/assets/pastries-1749603_640.jpg'
import image5 from '../../src/assets/water-3292794_640.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
    return (
        <>

       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 space-y-1.5
       '>
       <h3 className='text-lg md:text-2xl font-semibold '>Welcome to </h3>
        <h1 className='text-2xl md:text-6xl lg:text-7xl font-bold'>Monalisa Hotel</h1>
        <h3 className='text-sm md:text-xl font-semibold'>A place to experience and enjoy the life</h3>
        <Link to={'/Rooms'} className='btn bg-white text-black'>Rooms</Link>
       </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-4/6  md:mx-auto md:h-32"
        >
          <SwiperSlide><img className='w-full h-[200px]  md:h-[700px] object-cover' src={image1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[200px]  md:h-[700px] object-cover' src={image2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[200px]  md:h-[700px] object-cover' src={image3} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[200px]  md:h-[700px] object-cover' src={image4} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[200px]  md:h-[700px] object-cover' src={image5} alt="" /></SwiperSlide>
        
        </Swiper>
      </>
    );
};

export default HomeSlider;