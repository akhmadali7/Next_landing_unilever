import React from 'react'
import Back_Button from '../ui/Back_Button'

const Blog = () => {
  return (
    <div className='flex flex-col pt-10 responsive-x-padding gap-y-10'>
      <Back_Button link='/#news' />
      <p>Disini isi blognya</p>
    </div>
  )
}

export default Blog