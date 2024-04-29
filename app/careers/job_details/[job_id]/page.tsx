"use client"
import JobDetails from '@/components/careers/JobDetails'
import Footer from '@/components/landingpage/Footer'
import Navbar from '@/components/landingpage/Navbar'
import React from 'react'


const Home = () => {

  return (
    <div>
      <Navbar />
      <JobDetails />
      <Footer />

    </div>
  )
}

export default Home