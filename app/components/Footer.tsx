"use client"
import { Facebook, Goal, Instagram, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='h-[434px] w-screen bg-gradient-to-r from-amber-500 from-0% via-amber-600 via-30%  to-amber-600 to-90% text-white mt-10'>
      <div className='grid place-content-center pt-16 '>
        {/* grid section */}
        <motion.div className='grid grid-cols-3 gap-24'
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
          <div className='flex flex-col gap-6'>
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
                  <MapPin />
                </div>
                <div>
                Mumbai, Maharashtra
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4 translate-x-14'>
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

          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='text-3xl font-bold'>Follow us</h3>
            </div>
            <div className='flex gap-4'>
              <Facebook />
              <Instagram />
              <Send />
              <Goal />
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
        <div className='w-[79vw] bg-white h-1 mt-12' />

        {/* bottom section */}
        <div>
            <h5 className='text-center mt-10'>Copyright © 2024 Company Name. All rights reserved.</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer