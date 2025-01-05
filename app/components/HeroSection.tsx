"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar'

const HeroSection = () => {
   
  return (
    <div className='w-screen h-screen overflow-hidden relative '>
        <div className='absolute h-full'>
          <Sidebar />
        </div>
        <div className=''>
            <div className='absolute  h-screen bg-[#1A1F25] w-[50%] z-10'>
            </div>
            <div className='absolute right-0  h-screen bg-[#272C35] w-[50%]'>
            </div>
        </div>
        <div className='grid grid-cols-3 justify-items-center gap-2 items-center relative top-20'>
            {/* left part */}
            <div className='z-20'>
                <div className='relative bottom-24 left-28 sm:bottom-10 sm:left-10'>
                    <motion.h1 id='left-header' className='text-[#F1DABF] lg:text-[4.8rem] font-bold lg:leading-[6rem] relative lg:left-20 lg:top-12 top-32 text-3xl'
                        initial={{
                            opacity: 0,
                            y: -40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: 1,
                            type: "spring"
                        }}
                    >
                        Blvck   <br />
                        Tumbler
                    </motion.h1>
                </div>
                <motion.div id='#left-block'
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1,
                        type: "spring"
                    }}
                >   
                    <div className='bg-[#272C35] lg:h-48 lg:w-64  relative sm:h-32 sm:w-48 left-12 top-24' />
                    <div className='relative lg:left-24 '>   
                        
                        <div className='text-[#F1DABF] z-10'>
                            <h3 className='lg:text-2xl sm:text-md relative lg:-top-20  sm:left-2 sm:bottom-2 text-'>
                                Black Lifestyle Lovers,
                            </h3>
                            <p className='opacity-50 xl:text-sm md:text-xs sm:text-[0.5rem] relative  lg:-top-12  sm:leading-10 sm:left-2'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                Delectus aspernatur, cumque eos neque dolorem <br />
                                architecto deserunt quis voluptatibus in quisquam quia <br />
                                ducimus
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* center image part */}
            <div className='absolute md:relative -bottom-[12rem] sm:-left-2 z-20 sm:top-16 lg:top-2'>
                <motion.img id='coffee-mug' src='black.png' className='sticky [filter:drop-shadow(15px_0px_30px_#000)] h-96 lg:h-[40rem]' 
                    initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{
                        type: "spring",
                        delay: 0.125
                    }}
                />

                
                <motion.div className='sm:h-44 sm:w-44 h-24 w-24 absolute top-12 left-32 sm:left-32 sm:top-9 md:top-20 md:left-54 lg:left-[12rem] xl:top-20 xl:left-56 sm:border-[1.3rem] border-[10px] border-amber-500 rounded-full -z-10' 
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1,
                        type: "spring"
                    }}
                />
            </div>

            {/* right part */}
            <div className=''>   
                <div className='absolute -top-32 right-36 -z-0 lg:left-[39rem] lg:-top-32 2xl:left-[47%] sm:left-[21rem] sm:-top-28'>
                        <motion.h3 id='behind-text' className='lg:text-[11rem] lg:leading-[12rem] sm:text-[7rem] sm:leading-[8rem] font-black text-[#22262F] tracking-tight -z-10'
                            initial={{
                                opacity: 0,
                                y: -40
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 1,
                                type: "spring"
                            }}
                        >
                            BlVCK <br/> Tumbler
                        </motion.h3>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1,
                        type: "spring"
                    }}
                    className='md:block hidden'
                >
                    <div className='bg-[#1A1F25] md:h-48 md:w-64 absolute md:translate-y-24 md:translate-x-28 z-1 sm:h-32 sm:w-48 sm:translate-y-32 sm:translate-x-6 ' />
                    <div className='relative'>   
                        
                        <div className='text-[#F1DABF] z-10 translate-y-28 -translate-x-12'>
                            <h3 className='md:text-2xl md:font-medium sm:text-md relative sm:left-14 sm:top-7'>
                                Blvck Tumbler
                            </h3>
                            <p className='opacity-50 md:text-sm md:translate-y-7 md:leading-7 sm:text-[0.5rem] relative sm:left-12 sm:top-7 text-[2] '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                Delectus aspernatur,Delectus aspernatur, Delectus <br />
                                aspernatur,Delectus aspernatur, 
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection