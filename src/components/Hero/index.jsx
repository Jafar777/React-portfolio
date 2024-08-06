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
    <section id='hero' className='flex blur-effect'>
      <div className='container'>
        <div className="column hero-image">
          <img src={hero_image} alt="" />
        </div>
        <div className="column">
          <h1 className='heading-1'>
            Full -
          <span className='gradient-text'>
          Stack Web 
          </span>
            Developer
          </h1>
          <p className='muted description'>
          I am a diligent Information Technology student with two years of experience in web development, specializing in JavaScript, HTML, CSS, ReactJS, and the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). Proficient in GitHub, I create responsive, visually appealing web applications. I stay updated on industry advancements, enjoy coding challenges, and contribute to open-source projects. Seeking a challenging position to apply my skills to innovative web development projects.
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
