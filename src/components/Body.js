import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Employees from './Employees'
import Vechicles from './Vechicles'
import Navbar from './Navbar'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/dashboard',
            element: <Dashboard />
        },
        {
            path: '/vehicles',
            element: <Vechicles />
        },
        {
            path: '/employees',
            element: <Employees />
        },

    ])
  return (
    <div className=''>
        <Navbar />
    <RouterProvider router={appRouter} />
  </div>  )
}

export default Body