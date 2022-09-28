import React, { useEffect, useRef, useState } from "react";
import styles from "../../HomePage.module.css";
import VanillaTilt from "vanilla-tilt";

export const PortfolioItem = (props) => {
  const { id, title, desc, git_link, live_demo_link } = props;
  // const bgh= {
  //   bgGradient: 'background-color: #4158D0',
  //   backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
  // }
  const [isTilt, setIsTilt] = useState(false);
  const tilt = useRef(null);
  useEffect(() => {
    let timeoutId;
    if (isTilt) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      VanillaTilt.init(tilt.current, {
        max: 35,
        speed: 300,
        glare: true,
        "max-glare": 0.7,
        gyroscope: false,
      });
    } else {
      setTimeout(() => {
        tilt.current.style = "";
      }, 50);
    }
  }, [isTilt]);

  useEffect(() => {
    const elTilt = tilt.current;
    const fun1 = () => {
      setIsTilt(true);
    };
    const fun2 = () => {
      setIsTilt(false);
    };
    tilt.current.addEventListener("mouseover", fun1);
    tilt.current.addEventListener("mouseleave", fun2);
    return () => {
      elTilt?.removeEventListener("mouseover", fun1);
      elTilt?.removeEventListener("mouseleave", fun2);
    };
  }, []);
  return (
    <div
      ref={tilt}
      data-aos={isTilt ? null : id % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
      data-aos-delay={isTilt ? null : id % 2 === 0 ? 100 : 0}
      className={`${styles.card}  ${styles.portfolio_item}`}
    >
      {/* <div className={`${styles.card}  ${styles.portfolio_item}`} style={bg}> */}
      {/* <div className={styles.imgbox} style={{backgroundImage:`url(${img})`}}></div> */}
      {/* <div className={styles.imgbox} style={bg}></div> */}
      <div className={styles.imgbox}></div>
      <h2 className={styles.projectId}>0{id}</h2>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDesc}>"{desc}"</p>
      {/* <div>
        <h3>Features</h3>
        {features.map((f, idx) => (
          <p key={idx}>
            <span>&#xBB; </span> <span> {f}</span>
          </p>
        ))}
      </div> */}
      <div className={styles.btn_container}>
        <a href={git_link}>Github</a>
        <a href={live_demo_link}>Live Demo</a>
      </div>
    </div>
  );
};

export const UpcommingProjectItem = (props) => {
  const { img, title, desc, tech } = props;
  return (
    <div className={`${styles.card}  ${styles.upcommingProject_item}`}>
      <div
        className={styles.imgbox}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <h5>Possible Tech Stack</h5>
      <div className={styles.techStack}>
        {tech.map((t, idx) => {
          return (
            <span key={idx}>
              {t} {idx !== tech.length - 1 ? `, ` : null}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const ServiceItem = ({ id, icons, title, desc }) => {
  const [isTilt, setIsTilt] = useState(false);
  const tilt = useRef(null);
  useEffect(() => {
    let timeoutId;
    if (isTilt) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      VanillaTilt.init(tilt.current, {
        max: 35,
        speed: 300,
        glare: true,
        "max-glare": 0.7,
        gyroscope: false,
      });
    } else {
      setTimeout(() => {
        tilt.current.style = "";
      }, 50);
    }
  }, [isTilt]);

  useEffect(() => {
    const elTilt = tilt.current;
    const fun1 = () => {
      setIsTilt(true);
    };
    const fun2 = () => {
      setIsTilt(false);
    };
    tilt.current.addEventListener("mouseover", fun1);
    tilt.current.addEventListener("mouseleave", fun2);
    return () => {
      elTilt?.removeEventListener("mouseover", fun1);
      elTilt?.removeEventListener("mouseleave", fun2);
    };
  }, []);

  return (
    <div
      ref={tilt}
      data-aos={isTilt ? null : id % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
      data-aos-delay={isTilt ? null : id % 2 === 0 ? 250 : 0}
      className={`${styles.card} ${styles.services_item} services_item card`}
    >
      <div className={`${styles.iconbox} iconbox`}>
        {icons.map((icon, idx) => {
          return <span key={icon.id}>{icon.icon}</span>;
        })}
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
