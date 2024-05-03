import React, { useEffect } from 'react'
import Back_Button from '@/components/ui/Back_Button'
import { JobList } from '@/constant/career'
import Image from 'next/image';


const filteredJobList = (jobId: any) => {
  return JobList.filter(job => job.job_id === jobId);
}
const filteredJobs = filteredJobList("SC_Sustainability_Coordinator_440");



const JobDetails = () => {


  return (
    <section className='flex flex-col pt-10 responsive-x-padding gap-y-10'>
      <Back_Button link='/careers' />
      {filteredJobs.map((job, index) => (
        <div key={index}>
          <div>
            <div className='flex flex-row items-center justify-between gap-y-10'>
              {/* <p>{job.job_id}</p> */}
              <div className="flex flex-row gap-x-3">
                <div className='flex items-center justify-center w-12 h-12 rounded-4px bg-sky-50'>
                  <Image src={'/icon/careers/briefcase.svg'} width={22} height={22} alt='' className='opacity-50' />
                </div>
                <div>
                  <p className='text-xl font-semibold'>{job.position}</p>
                  <p className='text-base font-medium text-slate-600'>{job.type}</p>
                </div>
              </div>
              <p className='text-base text-slate-600'>{job.date_posted}</p>
            </div>
            <div className='flex flex-row items-center pt-5 text-lg font-semibold divide-x-2 gap-x-4 text-slate-900'>
              <p className='flex items-center gap-x-2'> <span><Image src={'/icon/careers/people-roof.svg'} width={20} height={20} alt='' className='opacity-70' /></span>{job.company}</p>
              <p className='flex items-center pl-4 gap-x-2'><span><Image src={'/icon/careers/marker.svg'} width={20} height={20} alt='' className='opacity-70' /></span>{job.location}</p>
            </div>
            {/* <p id='description' className='py-10 text-balance'>{job.description}</p> */}
            <div className='py-4 gap-y-1'>
              {job.description.map((description, index) => (
                <div key={index} className='pb-3'>
                  {description}
                </div>
              ))}
            </div>

          </div>

          <div className='pt-3 pb-6'>
            <hr />
          </div>

          <div className='flex flex-row flex-wrap justify-between gap-y-6'>
            <div>
              <p className='text-lg font-semibold'>Requirements:</p>
              {job.requirement.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </div>
            <div>
              <p className='text-lg font-semibold'>Benefits:</p>
              {job.benefit.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </div>
            <div className='flex flex-col items-start gap-y-3'>
              <p className='flex items-center text-lg font-medium '>
                <span><Image src={'/icon/careers/calendar-salary.svg'} width={25} height={25} alt='' className='flex items-center mr-3 opacity-70' />
                </span>{job.salary}<span className='text-base text-slate-800'>/year</span>
              </p>
              <p className='flex items-center text-lg font-medium '>
                <span><Image src={'/icon/careers/users-alt.svg'} width={25} height={25} alt='' className='flex items-center mr-3 opacity-70' />
                </span>{job.applied}<span className='text-base text-slate-800'> &nbsp;applied</span>
              </p>
            </div>

          </div>

        </div>
      ))
      }
      <div className='flex justify-end'>
        <Back_Button link='/' />
      </div>

    </section >
  )
}

export default JobDetails