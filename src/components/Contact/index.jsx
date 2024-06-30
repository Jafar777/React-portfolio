import React, { useRef } from 'react'
import "./Contact.css"
import { MdEmail } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
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
            <a href="#" className="flex option">
              <div className="flex-center icon-wrapper">
                <MdEmail />
              </div>
              <span>jafaralsoubeni@gmail.com</span>
            </a>

            <a href="#" className="flex option">
              <div className="flex-center icon-wrapper">
              <CiMobile2 />
              </div>
              <span>+966 560814556</span>
            </a>

            <a href="#" className="flex option">
              <div className="flex-center icon-wrapper">
              <FaLocationDot />
              </div>
              <span>Makkah - Saudi Arabia</span>
            </a>
          </div>
        </div>
        <div className="column contact-form">
          <div className="top"> 
            <p className='muted'>
            Need help ? Reach out for any project or inquiries. I am here for you.
            </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input type="text" placeholder='First name' className='control'/>
              <input type="text" placeholder='Last name'  className='control'/>
            </div>
            <div className="flex row">
              <input type="email" placeholder='Email Address' className='control'/>
              <input type="tel" placeholder='Phone number'  className='control'/>
            </div>
            <textarea placeholder='Message' cols={30} rows={10} className='control'></textarea>
          </div>
          <div className="flex-center bottom">
            <button className="btn primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
