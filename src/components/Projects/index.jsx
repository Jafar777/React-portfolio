import React, { useRef } from 'react'
import "./Projects.css"
import project1 from '../../assets/project-1.png'
import project2 from '../../assets/project-2.jpg'
import project3 from '../../assets/project-3.jpg'
import project4 from '../../assets/project-4.png'
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
          <h1 className="heading-1">
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
              <h3 className="name">Project management dashboard design</h3>
              <p className="muted">Efficiently streamline project oversight with meticulously crafted dashboard designs, ensuring intuitive data visualization and actionable insights for informed decision-making and enhanced project outcomes. 

              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a href="#" className="btn share-btn">
              <FaShare />
              </a>
              <a href="#" className="btn primary">Demo</a>
            </div>
          </div>
          {/*Project end */}
          
           {/*Project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project2} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Files storage cloud app</h3>
              <p className="muted">Enhance organizational efficiency and data accessibility with a robust files storage cloud app, offering secure, scalable, and user-friendly storage solutions tailored to streamline document management and collaboration across platforms.

              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a href="#" className="btn share-btn">
              <FaShare />
              </a>
              <a href="#" className="btn primary">Demo</a>
            </div>
          </div>
          {/*Project end */}
          
           {/*Project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project3} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Task management mobile app </h3>
              <p className="muted">Optimize productivity and collaboration on-the-go with a task management mobile app, featuring intuitive task organization, real-time updates, and seamless team communication, ensuring efficient task tracking and completion across all devices.

              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a href="#" className="btn share-btn">
              <FaShare />
              </a>
              <a href="#" className="btn primary">Demo</a>
            </div>
          </div>
          {/*Project end */}

           {/*Project start */}
           <div className="flex project">
            <div className="picture">
              <img src={project4} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Online payment dashboard</h3>
              <p className="muted">Streamline financial operations with an online payment dashboard, offering comprehensive transaction management, real-time analytics, and secure payment processing, ensuring seamless financial oversight and transactional efficiency.

              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a href="#" className="btn share-btn">
              <FaShare />
              </a>
              <a href="#" className="btn primary">Demo</a>
            </div>
          </div>
          {/*Project end */}
        </div>
      </div>
    </section>
  )
}

export default Projects
