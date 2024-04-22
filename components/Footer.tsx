import React from 'react'
import UnileverLogo from '../public/unilever.svg'
import Image from 'next/image'
import FB from '../public/footer/facebook-fill.svg'
import linkedIn from '../public/footer/linkedin-original.svg'
import Twitter from '../public/footer/twitter-original.svg'
import IG from '../public/footer/instagram-original.svg'

const Company = [
  { name: "Who we are", link: "#" },
  { name: "Every U Does Good", link: "#" },
  { name: "Innovation", link: "#" },
  { name: "Our brands", link: "#" },
  { name: "News & insights", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Investors", link: "#" }
]

const SuistainLiving = [
  { name: "Report Hub", link: "#" },
  { name: "Improving health & well-being", link: "#" },
  { name: "Reducing environment impact", link: "#" },
  { name: "Enhancing livelihoods", link: "#" },
]


const Footer = () => {
  return (
    <div className='responsive-x-padding pt-32 pb-6 flex flex-col gap-y-16'>
      <div className='flex flex-row items-end gap-x-5'>
        <Image src={UnileverLogo} alt='Logo Unilever' height={50} />
        <p className='text-sm font-bold text-primary'>This is Unilever`s global <br />company website</p>
      </div>
      <div className='flex flex-row  items-start justify-between gap-x-10'>
        <div>
          <h3 className='pb-4 font-bold'>Company</h3>
          <ul className='flex flex-col gap-y-2'>
            {Company.map((company, index) => (
              <li key={index} className='font-semibold'><a href={company.link}>{company.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='pb-4 font-bold'>Sustain Living</h3>
          <ul className='flex flex-col gap-y-2'>
            {SuistainLiving.map((sus, index) => (
              <li key={index} className='font-semibold'><a href={sus.link}>{sus.name}</a></li>
            ))}
          </ul>
        </div>

        <div className='w-1/4'>
          <h3 className='pb-4 font-bold'>Contact us</h3>
          <p className='font-semibold text-balance'>Get in touch with Unilever and specialist in our headquarters, or find contacts around the world</p>
        </div>

        <div className='w-1/4'>
          <h3 className='pb-4 font-bold'>Connect with us</h3>
          <p className='font-semibold text-balance'>We`re always looking to connect with those who share on interest in a sustainable future.</p>
          <div className='pt-6 flex flex-row gap-x-6 opacity-90'>
            <a href="#"><Image src={FB} alt='FB icon' className='text-primary w-6' /></a>
            <a href="#"><Image src={Twitter} alt='FB icon' className='text-primary w-6' /></a>
            <a href="#"><Image src={IG} alt='FB icon' className='text-primary w-6' /></a>
            <a href="#"><Image src={linkedIn} alt='FB icon' className='text-primary w-6' /></a>
          </div>
        </div>
      </div>
      <p className='font-semibold'>&copy; Unilever 2024. All Right Reserved </p>
    </div>
  )
}

export default Footer