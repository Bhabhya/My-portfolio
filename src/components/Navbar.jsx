import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='mb-20 flex items-center justify-between py-6'>
      <h1 className='text-4xl font-bold pl-10 text-white'>PORTFOLIO</h1>

      <div className='flex gap-4 pr-20 items-center justify-center'>
        <ImLinkedin size={30} />
        <FaGithub size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  )
}

export default Navbar
