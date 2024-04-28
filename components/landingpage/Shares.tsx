import React from 'react'
import Image from 'next/image'
import { sharesData } from '@/constant'



const Shares = () => {
  return (
    <section className='flex flex-col lg:flex-row responsive-x-padding  justify-between py-10 gap-y-10'>
      <h4 className='w-full lg:w-5/12 h4-responsive font-bold'>Share price</h4>

      <div className='w-full lg:w-7/12 flex flex-wrap justify-around items-center gap-y-10 '>
        {sharesData.map((data, index) => (
          <div key={index} className='flex flex-col sm:w-1/4 w-1/2 justify-center'>
            <div className='items-center'>
              <h4 className='text-primary font-bold text-sm pb-3'>{data.stock}</h4>
              <p className='font-bold text-2xl lg:text-3xl pb-1'>{data.price.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 3 })}</p>
              <div className='flex flex-row items-center gap-x-1'>
                <p className='text-primary text-lg font-bold'>
                  {data.change.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}
                </p>
                <div className='text-primary'> {data.stat === 'up' ? (
                  <Image src='/icon/arrow-top-right.svg' alt='stat' width={20} height={20} />
                ) : data.stat === 'down' ? (
                  <Image src='/icon/arrow-bottom-right.svg' alt='stat' width={20} height={20} />
                ) : (
                  <Image src='/icon/arrow-right.svg' alt='stat' width={20} height={20} />
                )}</div>
              </div>
              <div className='pt-5 text-slate-400 text-sm font-semibold'>
                <p>{data.date}<span> | </span></p>
                <p>{data.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shares