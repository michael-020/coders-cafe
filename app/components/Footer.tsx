"use client"
import {  Goal, Map, Phone, Send } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { FacebookIcon } from '../icons/FacebookIcon'
import { InstaIcon } from '../icons/InstaIcon'

const Footer = () => {
  return (
    <div className='h-full w-screen bg-gradient-to-r from-amber-500 from-0% via-amber-600 via-30%  to-amber-600 to-90% text-white mt-10'>
      <div className='grid place-content-center pt-16 w-3/4 mx-auto -mt-80 sm:-mt-44 2xl:mt-16 '>
        {/* grid section */}
        <motion.div className='grid lg:grid-cols-3 grid-cols-1 gap-24 '
          initial={{
            opacity: 0,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            // duration: 2,
            type: "spring",
            stiffness: 150
          }}
        >
          <div className='flex flex-col gap-6 w-3/4 lg:w-full '>
            <div>
              <h3 className='text-3xl font-bold'>CODERS CAFE</h3>
            </div>
            <div>
              <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Eum ea ratione quidem libero, <br />
              praesentium ab atque? Quidem maxime, <br />
              numquam dolores
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex gap-2'>
                <div>
                  <Phone />
                </div>
                <div>
                +1 (123) 456-7890
                </div>
              </div>
              <div className='flex gap-2'>
                <div>
                  <Map />
                </div>
                <div>
                Mumbai, Maharashtra
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4 lg:translate-x-8 w-3/4 lg:w-full '>
            <div>
            <h3 className='text-3xl font-bold'> Quick Links </h3>
            </div>
            <div className='flex flex-col gap-2 text-md font-semibold opacity-75'>
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">Contact Us</div>
              <div className="cursor-pointer">Privacy Policy</div>
            </div>
          </div>

          <div className='flex flex-col gap-6  w-3/4 lg:w-full'>
            <div>
              <h3 className='text-3xl font-bold'>Follow us</h3>
            </div>
            <div className='flex gap-4 items-center cursor-pointer'>
              <FacebookIcon w='30' h='30' />
              <InstaIcon w='30' h='30' />
              <Send size={26} />
              <Goal size={28} />
            </div>
            <div className='flex gap-3 flex-col'>
              <div>
                <h4 className='text-xl font-bold'>Payment Methods</h4>
              </div>
              <div>
                <img src='credit-cards.webp' width={300}/>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* hr */}
        <div className='lg:w-[79vw] bg-white h-0.5 w-[95%] mx-auto mt-12' />

        {/* bottom section */}
        <div>
            <h5 className='text-center mt-10 mb-6'>Copyright © 2024 Company Name. All rights reserved.</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer