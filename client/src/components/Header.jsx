import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
    const {currentUser} = useSelector(state => state.user)
  return (
   <header className='bg-slate-200 shadow-md'> 
   <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-blue-500'>MyHome</span>
        <span className= 'text-blue-700'>Estates</span>
    </h1>
    </Link>
    <form className='bg-slate-50 p-3 rounded-lg flex items-center'>
        <input type="text" 
        placeholder='Search...' 
        className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-blue-700'/>
    </form>
    <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-blue-500 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-blue-500 hover:underline'>About</li>
        </Link>
        <Link to='/profile'>
        {currentUser ? (
            <img className = 'rounded-full max-h-72 w-7 object-cover'src = {currentUser.avatar} alt = "profile" />
        ) : (
            <li className='sm:inline text-blue-500 hover:underline'>Sign In</li>
        )}
        
        </Link>

    </ul>
    </div>
   </header>
  )
}
