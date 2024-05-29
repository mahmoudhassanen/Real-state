import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import { DataContext } from '../components/HouseContext'
export default function PropertyDropdown() {
  const {  Property , setProperty ,  Properties } =useContext(DataContext)
  const [IsOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='relative  w-full lg:max-w-[296px] cursor-pointer'>
<Menu.Button className='flex h-[64px] items-center px-[18px] border rounded-lg
w-full text-left' onClick={()=> setIsOpen(!IsOpen) }>
<i className=" fa-solid fa-house-user text-xl mr-[18px] text-violet-700"> </i>

<div>
  <div className='text-[15px] font-medium leading-tight' >
    {Property}
  </div>
  <div className='text-[13px]  '>
    Select Your Place
  </div>
 
</div>
{
  IsOpen ? ( 
    <i className="fa-sharp fa-solid fa-chevron-up  text-xl text-violet-700 ml-auto" ></i>
  ) : (
    <i className="fa-solid fa-chevron-down  text-xl text-violet-700 ml-auto"></i>
  )
  }
</Menu.Button>
<Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>

{Properties.map((Property , index) =>
{
return( 
  <Menu.Item className="cursor-pointer hover:text-violet-700 transition" as="li" key={index}
  onClick={()=> setProperty(Property)}>
{Property}
  </Menu.Item>
)
}
) }
</Menu.Items>
    </Menu>
  )
}
