import React from 'react'
import Image from 'next/image'
import landscape from '/public/images/landscape.jpg'
import handwash from '/public/images/Covid.png'
import Link from 'next/link'

const Pandemic = () => {
  return (
    <div className='bg-slate-50 py-10 lg:py-32' id='susliving'>

      <div className='responsive-x-padding 2xl:px-72  '>
        <Image src={landscape} alt='landscape' width={1000} className='hidden lg:block object-cover h-[600px] w-full rounded-4px' />
      </div>

      <div className='responsive-x-padding pt-10 lg:pt-52 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-32'>
        <Image src={handwash} alt='chidren handwashing' className='object-cover  h-[550px] lg:h-[600px] w-full lg:w-[500px] rounded-4px' />
        <div className='lg:mr-0 xl:mr-32'>
          <h4 className='h4-responsive font-bold'>Covid<br />Response</h4>
          <p className='pt-6 lg:pt-16 pb-6 lg:text-balance font-semibold'>As the world biggest soap-making company, we are throwing our weight behind global and national efforts to protect lives and livelihoods from Covid-19 pandemic.</p>
          <Link href="" className=' text-primary font-semibold lg:font-bold'>Learn more</Link>
        </div>
      </div>

    </div>
  )
}

export default Pandemic