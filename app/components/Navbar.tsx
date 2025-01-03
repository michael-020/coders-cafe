import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' pt-10 w-screen'>
        <div className='flex justify-between items-center w-[968px] mx-auto'>
            <div className='font-bold text-4xl'>
                <span className='text-amber-500'>Coders</span> <span className='text-white'>Coffee</span>
            </div>
            <button>
                <Menu size={33} color='white' />
            </button>
        </div>
    </nav>
  )
}

export default Navbar