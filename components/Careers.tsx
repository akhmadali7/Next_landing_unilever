import React from 'react'
import Image from 'next/image'
import jobs from '../public/Blog/Blog_2.png'

const Careers = () => {
  return (
    <div className='py-32'>
      <div className='responsive-x-padding flex flex-row items-center gap-x-20'>
        <div className=''>
          <h4 className='text-6xl font-bold text-balance pb-6'>Together we can change the way the world does business</h4>
          <a href="" className=' text-primary font-bold'>Find jobs</a>
        </div>
        <Image src={jobs} alt='chidren handwashing' className='object-cover h-[600px] w-auto aspect-2/3 rounded-4px' />

      </div>
    </div>
  )
}

export default Careers