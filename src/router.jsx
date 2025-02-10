import {
    createBrowserRouter,

  } from "react-router-dom";
import HomePage from "./HomeLayOut/HomePage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
  ]);