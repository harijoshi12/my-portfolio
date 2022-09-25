import React, { forwardRef } from "react";
import styles from "../../HomePage.module.css";
// import BgAnimation from './BgAnimation'
function Hero(props, ref) {
  return (
    <section id="top" ref={ref} className={`${styles.sec} ${styles.hero}`}>
      {/* <BgAnimation/> */}
      <div className={styles.overlay}></div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <h4>Hi! I am </h4>
            <h1> Hari Joshi</h1>
            <p>
              "I design & build digital products that your users will love"{" "}
              <br />
              UI/UX Designer, Frontend & Backend, Blockchain, Web3, developer
            </p>

            <div className={styles.btns}>
              <span className={styles.btn_outer}>
                <button>Download Resume</button>
              </span>
              <span className={styles.btn_outer}>
                <button>Let's Talk</button>
              </span>
            </div>
          </div>
          <div className={styles.content_right}>
            <div className={styles.imgbox}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Hero);
