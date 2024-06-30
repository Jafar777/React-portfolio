import React from 'react'
import './SocialHandles.css'
import { FaInstagram ,FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


const socialHandles = [
    {
        name:'Instagram',
        icon:<FaInstagram />,
        link:'https://www.instagram.com/j43far01/',
    },
    {
        name:'X',
        icon:<FaXTwitter/>,
        link:'https://x.com/j43far',
    },
    {
        name:'LinkedIn',
        icon:<FaLinkedin/>,
        link:'https://www.linkedin.com/in/jafaralsoubeni/',
    },
]
const SocialHandles = () => {
  return (
    <div className='flex handles-container'>
      {
      socialHandles.map((handle,index)=>(
        <a href={handle.link} target='_blank' className='flex-center icon-wrapper' key={index}>
            {handle.icon}
        </a>
      ))
      }
    </div>
  )
}

export default SocialHandles
