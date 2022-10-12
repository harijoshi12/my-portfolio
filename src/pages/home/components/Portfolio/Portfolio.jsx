import React, { forwardRef } from "react";
import { PortfolioItem } from "../Common/Card";
import styles from "../../HomePage.module.css";
import portfoioItem_img1 from "../../../../media/images/portfolio/crypto.webp";
import portfoioItem_img2 from "../../../../media/images/portfolio/socialMedia.jpg";
import portfoioItem_img3 from "../../../../media/images/portfolio/ecom.jpg";
function Portfolio(props, ref) {
  const portfolioData = [
    {
      id: 1,
      img: portfoioItem_img1,
      bg: {
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      },
      title: "My Porfolio Website",
      desc: "A Portfolio website to showcase my work and skills.",
      features: [
        "Technologies:- React, Firebase",
        "Fully Responsive",
        "Custom Animated Cursor",
        "SVG animations",
      ],
      git_link: "https://github.com/harijoshi12/",
      live_demo_link: "https://www.harijoshi.tech/",
    },
    {
      id: 2,
      img: portfoioItem_img2,
      bg: {
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      },
      title: "Resume Builder",
      desc: "A projectfocused on simplifying the resume building process.",
      features: [
        "Signup & Login functionality",
        "Live Edit functionality",
        "Download resume in pfd formate with selectable text and clickable link",
      ],
      git_link: "https://github.com/harijoshi12/",
      live_demo_link: "https://www.metaresume.fun/",
    },
    {
      id: 3,
      img: portfoioItem_img3,
      bg: {
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      },
      title: "Calculator App",
      desc: "An Android app based on React Native.",
      features: ["React Native based Android & ios app", "Easy to use UI"],
      git_link: "https://github.com/harijoshi12/",
      live_demo_link: "https://play.google.com/store/apps/details?id=com.hariaiandrobotics.calculator",
    },
    {
      id: 4,
      img: portfoioItem_img1,
      bg: {
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      },
      title: "Blockchain based Polling & Voting app",
      desc: "app where people can start polling and Voting",
      features: [
        "Technology:- Blockchain, Solidity",
        "start polling and voiting ",
      ],
      git_link: "https://github.com/harijoshi12/",
      live_demo_link: "#",
    },
  ];
  return (
    <section
      id="portfolio"
      ref={ref}
      className={`${styles.sec} ${styles.portfolio} ${styles.common}`}
    >
      <h1 className={styles.title}>My Recent Work</h1>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          {portfolioData.map((data) => {
            return <PortfolioItem key={data.id} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Portfolio);
