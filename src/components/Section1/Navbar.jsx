import React from 'react'
import Searchbar from './searchbar'

const Navbar = ({ search, setSearch }) => {
  return (
    <div className='flex items-center justify-between py-8 px-18 gap-5'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full'>Target Audience</h4>
          <div className="flex-1">
        <Searchbar search={search} setSearch={setSearch} />
      </div>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar
