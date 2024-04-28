import Careers from '@/components/careers/Careers'
import Footer from '@/components/landingpage/Footer'
import Navbar from '@/components/landingpage/Navbar'
import React from 'react'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-slate-50'>
        <Careers />
        <Footer />
      </div>
    </div>
  )
}

export default Home