import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Menu, X} from 'lucide-react'

function NavLinks() {
  return (
        <>
          <NavLink to='/about' className='text-lg hover:text-white'>About</NavLink>
          <NavLink to='/reviews' className='text-lg  hover:text-white'>Reviews</NavLink>
          <NavLink to='/contact' className='text-lg  hover:text-white'>Contact</NavLink>
        </>
  )
}

const Nav = () =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () =>{
    setIsOpen(!isOpen);
  }


  return(
    <>
    <nav className='w-1/3 flex justify-end'>
      <div className='hidden md:flex justify-between w-full'>
        <NavLinks/>
      </div>

      <div className='md:hidden '>
        <button onClick={toggleNavbar}>
          {isOpen ? <X/> : <Menu/> }

        </button>
      </div>
    </nav>
          {isOpen && 
            <div className='flex flex-col basis-full items-center'>
              <NavLinks/>
            </div>
          
          }
      </>
  )
}

export default Nav;

