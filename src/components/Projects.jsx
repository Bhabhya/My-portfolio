import React from 'react';
import { motion } from "framer-motion"

const PROJECTS = [
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Bootstrap", "React" ],
  },
  {
    title: "Calculator",
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "javascript"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind","Framer motion"],
  },
  {
    title: "Animation website",
    description: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
      className='my-20 text-4xl text-center'>Projects</motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
             whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:-100}}
   transition={{duration:1}}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
