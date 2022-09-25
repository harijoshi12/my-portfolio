import SideNavigation from "./components/SideNavigation/SideNavigation";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import UpcommingProjects from "./components/UpcommigProjects/UpcommingProjects";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import styles from "./HomePage.module.css";
import React, { useRef, useState, useEffect } from "react";

function HomePage() {
  const [show, setShow] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const upcommingRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const sideNavRef = useRef(null);

  useEffect(() => {
    function offset(el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
      };
    }
    const sections = [
      heroRef,
      aboutRef,
      skillsRef,
      servicesRef,
      portfolioRef,
      upcommingRef,
      testimonialRef,
      contactRef,
    ];
    // const secBool = [false, false, false, false, false,false, false, false ]
    const secBool = sections.map((sec) => false);
    for (let i in secBool) {
      console.log("secBool===> ", i, ": ", secBool[i]);
    }
    const sideNavLinks = sideNavRef.current.children;

    function getSecPos() {
      sections.forEach((sec, idx) => {
        let secDetails = offset(sec.current);
        let top = secDetails.top;
        // let height = secDetails.height
        if (top < (2 * window.innerHeight) / 5) {
          sideNavLinks[idx].classList.add("active");
          sections[idx].current.classList.add("active");
          for (let i = 0; i < sections.length; i++) {
            if (i !== idx) {
              sideNavLinks[i].classList.remove("active");
              sections[i].current.classList.remove("active");
            }
          }
        }
      });
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    // without scroll show sidenav
    if (window.scrollY > 70) {
      setShow(true);
    } else {
      setShow(false);
    }
    window.addEventListener("scroll", getSecPos);

    return () => window.removeEventListener("scroll", getSecPos);
  }, []);
  return (
    <div id={styles.homePage}>
      <div className={styles.homePageOverlay}></div>
      <SideNavigation ref={sideNavRef} show={show} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Services ref={servicesRef} />
      <Portfolio ref={portfolioRef} />
      <UpcommingProjects ref={upcommingRef} />
      <Testimonial ref={testimonialRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default HomePage;
