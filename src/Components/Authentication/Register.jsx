import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";

import '../FileCSS/styles.css'



const Register = () => {

  const { createUser,user,setUsers,updateData}=useContext(AuthContext)

  const navigate=useNavigate()

  const handleSubmit=(e)=>
    { 
      e.preventDefault();
      const form=e.target;
    
      const name=form.name.value;
      const email=form.email.value;
      const photoURL=form.photoURL.value;
      const password=form.password.value;
    
      const userData={name,email,photoURL,password}
      console.log(userData)
      
      
      createUser(email,password)
      .then(result=>
      {
        const newUser=result.user;
        console.log(newUser)
        setUsers(newUser)
        console.log(user)
         
        updateData({displayName:name,photoURL:photoURL
        })
        .then(
          ()=>{

            toast.success('User Registered successfully')
            navigate('/')
          }
        )
        .catch(
          (error)=>
          {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode)

            toast.error(`${errorMessage}`)
          }
        )


      }
      )
      .catch(error=>
        console.log(error.message)
      )
      
      
    
    }
    return (
        <div className="flex justify-center items-center bg-image2 min-h-screen  p-4 sm:p-6 md:p-8">
      <div className="card w-full max-w-sm bg-gray-200 shadow-xl p-6 sm:p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <ToastContainer></ToastContainer>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
          
            className="input input-bordered w-full text-sm sm:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
          
            className="input input-bordered w-full text-sm sm:text-base"
            required
          />
          <input
            type="url"
            name="photoURL"
            placeholder="Photo URL"
        
            className="input input-bordered w-full text-sm sm:text-base"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          
            className="input input-bordered w-full text-sm sm:text-base"
            required
          />
          <button type="submit" className="btn btn-primary w-full text-sm sm:text-base">Register</button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/Login" className="text-blue-500">Login here</Link>
        </p>
      </div>
    </div>
    );
};

export default Register;