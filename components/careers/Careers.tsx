import { JobList } from '@/constant/career'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Back_Button from '../ui/Back_Button'

const Careers = () => {
  return (
    <section className='responsive-x-padding pt-10 '>
      <div>
        <Back_Button link='/' />
      </div>

      <div className='pt-5 grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense gap-6 '>

        {JobList.map((job, index) => (
          <div className='bg-white rounded-md p-6 shadow-md shadow-indigo-50 flex flex-col justify-between' key={index}>

            <div>
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center align-middle gap-x-4'>
                  <div className='h-12 w-12 rounded-4px bg-sky-50 flex items-center justify-center'>
                    <Image src={'/icon/careers/briefcase.svg'} width={22} height={22} alt='' className='opacity-50' />
                  </div>
                  <div className='gap-0 flex flex-col'>
                    <h3 className='font-semibold text-lg'>{job.position}</h3>
                    <h3 className='text-slate-600 font-medium text-sm'>{job.type}</h3>
                  </div>
                </div>
                <p className='text-slate-600 text-sm'>{job.date_posted}</p>
              </div>

              <div className='flex flex-row justify-between pt-4 flex-wrap-reverse gap-y-3'>
                <div className='gap-x-4 flex flex-row  items-center text-slate-900 divide-x-2 text-sm font-medium'>
                  {/* <p className='flex items-center gap-x-2'> <span><Image src={'/icon/careers/briefcase.svg'} width={15} height={15} alt='' className='opacity-70' /></span>{job.type}</p> */}
                  <p className=' flex items-center gap-x-2'> <span><Image src={'/icon/careers/people-roof.svg'} width={15} height={15} alt='' className='opacity-70' /></span>{job.company}</p>
                  <p className='pl-4 flex items-center gap-x-2'><span><Image src={'/icon/careers/marker.svg'} width={15} height={15} alt='' className='opacity-70' /></span>{job.location}</p>
                </div>
                {/* <p className='text-slate-600 text-sm'>{job.date_posted}</p> */}
              </div>

              <div>
                <p className='text-slate-600 py-4 text-sm'>{job.description}</p>
              </div>
            </div>


            <div className='border-t-2 pt-6'>
              <div className='flex flex-row justify-between items-center  gap-y-3 '>
                <div className='flex flex-row gap-x-5 flex-wrap gap-y-2'>
                  <p className=' flex items-center font-medium text-sm'>
                    <span><Image src={'/icon/careers/calendar-salary.svg'} width={15} height={15} alt='' className='mr-2 opacity-70 flex items-center' />
                    </span>{job.salary}<span className='text-sm  text-slate-600'>/year</span>
                  </p>
                  <p className=' flex items-center font-medium text-sm'>
                    <span><Image src={'/icon/careers/users-alt.svg'} width={15} height={15} alt='' className='mr-2 opacity-70 flex items-center' />
                    </span>{job.applied}<span className='text-sm text-slate-600'> &nbsp;applied</span>
                  </p>
                </div>

                <Link href={`/careers/job_details/${job.job_id}`} className='text-center px-6 py-1 rounded-4px  bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-500 text-slate-50'>
                  <p className='font-bold'>View</p>
                </Link>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section >
  )
}

export default Careers