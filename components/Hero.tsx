import React from 'react'
import Image from 'next/image'
import HeroImage from '../public/Hero.jpeg'


const Hero = () => {
  return (
    <div className='flex flex-col responsive-x-padding gap-y-20 py-28'>
      <h1 className='text-9xl text-primary leading-[128px] font-bold '>
        Making <br></br> sustainable living commonplace.
      </h1>

      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-x-20'>
        <div className='md:w-2/6'>
          <p className='pb-6 text-pretty font-semibold'>We believe that business growth should not be of the expense of people and the planet. That`s why  we`re changing the way we do business, and why we want to change the way business is done.</p>
          <a href="" className=' text-primary font-bold'>Discover</a>
        </div>
        <div className='md:w-auto'>
          <Image src={HeroImage} alt="hero" className='rounded-4px object-cover w-auto h-[400px]' />
        </div>
      </div>
    </div >
  )
}

export default Hero