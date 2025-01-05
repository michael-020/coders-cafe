import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebarStore } from '../stores/useSidebarStore';
import { Send } from 'lucide-react';
import { FacebookIcon } from '../icons/FacebookIcon';
import { InstaIcon } from '../icons/InstaIcon';

const Sidebar = () => {
  const { isVisible } = useSidebarStore();

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="sidebar"
          className="sm:w-[165px] w-[100px] absolute top-0 -right-[100vw] h-screen bg-amber-600 shadow-lg pointer-events-auto z-30"
          initial={{
            opacity: 0,
            x: "100%"
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: "100%",
            transition: { 
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
        >

          <div className="h-full">
            <div className='h-full flex flex-col justify-center gap-12 items-center'>
                <div className='w-0.5 h-28 bg-white' ></div>
                <div className='flex flex-col gap-4 cursor-pointer'>
                  <FacebookIcon w='40' h='40' />
                  <InstaIcon w="40" h="40" />
                  <Send color='white' size={35} />
                </div>
                <div className='w-0.5 h-28 bg-white' />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;