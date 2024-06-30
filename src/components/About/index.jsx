import React from 'react'
import "./About.css"
import introVideo from "../../assets/video.mp4"
import { useState ,useRef} from "react"
import { FaTimes } from 'react-icons/fa'
import amazonLogo from '../../assets/logos/amazon.png'
import facebookLogo from '../../assets/logos/facebook.png'
import googleLogo from '../../assets/logos/google.png'
import linkedinLogo from '../../assets/logos/linkedin.png'
import microsoftLogo from '../../assets/logos/microsoft.png'
import netflixLogo from '../../assets/logos/netflix.png'
import paypalLogo from '../../assets/logos/paypal.png'
import samsungLogo from '../../assets/logos/samsung.png'
import skypeLogo from '../../assets/logos/skype.png'
import whatsappLogo from '../../assets/logos/whatsapp.png'
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const [openVideo,setOpenVideo] = useState(false)
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
      ['#about .section-header .sub-title' , '#about .section-header .heading-1', '#about .section-header .muted'],
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
      ['#about .section-header .readmore-btn' ,'#about .section-header .play-btn'],
      {
        opacity:0,
        x:-100,
      },
      {
        opacity:1,
        x:0,
        stagger:0.5,
      }

    )
    .fromTo(
      '#about .brands-container',
      {
        opacity:0,
        x:100,
      },
      {
        opacity:1,
        x:0,
      
      }
    )
    .fromTo(
      '#about .education-experience-container .heading-1',
      {
        opacity:0,
        x:100,
      },
      {
        opacity:1,
        x:0,
        stagger:0.5,
      
      }
    )
    .fromTo(
      '#about .education-experience-container .contents',
      {
        opacity:0,
        x:100,
      },
      {
        opacity:1,
        x:0,
        stagger:0.5,
      
      }
    )
  },{scope:container})

  return (
    <section id='about'>
      <div className="container">
        <div className="section-header">
          <h3 className="sub-title primary">
            About Me
          </h3>
          <h1 className="heading-1">
            I am Jafar <span className="primary">Al Soubeni</span>
          </h1>
          <p className="muted">
          Greetings. I am an ardent Information Technology student with two years of rigorous, hands-on experience in web development. My expertise encompasses JavaScript, HTML, CSS, and ReactJS, complemented by a thorough understanding of the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).

          Throughout my academic and professional journey, I have cultivated a meticulous attention to detail and a deep-seated passion for crafting responsive and aesthetically pleasing web applications. My proficiency in GitHub facilitates efficient version control and seamless collaboration within team environments.

          I am committed to continuous professional development and remain abreast of the latest advancements in the field. I thrive in challenging settings that allow me to apply my technical acumen to innovative projects, thereby contributing to impactful and transformative solutions.

          In addition to my technical pursuits, I am an avid explorer of emerging technologies, regularly engaging in coding challenges and contributing to open-source projects. I am eager to leverage my skills and enthusiasm in contributing to pioneering web development initiatives.
          </p>
          <div className="flex-center buttons-wrapper">
            <a href="#" className="btn primary readmore-btn">Read More</a>
            <div className="video-cluster">
              <div className={`flex-center play-btn ${openVideo ? 'active':''}`}>
                <div className="flex-center play" onClick={()=>setOpenVideo(!openVideo)}></div>
                <p>Play My Video</p>
              </div>
              <div className={`video-container ${openVideo ? 'active' : ''}`}>
                <div className="video-clip">
                  <div className="btn primary close-btn" onClick={()=>setOpenVideo(!openVideo)}>
                    <FaTimes />
                  </div>
                  <video src={introVideo} controls></video>
                </div>
              </div>
            </div>
          </div>
        </div> {/* end section-header */}

        <div className="brands-container">
          <div className="logos-slide gray-scale">
            <img src={amazonLogo} alt="" />
            <img src={facebookLogo} alt="" />
            <img src={googleLogo} alt="" />
            <img src={linkedinLogo} alt="" />
            <img src={microsoftLogo} alt="" />
            <img src={netflixLogo} alt="" />
            <img src={paypalLogo} alt="" />
            <img src={samsungLogo} alt="" />
            <img src={skypeLogo} alt="" />
            <img src={whatsappLogo} alt="" />
          </div>
          <div className="logos-slide gray-scale">
            <img src={amazonLogo} alt="" />
            <img src={facebookLogo} alt="" />
            <img src={googleLogo} alt="" />
            <img src={linkedinLogo} alt="" />
            <img src={microsoftLogo} alt="" />
            <img src={netflixLogo} alt="" />
            <img src={paypalLogo} alt="" />
            <img src={samsungLogo} alt="" />
            <img src={skypeLogo} alt="" />
            <img src={whatsappLogo} alt="" />
          </div>
        </div>
        
        <div className="education-experience-container">
          <div className="column">
            <h2 className="gradient-text heading-1">Education </h2>
              <div className="contents">
                <div className="box">
                  <h4>2016 - 2019</h4>
                  <h3>High School Degree</h3>
                  <p>I completed my high school education at Anas bin Moaz School in Makkah, Saudi Arabia, where I developed a strong academic foundation and honed my skills in various disciplines.</p>
                </div>
              

              <div className="box">
                  <h4>2019 - 2021</h4>
                  <h3>Bachelor's Degree</h3>
                  <p>I pursued a degree in Software Engineering at the International University for Science and Technology for three years. However, due to relocation to Saudi Arabia, I did not complete the degree.</p>
                </div>

                <div className="box">
                  <h4>2022 - expected 2026</h4>
                  <h3>Bachelor's Degree</h3>
                  <p>Pursuing a degree in Information Technology through the Syrian Virtual University, an esteemed institution known for its rigorous online education programs. This mode of study has allowed me to develop strong self-discipline, time management skills, and a deep understanding of various IT concepts and technologies.</p>
                </div>
                </div>

           
          </div>
          <div className="column">
            <h2 className="gradient-text heading-1">Experience </h2>
            <div className="contents">

                  <div className="box">
                    <h4>2019 - 2021</h4>
                    <h3>Information Technology Technician</h3>
                    <p>As an Information Technology Technician, where I am responsible for maintaining and optimizing the IT infrastructure of the organization
                    </p>
                  </div>

                  <div className="box">
                    <h4>2023 - 2024</h4>
                    <h3>Frontend developer</h3>
                    <p>As a Frontend Developer, I specialize in creating intuitive and visually compelling user interfaces. My role encompasses the use of cutting-edge technologies such as JSX ,JavaScript, and ReactJS to build responsive and dynamic web applications. 
                    </p>
                  </div>

                  <div className="box">
                    <h4>2024</h4>
                    <h3>Cybersecurity Consultant</h3>
                    <p> as a Cybersecurity Consultant, where I apply my expertise in protecting organizations from cyber threats. My role involves conducting comprehensive security assessments, developing and implementing robust security protocols, and providing strategic guidance on cybersecurity best practices. 
                    </p>
                  </div>

                </div>
            </div>
        </div>

      </div> {/* end container*/ }
    </section>
  )
}

export default About
