import React, { useState } from 'react';
import { NAV_ITEMS } from '../utils/constants';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [activePage, setActivePage] = useState('');
    const [nav, setNav] = useState(false);

    const navigateTo = (text) => {
        setActivePage(text);
    };
    const handleNav = () => {
        setNav(!nav);
      };
    
    return (
        <nav className=' w-full h-20 p-2 flex justify-around shadow-lg text-white'>
            <a href="/">
                <img src='https://storage.googleapis.com/papercycle_prod/logo%20ppcy.svg' alt='LOGO' height={200} width={250} className='' />
            </a>

            <ul className='hidden md:flex lg:-mt-11 md:mt-0 font-monteserrat font-semibold'>
                {NAV_ITEMS.map(item => (
                    <li
                        key={item.id}
                        className={`lg:p-16 text-lg font-poppins md:p-5 text-black cursor-pointer duration-300 ${activePage === item.id ? 'text-secondary underline' : ''}`}
                        onClick={() => navigateTo(item.text)}
                    >
                        <a href={item.link}>{item.text}</a>
                    </li>
                ))}
                <button>
                    <img src='https://storage.googleapis.com/papercycle_prod/Ellipse%2014.svg' height={50} width={60} alt="Ellipse" className='mt-10' />
                </button>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
  {nav ? <AiOutlineClose size={20} className='text-black mr-5 mt-5' /> : <AiOutlineMenu size={20} className='text-black mr-5 mt-5' />}
</div>

<ul
  className={
    nav
      ? 'fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-green-50 ease-in-out duration-500 z-20'
      : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10'
  }
>
  <li className='p-4 border-b rounded-xl duration-300 text-black font-semibold cursor-pointer border-gray-600'>
    <a href="/dashboard">Dashboard</a>
  </li>
  <li className='p-4 border-b rounded-xl duration-300 text-black font-semibold cursor-pointer border-gray-600'>
    <a href="/employees">Employees</a>
  </li>
  <li className='p-4 border-b rounded-xl duration-300 text-black font-semibold cursor-pointer border-gray-600'>
    <a href="/vechicles">Vehicles</a>
  </li>
</ul>

        </nav>
    );
}

export default Navbar;
