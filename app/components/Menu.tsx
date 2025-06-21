"use client"
import React from 'react'
import { MenuItem } from './MenuItem'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } }
}

const Menu = () => {

  return (
    <div className='h-full w-screen px-44 py-12  '>
      <div className=' h-full  flex flex-col items-center gap-5 '>
        {/* heading */}
        <motion.div 
          className='w-56 lg:w-96 flex flex-col items-center -translate-x-4'
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}  
        >
          <h4 className='text-center  text-3xl font-bold'>
            <span className=''>Fresh and </span> <span className='text-amber-500'>Tasty coffee</span>
          </h4>
          <div className='w-72 lg:w-[32rem]'>
            <p className='text-center text-sm my-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum <br></br> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.
            </p>
          </div>
         
        </motion.div>
        {/* menu items */}
        <div className='grid grid-cols-1 -translate-x-40 xs:-translate-x-[6.8rem] xss:-translate-x-[7.9rem] sm:-translate-x-20 lg:-translate-x-16 xl:-translate-x-0 sm:grid-cols-2 sm:gap-x-40 lg:grid-cols-3 gap-16 justify-items-stretch sm:mt-12'>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}  
          > 
            <MenuItem  imageURL='black-coffee.png' title='Black Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}  
          className="relative bottom-2 sm:bottom-12">
            <MenuItem  imageURL='hot-coffee-2.png' title='Hot Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}  
          >
            <MenuItem imageURL='cold-coffee.png' title='Cold Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Menu