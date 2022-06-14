
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills"
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css'
import SideNavigation from "./components/SideNavigation/SideNavigation";

function App() {
  return (
    <>
      <ThemeToggle/>
      <SideNavigation/>
      <Header/>
      <Hero/>
      <Skills/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
