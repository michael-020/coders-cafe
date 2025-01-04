"use client"
import { Menu } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className=' pt-10 w-screen overflow-x-hidden'>
        <motion.div
            initial={{
                opacity: 0,
                y: "-2.5rem",
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            className='flex justify-between items-center xl:w-[1240px] lg:w-[980px] md:w-[700px] w-[300px] mx-auto'
            >
            <div className='font-bold text-2xl'>
                <span className='text-amber-500'>CODERS</span> <span className='text-white'>COFFEE.</span>
            </div>
            <button>
                <Menu size={33} color='white' />
            </button>
        </motion.div>
    </nav>
  )
}

export default Navbar