import img1 from '../../src/assets/luxury-bedroom-hotel.jpg'
import img2 from '../../src/assets/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg'
import img3 from '../../src/assets/luxury-chill-bedroom-hotel.jpg'
import img4 from '../../src/assets/interior-modern-comfortable-hotel-room.jpg'

import img5 from '../../src/assets/vacation-brown-youth-room-sleeping.jpg'
import img6 from '../../src/assets/croissant-boiled-egg-orange-juice-yogurt-breakfast-tray-bed-hotel-room.jpg'

const HomeSection1 = () => {
    return (

        <div className='w-full p-4  bg-black my-14'>
            <div className='flex flex-col  justify-center items-center text-center'>
                <h1 className='font-bold text-blue-900 text-2xl'>Welcome to monalisa</h1>
                <p className='text-3xl font-semibold text-white'>
                    Accomodation
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-16'>
                <div className='relative group'>
                    <img src={img1} className='w-full h-[400px] rounded-t-full transition duration-300 ease-in-out group-hover:brightness-50 '
                        alt="" />
                     <div className="absolute  inset-0 flex items-center justify-center rounded-t-full bg-blue-400 bg-opacity-2 text-white text-2xl font-bold 
                      opacity-0 transition-opacity  duration-200 ease-in-out group-hover:opacity-100">
       Price: $49.99
      </div>
                </div>
                <div className='relative group'>
                    <img src={img2} className='w-full h-[400px] rounded-t-full transition duration-300 ease-in-out group-hover:brightness-50 '
                        alt="" />
                     <div className="absolute  inset-0 flex items-center justify-center rounded-t-full bg-blue-400 bg-opacity-2 text-white text-2xl font-bold 
                      opacity-0 transition-opacity  duration-200 ease-in-out group-hover:opacity-100">
       Price: $59.99
      </div>
                </div>
                <div className='relative group'>
                    <img src={img3} className='w-full h-[400px] rounded-t-full transition duration-300 ease-in-out group-hover:brightness-50 '
                        alt="" />
                     <div className="absolute  inset-0 flex items-center justify-center rounded-t-full bg-blue-400 bg-opacity-2 text-white text-2xl font-bold 
                      opacity-0 transition-opacity  duration-200 ease-in-out group-hover:opacity-100">
       Price: $99.99
      </div>
                </div>
                <div className='relative group'>
                    <img src={img4} className='w-full h-[400px] rounded-t-full transition duration-300 ease-in-out group-hover:brightness-50 '
                        alt="" />
                     <div className="absolute  inset-0 flex items-center justify-center rounded-t-full bg-blue-400 bg-opacity-2 text-white text-2xl font-bold 
                      opacity-0 transition-opacity  duration-200 ease-in-out group-hover:opacity-100">
       Price: $100.99
      </div>
                </div>
                <div className='relative group'>
                    <img src={img5} className='w-full h-[400px] rounded-t-full transition duration-300 ease-in-out group-hover:brightness-50 '
                        alt="" />
                     <div className="absolute  inset-0 flex items-center justify-center rounded-t-full bg-blue-400 bg-opacity-2 text-white text-2xl font-bold 
                      opacity-0 transition-opacity  duration-200 ease-in-out group-hover:opacity-100">
       Price: $200.99
      </div>
                </div>
                <div className='relative group'>
                    <img src={img6} className='w-full h-[400px] rounded-t-full transition duration-300 ease-in-out group-hover:brightness-50 '
                        alt="" />
                     <div className="absolute  inset-0 flex items-center justify-center rounded-t-full bg-blue-400 bg-opacity-2 text-white text-2xl font-bold 
                      opacity-0 transition-opacity  duration-200 ease-in-out group-hover:opacity-100">
       Price: $39.99
      </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSection1;