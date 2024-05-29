import React , {useContext ,useState} from 'react'
import CountryDropdown from '../components/CountryDropdown'
import PropertyDropdown from '../components/PropertyDropdown'
import PriceRangeDropdown from '../components/PriceRangeDropdown'
import {DataContext} from  '../components/HouseContext'

export default function Search() {
  
  let {HandleClick} = useContext(DataContext);
 
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex 
    flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative  
    lg:-top-4 shadow-lg bg-white lg:bg-transparent  rounded-lg backdrop-blur-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={()=> HandleClick()} className='bg-violet-700  hover:bg-violet-800 transition w-full 
      lg:max-w-[162px] h-16 rounded-lg flex justify-center
       items-center text-white text-lg'>
      <i className="fa-sharp fa-solid fa-magnifying-glass"></i>      </button>
    </div>
  )
}
