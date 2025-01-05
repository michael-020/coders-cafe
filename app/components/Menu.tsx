"use client"
import React, { useEffect } from 'react'
import { MenuItem } from './MenuItem'
import { motion, useAnimate, useInView } from 'framer-motion'



const Menu = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    async function initAnimation() {
      if(!isInView){
        animate("#heading", {opacity: 0, y: 60} )
        animate("#coffee-1", {opacity: 0, y: 60} )
        animate("#coffee-2", {opacity: 0, y: 60} )
        animate("#coffee-3", {opacity: 0, y: 60} )
        animate("p", {opacity: 0, y: 60} )
      }
      else{
        animate("#heading", {opacity: 1, y: 0}, {delay: 0.2, type: "spring"} )
        animate("#coffee-1", {opacity: 1, y: 0}, {delay: 0.2, type: "spring"} )
        animate("#coffee-2", {opacity: 1, y: 0}, {delay: 0.4, type: "spring"} )
        animate("#coffee-3", {opacity: 1, y: 0}, {delay: 0.6, type: "spring"} )
        animate("p", {opacity: 1, y: 0}, {delay: 0.3, type: "spring"} )
      }
    }
    initAnimation()
  }, [isInView])

  return (
    <div className='h-full w-screen px-44 py-12  '>
      <div ref={scope} className=' h-full  flex flex-col items-center gap-5 '>
        {/* heading */}
        <div className='w-56 lg:w-96 flex flex-col items-center -translate-x-4'>
          <h4 id='heading' className='text-center  text-3xl font-bold'>
            <span className=''>Fresh and </span> <span className='text-amber-500'>Tasty coffee</span>
          </h4>
          <div className='w-72 lg:w-[32rem]'>
            <p className='text-center text-sm my-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum <br></br> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.
            </p>
          </div>
         
        </div>
        {/* menu items */}
        <div className='grid grid-cols-1 -translate-x-40 sm:-translate-x-20 lg:-translate-x-16 xl:-translate-x-0 sm:grid-cols-2 sm:gap-x-40 lg:grid-cols-3 gap-16 justify-items-stretch sm:mt-12'>
          <motion.div id='coffee-1' > 
            <MenuItem  imageURL='black-coffee.png' title='Black Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </motion.div>
          <motion.div id='coffee-2' className="relative bottom-2 sm:bottom-12">
            <MenuItem  imageURL='hot-coffee-2.png' title='Hot Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </motion.div>
          <motion.div id='coffee-3'>
            <MenuItem imageURL='cold-coffee.png' title='Cold Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Menu