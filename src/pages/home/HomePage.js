import React from 'react'
import SideNavigation from './components/SideNavigation/SideNavigation'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <SideNavigation/>
      <Hero/>
      <Skills/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default HomePage