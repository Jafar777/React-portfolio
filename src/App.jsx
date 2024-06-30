import React from 'react'
import Navbar from './components/Navbar/index.jsx'
import Hero from './components/Hero/index.jsx'
import About from './components/About/index.jsx'
import Skills from './components/Skills/index.jsx'
import Services from './components/Services/index.jsx'
import Projects from './components/Projects/index.jsx'
import Feedbacks from './components/Feedbacks/index.jsx'
import Blog from './components/Blog/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'

const App = () => {
  return (
    <>
    <Navbar  />
    <Hero  />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Feedbacks />
    <Blog />
    <Contact />
    <Footer />

    </>
  )
}

export default App
