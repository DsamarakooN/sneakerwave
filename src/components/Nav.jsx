import React, { useState } from 'react'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
import { headerLogo } from "../assets/images";
import { search } from "../assets/icons";
import { profile } from "../assets/icons";
import { cart } from "../assets/icons";

const Nav = () => {

    // State to manage if the nav is open on mobile
    const [isNavOpen, setIsNavOpen] = useState(false)

    // Function to toggle the nav open and closed
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header className='px-[26px] mm:px-[30px]  ml:px-[34px]  tab:px-[48px]  lap:px-[58px]  desktop:px-[64px]  py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>   
                <a href='/' className='flex font-bold font-montserrat leading-normal items-center text-base mm:text-lg lap:text-xl text-coral-red' >
                    <img src={ headerLogo } alt='logo' width={56} height={29} className='w-[50px] h-[25px] lap:w-[56px] lap:h-[29px] ' /> 
                    SneakerWave
                </a>
                <ul className='flex-1 justify-center items-center gap-16 hidden lap:flex'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                            href={item.href}
                                className='font-montserrat leading-normal text-xl font-medium text-black-400 hover:text-coral-red'
                            >
                            {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='h-10  w-44  flex gap-2 relative mr-4 items-center bg-transparent max-lg:hidden' >
                    <img src={ search } alt='logo' width={24} height={24} className='absolute left-3'  />
                    <input type="search" id="default-search"  className='block w-full p-2 ps-10 font-montserrat text-black-400 border-solid border-2 border-coral-red rounded-full focus:ring-none focus:border-coral-red focus:outline-none text-base font-medium bg-transparent '   placeholder="Search"/>
                 </div>

                <div className='max-lg:hidden mr-4'>
                    <img src={profile} alt='profile icon' width={25} height={25} />
                </div>

                <div className='max-lg:hidden mr-8'>
                    <img src={cart} alt='cart icon' width={25} height={25} />
                </div>


                <div className='hidden max-lg:block' onClick={toggleNav}>
                    <img src={hamburger} alt='hamburger icon' width={25} height={25} className='h-[20px] w-[20px]' />
                </div>

                {/* Navigation Links - shown/hidden based on isNavOpen state */}
                {isNavOpen && (
                <ul className='hidden max-lg:flex flex-col absolute top-full bg-gray-300  w-32 p-4 right-6'>
                    {navLinks.map((item) => (
                    <li key={item.label} className='mb-2'>
                        <a href={item.href} className='text-black-400 hover:text-coral-red'>
                        {item.label}
                        </a>
                    </li>
                    ))}
                </ul>
                )}
            </nav>
        </header>
  )
}

export default Nav