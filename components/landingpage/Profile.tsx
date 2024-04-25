import React from 'react'
import Image from 'next/image'
import ProfileImageVertical from '/public/images/ProfileImage.png'
import ProfileImageSquare from '/public/images/ProfileImageSquare.png'
import { profiles } from '@/constant'
import Link from 'next/link'




const Profile = () => {
  return (

    <div className='py-16 responsive-x-padding ' id='profile'>
      {/* first section */}
      <div className='flex flex-col-reverse md:flex-row justify-between gap-x-1 xl:gap-x-20 gap-y-10 items-center'>
        <div className='w-full md:w-2/6 grid grid-cols-2 grid-rows-2 gap-y-5 lg:gap-y-10'>
          {profiles.map((detail, index) => (
            <div key={index}>
              <div className='mr-0 xl:mr-10'>
                <h4 className='font-bold h4-responsive pb-1'>{detail.number}</h4>
                <p className='text-balance'>{detail.object}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full md:w-4/6'>
          <p className='uppercase text-primary text-pretty font-bold'>Who We Are</p>
          <h3 className='h3-responsive font-extrabold'>We have been pioneers, innovators and makers of future for over than 120 years.</h3>
        </div>
      </div>

      {/* second section */}
      <div className='pt-10 lg:pt-32 flex flex-col lg:flex-row items-center gap-10 xl:gap-32 '>
        <div className='w-full lg:w-1/2 flex flex-col-reverse lg:flex-col justify-around gap-10 lg:gap-32'>
          <div className='flex flex-col text-balance font-semibold gap-y-4 mr-0 xl:mr-40'>
            <p>The success we`ve achieved means that, today, 2.5 billion people use our product to feel good, look good and get more out of life.
            </p>
            <p>
              Our brands give us a unique opportunity to create positive change, to grow our business, and to achieve our purpose of making sustainable living commonplace.
            </p>
            <Link href="" className='text-primary  font-semibold md:font-bold'>About Us</Link>
          </div>
          <Image src={ProfileImageSquare} alt="hero" className='rounded-4px object-cover w-full lg:w-[350px] h-[350px]' />
        </div>

        <div className='w-1/2'>
          <div className='hidden lg:flex h-full w-3/2 m-0'>
            <Image src={ProfileImageVertical} alt="hero" className='rounded-4px object-cover w-full h-[800px] my-16' />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile