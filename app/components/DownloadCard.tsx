"use client"
import React from 'react'
import { motion } from 'framer-motion'

const upwardAnimationVariant = {
  hidden: {
    opacity: 0,
    y: 80
  },
  visible: {
    opacity: 1,
    y: 0,
    transition:{
      delay: 0.1,
      type: "spring"
    }
  }
}

const DownloadCard = () => {
  return (
    <div className='h-[444px] w-screen  rounded-lg relative'>
      <div className='sm:grid sm:place-content-center sm:px-28 px-6 rounded-lg'>
        <img src='coffee-cover.png'  className='object-contain md:rounded-3xl rounded-md w-96 sm:w-[50rem] 2xl:w-[80rem] ' />
      </div>
      {/* download section */}
      <div className='w-96 sm:absolute sm:top-2 lg:top-10 2xl:right-[44rem] 2xl:top-20 xl:right-[22rem] sm:right-36  flex-col items-center relative -top-20 sm:gap-5'>
        <div className='text-center flex flex-col  md:gap-5'>
          <motion.h3 className='font-bold sm:text-3xl text-sm 2xl:text-4xl '
            
            variants={upwardAnimationVariant}
            initial="hidden"
            whileInView={"visible"}
          >Download the app</motion.h3>
          <motion.p
            variants={upwardAnimationVariant}
            initial="hidden"
            whileInView={"visible"}
            className='text-[0.5rem] sm:text-base 2xl:text-lg '
          >Lorem ipsum dolor sit amet consedolor sit amet <br /> consectetur adipisicing elit. Officiis</motion.p>
        </div>
        <motion.div className='md:grid md:grid-cols-2 2xl:mt-8 relative left-28 sm:left-0'
          variants={upwardAnimationVariant}
          initial="hidden"
          whileInView={"visible"}
          
        >
          <button>
              <img src='app_store.png' className='w-20 sm:w-full  ' />
          </button>
          <button>
              <img src="play_store.png" className='w-20 sm:w-full' />
          </button>
        </motion.div>
      </div>
    </div>  
  )
}

export default DownloadCard