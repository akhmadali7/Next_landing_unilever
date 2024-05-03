import React from 'react'
import Image from 'next/image'
import UnileverLogo from '/public/icon/unilever.svg'
import { navLinks } from '@/constant'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"


const Navbar = () => {

  return (
    <nav className='sticky top-0 z-10'>
      <div className='flex flex-row items-center justify-between py-4 bg-white responsive-x-padding'>
        <div className='flex flex-row items-center gap-x-5'>
          <Link href='/#home'><Image src={UnileverLogo} alt='Logo Unilever' height={100} className='w-8 h-8 md:h-10 md:w-10' /></Link>
          <div className='px-4 py-2 bg-rose-500 rounded-4px'>
            <p className=' text-[11px] font-extrabold text-white text-center'>Under  Construction</p>
          </div>
        </div>
        <div>


          <ul className='flex-row hidden font-semibold gap-x-1 lg:gap-x-2 md:flex'>
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link href={nav.link} className='px-3 py-2 rounded-4px hover:bg-slate-200 active:bg-slate-100'>{nav.name}</Link>
              </li>
            ))}
          </ul>

          <div className='block md:hidden'>

            <Sheet>
              <SheetTrigger>
                <HamburgerMenuIcon className='text-maincolor' />
                {/* <Image src='/icon/burger.svg' width={100} height={100} alt='Hamburger Menu' className='w-6 h-6' /> */}
              </SheetTrigger>
              <SheetContent side='left'>
                <SheetHeader>
                  {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                </SheetHeader>

                <SheetFooter>
                  <div className='py-10'>
                    <ul className='flex flex-col text-lg font-semibold gap-x-1 gap-y-6'>
                      {navLinks.map((nav, index) => (
                        <li key={index}>
                          <SheetClose asChild>
                            <Link href={nav.link} className='px-3 py-2 rounded-4px hover:bg-slate-200 active:bg-slate-100'>{nav.name}</Link>
                          </SheetClose>
                        </li>
                      ))}

                    </ul>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <p></p>
        </div>
      </div>
    </nav >
  )
}

export default Navbar