import React, { useRef } from 'react'
import "./Footer.css"
import Logo from '../Logo'
import { Link } from 'react-scroll'
import SocialHandles from '../SocialHandles'
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const footerTabs = [
  {
    name: 'Home',
    id: 'hero',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Services',
    id: 'services',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Feedbacks',
    id: 'feedbacks',
  },
  {
    name: 'Blog',
    id: 'blog',
  },
];

const Footer = () => {
  const container = useRef()
  useGSAP( ()=>{
    gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:container.current,
        start:'20% bottom',
        end:'bottom top',
      }
    })
    .fromTo(
      ['footer .logo','footer .footer-tabs','footer .handles-container','footer .copyright'],
      {
        opacity:0,
        y:60,
      },
      {
        opacity:1,
        y:0,
        stagger:0.5,
      }
    )
    
  },{scope:container})
  return (
    <footer ref={container}>
      <div className="container">
      <Logo />
      <div className="flex-center footer-tabs">
      {
          footerTabs.map((tab,index)=>(
            <Link 
            className='flex-center tab'
            to={tab.id} 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            onClick={()=>setOpen(false)}
            key={index}
            >
             <h4> {tab.name}</h4>
            </Link>

          ))
        }
      </div>
      <SocialHandles />
      </div> {/*end container */}

      <div className="flex-center copyright">
        <p className="muted">
          Built with love by Jafar Al Soubeni

        </p>
        <p>Copyright &copy; All rights reserved -| 2024</p>
      </div>
    </footer>
  )
}

export default Footer
