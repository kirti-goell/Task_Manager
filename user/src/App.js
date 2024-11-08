import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/register',
      element:<><Register/></>
    },
    {
      path:'/login',
      element:<><Login/></>,
    },
    {
      path:'/home',
      element:<><Home/></>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
