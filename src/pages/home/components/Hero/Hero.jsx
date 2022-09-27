import React, { forwardRef, useEffect, useState } from "react";
import styles from "../../HomePage.module.css";
// import BgAnimation from './BgAnimation'
function Hero(props, ref) {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }, []);
  return (
    <section id="top" ref={ref} className={`${styles.sec} ${styles.hero}`}>
      {/* <BgAnimation /> */}
      <div className={styles.overlay}></div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <h4 data-aos="fade-right" data-aos-delay="200">
              Hi! I am{" "}
            </h4>
            <h1
              data-aos={isSmall ? "fade-right" : "fade-left"}
              data-aos-delay="300"
            >
              {" "}
              Hari Joshi
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay={isSmall ? "0" : "400"}
              data-aos-offset="30"
            >
              I design & build digital products
            </h2>
            <p
              data-aos={isSmall ? "fade-right" : "fade-left"}
              data-aos-delay={isSmall ? "0" : "500"}
              data-aos-offset="30"
            >
              UI/UX Designer, Frontend & Backend Developer, Blockchain/Web3
              Developer
            </p>

            <div
              data-aos={!isSmall ? "fade-right" : "fade-left"}
              data-aos-delay={isSmall ? "0" : "550"}
              data-aos-offset="30"
              className={styles.btns}
            >
              <span className={styles.btn_outer}>
                <button>Download Resume</button>
              </span>
              <span className={styles.btn_outer}>
                <button>Let's Talk</button>
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className={styles.content_right}
          >
            <div className={styles.imgbox}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Hero);
