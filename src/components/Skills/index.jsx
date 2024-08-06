import React, { useRef } from 'react'
import "./Skills.css"
import htmlcssLogo from '../../assets/htmlcss.png'
import JavascriptLogo from '../../assets/Javascript.png'
import ReactLogo from '../../assets/React.png'
import nodejsLogo from '../../assets/nodejs.png'
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
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
      ['#skills .section-header .heading-1','#skills .section-header .muted'],
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
    .fromTo(
      '#skills .skills-container .skill',
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
    <section id='skills' className='blur-effect' ref={container}>
      <div className='container'>
        <div className="section-header">
          <h1 className="heading-1 gradient-text">
            My Skills
          </h1>
        </div>
        <div className="skills-container">
          {/*skills start */}
          <div className="flex skill">
            <div className="gray-scale image">
              <img src={htmlcssLogo} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Html&Css</h3>
            </div>
          </div>
            {/*skill end */}

            {/*skills start */}
          <div className="flex skill">
            <div className="gray-scale image">
              <img src={nodejsLogo} alt="" />
            </div>
            <div className="details">
              <h3 className="name">NodeJs</h3>
            </div>
          </div>
            {/*skill end */}

            {/*skills start */}
          <div className="flex skill">
            <div className="gray-scale image">
              <img src={JavascriptLogo} alt="" />
            </div>
            <div className="details">
              <h3 className="name">JavaScript</h3>
            </div>
          </div>
            {/*skill end */}

            {/*skills start */}
          <div className="flex skill">
            <div className="gray-scale image">
              <img src={ReactLogo} alt="" />
            </div>
            <div className="details">
              <h3 className="name">ReactJS</h3>
            </div>
          </div>
            {/*skill end */}

        </div>
      </div>
    </section>
  )
}

export default Skills
