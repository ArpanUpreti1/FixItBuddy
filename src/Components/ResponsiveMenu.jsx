import { motion,AnimatePresence } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence>
      {open &&(
        <motion.div
          initial={{opacity:0,translateY:-50}}
          animate={{opacity:1,translateY:0}}
          exit={{opacity:0,translateY:-50}}
          transition={{duration:0.2}}
          className='fixed top-20 left-0 w-full h-[40vh] bg-black/80 z-[10] flex items-center justify-center
          rounded-xl'
        >
        <div className='text-xl font-semibold font-poppins py-10 rounded-xl'>
          <ul className='flex flex-col gap-10 text-white'>

            <li>
              HOME
            </li>
            <li>
              SERVICES
            </li>
            <li>
              PRICING
            </li>
            <li>
              CONTACT
            </li>
          </ul>
        </div>
        </motion.div>
        
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu
