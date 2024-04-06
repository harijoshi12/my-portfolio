import React, { forwardRef } from "react";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
// import aboutPic from '../../../../media/images/about.png'
import styles from "../../HomePage.module.css";

const About = (props, ref) => {
  const [show, setShow] = useState(false);
  return (
    <section id="about" ref={ref} className={`${styles.sec} ${styles.about}`}>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div data-aos="fade-right" className={styles.content_left}>
            <div className={styles.imgbox}>
              <div className={styles.imgboxBorder}></div>
            </div>
          </div>
          <div className={styles.content_right}>
            <h1 data-aos="fade-up">
              About Me <span></span>
            </h1>
            <h3 data-aos="fade-up">
              Hi, I'm Hari. I'm a self-taught passionate learner with over 9+
              years of experiencces in wide range of disciplines i.e Mechanical
              Engineering, Teaching(Physics & Maths),Software Development,
              entrepreneurship...
            </h3>
            <p data-aos="fade-up">
              I like to define myself by the work I want to do, not by the work
              I've done. Skills can be taught, personality is inherent. I have a
              keen Interest in self-improvement, a hunger for knowledge and
              strive to constantly increase my competence.
            </p>
            <p data-aos="fade-up">
              I appreciate an environment of intellectual challenge and enjoy
              discussing interesting ideas and working on them.
            </p>
            <p data-aos="fade-up">
              I like to develop expertise in a number of areas over the course
              of my life and career. my personality type is{" "}
              <a href="https://www.16personalities.com/intj-personality">INTJ</a>/<a href="https://www.16personalities.com/infj-personality">INFJ</a>. I'm currently working for Transcybernetics Private Limited.{" "}
              {!show && "....."}
            </p>

            {show && (
              <p data-aos="fade-up">
                Thanks for stopping by, I’m currently looking to join a new team
                of creative designers and developers. If you think we might be a
                good fit for one another, give me a{" "}
                <a href="tel:+919634090498">call <IoCall /></a> or send me an{" "}
                <a href="mailto:mr.hariprasadjoshi@gmail.com">email <MdEmail /> </a>.
              </p>
            )}
            <button data-aos="fade-up" onClick={() => setShow(!show)}>
              Read {!show ? "more" : "less"}..
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(About);
