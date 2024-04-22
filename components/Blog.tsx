import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';


const Post = [
  {
    id: 1,
    theme: "Collaborating & innovating for change",
    title: "Research finds mouthwash technology could help reduce transmission of coronavirus",
    date: "January 2024",
    desc: "New in-vitro test results show that mouthwash containing CPC Technology is effective in reducing the virol load of SARS-CoV-2 by 99.9%.",
    image: "/Blog/Blog_1.png",
    isHeadline: false
  },
  {
    id: 2,
    theme: "Collaborating & innovating for change",
    title: "No animal testing, Unilever brands and the EU`s chemicals regulations",
    date: "June 2024",
    desc: "We don`t agree that ingredients with a history of safe use and manufacture need further testing on animals.",
    image: "/Blog/Blog_5.png",
    isHeadline: false
  },
  {
    id: 3,
    theme: "Consuming Sustainability",
    title: '"There`s always an opportunity to delight somebody"',
    date: "March 2024",
    desc: "Seventh Generation CEO Joey Bergstein shares how transparency and trust help the brand connect with consumers.",
    image: "/Blog/Blog_2.png",
    isHeadline: false
  },
  {
    id: 4,
    theme: "Collaborating & innovating for change",
    title: "Our progress on plastics",
    date: "April 2024",
    desc: "Last year we pledged to make significant cuts to the amount of virgin plastic in our portfolio. Here`s what we`ve achieved since then - plus our plans to do much more.",
    image: "/Blog/Blog_6.png",
    isHeadline: false
  },
  {
    id: 5,
    theme: "Sustainable Living",
    title: "Innovations in Renewable Energy",
    date: "May 2024",
    desc: "Explore how our latest investments in solar and wind power are paving the way for a more sustainable future, and our commitment to achieving carbon neutrality by 2030.",
    image: "/Blog/Blog_4.png",
    isHeadline: true
  },
  {
    id: 6,
    theme: "Health & Wellbeing",
    title: "Advancements in Nutritional Sciences",
    date: "February 2024",
    desc: "Discover how our new range of fortified foods is designed to improve community health standards and combat malnutrition in underdeveloped areas.",
    image: "/Blog/Blog_3.png",
    isHeadline: false
  }
]

const HeadlinePost = Post.filter(blog => blog.isHeadline);
const GeneralPost = Post.filter(blog => !blog.isHeadline);


function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring assignment
  }
  return array;
}

const shuffledGeneralPost = shuffle([...GeneralPost]).slice(0, 3);



const Blog = () => {
  return (
    <div className='responsive-x-padding flex flex-col py-32'>
      <h4 className='text-6xl font-bold'>What`s new</h4>

      <div className='flex flex-row pt-14 gap-x-10'>
        <div className='w-1/2'>
          {/* Filter only show blog with isHeadline = true */}
          {HeadlinePost.map((blog, id) => (
            <div key={id} className='pb-10'>
              <Image src={blog.image} alt="Blog image" width={1000} height={1000} className='w-full aspect-3/2 h-full object-cover rounded-4px' />
              <div className='flex flex-row justify-between items-center pt-6'>
                <p className='text-primary font-semibold text-base'>{blog.theme}</p>
                <p className='text-slate-400 text-sm font-semibold'>{blog.date}</p>
              </div>
              <p className='text-lg font-bold py-1'>{blog.title}</p>
              <p className='text-base font-medium'>{blog.desc}</p>
            </div>
          ))}
        </div>


        <div className='w-1/2 flex flex-col gap-y-9'>
          {/* Filter only show blog with isHeadline = false && only show some of post*/}
          {shuffledGeneralPost.map((blog, id) => (
            <div key={id} className=' flex flex-row gap-x-6 items-start justify-center'>
              <Image src={blog.image} alt="Blog image" width={1000} height={1000} className=' aspect-square w-[150px] h-[150px] object-cover rounded-4px' />

              <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-center'>
                  <p className='text-primary font-semibold text-base'>{blog.theme}</p>
                  <p className='text-slate-400  text-sm font-semibold'>{blog.date}</p>
                </div>
                <p className='text-lg font-bold py-1'>{blog.title} {blog.id}</p>
                <p className='text-base font-medium'>{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog