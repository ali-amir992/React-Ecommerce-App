import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {cart} = useSelector((state)=>state)

  return (

    <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto '>

      <NavLink to="/">
        <div className='ml-5'>
          <img src="../logo.png" className='h-14' alt="" />
        </div>
      </NavLink>


      <div className='flex items-center mr-5 text-slate-100 font-medium space-x-6'>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className='relative'>
            <BsCartFill className='text-2xl ' />
            {
              cart.length>0 && <span className='absolute -top-1 -right-2 bg-green-600 flex items-center 
              justify-center text-xs rounded-full text-white animate-bounce w-5 h-5
              '>{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>

    </nav>

  ) 
}

export default Navbar