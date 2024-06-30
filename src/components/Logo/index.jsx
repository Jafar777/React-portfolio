import React from 'react'
import './Logo.css'
// for a diamond logo >> import { FaSketch } from "react-icons/fa";
 import { FaReact } from "react-icons/fa";

const Logo = () => {
  return (
    <div className='flex-center logo'>
      <div className="flex-center logo-icon">
        <FaReact />
      
      </div>
      <h1 className='name'> Developer</h1>
    </div>
  )
}

export default Logo
/* for a diamond logo >> <FaSketch/>*/