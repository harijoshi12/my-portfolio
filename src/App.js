import React from 'react';
import {Route, Switch} from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import Header from "./components/Header/Header"
import './App.css'

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import MyResumePage from "./pages/MyResumePage"
import ResumeBuilderPage from './pages/ResumeBuilderPage';
import Footer from './components/Footer/Footer';

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
      <Footer/>
    </>
  );
}

export default App;
