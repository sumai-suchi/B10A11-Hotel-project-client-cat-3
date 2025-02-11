import {
    createBrowserRouter,

  } from "react-router-dom";
import HomePage from "./HomeLayOut/HomePage";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import App from "./App";

 export const router = createBrowserRouter([
   {
    path:'/',
    element:<App></App>,
    errorElement: <h1>Errorpage</h1>,
    children:
    [
      {
        path: "/",
        element: <HomePage></HomePage>,
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