import React from 'react'
import Layer2 from '../assets/Layer 2.svg';
import Untitled from '../assets/Untitled-1.svg';

const Login = () => {
  return (
    <>
      <section className='lg:mx-36 lg:flex '>
        <div className='absolute hidden lg:block'>
          <h1 className='text-4xl font-montserrat font-semibold mt-10 '>Admin Panel</h1>
          <h1 className='text-secondary text-4xl mt-5 font-montserrat font-semibold'>papercycle.in</h1>
          <img src='https://storage.googleapis.com/papercycle_prod/recycle.svg' alt='container' width={750} height={100} className='mt-10 -mx-10 hidden lg:block' />
        </div>

        <h1 className='text-xl font-montserrat font-semibold lg:mt-7 mt-5 lg:mx-[65%] mx-10'>Login</h1>
        <div className="bg-primary pt-10 lg:pb-8 rounded-lg shadow-lg lg:-ml-[70%]  ml-[8%]  lg:mr-40 md:mr-40 mr-0 mb-10 mt-5 lg:w-[48%] w-[84%] ">
          <>
            <img src={Layer2} alt='Layer_2' className='mx-5 -mt-0' />
            <h1 className='text-2xl text-secondary -mt-14 lg:pl-20 md:pl-20 pl-3 ml-16 lg:ml-0 font-poppins font-semibold'>Welcome, <br /> Admin</h1>
            <label htmlFor="userName" className="text-black block pt-6 lg:pl-8 md:pl-20 pl-3 font-poppins font-semibold">
              Username
            </label>
            <input
              type="text"
              id="name"
              maxLength={25}
              className="lg:pl-2 pl-2 lg:pr-4 md:ml-20 ml-3 mt-1 lg:ml-8 py-2 lg:mt-2 lg:w-[350px] md:w-3/4 w-11/12 border rounded-md  border-gray-300 text-black focus:outline-none focus:border-green-500 justify-between font-poppins font-medium "
              placeholder="Write your username"
            />
            <label htmlFor="password" className="text-black block pt-6 lg:pl-8 md:pl-20 pl-3  font-poppins font-semibold">
              Password
            </label>
            <input
              type="password"
              id="PASSWORD"
              maxLength={10}
              className="lg:pl-2 pl-2 lg:pr-4 md:ml-20 ml-3 mt-1  lg:ml-8 py-2 lg:mt-2 lg:w-[350px] md:w-3/4 w-11/12 border rounded-md  border-gray-300 text-black focus:outline-none focus:border-green-500 font-poppins font-medium justify-between "
              placeholder="*******"
            />
            <button className='lg:py-3 py-2 mt-10 lg:mt-10 rounded-full bg-secondary text-white lg:ml-7 ml-3 mr-7 font-montserrat font-medium lg:w-[350px] md:w-3/4 mb-10 w-11/12 md:ml-20'
            >
              Login
            </button>
          </>
        </div>
      </section>
      <div className="lg:fixed lg:-mt-40  bottom-0 left-0 w-full bg-tertiary flex flex-col items-center">
        <img src={Untitled} alt="Untitled" width={200} className="pt-5" />
        <h1 className="text-white mt-2 mb-2 font-montserrat font-medium">Payperprint Pvt. Ltd. All rights reserved</h1>
      </div>
    </>
  )
}

export default Login