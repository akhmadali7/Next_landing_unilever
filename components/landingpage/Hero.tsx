import React from 'react'
import Image from 'next/image'
import HeroImage from '/public/images/Hero.jpeg'
import Link from 'next/link'



const Hero = () => {
  return (
    <section className='flex flex-col py-10 responsive-x-padding gap-y-10 md:gap-y-20 md:py-28' id='home'>
      <h1 className='font-bold h1-responsive text-maincolor'>
        <span className='text-pretty'>Making <br /> sustainable living commonplace.</span>
      </h1>

      <div className='flex flex-col-reverse items-center justify-between md:flex-row gap-x-20 gap-y-10'>
        <div className='md:w-2/6'>
          <p className='pb-6 font-semibold text-pretty'>We believe that business growth should not be of the expense of people and the planet. That`s why  we`re changing the way we do business, and why we want to change the way business is done.</p>
          <Link href="" className='font-semibold text-maincolor md:font-bold'>Discover</Link>
        </div>
        <div className='md:w-auto'>
          <Image src={HeroImage} alt="hero" className='rounded-4px object-cover w-auto h-[400px]' />
        </div>
      </div>
    </section >
  )
}

export default Hero