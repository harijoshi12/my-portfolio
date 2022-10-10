import React, { forwardRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { progLangs, techSkills } from "../../../../data";
import styles from "../../HomePage.module.css";
import "./custom.css";

export const ProgLang = ({ id, title, level }) => {
  const innerRef = useRef(null);
  const proglangRef = useRef(null);
  useEffect(() => {
    const fun1 = ({ detail }) => {
      // console.log("animated in", detail);
      if (detail.classList.contains("aos-animate")) {
        innerRef.current.style.width = `${level * 10}%`;
        proglangRef.current.style.opacity = "1";
      } else {
        proglangRef.current.style.opacity = "0";
        innerRef.current.style.width = `0%`;
      }
    };
    // const fun2 = ({ detail }) => {
    //   console.log("animated out", detail);
    // };
    document.addEventListener(`aos:in:innerBar${id}`, fun1);
    // document.addEventListener(`aos:out:innerBar${id}`, fun2);
    return () => {
      document.removeEventListener(`aos:in:innerBar${id}`, fun1);
      // document.removeEventListener(`aos:out:innerBar${id}`, fun2);
    };
  }, [id, level]);

  return (
    <div
      ref={proglangRef}
      data-aos="fade-up"
      data-aos-offset="80"
      data-aos-id={`innerBar${id}`}
      className={styles.progLang}
    >
      <span className={styles.sm_title_wrapper}>
        <span className={styles.sm_title}>{title}</span>
      </span>
      <span className={styles.progressBarOuter}>
        <span
          ref={innerRef}
          data-aos-offset="80"
          data-aos="slide-right"
          data-aos-duration="0"
          data-aos-easing="linear"
          // data-aos-id={`innerBar${id}`}
          className={styles.progressBarInner}
        // style={{ width: `${level * 10}%` }}
        ></span>
      </span>
    </div>
  );
};

const TechSkill = ({ id, title, level }) => {
  const [levelutput, setLevelOutput] = useState("");
  const svgCircle = useRef(null);
  const percent = useRef(null);
  const num = 330 - level * 33;
  // useEffect(() => {
  //   let counter = 0;
  //   const idTime = setInterval(() => {
  //     if (counter === level * 10) {
  //       clearInterval(idTime);
  //     } else {
  //       counter += 1;
  //       setLevelOutput(counter);
  //     }
  //   }, 50);

  //   return () => {
  //     clearInterval(idTime);
  //   };
  //   // console.log("num", num)
  //   // console.log(svgCircle.current.getTotalLength())
  // }, [level]);

  useEffect(() => {
    const fun1 = ({ detail }) => {
      if (detail.classList.contains("aos-animate")) {
        // svgCircle.current.style.animation = "circleBar 4s ease-in-out forwards";
        svgCircle.current.style.transition = "all 3s linear";
        svgCircle.current.style.strokeDashoffset = num;
        let counter = 0;
        const idTime = setInterval(() => {
          if (counter === level * 10) {
            clearInterval(idTime);
          } else {
            counter += 1;
            setLevelOutput(counter);
          }
        }, level * 6.5);
      } else {
        svgCircle.current.style.transition = "";
        svgCircle.current.style.strokeDashoffset = "330";
      }
    };
    document.addEventListener(`aos:in:circle${id}`, fun1);
    return () => {
      document.removeEventListener(`aos:in:circle${id}`, fun1);
    };
  }, [id, level, num]);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-id={`circle${id}`}
        className={styles.circle_outer}
      >
        <div className={styles.circle_inner}>
          <span className={styles.sm_title}>{title}</span>
          <br />
          <span ref={percent} className={styles.level_percent}>
            {levelutput}%
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="110"
          viewBox="0 0 120 110"
          fill="none"
        >
          <path
            ref={svgCircle}
            d="M115 55C115 82.2136 90.7941 105 60 105C29.2059 105 5 82.2136 5 55C5 27.7864 29.2059 5 60 5C90.7941 5 115 27.7864 115 55Z"
            fill="#D9D9D9"
            // strokeDashoffset={num}
            // strokeDashoffset="330"
            strokeLinecap="round"
            stroke="url(#paint0_linear_685_10)"
            strokeWidth="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_685_10"
              x1="60"
              y1="0"
              x2="60"
              y2="110"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E91E63" />
              <stop offset="1" stopColor="#673AB7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 100" width="110" height="100">
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#673ab7" />
        </linearGradient>
      </defs>
      <ellipse ref={svgCircle} cx="55" cy="50" rx="55" ry="50" strokeLinecap="round" fill="#D9D9D9" />
    </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="110" height="100" viewBox="0 0 110 100" fill="none">
      <path ref={svgCircle} d="M105 50C105 74.415 83.0734 95 55 95C26.9266 95 5 74.415 5 50C5 25.585 26.9266 5 55 5C83.0734 5 105 25.585 105 50Z" fill="#D9D9D9" stroke="url(#paint0_linear_685_10)" strokeWidth="10" />
      <defs>
        <linearGradient id="paint0_linear_685_10" x1="55" y1="0" x2="55" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#673AB7" />
        </linearGradient>
      </defs>
    </svg> */}
    </>
  );
};

const Skills = (props, ref) => {
  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.sec} ${styles.skills} ${styles.common}`}
    >
      <h1 data-aos="rotate-c" className={styles.title}>
        My Skills
      </h1>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={`${styles.content_left} ${styles.card}`}>
            <h3 className={styles.sub_title}>Programming Languages</h3>
            <div className={styles.content_container}>
              {progLangs.map((data) => (
                <ProgLang key={data.id} {...data} />
              ))}
            </div>
          </div>
          <div className={`${styles.content_right} ${styles.card}`}>
            <h3 className={styles.sub_title}>Tools & Frameworks</h3>
            <div className={styles.content_container}>
              {techSkills.map((data) => (
                <TechSkill key={data.id} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Skills);
