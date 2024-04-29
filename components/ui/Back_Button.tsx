'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { BackButtonProps } from '@/types';

const Back_Button = ({ link }: BackButtonProps) => {

  return (
    <div>
      <Link href={link} className='flex flex-row items-center px-4 py-2 text-lg font-bold text-slate-700 w-max hover:bg-slate-200 active:bg-slate-100 rounded-4px'>
        <Image src={'/icon/careers/arrow-small-left.svg'} width={15} height={15} alt='' className='flex items-center mr-3 opacity-70' />Back
      </Link>
    </div>
  )
}

export default Back_Button