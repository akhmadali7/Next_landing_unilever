import React from 'react'
import Image from 'next/image'
import { sharesData } from '@/constant'



const Shares = () => {
  return (
    <section className='flex flex-col justify-between py-10 lg:flex-row responsive-x-padding gap-y-10'>
      <h4 className='w-full font-bold lg:w-5/12 h4-responsive'>Share price</h4>

      <div className='flex flex-wrap items-center justify-around w-full lg:w-7/12 gap-y-10 '>
        {sharesData.map((data, index) => (
          <div key={index} className='flex flex-col justify-center w-1/2 sm:w-1/4'>
            <div className='items-center'>
              <h4 className='pb-3 text-sm font-bold text-primary'>{data.stock}</h4>
              <p className='pb-1 text-2xl font-bold lg:text-3xl'>{data.price.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 3 })}</p>
              <div className='flex flex-row items-center gap-x-1'>
                <p className='text-lg font-bold text-primary'>
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
              <div className='pt-5 text-sm font-semibold text-slate-400'>
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