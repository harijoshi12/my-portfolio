import React from 'react';
import {Route, Switch} from "react-router-dom"
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

import Navbar from './components/Header/subComponents/Navbar';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import MyResumePage from "./pages/MyResumePage"
import ResumeBuilderPage from './pages/ResumeBuilderPage';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/my-services" component={ServicesPage}></Route>
        <Route exact path="/my-portfolio" component={PortfolioPage}></Route>
        <Route exact path="/my-resume" component={MyResumePage}></Route>
        <Route exact path="/resume-builder" component={ResumeBuilderPage}></Route>
      </Switch>
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
