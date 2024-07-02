import React, { useState } from 'react';
import "./Navbar.css";
import Logo from "../Logo";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import SocialHandles from '../SocialHandles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navTabs = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Feedbacks', id: 'feedbacks' },
  { name: 'Blog', id: 'blog' },
];

const Navbar = () => {
  useGSAP(() => {
    gsap.timeline({ delay: 0.5 })
      .fromTo(['nav .logo .name', 'nav .logo .logo-icon'], {
        opacity: 0,
        x: -100,
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.5,
      })
      .fromTo('nav .tabs-container .tab', {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.5,
      })
      .fromTo('nav .handles-container .icon-wrapper', {
        opacity: 0,
        y: -50,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.5,
      })
      .fromTo('nav .contact-btn', {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
      });
  });

  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar'>
      {open && <div className='sidebar-overlay active' onClick={() => setOpen(false)} />}
      <div className='logo'>Logo</div>
      <div className={`tabs-container ${open ? 'active' : ''}`} id='sidebar'>
        <div className='close-sidebar-btn' onClick={() => setOpen(false)}>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            activeClass="active"
            className='tab'
            to={tab.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpen(false)}
            key={index}
          >
            <h4>{tab.name}</h4>
          </Link>
        ))}
      </div>
      <div className='buttons-wrapper'>
        <div className='menu-btn' onClick={() => setOpen(!open)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;