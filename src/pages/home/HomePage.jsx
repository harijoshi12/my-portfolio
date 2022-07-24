import React from 'react'
import SideNavigation from './components/SideNavigation/SideNavigation'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import UpcommingProjects from './components/UpcommigProjects/UpcommingProjects'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <div id={styles.homePage}>
      <div className={styles.homePageOverlay}></div>
      <SideNavigation/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <UpcommingProjects/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default HomePage