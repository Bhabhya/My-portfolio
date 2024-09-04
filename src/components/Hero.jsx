import React from 'react'
import girls from '/images/two.jpeg'; 
import { motion } from "framer-motion"

const container=(delay)=>({
  hidden: {x:-100, opacity:0},
  visible: {
    x:0,
    opacity: 1,
    transition:{duration:0.5, delay:delay},

  }
})

const Hero = () => {
  return (
    <div className='border-b border-900 pb-4 lg:mb-34'>
    <div className='flex flex-wrap'>
    <div className='w-full lg:w-1/2'>
    <div className='flex flex-col items-center lg:items-start pl-10'>
    <motion.h1 
    variants={container(0)}
    initial='hidden'
    animate='visible'
    className='pb-16 text-16xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Bhabhya</motion.h1>
    <motion.span 
     variants={container(0)}
    initial='hidden'
    animate='visible'
    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>

    <motion.p
     variants={container(0)}
    initial='hidden'
    animate='visible'
     className=' font-light tracking-tight'>As a versatile and results-driven Full Stack Developer, I have knowledge in both frontend and backend development, creating robust, scalable web applications. Proficient in a wide range of technologies, including HTML5, CSS3, JavaScript (React), Node.js, Express, and databases like MongoDB , I excel at building seamless, high-performance applications from concept to deployment. My ability to collaborate effectively with cross-functional teams, coupled with a strong understanding of the full software development lifecycle, allows me to deliver solutions that are both technically sound and user-centric. I am committed to writing clean, maintainable code and continuously learning to stay ahead of industry trends.

</motion.p>


</div>
    </div>

    <div className='w-full lg:w-1/2 lg:p-8'>
<div className='flex justify-center'>
<motion.img 
initial={{x:100, opacity:0}}
animate={{x:0, opacity:1}}
transition={{duration:1, delay:1.2}}
src={girls}></motion.img>
</div>

    </div>

    </div>
      
    </div>
  )
}

export default Hero
