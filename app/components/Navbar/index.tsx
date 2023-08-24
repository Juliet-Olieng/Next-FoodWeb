import React from "react";
export default function NavBar(){
    return(
        <div className=' text-red py-4 flex items-center justify-between px-4'>
      <h2 className='text-2xl font-semibold'>Foodie</h2>
      <ul className='flex list-none m-0 p-0'>
        <li className='mr-4'><a href="" className='text-gray-400 font-bold no-underline'>Home</a></li>
        <li className='mr-4'><a href="" className='text-gray-400 font-bold no-underline'>Offer</a></li>
        <li className='mr-4'><a href="" className='text-gray-400 font-bold no-underline'>Service</a></li>
        <li className='mr-4'><a href="" className='text-gray-400 font-bold no-underline'>Menu</a></li>
        <li className='mr-4'><a href="" className='text-gray-400 font-bold no-underline'>About</a></li>
      </ul>
      <h4 className='text-lg font-semibold'>Login</h4>
      <button className='bg-orange-500 text-white py-2 px-4 rounded cursor-pointer'>
        Sign up
      </button>
    </div>
    )
}