import React from 'react'
import styles from '../../HomePage.module.css'

export const PortfolioItem=(props)=> {
    const {img, title, desc, git_link, live_demo_link} = props
  return (
    <div className={`${styles.card}  ${styles.portfolio_item}`} >
        <div className={styles.imgbox} style={{backgroundImage:`url(${img})`}}></div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className={styles.btn_container}>
            <a href={git_link}>Github</a>
            <a href={live_demo_link}>Live Demo</a>
        </div>
    </div>
  )
}

export const UpcommingProjectItem=(props)=> {
    const {img, title, desc, tech} = props
  return (
    <div className={`${styles.card}  ${styles.upcommingProject_item}`}>
        <div className={styles.imgbox} style={{backgroundImage:`url(${img})`}}></div>
        <h2>{title}</h2>
        <p>{desc}</p>
          <h5>Features</h5>
        <div>
          {tech.map((t, idx)=>{
            return(
              <span key={idx}>{t}</span>
            )
          })}
        </div>
    </div>
  )
}
 
export const ServiceItem = ({icons, title, desc}) => {
    return (
      <div className={`${styles.card}  ${styles.services_item}`}>
        <div className={styles.iconbox}>{icons.map((icon , idx)=>{return(<span key={icon.id}>{icon.icon}</span>)})}</div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    )
}