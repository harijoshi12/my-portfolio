import React from 'react'
import heroPic from '../../../../media/images/hero.png'
function Hero() {
  return (
    <section id='top' className='sec_hero'>
        <div className="sec_wrapper">
          <div className="sec_left">
            <h1>Hello! I am <br /><span>H</span>ari <span>J</span>oshi</h1>
            <h2> <span className="quote">"</span>The Best Developer on Planet, <br /> who can turn your dream into real web & app <span className="quote">"</span></h2>
            <div className="hero_btns">
              <button>Download Resume</button>
              <button >Let's Talk</button>
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