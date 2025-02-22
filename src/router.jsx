import {
    createBrowserRouter,

  } from "react-router-dom";
import HomePage from "./HomeLayOut/HomePage";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import App from "./App";
import Rooms from "./Components/Rooms";
import MyBooking from "./Components/MyBooking";
import SingleRoomDetails from "./Components/SingleRoomDetails";
import ErrorPage from "./Components/ErrorPage";
import PrivateRout from "./Components/PrivateRout";

 export const router = createBrowserRouter([
   {
    path:'/',
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:
    [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path:'/Rooms',
        element:<Rooms></Rooms>,
     
      },
      {
        path:'/MyBooking',
        element:<PrivateRout><MyBooking></MyBooking></PrivateRout>

      },
      {
        path:'/SingleRoomDetails/:id',
        element:<SingleRoomDetails></SingleRoomDetails>

      },
      {
        path:"/Login",
        element:<Login></Login>
  
      },
      {
        path:"/Register",
        element:<Register></Register>
      }
    ]


   }
  ]);