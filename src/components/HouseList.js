import React , {useContext, useEffect} from 'react'
import { DataContext } from '../components/HouseContext'
import {Link} from 'react-router-dom'
import House from './House';
import {ImSpinner2} from 'react-icons/im'
import Aos, { init } from 'aos'
export default function HouseList() {
  let {HouseList , Loading } = useContext(DataContext);
console.log(HouseList);
useEffect(() => {
  Aos.init();
}, [])

if(Loading) {
  return (
    <ImSpinner2 className='mx-auto  animate-spin text-4xl text-violet-700
    mt-[200px]'>

    </ImSpinner2>
  )
}
if (HouseList.length < 1 ) {
  return <div className='text-center text-3xl text-gray-400   mt-48'>
    Sorry , Noting Found
  </div> 
    
  
  
}
  return (
    <div className='mb-20 mt-20 '>
      <div className="container mx-auto">
<div className='grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-4 lg:gap-14'
 >
  {HouseList.map((house , index ) => 
 {
return(
    <Link to={`property/${house.id}`} key={index} data-aos="fade-up-right" data-aos-offset="300"
    data-aos-easing="ease-in-sine">
  <House house={house} />
       </Link>
)}
  )}
</div>
      </div>
      
    </div>
  )
}
