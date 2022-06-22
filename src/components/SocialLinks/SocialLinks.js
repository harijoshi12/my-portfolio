import React, {useState} from 'react'
import './SocialLinks.css'

import arrow from '../../media/images/socialicons/arrow.svg'
import facebook from '../../media/images/socialicons/facebook.svg'
import github from '../../media/images/socialicons/github.svg'
import instagram from '../../media/images/socialicons/instagram.svg'
import linkedin from '../../media/images/socialicons/linkedin.svg'
import pinterest from '../../media/images/socialicons/pinterest.svg'
import youtube from '../../media/images/socialicons/youtube.svg'
import twitter from '../../media/images/socialicons/twitter.svg'


function SocialLinks() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="icon-bar">
      <div className={toggle ? "icon-bar-overlay toggle": "icon-bar-overlay"} onClick={()=>setToggle(!toggle)}>
        <div className="social-icon-toggle" >
          <img src={arrow} className={toggle ? "toggle": ""} alt="" />
        </div>
      </div>
      <div className={toggle ? "social-icons toggle" : "social-icons"}>
        <a href='https://www.instagram.com/?hl=en' rel="noopener noreferrer" target='_blank' className="agithub">
          <img src={github} alt="" />
        </a>
        <a href='https://www.instagram.com/?hl=en' rel="noopener noreferrer" target='_blank' className="alinkedin">
          <img src={linkedin} alt="" />
        </a>
        <a href='https://www.instagram.com/?hl=en' rel="noopener noreferrer" target='_blank' className="afacebook">
          <img src={facebook} alt="" />
        </a>
        <a href='https://www.instagram.com/?hl=en' rel="noopener noreferrer" target='_blank' className="atwitter">
          <img src={twitter} alt="" />
        </a>
        <a href='https://www.instagram.com/?hl=en' rel="noopener noreferrer" target='_blank' className="ayoutube">
          <img src={youtube} alt="" />
        </a>
        <a href='https://www.instagram.com/?hl=en' rel="noopener noreferrer" target='_blank' className="ainstagram">
          <img src={instagram} alt="" />
        </a>
        <a href='https://in.pinterest.com/' rel="noopener noreferrer" target='_blank' className="apinterest">
          <img src={pinterest} alt="" />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks