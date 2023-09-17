import React from 'react'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>   
            <a href='/' className='flex font-semibold font-montserrat leading-normal items-center text-xl text-coral-red ' >
                <img src={ headerLogo } alt='logo' width={56} height={29} /> 
                SneakerWaves
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='font-montserrat leading-normal text-xl text-slate-gray'
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex gap-2 text-xl leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                <a href='/'>Sign in</a>       
            </div>

            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='hamburger icon' width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav