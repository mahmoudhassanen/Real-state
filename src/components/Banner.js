import React, { useEffect } from 'react'
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'
import Aos, { init } from 'aos'
export default function Banner() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <div className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'
      >
        <div  data-aos="fade-right"
       data-aos-offset="500"
       data-aos-easing="ease-in-sine"
        className='lg:ml-8 xl:ml[135px] flex flex-col items-center
        lg:items-start  lg:text-left justify-center flex-1 px-4 lg:px-0'  >
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none
        mb-6'>
        <span   className='text-violet-700'
        >Rent</span> Your Dream  <br/>House With Us.
        </h1>
        <p className='max-w-[480px] mb-8  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat odit minima tenetur numquam quod sapiente ex molestiae nisi aliquid assumenda.</p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-ends'>
        <img src={Image} alt=""/>
        </div>
      </div>
      <Search />
    </div>
  )
}
