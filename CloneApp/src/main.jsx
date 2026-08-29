import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contacts/Contacts.jsx'
import User from './Components/User/User.jsx'
import GitHub from './Components/Github/GitHub.jsx'

// creating routes 
const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:
    [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },

      {
        path:"user/:userId",
        elsement:<User/>
      },
      {
        path:"contacts",
       element:<Contact/>
      },
{
  
  path:"github",
  element:<GitHub/>
}
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
