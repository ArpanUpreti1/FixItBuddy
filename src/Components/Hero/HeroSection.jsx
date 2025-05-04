import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import image from '../../assets/heroimage.svg'
import Header from './Header';
import { motion } from 'framer-motion'; 

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50, 
        damping: 10, 
        duration: 1.2, 
        delay: delay, 
        ease: "easeInOut"
      }
    }
  }
}

const HeroSection = () => {
  return (
   <section className='bg-[#F7F7F7] overflow-hidden relative px-10'>
    <Header/>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
      {/* Brand Slogan */}
      <div className='flex flex-col justify-center py-10 px-10 md:py-0 relative z-20'>
        <div className='text-center md:text-left space-y-10 lg:max-w-[600px] xl:max-w-[700px]'>
          <motion.h1 
          variants={FadeUp(0.3)}
          initial="initial"
          animate="animate"
          className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug'>
            <span className='text-[#7fc1fa]'>
              Expert  
            </span> Electrical and Plumbing Always Ready.
          </motion.h1>
          <motion.button 
          variants={FadeUp(0.6)}
          initial="initial"
          animate="animate"
          className='border-none bg-amber-400 text-white shadow-2xl hover:bg-[#7fc1fa]
            cursor-pointer text-xl lg:text-2xl py-3 px-4 rounded-xl flex gap-2 justify-center items-center mt-10 group w-[200px]'>
            Get Started
            <FaArrowRightLong className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300'/>
          </motion.button>
        </div>
      </div>
      {/* Hero image */}
      <div className='flex items-center justify-end'>
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }
          }}
          src={image} 
          alt="Electrical and Plumbing Services" 
          className='w-[400px] xl:w-[700px] relative z-10 md:mr-0 lg:mr-0 xl:-mr-10 drop-shadow-xl'
        />
      </div>
    </div>
   </section>
  )
}

export default HeroSection