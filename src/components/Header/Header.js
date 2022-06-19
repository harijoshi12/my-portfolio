import React, { useRef, useState } from 'react'
import './Header.css'
import Burger from './subComponents/Burger'
import Logo from './subComponents/Logo'
import Navbar from './subComponents/Navbar'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const progress = useRef()
  const navOverlay = useRef()
  const header = useRef()
  const nav = useRef()
  const navlinks = useRef()
  const burger = useRef()
  const burgerActive = useRef()
  const burgerInactive = useRef()

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
  
  // Responsive Navbar
  const responsieNav = ()=>{

  }

  return (
    <>
      <div ref={navOverlay} className="nav-overlay"></div>
      <header ref={header}>
        <div ref={progress} className="progress"></div>
        <div className="wrapper">
          {/* <Logo/>
          <Navbar/>
          <Burger/> */}
          <div className='logo'><a href=''>Logo</a></div>
          <nav ref={nav}>
            <a ref={navlinks} href=''>Home</a>
            <a ref={navlinks} href=''>Services</a>
            <a ref={navlinks} href=''>Portfolio</a>
            <a ref={navlinks} href=''>My Resume</a>
            <a ref={navlinks} href='' id='nav_resumeMaker'>Create your resume</a>
          </nav>
          <div className="burger" >
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