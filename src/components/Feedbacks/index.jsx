import React, { useRef } from 'react'
import "./Feedbacks.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import user1 from '../../assets/user-1.jpeg'
import user2 from '../../assets/user-2.jpeg'
import user3 from '../../assets/user-3.jpeg'
import user4 from '../../assets/user-4.jpeg'
import user5 from '../../assets/user-5.jpeg'
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Feedbacks = () => {
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
      ['#feedbacks .section-header .heading-1','#feedbacks .section-header .muted'],
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
      '#feedbacks .feedbacks-container .feed-block',
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
  const settings = {
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive:[
      {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        
      }
    },
  ]
  };

  return (
    <section id='feedbacks' ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1">
            Clients <span className="gradient-text">Feedbacks</span>
          </h1>
          <p className="muted">Explore what our clients are saying about their experiences and satisfaction with our services in our Clients Feedbacks section.
          </p>
        </div>
          <Slider {...settings} className='feedbacks-container'>
           {/*feedback block starts  */} 
           <div className="feed-block">
            <div className="profile">
              <img src={user1} alt="" />
            </div>
            <div className="details">
              <p className="muted">Outstanding! His expertise in JavaScript and ReactJS transformed our website into a sleek, user-friendly platform. Highly recommend for anyone looking to enhance their online presence.
              </p>
            </div>
            <div className="bottom">
            <div className="flex-center stars-container">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <h2 className="name">Emmanuel Eze</h2> 
            <p className="muted">CEO Of Adinuba</p>
            </div>
           </div>
           {/*feedback block ends  */} 

            {/*feedback block starts  */} 
           <div className="feed-block">
            <div className="profile">
              <img src={user2} alt="" />
            </div>
            <div className="details">
              <p className="muted">
              Impressed by his meticulous approach to HTML and CSS—our website looks fantastic and functions flawlessly across devices. A true professional in web development!
              </p>
            </div>
            <div className="bottom">
            <div className="flex-center stars-container">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <h2 className="name">Jennifer</h2> 
            <p className="muted">Finance Specialist</p>
            </div>
           </div>
           {/*feedback block ends  */} 

           {/*feedback block starts  */} 
           <div className="feed-block">
            <div className="profile">
              <img src={user3} alt="" />
            </div>
            <div className="details">
              <p className="muted">
              His proficiency in the MERN stack was instrumental in delivering our project ahead of schedule. His dedication to detail and problem-solving skills are unmatched.
              </p>
            </div>
            <div className="bottom">
            <div className="flex-center stars-container">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <h2 className="name">Caleb Chisom</h2> 
            <p className="muted">CEO Of Ade Store</p>
            </div>
           </div>
           {/*feedback block ends  */} 

           {/*feedback block starts  */} 
           <div className="feed-block">
            <div className="profile">
              <img src={user4} alt="" />
            </div>
            <div className="details">
              <p className="muted">
              We're thrilled with his UI/UX design skills! He not only created visually appealing interfaces but also ensured they were intuitive and easy to navigate. Exceptional work!
              </p>
            </div>
            <div className="bottom">
            <div className="flex-center stars-container">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <h2 className="name">Joy Eze</h2> 
            <p className="muted">CEO Of Clean Concept </p>
            </div>
           </div>
           {/*feedback block ends  */} 

           {/*feedback block starts  */} 
           <div className="feed-block">
            <div className="profile">
              <img src={user5} alt="" />
            </div>
            <div className="details">
              <p className="muted">
              His Node.js expertise streamlined our backend processes, making our application faster and more efficient. Couldn't be happier with the results!
              </p>
            </div>
            <div className="bottom">
            <div className="flex-center stars-container">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <h2 className="name">Amaka Ogara</h2> 
            <p className="muted">CEO Of Ogara collections</p>
            </div>
           </div>
           {/*feedback block ends  */} 

          </Slider>
      </div>
    </section>
  )
}

export default Feedbacks
