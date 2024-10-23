import React, { useRef } from 'react'
import "./Projects.css"
import project1 from '../../assets/project-1.png'
import { FaShare } from "react-icons/fa";
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
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
      '#projects .section-header .heading-1',
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
      '#projects .projects-container .project',
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
    <section id='projects' ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1"> My Projects
            <span className="hradiend-text"></span>
          </h1>
        </div>
        <div className="projects-container">

           {/*Project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project1} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Real Estate WebSite (Alrawafid)</h3>
              <p className="muted"> 
              Using the MERN stack
               (MongoDB, ExpressJS, ReactJS, NodeJS) for software development,
                I successfully built a comprehensive website for a real estate company,
                 enhancing their online presence and streamlining property management processes.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a href="https://alrawafid-mern.onrender.com/" className="btn primary">View</a>
            </div>
          </div>
          {/*Project end */}
          
          
        </div>
      </div>
    </section>
  )
}

export default Projects
