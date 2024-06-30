import React from 'react'
import "./Hero.css"
import hero_image from '../../assets/hero.png'
import { Link } from 'react-scroll'
import Facts from '../Facts'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Hero = () => {
  useGSAP (()=>{
    gsap.timeline({delay:0.5})
    .fromTo(
      '#hero .hero-image',
      {
        scale:0,
      },
      {
        scale:1,
        delay:0.5,
      }
    )
    .fromTo(
      ['#hero .heading-1','#hero .description'],
      {
        x:-20,
        opacity:0, 
      },
      {
        x:0,
        opacity:1, 
        stagger:0.5,
      }
    )
    .fromTo(
      '#hero .facts-container .fact',
      {
        x:50,
        opacity:0,
      },
      {
        x:0,
        opacity:1,
        stragger:0.5,
      }
    )
    .fromTo(
      '#hero .buttons-wrapper .btn',
      {
        x:50,
        opacity:0,
      },
      {
        x:0,
        opacity:1,
        stragger:0.5,
      }
    )
  })
  return (
    <section id='hero'>
      <div className='container'>
        <div className="column hero-image">
          <img src={hero_image} alt="" />
        </div>
        <div className="column">
          <h1 className='heading-1'>
            Creative
          <span className='gradient-text'>
          Junior  Frontend 
          </span>
            Developer
          </h1>
          <p className='muted description'>
          Diligent Information Technology student with two years of hands-on experience in web development, specializing in JavaScript, HTML, and CSS. Proficient in ReactJS and GitHub, with comprehensive knowledge of the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). Adept at creating responsive and visually appealing web pages. Seeking a challenging position where I can leverage my skills to contribute to innovative and dynamic projects.
          </p>
          <Facts />
          <div className="flex-center buttons-wrapper">
            <Link to='projects' smooth={true} className="btn">My Projects</Link>
            <Link to='contact' smooth={true} className="btn primary">Hire me</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
