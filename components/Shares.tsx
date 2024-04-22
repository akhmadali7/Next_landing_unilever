import React from 'react'
import Image from 'next/image'

const shareData = [
  { stock: "NV", price: 52.58, change: -0.72, stat: "down", date: "13/11/2024", time: "17:38 CET" },
  { stock: "PLC", price: 4749.0, change: -1.00, stat: "down", date: "13/11/2024", time: "16:36 GMT" },
  { stock: "NV PNY", price: 62.37, change: 0.00, stat: "stable", date: "13/11/2024", time: "16:00 EST" },
  { stock: "PLC ADR NY", price: 62.73, change: 0.03, stat: "up", date: "13/11/2024", time: "16:00 EST" },
  { stock: "PNT LR", price: 34.12, change: 0.03, stat: "up", date: "13/11/2024", time: "16:00 EST" },
]

const Shares = () => {
  return (
    <div className='flex flex-row responsive-x-padding  justify-between py-10'>
      <h4 className='w-5/12 text-6xl font-bold'>Share <br />price</h4>

      <div className='w-7/12 flex flex-row justify-between'>
        {shareData.map((data, index) => (
          <div key={index} className='flex flex-col'>

            <h4 className='text-primary font-bold text-sm  pb-3'>{data.stock}</h4>
            <p className='font-bold text-3xl pb-1'>{data.price.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 3 })}</p>

            <div className='flex flex-row items-center gap-x-1'>
              <p className='text-primary text-lg font-bold'>
                {data.change.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}
              </p>
              <div className='text-primary'> {data.stat === 'up' ? (
                <Image src='/arrow-top-right.svg' alt='stat' width={20} height={20} />
              ) : data.stat === 'down' ? (
                <Image src='/arrow-bottom-right.svg' alt='stat' width={20} height={20} />
              ) : (
                <Image src='/arrow-right.svg' alt='stat' width={20} height={20} />
              )}</div>
            </div>


            <div className='pt-5 text-slate-400 text-sm font-semibold'>
              <p>{data.date}<span> | </span></p>
              <p>{data.time}</p>
            </div>
          </div>
        ))}



      </div>
    </div>
  )
}

export default Shares