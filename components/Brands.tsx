import React from 'react'
import Image from 'next/image'

const brandsLogo = [
  { name: "1", url: "/brand/1.svg" },
  { name: "2", url: "/brand/2.svg" },
  { name: "3", url: "/brand/3.svg" },
  { name: "4", url: "/brand/4.svg" },
  { name: "5", url: "/brand/5.svg" },
  { name: "6", url: "/brand/6.svg" },
  { name: "7", url: "/brand/7.svg" },
  { name: "8", url: "/brand/8.svg" },
]
const Brands = () => {
  return (
    <div className='responsive-x-padding py-32 flex flex-row items-center'>

      <div className='w-1/2'>
        <h4 className='text-6xl font-bold'>Our<br />Brands</h4>
        <p className='pt-16 pb-6 text-balance font-semibold md:w-4/6'>
          We make some of the world`s best-known brands - all are on a journey to reducing their environmental footprint and increasing their positive social impact.</p>
        <a href="" className=' text-primary font-bold'>More Brands</a>
      </div>

      <div className=' w-1/2 grid grid-cols-2 grid-rows-4 gap-x-10 gap-y-10 font-bold'>
        {brandsLogo.map((brands, index) => (
          <div key={index} className='flex items-center justify-center '>
            <Image src={brands.url} width={500} height={500} alt={brands.name} className='w-24 h-24 opacity-60' />
          </div>
        ))}




      </div>
    </div>
  )
}

export default Brands