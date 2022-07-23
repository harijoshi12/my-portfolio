import React, {  useState } from 'react';
import {Route, Switch} from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import Layout from './Ui/Layout';
import './App.css'

import HomePage from './pages/home/HomePage'
import ServicesPage from './pages/myServices/ServicesPage';
import PortfolioPage from './pages/myPortfolio/PortfolioPage';
import DownloadResume from './pages/DownloadResume/DownloadResume'
import MyResumePage from './pages/myResume1/MyResumePage';
import ResumeBuilderPage from './pages/ResumeBuilder/ResumeBuilderPage';
import SocialLinks from './components/SocialLinks/SocialLinks';

function App() {
  const [isMousein, setIsMousein] = useState(false)
  
  return (
    <>
      <Switch>
        <Route exact path="/download-resume" component={DownloadResume}></Route>
        <Layout isMousein={isMousein} setIsMousein={setIsMousein} >
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/my-services" component={ServicesPage}></Route>
            <Route exact path="/my-portfolio" component={PortfolioPage}></Route>
            <Route exact path="/my-resume" component={MyResumePage}></Route>
            {/* <Route exact path="/new-resume" component={NewResumePage}></Route> */}
            <Route exact path="/resume-builder" component={ResumeBuilderPage}></Route>
          <ThemeToggle/>
          <SocialLinks/>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
