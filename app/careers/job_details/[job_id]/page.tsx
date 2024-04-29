"use client"
import Navbar from '@/components/landingpage/Navbar'
import React from 'react'
import { JobList } from '@/constant/career'
import Back_Button from '@/components/ui/Back_Button'
import JobDetails from '@/components/careers/JobDetails'


const filteredJobList = (jobId: any) => {
  return JobList.filter(job => job.job_id === jobId);
}

const filteredJobs = filteredJobList("SCA_Supply_Chain_Analyst_326");

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className='responsive-x-padding flex flex-col gap-y-10 pt-10'>
        <Back_Button link='/careers' />
        <JobDetails />
        {filteredJobs.map((job, index) => (
          <div key={index}>
            <p>{job.job_id}</p>
            <p>{job.position}</p>
            <p>{job.type}</p>
            <p>{job.location}</p>
            <p>{job.company}</p>
            <p>{job.date_posted}</p>
            <p>{job.description}</p>
            <p>{job.salary}</p>
            <p>{job.applied}</p>
            <hr />

            <p>Benefits:</p>
            {job.benefit.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
            <hr />
            <p>Requirements:</p>
            {job.requirement.map((req, index) => (
              <li key={index}>{req}</li>
            ))}

          </div>
        ))}
        <hr />

      </div>
    </div>
  )
}

export default Home