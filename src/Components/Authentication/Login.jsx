import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";




const Login = () => {

  const {  LoginUser,SingInWithGoogle}=useContext(AuthContext)
  
  const navigate=useNavigate()



  

  const handleGoogleLogin=async()=>
    {
        SingInWithGoogle()
        .then(result=>
        {
            console.log(result.user)
            //generate webToken
             
               
           

            navigate('/')
        }
        )
        .catch(error=>
        {
          console.log(error)
        }
        )



        
    }

  
const handleSubmit=(e)=>
  { 
    e.preventDefault();
    const form=e.target;
  
   
    const email=form.email.value;
  
    const password=form.password.value;
  
    const userData={email,password}
    console.log(userData)

    LoginUser(email,password)
    .then((res)=>
    {
      console.log(res.user)
    
      toast.success('user Logged In successfully')
      navigate('/')
    })
    .catch((error)=>
    {
      const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage,errorCode)

       toast(`${errorMessage}`)

    })
  
  }
  
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
        <div className="card w-full max-w-sm bg-white shadow-xl p-6 sm:p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <ToastContainer></ToastContainer>
          <form onSubmit={handleSubmit} className="space-y-4">
           
            <input
              type="email"
              name="email"
              placeholder="Email"
            
              className="input input-bordered w-full text-sm sm:text-base"
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
            
              className="input input-bordered w-full text-sm sm:text-base"
              required
            />
            <button type="submit" className="btn btn-primary w-full text-sm sm:text-base">Login</button>
            
          </form>
          <div className="flex justify-between">
          <button type="submit" className="btn mt-2 w-2/6 mx-auto bg-sky-400 text-xs text-white "
          onClick={handleGoogleLogin}>Google Login</button>
          <p className="text-sm text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-500">Register here</Link>
          </p>
          </div>
        </div>
      </div>
    );
};

export default Login;