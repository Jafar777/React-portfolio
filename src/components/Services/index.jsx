import React, { useRef } from 'react'
import "./Services.css"
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Services = () => {
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
      ['#services .section-header .heading-1','#services .section-header .muted'],
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
      '#services .services-container .service',
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
    <section id='services' ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gredient-text">My services</span>
          </h1>
          <p className="muted">I offer a comprehensive range of professional services including thorough research and analysis to inform strategic decisions, detailed wireframing to outline project structures, visually engaging design to enhance user experience and brand identity, intuitive interaction design for optimized user engagement, responsive UI development using modern technologies, and rigorous usability testing to ensure products meet user expectations and needs.</p>
        </div>
        <div className="services-container">
          {/*service start */}

          <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.1</h1>
              <h2 className='title'>Research and Analysis</h2>
            </div>
            <div className="middle">
              <p className="muted">I provide thorough research and analysis to uncover insights that drive strategic decisions.

              </p>
            </div>
            <div className="bottom">
              <a href="#" className="flex-center btn">Explore projects</a>
            </div>
          </div>
          {/*Service end */}

           {/*service start */}
          
           <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.2</h1>
              <h2 className='title'>Wireframe</h2>
            </div>
            <div className="middle">
              <p className="muted">I create detailed wireframes that outline the structure and functionality of your project. </p>
            </div>
            <div className="bottom">
              <a href="#" className="flex-center btn">Explore projects</a>
            </div>
          </div>
          {/*Service end */}

           {/*service start */}
          
           <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.3</h1>
              <h2 className='title'>Visual Design</h2>
            </div>
            <div className="middle">
              <p className="muted">I craft visually engaging designs that enhance user experience and reflect your brand identity. </p>
            </div>
            <div className="bottom">
              <a href="#" className="flex-center btn">Explore projects</a>
            </div>
          </div>
          {/*Service end */}

           {/*service start */}
          
           <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.4</h1>
              <h2 className='title'>Interaction Design</h2>
            </div>
            <div className="middle">
              <p className="muted">I design intuitive and seamless interactions to optimize user engagement and satisfaction. </p>
            </div>
            <div className="bottom">
              <a href="#" className="flex-center btn">Explore projects</a>
            </div>
          </div>
          {/*Service end */}

           {/*service start */}
          
           <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.5</h1>
              <h2 className='title'>UI Development</h2>
            </div>
            <div className="middle">
              <p className="muted">I develop responsive and user-friendly interfaces using cutting-edge technologies. </p>
            </div>
            <div className="bottom">
              <a href="#" className="flex-center btn">Explore projects</a>
            </div>
          </div>
          {/*Service end */}

           {/*service start */}
          
           <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.6</h1>
              <h2 className='title'>Usability Testing</h2>
            </div>
            <div className="middle">
              <p className="muted">I conduct rigorous usability tests to ensure your product meets user needs and expectations. </p>
            </div>
            <div className="bottom">
              <a href="#" className="flex-center btn">Explore projects</a>
            </div>
          </div>
          {/*Service end */}
        </div>
      </div>
    </section>
  )
}

export default Services
