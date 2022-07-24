import React from 'react'
import PortfolioItem from '../Portfolio/PortfolioItem'
import styles from '../../HomePage.module.css'
import portfoioItem_img1 from '../../../../media/images/portfolio/crypto.webp'
import portfoioItem_img2 from '../../../../media/images/portfolio/socialMedia.jpg'
import portfoioItem_img3 from '../../../../media/images/portfolio/ecom.jpg'

const UpcommingProjects = () => {
  const portfolioData = [
    {
      id:1,
      img:portfoioItem_img1, 
      title:"Physics Simultion App",
      desc: "Helping Students and Teachers understand better physics concepts", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:2,
      img:portfoioItem_img2, 
      title:"Personality based match making App", 
      desc: "App that will help us find like minded but complimentory to each other  people", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
    {
      id:3,
      img:portfoioItem_img3, 
      title:"Social media app for rational minded people", 
      desc: "I feel an strong need to unite all the rational people for the betterment of the society", 
      git_link:"https://github.com/", 
      live_demo_link:"https://harijoshi.in/"
    },
  ]
  return (
    <section id='upCommingProjects' className={`${styles.sec} ${styles.upCommingProjects}`}>
     <h1 className={styles.title}>My Upcomming Projects </h1>
    <div className={styles.content_wrapper}>
     <div className={styles.content}>
       {portfolioData.map(data=>{
         return(
           // <PortfolioItem data={data} />
           <PortfolioItem key={data.id} {...data} style={{height:"460px"}}/>
           )
         })}
       </div>
    </div>
 </section>
  )
}


export default UpcommingProjects