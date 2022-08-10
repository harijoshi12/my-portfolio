import React, {  useState } from 'react';
import {Route, Switch} from "react-router-dom"
import Layout from './Ui/Layout';
import './App.css'

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import MyResumePage from './pages/myResume1/MyResumePage';
import DownloadResume from './pages/downloadResume/DownloadResume'
import SocialLinks from './components/SocialLinks/SocialLinks';

function App() {
  const [isMousein, setIsMousein] = useState(false)
  
  return (
    <>
      <Switch>
        <Route exact path="/download-resume" component={DownloadResume}></Route>
        <Layout isMousein={isMousein} setIsMousein={setIsMousein} >
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/my-resume" component={MyResumePage}></Route>
          <SocialLinks/>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
