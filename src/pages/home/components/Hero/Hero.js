import React from 'react'
import styles from '../../HomePage.module.css'
import heroPic from '../../../../media/images/hero.png'
function Hero() {
  return (
    <section className={`${styles.sec} ${styles.intro}`}>
        <div className={styles.content_wrapper}>
          <div className={styles.content_left}>
            <h1>Hello! I am <br /><span>H</span>ari <span>J</span>oshi</h1>
            <h2> The Best Developer on Planet, <br /> who can turn your dream into real web & app </h2>
            <div className={styles.btn}>
              <button>Download Resume</button>
              <button >Let's Talk</button>
            </div>
          </div>
          <div className={styles.content_right}>
            <img src={heroPic} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Hero