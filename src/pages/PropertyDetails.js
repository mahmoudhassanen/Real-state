import React from 'react'
import { housesData } from '../Data'
import {Form, Link, useParams} from 'react-router-dom'
 import {BiBed , BiBath , BIArea, BiArea} from 'react-icons/bi'
export default function PropertyDetails() {
const {id} = useParams();
const house = housesData.find((house) => 
{
  return house.id === parseInt(id);
})
console.log(house)
  return (
    <div>
<div className="container mx-auto mb-14 min-h-[800px]">
  <div className=' flex flex-col lg:flex-row lg:items-center 
  lg:justify-between'>
    <div className=''>
      <h2 className='text-2x font-semibold'> {house.name}</h2>
      <h3 className='text-lg mb-4'> {house.address}</h3>

    </div>
    <div className='mb-4 lg:mb-0  flex gab-x-2  text-sm  '>
      <div className='bg-green-500 text-white me-2 rounded-full px-3 '>
        {house.type}
      </div >
      <div className='bg-violet-500 text-white px-3 rounded-full '>
        {house.country}
      </div>
    </div>
    <div className='text-3xl  text-violet-600 font-semibold'> 
     $ {house.price}
    </div>
  </div>
  <div className='flex flex-col items-start gap-8 lg:flex-row '>
    <div className='max-w-[768px]'>
      <div className='mb-8'>
         <img src={house.imageLg} alt=""/>
      </div>
  
    
  
  <div className='flex gap-x-6 text-violet-700 mb-6'>
      <div className='flex gab-x-2 items-center'>
        <BiBed  className='text-2xl'/>
        <div>
          {house.bedrooms}
        </div>
      </div>
      <div className='flex gab-x-2 items-center'>
        <BiBath  className='text-2xl'/>
        <div>
          {house.bathrooms}
        </div>
      </div>
      <div className='flex gab-x-2 items-center'>
        <BiArea className='text-2xl' />
        <div>
          {house.surface}
        </div>
     
      
    </div>
   
      </div>
      <div>
        {house.description}
      </div>
      
    
      </div>
      <div className='flex-1 w-full bg-white mb-8 border border-gray-300
      px-6 py-8 rounded-lg'>
        <div className='flex items-center gap-x-4 mb-8'>
          <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
            <img src={house.agent.image} alt=""/>
          </div>
          <div>
            <div className='font-bold text-lg'>
              {house.agent.name}
              
            </div>
            <Link  to='' className='text-violet-700 text-sm '> View Lisitings</Link>
          </div>
        </div>
        <form className='flex flex-col gap-y-4'>
          <input type="text" className='border border-gray-300 mb-3 focus:border-violet-700 outline-none
          rounded w-full h-14 px-4 text-xs'  placeholder='Name'/>
  <input type="text" className='border border-gray-300 focus:border-violet-700 outline-none
          rounded w-full h-14 px-4 text-xs mb-3' placeholder='Email' />     
              <input type="text" className='border border-gray-300 focus:border-violet-700 outline-none
          rounded w-full h-14 px-4 text-xs mb-3' placeholder='Phone' />
          <textarea  className='border border-gray-300 focus:border-violet-700 
          text-sm resize-none rounded w-full outline-none p-4 h-36 text-gray-400 '
          placeholder='Message' 
          defaultValue='Hello, i am interested in [Moder apartment] '></textarea>
          <div className='flex gab-x-2 '>
            <button className='bg-violet-700 me-3 text-white text-sm w-full hover:text-violet-800 transition 
            p-2 ' > Send Message</button>
            <button className='border border-violet-700  text-violet-700 first-letter:hover:border-violet-500
            w-full transition text-lg  p-3' > Call</button>
          </div>
          
        </form>
      </div>
      </div>
</div>
    </div>
  ) 
}
