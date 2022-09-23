import React, { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import aboutPic from '../../../../media/images/about.png'
import styles from "../../HomePage.module.css";

const About = (props, ref) => {
  return (
    <section id="about" ref={ref} className={`${styles.sec} ${styles.about}`}>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeftBig"
            >
              <div className={styles.imgbox}>
                <div className={styles.imgboxBorder}></div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className={styles.content_right}>
            <h1>
              About Me <span></span>
            </h1>
            <AnimationOnScroll animateOnce={true} animateIn="animate__pulse">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores praesentium repellendus reprehenderit non, natus
                molestiae minima recusandae velit rerum explicabo nemo quisquam
                ratione exercitationem aliquid iste quas nesciunt vel odio.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__pulse">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur quaerat voluptatibus temporibus sunt illum a enim
                accusamus totam magnam necessitatibus.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__pulse">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                adipisci assumenda provident aspernatur deserunt magni ea
                suscipit dolores placeat veritatis?
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__pulse">
              <button>Read more..</button>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(About);
