import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/img/logo.svg"
export default function Header() {
  return (
    <div className='py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center" >
        <Link to="/"> <img src={Logo} alt=""/></Link>
        <div className='flex  items=center gap-6'>
          <Link to='' className='hover:text-violet-900 transition m-2 '> Log in</Link>
          <Link to='' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition' > Sign Up</Link>

        </div>
      </div>
    </div>
  )
}
