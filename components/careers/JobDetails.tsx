import React from 'react'
import Back_Button from '@/components/ui/Back_Button'
import { JobList } from '@/constant/career'


const filteredJobList = (jobId: any) => {
  return JobList.filter(job => job.job_id === jobId);
}

const filteredJobs = filteredJobList("SCA_Supply_Chain_Analyst_326");

const JobDetails = () => {
  return (
    <div className='flex flex-col pt-10 responsive-x-padding gap-y-10'>
      <Back_Button link='/careers' />
      {filteredJobs.map((job, index) => (
        <div key={index}>
          <div>
            <p>{job.job_id}</p>
            <p>{job.position}</p>
            <p>{job.type}</p>
            <p>{job.location}</p>
            <p>{job.company}</p>
            <p>{job.date_posted}</p>
            <p>{job.description}</p>
            <p>{job.salary}</p>
            <p>{job.applied}</p>
          </div>

          <div className='py-10'>
            <hr />
          </div>

          <div className='flex flex-row justify-evenly'>
            <div>
              <p>Requirements:</p>
              {job.requirement.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </div>
            <div>
              <p>Benefits:</p>
              {job.benefit.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </div>

          </div>

        </div>
      ))}
      <div className='flex justify-end'>
        <Back_Button link='/' />
      </div>

    </div>
  )
}

export default JobDetails