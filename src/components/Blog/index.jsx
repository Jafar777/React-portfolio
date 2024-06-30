import React, { useRef } from 'react'
import "./Blog.css"
import blog1 from '../../assets/blog-1.png'
import blog2 from '../../assets/blog-2.png'
import blog3 from '../../assets/blog-3.jpg'
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react'
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
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
      ['#blog .section-header .heading-1','#blog .section-header .muted'],
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
      '#blog .blogs-container .blog',
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
    <section id='blog' ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text"></span>
          </h1>
          <p className="muted">Explore insights, tips, and updates in our Blog section, where we share valuable information and industry expertise to keep you informed and inspired.
          </p>
        </div>
        <div className="blogs-container">
          {/* Blog start */}
          <div className="blog">
            <a href="#" className="picture">
              <img src={blog1} alt="" />
            </a>
            <div className="details">
              <h3 className="title clamp-2">
                Crafting a User-Centered Portfolio : Best Practices
              </h3>
              <p className="muted clamp-2">
              Learn essential strategies to create a portfolio that focuses on user experience, ensuring your work effectively showcases your skills and resonates with your audience.
              </p>
            </div>
            <div className="buttons-wrapper">
              <a href="#" className="btn primary">Read more</a>
            </div>
          </div>
          {/* Blog end */}

          {/* Blog start */}
          <div className="blog">
            <a href="#" className="picture">
              <img src={blog2} alt="" />
            </a>
            <div className="details">
              <h3 className="title clamp-2">
                Effective Case Studies: Going Beyond The Surface
              </h3>
              <p className="muted clamp-2">
              Dive deep into the art of creating compelling case studies that go beyond descriptions, showcasing your problem-solving abilities and demonstrating real-world impact.
              </p>
            </div>
            <div className="buttons-wrapper">
              <a href="#" className="btn primary">Read more</a>
            </div>
          </div>
          {/* Blog end */}

          {/* Blog start */}
          <div className="blog">
            <a href="#" className="picture">
              <img src={blog3} alt="" />
            </a>
            <div className="details">
              <h3 className="title clamp-2">
                Keeping Your Portfolio Updated: A continous Proccess !
              </h3>
              <p className="muted clamp-2">
              Discover the importance of regularly updating your portfolio to reflect your latest achievements and skills, maintaining relevance and attracting potential opportunities.
              </p>
            </div>
            <div className="buttons-wrapper">
              <a href="#" className="btn primary">Read more</a>
            </div>
          </div>
          {/* Blog end */}
        </div>
      </div>
      
    </section>
  )
}

export default Blog
