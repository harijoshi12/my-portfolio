import React from 'react'
import heroPic from '../../../../media/images/hero.jpg'
function Hero() {
  return (
    <section id='top' className='sec_hero'>
        <div className="sec_wrapper">
          <div className="sec_left">
            <h1>Hi! I am <br /><span>H</span>ari <span>J</span>oshi</h1>
            <h2>"The Best Developer on Planet"</h2>
            <div className="hero_btns">
              <button>Download Resume</button>
              <button>Let's Talk</button>
            </div>
          </div>
          <div className="sec_right">
            <img src={heroPic} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Hero