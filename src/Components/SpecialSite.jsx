
import image1 from '../../src/assets/climate-landscape-paradise-hotel-sunset_1203-5734.avif'
import image3 from '../../src/assets/hotel-7885138_640.jpg'
import image5 from '../../src/assets/water-3292794_640.jpg'
import { motion } from "framer-motion";


const SpecialSite = () => {

    const variant={
        hidden:{opacity:1, y:80},
        visible:{opacity:2, y:0 ,transition:{duration:2}}
    }
    return (
        <div className='space-y-8 w-10/12 mx-auto mt-8 lg:mt-16 space-x-4'>
                        
                     <h1 className='font-bold text-3xl md:text-6xl italic text-center space-y-4 text-gray-500'> About Hotel Monalisa</h1>
            <div className='lg:flex space-x-4'
            >
            <motion.img src={image1} alt=""
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{once:false}}
            className='lg: w-1/2'/>
                
                <div 
                >

                    <motion.h1
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:false}}
                     className='font-bold text-3xl text-gray-800 italic
                    '> Serene Sunset by the Poolside</motion.h1>

                    <motion.p
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:false}}
                   
                     className='font-xs text-gray-600 text-wrap space-y-12 mt-2.5'> 
                        Imagine unwinding by our luxurious poolside as the 
                        sun sets, painting the sky in shades of orange,
                        pink, and purple. The gentle ripples of the water 
                        reflect the golden hues, creating a mesmerizing
                        and peaceful ambiance. Whether youre taking a 
                        refreshing dip or simply lounging with a cool drink
                        in hand, our poolside offers the perfect escape 
                        from the hustle of everyday life. Let the soothing 
                        sound of water and the breathtaking sunset take you 
                        to a place of pure relaxation and tranquility.
                    </motion.p>
                </div>
            </div>
            <div className='lg:flex space-x-4'>

            <div >
                   
                    <motion.h1
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:false}}
                     className='font-bold text-3xl text-gray-800 italic
                    '> A Culinary Journey of Exquisite Flavors</motion.h1>

                    <motion.p
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:false}}
                   
                     className='font-xs text-gray-600 text-wrap space-y-12 mt-2.5'> 
                        Indulge in a delightful dining experience where every dish is crafted with passion and precision.
                         Our expert chefs bring you a fusion of flavors, using only the freshest ingredients to create
                          mouthwatering dishes that cater to all palates. From gourmet delicacies to comforting classics,
                           every bite is a burst of flavor that will leave you craving more. Whether you prefer a romantic
                            candlelit dinner or a lively gathering with friends, our restaurant promises an unforgettable
                             gastronomic journey.
                    </motion.p></div>
                    <motion.img src={image3} alt=""
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{once:false}}
            className='lg: w-1/2'/>
                
            </div>
            <div className='lg:flex space-x-4'>
            <motion.img src={image5} alt=""
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{once:false}}
            className='lg: w-1/2'/>
                <div>
                    
                    <motion.h1
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:false}}
                     className='font-bold text-3xl text-gray-800 italic
                    '> Breathtaking Views from Our Rooftop Pool</motion.h1>
                    <motion.p
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:false}}
                   
                     className='font-xs text-gray-600 text-wrap space-y-12 mt-2.5'> 
                    Experience luxury at its finest with our rooftop pool, offering panoramic views of the city skyline.
                     Take a dip in the crystal-clear waters while gazing at the stunning horizon, or relax on our elegant lounge chairs,
                     soaking in the peaceful atmosphere. Whether its a sunny afternoon swim or a moonlit evening by the pool, 
                     the rooftop setting creates an exclusive and enchanting ambiance.  
                    </motion.p></div>
            </div>

        </div>
    );
};

export default SpecialSite;