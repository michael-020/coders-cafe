"use client"
import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect } from 'react'

const Purchase = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    const initAnimation = async () => {
      if (isInView) {
        animate("#left-heading", { opacity: 1, y: 0 }, { type: "spring"})
        animate(".input-up", { opacity: 1, y: 0 }, { type: "spring", delay: 0.2})
        animate(".input-down", { opacity: 1, y: 0 }, { type: "spring", delay: 0.4})
        animate("button", { opacity: 1, y: 0 }, { type: "spring", delay: 0.6})
        animate("img", { opacity: 1, scale: 1 }, { type: "spring", delay: 0.8, ease: "easeIn"})
      }
      else {
        animate("#left-heading", { opacity: 0, y: 90 })
        animate(".input-up", { opacity: 0, y: 90 })
        animate(".input-down", { opacity: 0, y: 90 })
        animate("button", { opacity: 0, y: 90 })
        animate("img", { opacity: 0, scale: 0 })
      }
    }
    initAnimation()
 }, [isInView])

  return (
    <div className='h-[444px] w-screen  mt-16 '>
          <div ref={scope} className='flex px-44 py-12 '>
            {/* left part */}
            <div className='w-1/2 flex flex-col gap-12'>
              <div id='left-heading'>
                <h4 className='text-4xl font-bold font-serif'>Buy our products <br/> from anywhere</h4>
              </div>
              <div className='grid grid-cols-3 gap-2 w-[24rem]'>
                <input type='text' placeholder='Name' className='input-up col-span-1 rounded-md px-3 py-2 border-2 border-gray-300 mb-6' />
                <input type='text' placeholder='Email' className='input-up col-span-2 rounded-md px-3 py-2 border-2 border-gray-300 mb-6 ml-2' />
                <input type='text' placeholder='Country' className='input-down col-span-2 rounded-md px-3 py-2 border-2 border-gray-300 mr-2'/>
                <input type='text' placeholder='Zipcode' className='input-down col-span-1 rounded-md px-3 py-2 border-2 border-gray-300' />
                <button className='w-[24rem] bg-amber-500 py-2 rounded-md mt-6'>Order Now</button>
              </div>
            </div>

            {/* right part */}
            <div>
              <div>
                <img id='world-map' src="world-map.png" width={500} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Purchase