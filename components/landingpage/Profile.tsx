import React from 'react'
import Image from 'next/image'
import ProfileImageVertical from '/public/images/ProfileImage.png'
import ProfileImageSquare from '/public/images/ProfileImageSquare.png'
import { profiles } from '@/constant'
import Link from 'next/link'




const Profile = () => {
  return (

    <section className='py-16 responsive-x-padding ' id='profile'>
      {/* first section */}
      <div className='flex flex-col-reverse items-center justify-between md:flex-row gap-x-1 xl:gap-x-20 gap-y-10'>
        <div className='grid w-full grid-cols-2 grid-rows-2 md:w-2/6 gap-y-5 lg:gap-y-10'>
          {profiles.map((detail, index) => (
            <div key={index}>
              <div className='mr-0 xl:mr-10'>
                <h4 className='pb-1 font-bold h4-responsive'>{detail.number}</h4>
                <p className='text-balance'>{detail.object}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full md:w-4/6'>
          <p className='font-bold uppercase text-primary text-pretty'>Who We Are</p>
          <h3 className='font-extrabold h3-responsive'>We have been pioneers, innovators and makers of future for over than 120 years.</h3>
        </div>
      </div>

      {/* second section */}
      <div className='flex flex-col items-center gap-10 pt-10 lg:pt-32 lg:flex-row xl:gap-32 '>
        <div className='flex flex-col-reverse justify-around w-full gap-10 lg:w-1/2 lg:flex-col lg:gap-32'>
          <div className='flex flex-col mr-0 font-semibold text-balance gap-y-4 xl:mr-40'>
            <p>The success we`ve achieved means that, today, 2.5 billion people use our product to feel good, look good and get more out of life.
            </p>
            <p>
              Our brands give us a unique opportunity to create positive change, to grow our business, and to achieve our purpose of making sustainable living commonplace.
            </p>
            <Link href="" className='font-semibold text-primary md:font-bold'>About Us</Link>
          </div>
          <Image src={ProfileImageSquare} alt="hero" className='rounded-4px object-cover w-full lg:w-[350px] h-[350px]' />
        </div>

        <div className='w-1/2'>
          <div className='hidden h-full m-0 lg:flex w-3/2'>
            <Image src={ProfileImageVertical} alt="hero" className='rounded-4px object-cover w-full h-[800px] my-16' />

          </div>
        </div>
      </div>

    </section>
  )
}

export default Profile