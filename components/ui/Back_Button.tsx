'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { BackButtonProps } from '@/types';

const Back_Button = ({ link }: BackButtonProps) => {

  return (
    <div>
      <Link href={link} className='text-lg text-slate-700 font-bold flex flex-row items-center w-max hover:bg-slate-200 active:bg-slate-100  px-4 py-2 rounded-4px'>
        <Image src={'/icon/careers/arrow-small-left.svg'} width={15} height={15} alt='' className='mr-3 opacity-70 flex items-center' />Back
      </Link>
    </div>
  )
}

export default Back_Button