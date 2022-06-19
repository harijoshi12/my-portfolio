import React from 'react'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Hero from '../components/Hero/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import Services from '../components/Services/Services'
import SideNavigation from '../components/SideNavigation/SideNavigation'
import Skills from '../components/Skills/Skills'
import Testimonial from '../components/Testimonial/Testimonial'

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