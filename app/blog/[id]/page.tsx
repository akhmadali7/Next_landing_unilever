import Blog from '@/components/blog/Blog'
import Footer from '@/components/landingpage/Footer'
import Navbar from '@/components/landingpage/Navbar'
import Back_Button from '@/components/ui/Back_Button'
import React from 'react'

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className='h-screen'>
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default Home