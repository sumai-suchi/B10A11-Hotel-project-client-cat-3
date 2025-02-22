
import * as motion from "motion/react-client"

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

const LoadingSpiner = () => {
    return (

     <div className="mt-7 flex justify-center items-center ">

      
                <motion.div
                    style={box}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                />
         
       
        
      </div>
    );
};

export default LoadingSpiner;