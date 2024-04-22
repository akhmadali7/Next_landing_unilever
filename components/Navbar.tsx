import React from 'react'
import Image from 'next/image'
import UnileverLogo from '../public/unilever.svg'

const navLinks = [
  { name: "About", link: "#" },
  { name: "Brands", link: "#" },
  { name: "Sustainable Living", link: "#" },
  { name: "News", link: "#" },
  { name: "Careers", link: "#" },
]

const Navbar = () => {

  return (
    <nav className='sticky top-0 z-10'>
      <div className='responsive-x-padding flex flex-row items-center justify-between py-4 bg-white'>
        <Image src={UnileverLogo} alt='Logo Unilever' height={40} />
        <ul className='flex flex-row gap-x-9 font-semibold'>
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a href="">{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  )
}

export default Navbar