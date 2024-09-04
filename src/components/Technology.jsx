import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {  motion } from "framer-motion"

const iconvariants=(duration)=>({
  intial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:'linear',
      repeat: Infinity,
      repeatType:'reverse',
    }
  }
})

const Technology = () => {
  return (
    <div className='border- b border-neutral-800 pb-24'>
    <motion.h2
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className='my-20 text-center text-4xl'>Technologies</motion.h2>

   <motion.div 
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:-100}}
   transition={{duration:1.5}}
   className="flex flex-wrap items-center justify-center gap-4">

   <motion.div 
   variants={iconvariants(2.5)}
   initial='intial'
   animate='animate'
   className='rounded-2xl border-4 border-neutral-800 p-4'>
    <RiReactjsFill className="text-7xl text-cyan-400"/>
    </motion.div>

    <motion.div 
    variants={iconvariants(3)}
   initial='intial'
   animate='animate'
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <TbBrandNextjs className="text-7xl"/>
    </motion.div>

    <motion.div 
    variants={iconvariants(5)}
   initial='intial'
   animate='animate'
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <BiLogoMongodb className="text-7xl text-green-500"/>
    </motion.div>

    <motion.div 
    variants={iconvariants(4)}
   initial='intial'
   animate='animate'
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <FaNodeJs className="text-7xl text-sky-700"/>
    </motion.div>

    <motion.div 
    variants={iconvariants(4)}
   initial='intial'
   animate='animate'
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <FaHtml5 className="text-7xl text-sky-700"/>
    </motion.div>

    <motion.div 
    variants={iconvariants(4)}
   initial='intial'
   animate='animate'
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <FaCss3Alt className="text-7xl text-sky-700"/>
    </motion.div>

   </motion.div>
      
    </div>
  )
}

export default Technology