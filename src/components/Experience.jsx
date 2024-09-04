import React from 'react';
import { motion } from "framer-motion"

const experiences = [
  {
    year: "2022-2023",
    title: "Frontend Developer",
    company: "Oasis Infobyte",
    description: "A skilled Frontend Developer with a passion for creating intuitive and visually appealing user interfaces. Proficient in HTML, CSS, and JavaScript, with experience in modern frameworks like React and Angular. Adept at turning design concepts into responsive and interactive web applications, ensuring optimal performance across all devices. Strong problem-solving abilities, attention to detail, and a commitment to delivering seamless user experiences.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    year: "2021-2023",
    title: "Frontend Developer",
    company: "Freelancer",
    description: "Assisted in developing and maintaining front-end features for various web applications. Gained experience in optimizing code for speed and scalability while collaborating with cross-functional teams to enhance user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  }
];

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
       whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
      className='my-20 text-4xl text-center'>Experience</motion.h2>
      {experiences.map((exp, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div 
          whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:-100}}
   transition={{duration:1}}
          className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
          </motion.div>

          <motion.div 
          whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:100}}
   transition={{duration:1}}
          className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{exp.title} - 
              <span className='text-sm text-purple-100'> {exp.company}</span>
            </h6>
            <p className='mb-2 text-neutral-400'>{exp.description}</p>
            <p className='mb-4 text-purple-800'><strong>Technologies:</strong> {exp.technologies.join(', ')}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
