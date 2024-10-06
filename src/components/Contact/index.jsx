import React, { useRef } from 'react'
import "./Contact.css"
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  
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
      ['#contact .contact-options .heading-1','#contact .contact-options .muted','#contact .contact-options .option', '#contact .contact-form .muted', '#contact .contact-form .row' , '#contact .contact-form textarea','#contact .contact-form bottom'],
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
    <section id='contact' ref={container}>
      <div className="container">
        <div className="column contact-options">
          <h1 className="heading-1">
            <span className="gradient-text">Let's work together!</span>
          </h1>
          <p className="muted">
            I'm currently available to take new projects, so feel free to send me a message about anthing you would like to discuss.
            you can contact me anytime , 24/7
          </p>
          <div className="options">
            <a href="mailto:jafaralsoubeni@gmail.com" className="flex option">
              <div className="flex-center icon-wrapper">
                <MdEmail />
              </div>
              <span>jafaralsoubeni@gmail.com</span>
            </a>

            <a href="https://wa.me/966560814556" target="_blank" className="flex option">
              <div className="flex-center icon-wrapper">
              <FaWhatsapp />
              </div>
              <span>+966 560814556</span>
            </a>

            <p className="flex option">
              <div className="flex-center icon-wrapper">
              <FaLocationDot />
              </div>
              <span>Makkah - Saudi Arabia</span>
            </p>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Contact
