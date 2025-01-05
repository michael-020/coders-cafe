"use client"
import { Menu } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { useSidebarStore } from '../stores/useSidebarStore'

const Navbar = () => {
    const { isVisible, setIsVisible } = useSidebarStore()

  return (
    <nav className='px-24 pt-10 w-full'>
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
            className='flex justify-between items-center xl:w-[1240px] lg:w-[980px] md:w-[700px] w-[300px] max-w-full mx-auto px-4'
            >
            <div className='font-bold text-2xl'>
                <span className='text-amber-500'>CODERS</span> <span className='text-white'>COFFEE.</span>
            </div>
            <button onClick={() => setIsVisible()}>
                <Menu size={33} color='white' />
            </button>
        </motion.div>
    </nav>
  )
}

export default Navbar