"use client"
import { motion } from 'framer-motion'
import React from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } }
}

const Purchase = () => (
  <div className='h-full w-screen -translate-x-10 sm:-translate-x-20 lg:-translate-x-0 2xl:translate-x-[36rem] '>
    <div className='flex flex-col lg:flex-row items-center 2xl:-space-x-[32rem] sm:px-44 sm:pb-6 lg:-mt-8 sm:-mt-32 -mt-[41rem]'>
      {/* left part */}
      <motion.div
        className='w-1/2 flex flex-col gap-12'
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div id='left-heading'>
          <h4 className='lg:text-4xl text-2xl font-bold font-serif'>Buy our products <br/> from anywhere</h4>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 sm:w-[24rem] w-[16rem]  '>
          <input type='text' placeholder='Name' className='input-up sm:col-span-1 rounded-md sm:px-3 sm:py-2 p-1  border-2 border-gray-300 sm:mb-6' />
          <input type='text' placeholder='Email' className='input-up sm:col-span-2 rounded-md sm:px-3 sm:py-2 p-1 border-2 border-gray-300 sm:mb-6 sm:ml-2' />
          <input type='text' placeholder='Country' className='input-down sm:col-span-2 rounded-md sm:px-3 sm:py-2 p-1 border-2 border-gray-300 sm:mr-2'/>
          <input type='text' placeholder='Zipcode' className='input-down sm:col-span-1 rounded-md sm:px-3 sm:py-2 p-1 border-2 border-gray-300' />
          <motion.button className='sm:w-[24rem] w-[16rem] bg-amber-500 py-2 rounded-md mt-6'
            whileHover={{
              scale: 1.08
            }}
            whileTap={{
              scale: 0.9
            }}
          >Order Now</motion.button>
        </div>
      </motion.div>

      {/* right part */}
      <motion.div
        className=' lg:translate-x-20 sm:translate-x-20 xl:translate-x-0 translate-x-10 lg:mt-0 mt-12'
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <motion.img id='world-map' src="world-map.png"  className='lg:w-[500px] 2xl:w-[550px] sm:w-[400px] w-[280px]' 
            whileHover={{
              scale: 1.2
            }}
            transition={{
              type: "spring",
              stiffness: 180
            }}
          />
        </div>
      </motion.div>
    </div>
  </div>
)

export default Purchase