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
      <div className='grid place-content-center px-28 rounded-lg'>
        <img src='coffee-cover.png'  className='object-contain rounded-3xl' />
      </div>
      {/* download section */}
      <div className='w-96 absolute top-28 right-56 flex flex-col gap-5'>
        <div className='text-center flex flex-col gap-5'>
          <motion.h3 className='font-bold text-3xl'
            
            variants={upwardAnimationVariant}
            initial="hidden"
            whileInView={"visible"}
          >Download the app</motion.h3>
          <motion.p
            variants={upwardAnimationVariant}
            initial="hidden"
            whileInView={"visible"}
          >Lorem ipsum dolor sit amet consedolor sit amet <br /> consectetur adipisicing elit. Officiis</motion.p>
        </div>
        <motion.div className='grid grid-cols-2'
          variants={upwardAnimationVariant}
          initial="hidden"
          whileInView={"visible"}
          
        >
          <button>
              <img src='app_store.png' />
          </button>
          <button>
              <img src="play_store.png" />
          </button>
        </motion.div>
      </div>
    </div>  
  )
}

export default DownloadCard