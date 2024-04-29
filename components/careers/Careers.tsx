import { JobList } from '@/constant/career'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Back_Button from '../ui/Back_Button'

const Careers = () => {
  return (
    <section className='pt-10 responsive-x-padding '>
      <div>
        <Back_Button link='/' />
      </div>

      <div className='grid grid-flow-row-dense grid-cols-1 gap-6 pt-5 md:grid-cols-2 '>

        {JobList.map((job, index) => (
          <div className='flex flex-col justify-between p-6 bg-white rounded-md shadow-md shadow-indigo-50' key={index}>

            <div>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center align-middle gap-x-4'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-4px bg-sky-50'>
                    <Image src={'/icon/careers/briefcase.svg'} width={22} height={22} alt='' className='opacity-50' />
                  </div>
                  <div className='flex flex-col gap-0'>
                    <h3 className='text-lg font-semibold'>{job.position}</h3>
                    <h3 className='text-sm font-medium text-slate-600'>{job.type}</h3>
                  </div>
                </div>
                <p className='text-sm text-slate-600'>{job.date_posted}</p>
              </div>

              <div className='flex flex-row flex-wrap-reverse justify-between pt-4 gap-y-3'>
                <div className='flex flex-row items-center text-sm font-medium divide-x-2 gap-x-4 text-slate-900'>
                  {/* <p className='flex items-center gap-x-2'> <span><Image src={'/icon/careers/briefcase.svg'} width={15} height={15} alt='' className='opacity-70' /></span>{job.type}</p> */}
                  <p className='flex items-center gap-x-2'> <span><Image src={'/icon/careers/people-roof.svg'} width={15} height={15} alt='' className='opacity-70' /></span>{job.company}</p>
                  <p className='flex items-center pl-4 gap-x-2'><span><Image src={'/icon/careers/marker.svg'} width={15} height={15} alt='' className='opacity-70' /></span>{job.location}</p>
                </div>
                {/* <p className='text-sm text-slate-600'>{job.date_posted}</p> */}
              </div>

              <div>
                <p className='py-4 text-sm text-slate-600'>{job.description}</p>
              </div>
            </div>


            <div className='pt-6 border-t-2'>
              <div className='flex flex-row items-center justify-between gap-y-3 '>
                <div className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                  <p className='flex items-center text-sm font-medium '>
                    <span><Image src={'/icon/careers/calendar-salary.svg'} width={15} height={15} alt='' className='flex items-center mr-2 opacity-70' />
                    </span>{job.salary}<span className='text-sm text-slate-600'>/year</span>
                  </p>
                  <p className='flex items-center text-sm font-medium '>
                    <span><Image src={'/icon/careers/users-alt.svg'} width={15} height={15} alt='' className='flex items-center mr-2 opacity-70' />
                    </span>{job.applied}<span className='text-sm text-slate-600'> &nbsp;applied</span>
                  </p>
                </div>

                <Link href={`/careers/job_details/${job.job_id}`} className='px-6 py-1 text-center bg-indigo-600 rounded-4px hover:bg-indigo-700 active:bg-indigo-500 text-slate-50'>
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