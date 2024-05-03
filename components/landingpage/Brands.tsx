import React from 'react'
import Image from 'next/image'
import { brandsLogo } from '@/constant'
import Link from 'next/link'


const Brands = () => {
  return (
    <section className='flex flex-col items-center py-10 responsive-x-padding md:py-32 md:flex-row' id='brands'>

      <div className='w-full md:w-1/2'>
        <h4 className='font-bold h4-responsive'>Our<br />Brands</h4>
        <p className='pt-5 pb-6 font-semibold md:pt-16 text-balance md:w-4/6'>
          We make some of the world`s best-known brands — all are on a journey to reducing their environmental footprint and increasing their positive social impact.</p>
        <Link href="" className='font-semibold text-maincolor md:font-bold'>More Brands</Link>
      </div>

      <div className='grid w-full grid-cols-3 grid-rows-3 mx-10 font-bold md:w-1/2 md:gap-x-20 gap-y-0 md:mx-0'>
        {brandsLogo.map((brands, index) => (
          <div key={index} className='flex items-center justify-center '>
            <Image src={brands.url} width={500} height={500} alt={brands.name} className='w-20 md:w-40 h-max opacity-90' />
          </div>
        ))}

      </div>
    </section>
  )
}

export default Brands