import React from 'react'
import Image from 'next/image'
import ProfileImageVertical from '../public/ProfileImage.png'
import ProfileImageSquare from '../public/ProfileImageSquare.png'


const profiles = [
  { number: "2,5b", object: "people use our products" },
  { number: "400+", object: "brands are used worldwide" },
  { number: "190", object: "coutries offer our brands" },
  { number: "155k", object: "people deliver our success" },

]

const Profile = () => {
  return (

    <div className='py-16 responsive-x-padding '>
      {/* first section */}
      <div className='flex flex-col-reverse md:flex-row justify-between gap-x-20 items-center'>
        <div className='w-2/6 grid grid-cols-2 grid-rows-2 gap-5'>
          {profiles.map((detail, index) => (
            <div key={index}>
              <div className='pb-6 mr-10'>
                <h4 className='font-bold text-4xl pb-1'>{detail.number}</h4>
                <p className='text-balance'>{detail.object}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-4/6'>
          <h4 className='uppercase text-primary text-pretty font-bold'>Who We Are</h4>
          <p className='text-5xl font-extrabold leading-[60px]'>We have been pioneers, innovators and makers of future for over than 120 years.</p>
        </div>
      </div>

      {/* second section */}
      <div className='pt-32 flex flex-row items-center gap-32'>
        <div className='w-1/2 flex flex-col justify-around gap-32'>
          <div className='flex flex-col text-balance font-semibold gap-y-4 md:mr-40'>
            <p>The success we`ve achieved means that, today, 2.5 billion people use our product to feel good, look good and get more out of life.
            </p>
            <p>
              Our brands give us a unique opportunity to create positive change, to grow our business, and to achieve our purpose of making sustainable living commonplace.
            </p>
            <a href="" className='text-primary font-bold'>About Us</a>
          </div>
          <Image src={ProfileImageSquare} alt="hero" className='rounded-4px object-cover w-[350px] h-[350px]' />
        </div>

        <div className='w-1/2'>
          <div className='bg-slate-100 h-full w-3/2'>
            <Image src={ProfileImageVertical} alt="hero" className='rounded-4px object-cover w-full h-[800px] my-16' />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile