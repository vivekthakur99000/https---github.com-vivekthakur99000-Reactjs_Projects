import React from 'react'

function NavBar() {
  return (
    <div className=' max-w-full h-[70px] bg-blue-200 flex justify-between items-center px-20'>
        <h3 className='text-2xl font-mono font-extrabold'>News App</h3>
        <ul className=' flex justify-center items-center gap-5 cursor-pointer'>
            <li className=' font-bold font-serif text-md'>Home</li>
            <li className=' font-bold font-serif text-md'>Politics</li>
            <li className=' font-bold font-serif text-md'>Cricket</li>
            <li className=' font-bold font-serif text-md'>Technology</li>
        </ul>
        <div className="search-bar flex justify-center items-center gap-6">
            <input type="text" className=' outline-none rounded-lg pl-6 h-10 text-xl'/>
            <button className=' bg-[#232323]  text-white px-5 py-2 rounded-xl '>Search</button>
        </div>
    </div>
  )
}

export default NavBar
