import React from 'react'

export default function House( {house}) {
  const {image , type  , country , address , bedrooms , bathrooms , surface , price } = house ;


  return (
   <div className='bg-white shadow-1 p-5 rounded-lg 
   rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer 
   hover:shadow-2xl transition mt-10'>
    <img src={image} alt="" className='mb-6'/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full text-white px-3'>
        {type}
      </div>
      <div className='bg-violet-500 rounded-full text-white px-3'>
        {country}
      </div>
    </div>
    <div className='text-lg  font-semibold max-w-[260px]  '>
      {address}
    </div>
    <div className='flex gap-x-4 my-4 '>
      <div className='flex items-center text-gray-600 gap-2'>
        <div className='text-[15px]'>
        <i className="fa fa-bed" aria-hidden="true"></i>
        </div>
        <div>
          {bedrooms}
        </div>
      </div>
      <div className='flex items-center text-gray-600 gap-2'>
        <div className='text-[15px]'>
        <i className="fa fa-bath" aria-hidden="true"></i>
        </div>
        <div>
          {bathrooms}
        </div>
      </div>
      <div className='flex items-center text-gray-600 gap-2'>
        <div className='text-[15px]'>
        <i className="fa fa-area-chart" aria-hidden="true"></i>
        </div>
        <div>
          {surface}
        </div>
      </div>
      
    </div>
    <div className=' font-semibold  text-lg text-violet-600 mb-4 '>
      {price}
    </div>
   </div>
  )
}
