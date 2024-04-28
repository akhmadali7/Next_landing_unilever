import React from 'react'
import Image from 'next/image'
import UnileverLogo from '/public/icon/unilever.svg'
import { navLinks } from '@/constant'
import Link from 'next/link'



const Navbar = () => {

  return (
    <nav className='sticky top-0 z-10'>
      <div className='responsive-x-padding flex flex-row items-center justify-between py-4 bg-white'>
        <div className='flex flex-row items-center gap-x-5'>
          <Link href='/#home'><Image src={UnileverLogo} alt='Logo Unilever' height={100} className='h-8 md:h-10 w-8 md:w-10' /></Link>
          <div className='px-4 py-2 bg-rose-500 rounded-full'>
            <p className=' text-[12px] font-extrabold text-white text-center'>Under Construction</p>
          </div>
        </div>
        <div>
          <ul className=' flex-row gap-x-1 lg:gap-x-2 font-semibold hidden md:flex'>
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link href={nav.link} className=' px-3 py-2 rounded-4px hover:bg-slate-200 active:bg-slate-100 '>{nav.name}</Link>
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