import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Post } from '@/constant/blog';
import Link from 'next/link';


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
    <section className='responsive-x-padding flex flex-col py-10 lg:py-32' id='news'>
      <h4 className='h4-responsive font-bold'>What`s new</h4>

      <div className='flex flex-col md:flex-row pt-10 lg:pt-14 gap-x-6'>
        <div className='w-full md:w-1/2'>
          {/* Filter only show blog with isHeadline = true */}
          {HeadlinePost.map((blog, id) => (
            <Link href={blog.title} key={id} className=''>
              <div className='pb-10 md:pb-2 hover:bg-sky-50 rounded-4px p-2'>
                <Image src={blog.image} alt={blog.title} width={1000} height={1000} className='w-full aspect-3/2 h-full object-cover rounded-4px ' />
                <div className='flex flex-row justify-between items-center pt-6'>
                  <p className='text-primary font-semibold text-sm'>{blog.theme}</p>
                  <p className='text-slate-400 text-sm font-semibold'>{blog.date}</p>
                </div>
                <p className='blog-title py-1'>{blog.title}</p>
                <p className='text-sm font-medium'>{blog.desc}</p>
              </div>
            </Link>
          ))}
        </div>


        <div className='w-full md:w-1/2 flex flex-col gap-y-2 md:gap-y-3 '>
          {/* Filter only show blog with isHeadline = false && only show some of post*/}
          {shuffledGeneralPost.map((blog, id) => (
            <Link href={blog.title} key={id} className='hover:bg-sky-50 rounded-4px'>
              <div className=' flex flex-row md:flex-col lg:flex-row gap-x-6 gap-y-2 items-start justify-center py-2 px-2 '>
                <Image src={blog.image} alt={blog.title} width={1000} height={1000} className='
                aspect-square md:aspect-3/2 lg:aspect-square
                w-[100px] md:w-full lg:w-auto
                h-auto md:h-[150px] lg:h-[150px]
                object-cover rounded-4px' />
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between items-center'>
                    <p className='text-primary font-semibold text-sm'>{blog.theme}</p>
                    <p className='text-slate-400  text-sm font-semibold'>{blog.date}</p>
                  </div>
                  <p className='blog-title py-1'>{blog.title}</p>
                  <p className='text-sm font-normal'>{blog.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section >
  )
}

export default Blog