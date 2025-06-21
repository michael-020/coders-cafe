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
                <div className='relative bottom-24 left-56 sm:bottom-10 sm:left-10 md:-top-32 md:-left-[-7rem]'>
                    <motion.h1 id='left-header' className='text-[#F1DABF] xl:text-[4.7rem] lg:text-[3.5rem] font-bold lg:leading-[4rem] xl:leading-[6rem] relative lg:-left-2 lg:top-9 top-32 text-3xl'
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
                   
                    <div className='relative lg:left-24 top-20 sm:top-28 sm:left-12 '>   
                        <div className='bg-[#272C35] lg:h-48 lg:w-64 sm:block hidden absolute sm:h-32 sm:w-48 left-[30vw] top-24 z-10 sm:left-0 sm:-top-4  lg:-top-24 lg:-left-12 ' />
                        <div className='text-[#F1DABF] sm:w-auto z-10 w-72 space-y-4 lg:space-y-0 relative sm:left-0 left-12 '>
                            <h3 className='lg:text-2xl sm:text-md relative left-[30vw] lg:-top-20 md:left-8 sm:left-14 lg:left-0 sm:bottom-2 text-sm'>
                                Black Lifestyle Lovers,
                            </h3>
                            <p className='opacity-50 xl:text-sm md:text-[0.5rem] sm:text-[0.2rem] text-[0.5rem] relative left-[30vw] lg:-left-0  lg:-top-12 md:leading-4  sm:leading-10 sm:left-14 md:left-8'>
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
            <div className='absolute md:relative -bottom-[27rem] sm:-left-2 z-20 sm:top-16 lg:top-2'>
                <motion.img id='coffee-mug' src='black.png' className='sticky [filter:drop-shadow(15px_0px_30px_#000)] h-96 lg:h-[40rem] cursor-pointer' 
                    initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{
                        type: "spring",
                        delay: 0.125
                    }}
                    whileHover={{
                        scale: 1.03,
                        transition:{
                            type: "spring",
                            stiffness: 180
                          }
                    }}
                />

                
                <motion.div className='sm:h-32 sm:w-32 lg:h-44 lg:w-44 h-24 w-24 absolute top-12 left-32 sm:left-28 sm:top-9 md:left-54 lg:top-20 lg:left-[12rem] xl:top-20 xl:left-56 lg:border-[1.3rem] md:border-[1rem] border-[10px] border-amber-500 rounded-full -z-10' 
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
                <div className='absolute left-36  -z-0 lg:left-[27rem] xl:left-[40rem] lg:-top-32 2xl:left-[47%] sm:left-[21rem] sm:-top-28'>
                        <motion.h3 id='behind-text' className='lg:text-[11rem] lg:leading-[12rem] sm:text-[7rem] sm:leading-[8rem] text-8xl font-black text-[#22262F] tracking-tight -z-10'
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
                    
                    <div className='relative md:left-2 top-20 sm:top-[8.7rem] sm:right-4 xl:top-[12rem] '>      
                        <div className='bg-[#1A1F25] lg:h-48 lg:w-64  absolute sm:h-32 sm:w-48 left-[30vw] top-24 z-10 sm:left-4 sm:-top-4  lg:-top-24 lg:-left-12 xl:left-12' />
                        <div className='text-[#F1DABF] z-10 sm:w-auto w-72 space-y-4 lg:space-y-0 relative -left-12'>
                            <h3 className='lg:text-2xl sm:text-md relative left-[30vw] lg:-top-20 md:left-8 sm:left-14 lg:left-0 sm:bottom-2 text-sm xl:-left-12'>
                                Blvck Tumbler
                            </h3>
                            <p className='opacity-50 xl:text-sm md:text-[0.5rem] sm:text-[0.2rem] text-[0.5rem] relative md:leading-4 left-8  lg:-top-12 lg:leading-4 xl:-left-12 '>
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