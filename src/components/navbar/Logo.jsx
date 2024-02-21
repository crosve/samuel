import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='/' className='hover:text-white '>
      <img src={'catlogo.jpeg'} alt='logo' className='w-20 h-20 rounded-full shadow-md'/>
     
    </Link>

  )
}

export default Logo