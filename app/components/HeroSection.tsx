"use client"
import React, { useEffect } from 'react'
import { useAnimate, motion } from 'framer-motion'

const HeroSection = () => {
    const [scope, animate] = useAnimate()

    // useEffect(() => {
    //     async function initialAnimation() {
    //         await animate("#left-header", {opacity: 0, y: -40})
    //         // await animate("#left-block", {opacity: 0, y: -40})
    //         // await animate("#right-header", {opacity: 0, y: -40})
    //         // await animate("#right-header", {opacity: 0, y: -40})
    //         await animate("#coffee-mug", {scale: 0, opacity: 0})
    //         await animate("#coffee-mug", {scale: 1, opacity: 1}, {ease: "easeIn", type: "spring"})
    //         await animate("#left-header", {opacity: 1, y: 0}, { duration: 0.24})
    //         // await animate("#left-block", {opacity: 1, y: 0}, { duration: 0.24})
    //     }
    //     initialAnimation()
    // }, [])

  return (
    <div className='w-screen h-screen overflow-x-hidden relative '>
        <div className=''>
            <div className='absolute  h-screen bg-[#1A1F25] w-[50%] z-10'>

            </div>
            <div className='absolute right-0  h-screen bg-[#272C35] w-[50%]'>

            </div>
        </div>
        <div ref={scope} className='grid grid-cols-3 justify-items-center gap-2 items-center relative top-20'>
            {/* left part */}
            <div className='z-20'>
                <div className='relative bottom-24 left-28'>
                    <motion.h1 id='left-header' className='text-[#F1DABF] text-[4.8rem] font-bold leading-[6rem]'
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
                    <div className='bg-[#272C35] h-48 w-64 absolute ' />
                    <div className='relative'>   
                        
                        <div className='text-[#F1DABF] z-10'>
                            <h3 className='text-2xl font-medium relative top-5 left-8'>
                                Black Lifestyle Lovers,
                            </h3>
                            <p className='opacity-50 text-sm relative top-10 left-8 leading-7'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                Delectus aspernatur, cumque eos neque dolorem <br />
                                architecto deserunt quis voluptatibus in quisquam quia <br />
                                ducimus
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* <div className='bg-[#1A1F25] h-96 w-40 absolute -top-[12vh] left-[38.4vw] z-10' /> */}
            {/* center image part */}
            <div className='relative -left-2 z-20'>
                <motion.img id='coffee-mug' src='black.png' className='sticky' 
                    initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{
                        type: "spring",
                        delay: 0.125
                    }}
                />
                {/* <img src='black.png'  className='absolute top-10 hidden'/> */}
                
                <motion.div className='h-44 w-44 absolute top-24 left-56 border-[1.3rem] border-amber-500 rounded-full -z-10' 
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
                <div className='absolute -top-32 right-36 -z-0'>
                        <motion.h3 className='text-[11rem] leading-[12rem] font-black text-[#22262F] tracking-tight -z-10'
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
                >
                    <div className='bg-[#1A1F25] h-48 w-64 absolute translate-y-24 translate-x-28 z-1' />
                    <div className='relative'>   
                        
                        <div className='text-[#F1DABF] z-10 translate-y-28 -translate-x-12'>
                            <h3 className='text-2xl font-medium'>
                                Blvck Tumbler
                            </h3>
                            <p className='opacity-50 text-sm translate-y-7 leading-7'>
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