import React, { forwardRef, useEffect, useRef, useState } from "react";
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
  const fnamearr = ["H", "a", "r", "i"];
  const lnamearr = ["J", "o", "s", "h", "i"];
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  // useEffect(() => {
  //   const fletters = fNameRef.current.children;
  //   const lletters = lNameRef.current.children;
  //   for (let letter of fletters) {
  //     letter.style.opacity = "0";
  //   }
  //   for (let letter of lletters) {
  //     letter.style.opacity = "0";
  //   }
  // });

  useEffect(() => {
    const fletters = fNameRef.current.children;
    const lletters = lNameRef.current.children;
    // let time1 = 1000;
    // let time2 = 2200;
    for (let letter of fletters) {
      // setTimeout(() => {
      //   letter.classList.add([styles.rubberBand]);
      //   letter.style.opacity = "1";
      // }, time1);
      // time1 = time1 + 300;
      setTimeout(() => {
        letter.classList.add([styles.rubberBand]);
      }, 1000);

      setTimeout(() => {
        letter.classList.remove([styles.rubberBand]);
      }, 3000);
    }

    for (let letter of lletters) {
      // setTimeout(() => {
      //   letter.classList.add([styles.rubberBand]);
      //   letter.style.opacity = "1";
      // }, time2);
      // time2 = time2 + 100;
      setTimeout(() => {
        letter.classList.add([styles.rubberBand]);
      }, 1000);

      setTimeout(() => {
        letter.classList.remove([styles.rubberBand]);
      }, 3000);
    }
  }, []);
  useEffect(() => {
    const fletters = fNameRef.current.children;
    const lletters = lNameRef.current.children;
    for (let letter of fletters) {
      const fun1 = () => {
        letter.classList.add([styles.rubberBand]);
      };
      const fun2 = () => {
        letter.classList.remove([styles.rubberBand]);
      };
      letter.addEventListener("mouseover", fun1);
      letter.addEventListener("mouseleave", fun2);
    }
    for (let letter of lletters) {
      const fun1 = () => {
        letter.classList.add([styles.rubberBand]);
      };
      const fun2 = () => {
        letter.classList.remove([styles.rubberBand]);
      };
      letter.addEventListener("mouseover", fun1);
      letter.addEventListener("mouseleave", fun2);
    }
    return () => {
      // letterRef.current.removeEventListener("mouseover", fun1)
      // letterRef.current.removeEventListener("mouseleave", fun2);
    };
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
              {/* Hari Joshi */}
              <span ref={fNameRef}>
                {fnamearr.map((letter, idx) => (
                  <span key={idx}>{letter === "" ? "" : letter}</span>
                ))}{" "}
              </span>
              <span ref={lNameRef}>
                {lnamearr.map((letter, idx) => (
                  <span key={idx}>{letter === "" ? "" : letter}</span>
                ))}
              </span>
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
