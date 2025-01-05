"use client"
import { Menu } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { useSidebarStore } from '../stores/useSidebarStore'

const Navbar = () => {
    const { setIsVisible } = useSidebarStore()

  return (
    <nav className='sm:px-24 pt-10 w-full ml-3 '>
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
            className='flex justify-between items-center 2xl:w-[1500px] 2xl:space-x-[35rem] xl:w-[1240px] lg:w-[980px] md:w-[700px] w-[270px] max-w-full mx-auto px-4'
            >
            <div className='font-bold text-2xl sm:relative absolute right-14'>
                <span className='text-amber-500'>CODERS</span> <span className='text-white'>COFFEE.</span>
            </div>
            <button onClick={() => setIsVisible()} className='sm:relative absolute -right-8 xss:-right-12 xs:-right-24 sm:right-0'>
                <Menu size={33} color='white' />
            </button>
        </motion.div>
    </nav>
  )
}

export default Navbar