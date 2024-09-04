import React from 'react'
import about from '/images/working.jpeg';
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b  border-neutral-900 pb-4'>
    <h2 className='my-20 text-center text-6xl'> About <span className='text-neutral-500'>Me</span></h2>

    <div className='flex flex-wrap'>
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:0.5}}
    className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex items-center justify-center'>
    <img src={about} className='rounded-2xl'></img>
    </div>
    </motion.div>

    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0, x:100}}
    transition={{duration:0.5}}
    className='w-full lg:w-1/2'>
    <div className='flex justify-center lg:justify-start'>
    <p className='p-10'>I am a Full Stack Developer but I am a passionate and detail-oriented Frontend Developer, I specialize in creating responsive, user-friendly web interfaces using modern technologies like HTML5, CSS3, and JavaScript (including frameworks such as React ,Tailwind, Bootstrap, Framer motion). With a strong eye for design and a commitment to clean, efficient code, I excel at translating complex requirements into intuitive, high-performance web applications. My experience includes college competions, Hackthons , Freelancing projects collaborating closely with cross-functional teams to deliver seamless user experiences, optimizing websites for speed and accessibility, and staying up-to-date with the latest industry trends and best practices.</p>

    </div>
    </motion.div>

    </div>
      
    </div>
  )
}

export default About
