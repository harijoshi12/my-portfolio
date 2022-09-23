import React, { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "../../HomePage.module.css";
// import BgAnimation from './BgAnimation'
function Hero(props, ref) {
  return (
    <section id="top" ref={ref} className={`${styles.sec} ${styles.hero}`}>
      {/* <BgAnimation/> */}
      <div className={styles.overlay}></div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <h4>Hello! I am </h4>
          <h1> Hari Joshi</h1>
          <AnimationOnScroll animateOnce={true} animateIn="animate__tada">
            <h3>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              temporibus nam, itaque non vero accusantium et? Quasi alias
              deserunt repellendus magni inventore?"
            </h3>
          </AnimationOnScroll>
          <div className={styles.btns}>
            <button>Download Resume</button>
            <button>Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Hero);
