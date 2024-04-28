import React from 'react'
import Image from 'next/image'
import jobs from '/public/images/teamwork.jpg'
import Link from 'next/link'

const Careers = () => {
  return (
    <section className='py-10 lg:py-32' id='careers'>
      <div className='responsive-x-padding flex flex-col lg:flex-row items-center gap-x-20 gap-y-10'>
        <div className=''>
          <h3 className='h3-responsive font-bold text-balance pb-6'>Together we can change the way the world does business</h3>
          <Link href="/careers" className=' text-primary font-bold'>Find jobs</Link>
        </div>
        <Image src={jobs} alt='chidren handwashing' className='object-cover h-[400px] lg:h-[600px] w-full lg:w-auto aspect-2/3 rounded-4px contrast-100 brightness-110' />

      </div>
    </section>
  )
}

export default Careers