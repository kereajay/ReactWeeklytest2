import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Left from './Left'
import Right from './Right'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import More from './More'
import Contact from './Contact'
import Certificates from './Certificates'
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";


// ReactDOM.createRoot(document.getElementById('root')).render(
let Main = () => {
  return (
    <>
    <br />
      <div className='flex flex-row w-[80%] m-auto  gap-8'>
        <Left />
      


        <div className="w-[80%] bg-sky-700  rounded-3xl relative ml-[22%] ">
         <Nav />
         {/* <About/> */}

      
          <Outlet />
        </div>
      </div>

    </>
  )
}
let routera = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/About",
        element: <About />

      },
      {
        path: "/Certificates",
        element: <Certificates />
      },
      {
        path: "/Projects",
        element: <Projects />
      },
      {
        path: "/More",
        element: <More />

      },
      {
        path: "/Contact",
        element: <Contact />
      },

    ]
  }


])
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routera} />);


