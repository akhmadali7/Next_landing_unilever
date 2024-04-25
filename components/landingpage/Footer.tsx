import React from 'react'
import UnileverLogo from '/public/icon/unilever.svg'
import Image from 'next/image'
import FB from '/public/footer/facebook-fill.svg'
import linkedIn from '/public/footer/linkedin-original.svg'
import Twitter from '/public/footer/twitter-original.svg'
import IG from '/public/footer/instagram-original.svg'
import { Company, SuistainLiving } from '@/constant'
import Link from 'next/link'




const Footer = () => {
  return (
    <div className='responsive-x-padding pt-32 pb-6 flex flex-col gap-y-16 '>
      <div className='flex flex-row items-end gap-x-5'>
        <Image src={UnileverLogo} alt='Logo Unilever' height={50} />
        <p className='text-sm font-bold text-primary'>This is Unilever`s global <br />company website</p>
      </div>

      <div>
        <div className='flex flex-wrap sm:flex-row  items-start lg:justify-between gap-x-5 gap-y-6 lg:gap-x-10 lg:gap-y-10'>
          <div>
            <h3 className='pb-2 md:pb-4 font-bold'>Company</h3>
            <ul className='flex flex-col gap-y-1 md:gap-y-2'>
              {Company.map((company, index) => (
                <li key={index} className='text-responsive'>
                  <Link href={company.link}>{company.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='pb-2 md:pb-4 font-bold'>Sustain Living</h3>
            <ul className='flex flex-col gap-y-1 md:gap-y-2'>
              {SuistainLiving.map((sus, index) => (
                <li key={index} className='text-responsive'>
                  <Link href={sus.link}>{sus.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className='lg:w-1/4'>
            <h3 className='pb-2 md:pb-4 font-bold'>Contact us</h3>
            <p className='text-responsive text-balance'>Get in touch with Unilever and specialist in our headquarters, or find contacts around the world</p>
          </div>
          <div className='lg:w-1/4'>
            <h3 className='pb-2 md:pb-4 font-bold'>Connect with us</h3>
            <p className='text-responsive text-balance'>We`re always looking to connect with those who share on interest in a sustainable future.</p>
            <div className='pt-6 flex flex-row gap-x-6 opacity-90'>
              <Link href="https://www.facebook.com/unilever" target='_blank'><Image src={FB} alt='FB icon' className='text-primary w-6' /></Link>
              <Link href="https://www.x.com/unilever"><Image src={Twitter} alt='FB icon' className='text-primary w-6' /></Link>
              <Link href="https://www.instagram.com/unilever"><Image src={IG} alt='FB icon' className='text-primary w-6' /></Link>
              <Link href="https://www.linked.in/unilever"><Image src={linkedIn} alt='FB icon' className='text-primary w-6' /></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='font-semibold'>&copy; Unilever 2024. All Right Reserved </p>
    </div>
  )
}

export default Footer