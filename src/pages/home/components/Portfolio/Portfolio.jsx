import React from 'react'
import {PortfolioItem} from '../Common/Card'
import styles from '../../HomePage.module.css'
import portfoioItem_img1 from '../../../../media/images/portfolio/crypto.webp'
import portfoioItem_img2 from '../../../../media/images/portfolio/socialMedia.jpg'
import portfoioItem_img3 from '../../../../media/images/portfolio/ecom.jpg'
function Portfolio() {
  const portfolioData = [
    {
      id:1,
      img:portfoioItem_img1, 
      title:"Crypto Currency exchanger",
      desc: "Node.js, MongoDB, Express, React.js, Next.js", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:2,
      img:portfoioItem_img2, 
      title:"Crypto Currency exchanger", 
      desc: "Node.js, MongoDB, Express, React.js, Next.js", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:3,
      img:portfoioItem_img3, 
      title:"Crypto Currency exchanger", 
      desc: "Node.js, MongoDB, Express, React.js, Next.js", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:4,
      img:portfoioItem_img1, 
      title:"Crypto Currency exchanger", 
      desc: "Node.js, MongoDB, Express, React.js, Next.js", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
  ]
  return (
    <section id='portfolio' className={`${styles.sec} ${styles.portfolio} ${styles.common}`}>
        <h1 className={styles.title}>My Recent Work</h1>
       <div className={styles.content_wrapper}>
        <div className={styles.content}>
          {portfolioData.map(data=>{
            return(
              <PortfolioItem key={data.id} {...data} />
              )
            })}
          </div>
       </div>
    </section>
  )
}

export default Portfolio