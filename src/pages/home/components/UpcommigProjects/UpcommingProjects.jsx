import React, { forwardRef } from "react";
import { UpcommingProjectItem } from "../Common/Card";
import styles from "../../HomePage.module.css";

import physics from "../../../../media/images/projects/physics.png";
import dating from "../../../../media/images/projects/dating.png";
import social_media from "../../../../media/images/projects/social_media.png";
import blockchain from "../../../../media/images/projects/blockchain.png";

const UpcommingProjects = (props, ref) => {
  const UpcommingProjecsData = [
    {
      id: 1,
      img: physics,
      title: "Physics Simultion App",
      desc: "For helping Students and Teachers understand physics concepts (i.e. world around us) better. This app will make you fall in love with physics.",
      tech: [
        "Unity",
        "Canvas",
        "Three.js",
        "React",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
    {
      id: 2,
      img: dating,
      title: "Personality based match making App",
      desc: "App that will help you find like minded friends or life partner based on your personality traits. This app will be the only social media that will have a net +ve impact on your life.",
      tech: [
        "A.I/M.L",
        "React",
        "Next.js",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
    {
      id: 3,
      img: social_media,
      title: "Social media app for revolutionaries",
      desc: "I feel an strong need to unite all the rational minded people all around the world for the betterment of the society, to help humanity reach the Type-1 civilization as soon as possible.As of now we are a type-0.7 civilization.",
      tech: [
        "A.I/M.L",
        "React",
        "Next.js",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
    {
      id: 4,
      img: blockchain,
      title: "Blockchain based Polling & voting app",
      desc: "for a better society we need the participation of general people, we need them to fearlessly participate and post their opinion on different social issues. This app will help them remain anonymous and participate fearlessly.",
      tech: [
        "Blockchian",
        "Solidity",
        "React",
        "Next.js",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
  ];
  return (
    <section
      id="upCommingProjects"
      ref={ref}
      className={`${styles.sec} ${styles.upCommingProjects} ${styles.common}`}
    >
      <h1 className={styles.title}>My Upcomming Projects </h1>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          {UpcommingProjecsData.map((data) => {
            return <UpcommingProjectItem key={data.id} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default forwardRef(UpcommingProjects);
