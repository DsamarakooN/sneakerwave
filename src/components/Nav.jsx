import React from 'react'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
import { headerLogo } from "../assets/images";
import { search } from "../assets/icons";
import { profile } from "../assets/icons";
import { cart } from "../assets/icons";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>   
            <a href='/' className='flex font-semibold font-montserrat leading-normal items-center text-xl text-coral-red ' >
                <img src={ headerLogo } alt='logo' width={56} height={29} /> 
                SneakerWave
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='font-montserrat leading-normal text-xl text-black-400 hover:text-coral-red  font-medium'
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


            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='hamburger icon' width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav