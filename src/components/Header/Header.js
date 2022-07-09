import React, { useRef, useState, useEffect } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header({setIsMousein}) {
  const [toggleMenu, setToggleMenu] = useState(false)

  const progress = useRef()
  const nav = useRef()
  const link1 = useRef()
  const link2 = useRef()
  const link3 = useRef()
  const link4 = useRef()
  const link5 = useRef()
  const burger = useRef()

  // cursor link animaition
  useEffect(() => {
    const navlinks = [link1, link2, link3, link4, link5]
    navlinks.forEach(link =>{
      link.current.addEventListener('mouseleave', ()=>{
        link.current.classList.remove('hovered-link')
        setIsMousein(false)
      })
      link.current.addEventListener('mouseover', ()=>{
        setIsMousein(true)
          link.current.classList.add('hovered-link')
      })
    })
  },[ setIsMousein])


  // Responsive Navabar
  useEffect(()=>{
    const navlinks = [ link1, link2, link3, link4, link5]

    // initial navlinks opacity 0
    let siteWidth = window.innerWidth
    if(siteWidth <= 992){
      navlinks.forEach((link)=>{
        link.current.style.opacity = 0
      })
      nav.current.style.transition = `transform 0.3s linear`
    } else{
      nav.current.style.transition = ``
    }

    // nav links onclick reset toggle
    navlinks.forEach((link, index)=>{
      link.current.addEventListener('click', ()=>{
        setToggleMenu(false)
        navlinks.forEach((link, index)=>{
          link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 12}s`;
        })
      })
    })

    // navlinks animation
    burger.current.addEventListener('click',()=>{
      console.log("click");
      navlinks.forEach((link, index) =>{
        if(!nav.current.classList.contains("toggle")){
          link.current.style.opacity = 0
          link.current.style.animation = `navlinkFadeOpen 0.3s ease forwards ${(index + 1) / 8 + 0.1}s`;
        } else{
          link.current.style.opacity = 1
          link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 15}s`;
        }
      })
    })

    // nav animation with window resize
    window.addEventListener("resize", ()=>{
      siteWidth = window.innerWidth
      if(siteWidth >= 992){
        setToggleMenu(false)
        nav.current.style.transition = ``
        navlinks.forEach((link, index) => {
          link.current.style.animation = ``;
          link.current.style.opacity = 1;
        });
      } else{
        nav.current.style.transition = `transform 0.3s linear`
        navlinks.forEach((link, index) => {
          link.current.style.opacity = 0;
        });
      }
    })
  },[])

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
      <div className={toggleMenu ? "nav-overlay toggle": "nav-overlay"}></div>
      <div className="pseudo_header"></div>
      <header className={toggleMenu ? "toggle": ""} >
        <div className="progress_wrapper">
          <div ref={progress} className="progress"></div>
        </div>
        <div className="nav_wrapper">
          <div className='logo'><NavLink to='/' exact>Hari <span>Joshi</span></NavLink></div>
          <nav ref={nav} className={toggleMenu ? "toggle": ""}>
            <NavLink className={toggleMenu ? "toggle": ""} ref={link1} to='/' activeStyle={{color: "red"}} exact> <span>Home</span> </NavLink>
            <NavLink className={toggleMenu ? "toggle": ""} ref={link2} to='/my-services' activeStyle={{color: "red"}} exact><span>Services</span></NavLink>
            <NavLink className={toggleMenu ? "toggle": ""} ref={link3} to='/my-portfolio' activeStyle={{color: "red"}} exact><span>Portfolio</span></NavLink>
            <NavLink className={toggleMenu ? "toggle": ""} ref={link4} to='/my-resume' activeStyle={{color: "red"}} exact><span>My Resume</span></NavLink>
            <NavLink className={toggleMenu ? "toggle": ""} ref={link5} to='/resume-builder' activeStyle={{color: "red"}} id='nav_resumeMaker' exact><span>Create your resume</span></NavLink>
          </nav>
          <div ref={burger} className={toggleMenu ? "burger toggle": "burger"} onClick={()=>{
            setToggleMenu(!toggleMenu)
          }} >
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