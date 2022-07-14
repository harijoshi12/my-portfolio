import React from 'react'
import PortfolioItem from './PortfolioItem'
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
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:2,
      img:portfoioItem_img2, 
      title:"Crypto Currency exchanger", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:3,
      img:portfoioItem_img3, 
      title:"Crypto Currency exchanger", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:4,
      img:portfoioItem_img1, 
      title:"Crypto Currency exchanger", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:5,
      img:portfoioItem_img2, 
      title:"Crypto Currency exchanger", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:6,
      img:portfoioItem_img3, 
      title:"Crypto Currency exchanger", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    }
  ]
  return (
    <section id='portfolio' className={`${styles.sec} ${styles.portfolio}`}>
       <div className={styles.content_wrapper}>
        <h1>My Recent Work <br /> <span>Portfolio</span></h1>
        <div className={styles.content}>
          {portfolioData.map(data=>{
            return(
              // <PortfolioItem data={data} />
              <PortfolioItem key={data.id} {...data} />
              )
            })}
          </div>
          <a className={styles.btn} href="https://github.com/">View all <span>&rarr;</span></a>
       </div>
    </section>
  )
}

export default Portfolio