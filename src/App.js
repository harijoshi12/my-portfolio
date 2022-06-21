import React from 'react';
import {Route, Switch} from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import Header from "./components/Header/Header"
import './App.css'

import HomePage from './pages/home/HomePage'
import ServicesPage from './pages/myServices/ServicesPage';
import PortfolioPage from './pages/myPortfolio/PortfolioPage';
import MyResumePage from "./pages/myResume/MyResumePage"
import ResumeBuilderPage from './pages/ResumeBuilder/ResumeBuilderPage';
import Footer from './components/Footer/Footer';
import SocialLinks from './components/SocialLinks/SocialLinks';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/my-services" component={ServicesPage}></Route>
        <Route exact path="/my-portfolio" component={PortfolioPage}></Route>
        <Route exact path="/my-resume" component={MyResumePage}></Route>
        <Route exact path="/resume-builder" component={ResumeBuilderPage}></Route>
      </Switch>
      <ThemeToggle/>
      <SocialLinks/>
      <Footer/>
    </>
  );
}

export default App;
