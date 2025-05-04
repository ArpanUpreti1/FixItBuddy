import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import BookingImage from '../../assets/bgimage.png'
import { motion } from 'framer-motion';

const BookBanner = () => {
  return (
    <section 
      className='min-h-[70vh] relative flex items-center justify-center '
      style={{
        backgroundImage: `url(${BookingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='container py-16 md:py-20 relative z-10'
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center"
        >
          <div className='text-center space-y-6 max-w-[500px] mx-auto px-4'>
            <h1 className='text-3xl md:text-4xl font-bold !leading-snug text-gray-800'>
              Instant Booking for Plumbers & Electricians
            </h1>
            <p className='text-base md:text-lg text-gray-700'>
              Easily book trusted plumbers and electricians near you. Fast response, verified professionals, and reliable service anytime, anywhere in Nepal.
            </p>
            <div className='mt-8 flex justify-center'>
              <a 
                href="" 
                className='border-none bg-amber-400 text-white shadow-lg hover:bg-[#7fc1fa]
                cursor-pointer text-lg md:text-xl py-3 px-6 rounded-xl inline-flex items-center gap-3 group transition-all duration-300'
              >
                Book Now <FaCalendarCheck className='group-hover:animate-bounce duration-200'/>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default BookBanner