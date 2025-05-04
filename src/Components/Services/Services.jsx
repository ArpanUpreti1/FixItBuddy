import { delay } from 'framer-motion'
import React from 'react'
import { MdOutlineEmergencyShare } from "react-icons/md";
import { GiToolbox } from "react-icons/gi";
import { RiToolsFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { BiWater } from "react-icons/bi";
import { div } from 'framer-motion/client';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Emergency Repairs",
      link: "#",
      icon: <MdOutlineEmergencyShare />,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Installation Services",
      link: "#",
      icon: <GiToolbox />,
      delay: 0.3,
    },
    {
      id: 3,
      title: "Maintenance Packages",
      link: "#",
      icon: <RiToolsFill />,
      delay: 0.4,
    },
    {
      id: 4,
      title: "Smart Home Setup",
      link: "#",
      icon: <AiOutlineHome />,
      delay: 0.5,
    },
    {
      id: 5,
      title: "Wiring and Rewiring",
      link: "#",
      icon: <FiRefreshCw />,
      delay: 0.6,
    },
    {
      id: 6,
      title: "Leak Detection & Pipes",
      link: "#",
      icon: <BiWater />,
      delay: 0.7,
    },
  ];
  const SlideLeft = (delay) => {
    return {
      initial: {
        opacity: 0,
        x: -50
      },
      animate: {
        opacity: 1,
        x: 0,
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
  return (
    <section className='bg-white py-[5vw] px-10'>
      <div>
        <h1 className='text-4xl font-bold text-left pb-10 '>
          Services we provide
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-8'>
          {
              services.map((service)=>(
                <motion.div
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: false, amount: 0.2 }}
                className='bg-[#f4f4f4] rounded-2xl flex items-center flex-col gap-4 justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl cursor-pointer
                
                '
                >
                  <div className='text-4xl mb-4 flex items-center justify-center flex-col gap-7'>
                    {service.icon}
                    <h1 className='text-lg font-semibold text-center px-3'>{service.title}</h1>

                  </div>
                </motion.div>
              ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Services
