import React from 'react'
import Image from 'next/image'
import landscape from '../public/landscape.jpg'
import handwash from '../public/Covid.png'

const Pandemic = () => {
  return (
    <div className='bg-slate-50 py-32'>
      <div className='responsive-x-padding 2xl:px-72  '>
        <Image src={landscape} alt='landscape' width={1000} className='object-cover h-[600px] w-full rounded-4px' />
      </div>

      <div className='responsive-x-padding pt-52 flex flex-row items-center gap-48'>
        <Image src={handwash} alt='chidren handwashing' className='object-cover h-[600px] w-[500px] rounded-4px' />
        <div className='mr-28'>
          <h4 className='text-6xl font-bold'>Covid<br />Response</h4>
          <p className='pt-16 pb-6 text-balance font-semibold'>As the world biggest soap-making company, we are throwing our weight behind global and national efforts to protect lives and livelihoods from Covid-19 pandemic.</p>
          <a href="" className=' text-primary font-bold'>Learn more</a>
        </div>

      </div>
    </div>
  )
}

export default Pandemic