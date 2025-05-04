import React from 'react'
import BannerImg from '../../assets/banner.svg'
import { BsShieldCheck } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";


import { FadeUp } from '../Hero/HeroSection';
import { motion } from 'framer-motion'; 

const Banner = () => {
  return (
    <section>
        <div className="container py-14 md:py-24 grid grid-col-1 md:grid-cols-2 gap-8 sapce-y-6 md:space-y-0">

            {/* Banner Image */}
            <div className='flex items-center justify-center'>

                <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}v
                src={BannerImg} 
                className='w-[350px] md:max-w-[450px] object-cover drop-shadow'
                alt="" srcset="" />
            </div>
            {/* Banner text */}
            <div className='flex felx-col items-center justify-center'>
                <div className='text-center md:text-left space-y-12'>
                    <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}}
                    className='text-3xl md:text-4xl font-bold !leading-snug'>
                    <span className='text-[#7fc1fa]'>Nepal’s</span> #1 booking app for plumbers and electricians.
                    </motion.h1>
                    <div className='flex flex-col gap-6'>
                        <motion.div
                        variants={FadeUp(0.2)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl shadow-lg hover:shadow-2xl duration-300 cursor-pointer'>
                            <BsShieldCheck className='text-2xl'/>
                            <p className='text-lg'>500+ Verified Technicians</p>
                        </motion.div>


                        <motion.div
                        variants={FadeUp(0.4)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl shadow-lg hover:shadow-2xl duration-300 cursor-pointer'>
                            <MdOutlineAccessTime className='text-2xl'/>
                            <p className='text-lg'>24/7 Emergency Support</p>
                        </motion.div>
                        <motion.div
                        variants={FadeUp(0.6)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: false, amount: 0.2 }}
                        className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl shadow-lg hover:shadow-2xl duration-300 cursor-pointer'>
                            <FaRegThumbsUp className='text-2xl'/>
                            <p className='text-lg'>5,000+ Successful Bookings</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
