import React, { useRef, useState, useEffect } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header({setIsMousein}) {
  const [toggleMenu, setToggleMenu] = useState(false)
  // const [mousein, setMousein] = useState(false)
  // const [mouseout, setMouseout] = useState(true)

  const progress = useRef()
  const link1 = useRef()
  const link2 = useRef()
  const link3 = useRef()
  const link4 = useRef()
  const link5 = useRef()
  useEffect(() => {
    const navlinks = [link1, link2, link3, link4, link5]
    navlinks.forEach(link =>{
      link.current.addEventListener('mouseleave', ()=>{
        link.current.classList.remove('hovered-link')
        setIsMousein(false)
        console.log("mouse leave")
      })
      link.current.addEventListener('mouseover', ()=>{
        setIsMousein(true)
        console.log('mouse over')
          link.current.classList.add('hovered-link')
      })
    })
  },[ setIsMousein])

  // Progress Bar
  const progressBar = () => {
    let body = document.body;
    let html = document.documentElement;
    let winHeight = window.innerHeight;
    let value;
    window.addEventListener("resize", () => {
      let a = body.scrollHeight;
      let b = body.offsetHeight;
      let d = html.scrollHeight; // includes margin
      let e = html.offsetHeight; // includes margin
      var docHeight = Math.max(a, b, d, e);
      winHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let scrollableHeight = docHeight - winHeight;
      value = Math.floor((scrollHeight / scrollableHeight) * 100);
      progress.current.style.width = value + "%";
    });

    window.addEventListener("scroll", () => {
      let a = body.scrollHeight;
      let b = body.offsetHeight;
      let d = html.scrollHeight; // includes margin
      let e = html.offsetHeight; // includes margin
      winHeight = window.innerHeight;
      var docHeight = Math.max(a, b, d, e);
      let scrollHeight = window.scrollY;
      let scrollableHeight = docHeight - winHeight;
      value = Math.floor((scrollHeight / scrollableHeight) * 100);
      progress.current.style.width = value + "%";
    });
  };
  progressBar();

  return (
    <>
      <div  className="nav-overlay"></div>
      <div className="pseudo_header"></div>
      <header >
        <div ref={progress} className="progress"></div>
        <div className="nav_wrapper">
          <div className='logo'><NavLink to='/' exact>Hari joshi</NavLink></div>
          <nav className={toggleMenu ? "toggle": ""}>
            <NavLink ref={link1} to='/' activeStyle={{color: "red"}} exact>Home</NavLink>
            <NavLink ref={link2} to='/my-services' activeStyle={{color: "red"}} exact>Services</NavLink>
            <NavLink ref={link3} to='/my-portfolio' activeStyle={{color: "red"}} exact>Portfolio</NavLink>
            <NavLink ref={link4} to='/my-resume' activeStyle={{color: "red"}} exact>My Resume</NavLink>
            <NavLink ref={link5} to='/resume-builder' activeStyle={{color: "red"}} id='nav_resumeMaker' exact>Create your resume</NavLink>
          </nav>
          <div className={toggleMenu ? "burger toggle": "burger"} onClick={()=>setToggleMenu(!toggleMenu)} >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            <div className="b-child burger-active"></div>
            <div className="b-child burger-inactive"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header