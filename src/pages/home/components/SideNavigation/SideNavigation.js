import React, { useEffect, forwardRef } from 'react'
import './SideNavigation.css'
function SideNavigation({show}, ref) {


  useEffect(()=>{
  
    // function elPos(el){
    //   let rect = el.getBoundingClientRect()
    //   let scrollLeft = document.documentElement.scrollLeft || window.pageXOffset
    //   let scrollTop = document.documentElement.scrollTop || window.pageYOffset
    //   return {top: rect.top + scrollTop, left: rect.left+ scrollLeft}
    // }
  },[])

  return (
    <div ref={ref} className={show? `sideNavigation  active`:`sideNavigation`}>
      <li><a href="#top">Top</a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#upCommingProjects">Upcomming</a></li>
      <li><a href="#testimonial">Testimonial</a></li>
      <li><a href="#contact">Contact</a></li>
    </div>
  )
}

export default forwardRef(SideNavigation)