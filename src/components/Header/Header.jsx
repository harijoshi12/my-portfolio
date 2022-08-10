import React, { useRef, useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header({ setIsMousein }) {
  const [toggleMenu, setToggleMenu] = useState(false)

  const activeColor = `rgb(4, 226, 226)`
  const progress = useRef()
  const nav = useRef()
  const link1 = useRef()
  const link2 = useRef()
  const link3 = useRef()
  // const link4 = useRef()
  const link5 = useRef()

  const burger = useRef()

  // cursor link animaition
  useEffect(() => {
    const navlinks = [link1, link2, link3, link5]
    navlinks.forEach(link => {
      link.current.addEventListener('mouseleave', () => {
        link.current.classList.remove('hovered-link')
        setIsMousein(false)
      })
      link.current.addEventListener('mouseover', () => {
        setIsMousein(true)
        link.current.classList.add('hovered-link')
      })
    })
  }, [setIsMousein])


  // Responsive Navabar
  useEffect(() => {
    const navlinks = [link1, link2, link3, link5]

    // initial navlinks opacity 0
    let siteWidth = window.innerWidth
    window.addEventListener("resize", () => {
      siteWidth = window.innerWidth
      if (siteWidth <= 992) {
        // nav links onclick reset toggle
        navlinks.forEach((link, index) => {
          link.current.style.opacity = 0
          link.current.addEventListener('click', () => {
            setToggleMenu(false)
            navlinks.forEach((link, index) => {
              link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 12}s`;
            })
          })
        })
        nav.current.style.transition = `transform 0.3s linear`
      } else {
        nav.current.style.transition = ``
        navlinks.forEach((link, index) => {
          link.current.style.opacity = 1
          link.current.addEventListener('click', () => {
            navlinks.forEach((link, index) => {
              link.current.style.animation = ``;
            })
          })
        })
      }
    })
    if (siteWidth <= 992) {
      // nav links onclick reset toggle
      navlinks.forEach((link, index) => {
        link.current.style.opacity = 0
        link.current.addEventListener('click', () => {
          setToggleMenu(false)
          navlinks.forEach((link, index) => {
            link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 12}s`;
          })
        })
      })
      nav.current.style.transition = `transform 0.3s linear`
    } else {
      nav.current.style.transition = ``
    }

    // navlinks animation
    burger.current.addEventListener('click', () => {
      navlinks.forEach((link, index) => {
        if (!nav.current.classList.contains("toggle")) {
          link.current.style.opacity = 0
          link.current.style.animation = `navlinkFadeOpen 0.3s ease forwards ${(index + 1) / 8 + 0.1}s`;
        } else {
          link.current.style.opacity = 1
          link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 15}s`;
        }
      })
    })

    // nav animation with window resize
    window.addEventListener("resize", () => {
      siteWidth = window.innerWidth
      if (siteWidth >= 992) {
        setToggleMenu(false)
        nav.current.style.transition = ``
        navlinks.forEach((link, index) => {
          link.current.style.animation = ``;
          link.current.style.opacity = 1;
        });
      } else {
        nav.current.style.transition = `transform 0.3s linear`
        navlinks.forEach((link, index) => {
          link.current.style.opacity = 0;
        });
      }
    })
  }, [])

  // Progress Bar
  useEffect(() => {
    let body = document.body;
    let html = document.documentElement;
    let winHeight = window.innerHeight;
    let value;
    function onResizeProgress() {
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
    }
    function onScrollProgress() {
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
    }
    const progressBar = () => {
      window.addEventListener("resize", onResizeProgress);
      window.addEventListener("scroll", onScrollProgress);
    };
    progressBar();
    return (() => {
      window.removeEventListener("resize", onResizeProgress);
      window.removeEventListener("scroll", onScrollProgress);
    })
  }, [])

  return (
    <>
      <div className={toggleMenu ? "nav-overlay toggle" : "nav-overlay"}></div>
      <div className="pseudo_header"></div>
      <header className={toggleMenu ? "toggle" : ""}>
        <div className="progress_wrapper">
          <div ref={progress} className="progress"></div>
        </div>
        <div className="nav_wrapper">
          <div className='logo'><NavLink to='/' exact>Hari <span>Joshi</span></NavLink></div>
          <nav ref={nav} className={toggleMenu ? "toggle" : ""}>
            <NavLink className={toggleMenu ? "toggle" : ""} ref={link1} to='/' activeStyle={{ color: activeColor }} exact> <span>Home</span> </NavLink>
            <NavLink className={toggleMenu ? "toggle" : ""} ref={link2} to='/about' activeStyle={{ color: activeColor }} exact> <span>About Me</span> </NavLink>
            <NavLink className={toggleMenu ? "toggle" : ""} ref={link3} to='/my-resume' activeStyle={{ color: activeColor }} exact><span>My Resume</span></NavLink>
            {/* <NavLink className={toggleMenu ? "toggle": ""} ref={link4} to='/download-resume' activeStyle={{color: activeColor}} exact><span>Download Resume</span></NavLink> */}
            <a href="https://novoresume.com/" ref={link5} rel="noopener noreferrer" target='_blank' id="nav_resumeMaker">Create Your Resume</a>
          </nav>
          <ThemeToggle/>
          <div ref={burger} className={toggleMenu ? "burger toggle" : "burger"} onClick={() => {
            setToggleMenu(!toggleMenu)
          }} >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header