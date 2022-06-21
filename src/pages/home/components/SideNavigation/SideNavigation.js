import React from 'react'
import './SideNavigation.css'
function SideNavigation() {
  return (
    <div className='sideNavigation'>
        <ul>
            <li><a href="#top">Top</a><span></span></li>
            <li><a href="#skills">Skills</a><span></span></li>
            <li><a href="#service">Services</a><span></span></li>
            <li><a href="#experience">Experience</a><span></span></li>
            <li><a href="#portfolio">Portfolio</a><span></span></li>
            <li><a href="#testimonial">Testimonial</a><span></span></li>
            <li><a href="#contact">Contact</a><span></span></li>
        </ul>
    </div>
  )
}

export default SideNavigation