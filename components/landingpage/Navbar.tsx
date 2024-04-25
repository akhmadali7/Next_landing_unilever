import React from 'react'
import Image from 'next/image'
import UnileverLogo from '/public/icon/unilever.svg'
import { navLinks } from '@/constant'
import Link from 'next/link'



const Navbar = () => {

  return (
    <nav className='sticky top-0 z-10'>
      <div className='responsive-x-padding flex flex-row items-center justify-between py-4 bg-white'>
        <Link href='/#home'><Image src={UnileverLogo} alt='Logo Unilever' height={100} className='h-8 md:h-10 w-8 md:w-10' /></Link>
        <div>
          <ul className=' flex-row gap-x-9 font-semibold hidden md:flex'>
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>
          <div className='block md:hidden'>
            <Image src='/icon/burger.svg' width={100} height={100} alt='Hamburger Menu' className='h-6 w-6' />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar