import React, { forwardRef } from "react";
import { MdDesignServices } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { SiWordpress } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { SiDjango } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import styles from "../../HomePage.module.css";
import { ServiceItem } from "../Common/Card";

const servicesData = [
  {
    id: 1,
    icons: [{ id: 1, icon: <MdDesignServices /> }],
    title: "UI/UX",
    desc: "I Create Intuitive, Human-Centric, And Elegant UI/UX Design Solutions that improves customer satisfaction, user interaction, as well as boost your business grow and enhance. I prefer Figma, pen & papper",
  },
  {
    id: 2,
    icons: [{ id: 1, icon: <RiReactjsLine /> }],
    title: "Frontend Development",
    desc: "Get the best front-end web development services with advanced latest technologies. I like to code things from scratch, and enjoy bringing ideas to life in the browser. I prefer ReactJs.",
  },
  {
    id: 3,
    icons: [
      { id: 1, icon: <SiDjango /> },
      { id: 2, icon: `/` },
      { id: 3, icon: <GrNode /> },
    ],
    title: "Backend Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus.",
  },
  {
    id: 4,
    icons: [{ id: 1, icon: <SiWordpress /> }],
    title: "Wordpress Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus.",
  },
  {
    id: 5,
    icons: [{ id: 1, icon: <SiHiveBlockchain /> }],
    title: "Blockchain Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem?  Sed dolorum tempora illo consequuntur cumque, esse minus.",
  },
  {
    id: 6,
    icons: [
      { id: 1, icon: <GrAndroid /> },
      { id: 2, icon: `/` },
      { id: 3, icon: <BsApple /> },
    ],
    title: "App Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus.",
  },
];

const Services = (props, ref) => {
  return (
    <section
      id="services"
      ref={ref}
      className={` ${styles.sec} ${styles.services} ${styles.common}`}
    >
      <h1 className={styles.title}>My Services</h1>
      <div className={styles.content_wrapper}>
        <div className={`service_content ${styles.content}`}>
          {servicesData.map((data) => {
            return <ServiceItem key={data.id} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Services);
