import React from 'react'
import Image from 'next/image'
import { brandsLogo } from '@/constant'
import Link from 'next/link'


const Brands = () => {
  return (
    <div className='responsive-x-padding py-10 md:py-32 flex flex-col md:flex-row items-center' id='brands'>

      <div className='w-full md:w-1/2'>
        <h4 className='h4-responsive font-bold'>Our<br />Brands</h4>
        <p className='pt-5 md:pt-16 pb-6 text-balance font-semibold md:w-4/6'>
          We make some of the world`s best-known brands — all are on a journey to reducing their environmental footprint and increasing their positive social impact.</p>
        <Link href="" className=' text-primary font-semibold md:font-bold'>More Brands</Link>
      </div>

      <div className=' w-full md:w-1/2 grid grid-cols-3 grid-rows-3 md:gap-x-20 gap-y-0 font-bold mx-10 md:mx-0'>
        {brandsLogo.map((brands, index) => (
          <div key={index} className='flex items-center justify-center '>
            <Image src={brands.url} width={500} height={500} alt={brands.name} className='w-20 md:w-40 h-max opacity-90' />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Brands