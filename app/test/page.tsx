import Navbar from '@/components/landingpage/Navbar'
import Link from 'next/link'
import React from 'react'

const Test = () => {
  return (
    <div>
      <Navbar />
      <div className='h-[1000px]'>

        <Link href={'/'}><p>Back to Home</p></Link>
      </div>
    </div>
  )
}

export default Test