import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './router.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/Authprovider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
