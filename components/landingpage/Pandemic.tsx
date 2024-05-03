import React from 'react'
import Image from 'next/image'
import landscape from '/public/images/landscape.jpg'
import handwash from '/public/images/Covid.png'
import Link from 'next/link'

const Pandemic = () => {
  return (
    <section className='py-10 bg-slate-50 lg:py-32' id='susliving'>

      <div className='responsive-x-padding 2xl:px-72 '>
        <Image src={landscape} alt='landscape' width={1000} className='hidden lg:block object-cover h-[600px] w-full rounded-4px' />
      </div>

      <div className='flex flex-col-reverse items-center gap-10 pt-10 responsive-x-padding lg:pt-52 lg:flex-row lg:gap-16 xl:gap-32'>
        <Image src={handwash} alt='chidren handwashing' className='object-cover  h-[550px] lg:h-[600px] w-full lg:w-[500px] rounded-4px' />
        <div className='lg:mr-0 xl:mr-32'>
          <h4 className='font-bold h4-responsive'>Covid<br />Response</h4>
          <p className='pt-6 pb-6 font-semibold lg:pt-16 lg:text-balance'>As the world biggest soap-making company, we are throwing our weight behind global and national efforts to protect lives and livelihoods from Covid-19 pandemic.</p>
          <Link href="" className='font-semibold text-maincolor lg:font-bold'>Learn more</Link>
        </div>
      </div>

    </section>
  )
}

export default Pandemic