import React from 'react'
import styles from '../../HomePage.module.css'

export const PortfolioItem=(props)=> {
    const { bg, title, desc, features, git_link, live_demo_link} = props
    // const bgh= {
    //   bgGradient: 'background-color: #4158D0',
    //   backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
    // }
  return (
    <div className={`${styles.card}  ${styles.portfolio_item}`} style={bg} >
        {/* <div className={styles.imgbox} style={{backgroundImage:`url(${img})`}}></div> */}
        {/* <div className={styles.imgbox} style={bg}></div> */}
        <div className={styles.imgbox}></div>
        <h2>{title}</h2>
        <p>"{desc}"</p>
        <div>
          <h3>Features</h3>
          {features.map((f, idx)=><p key={idx}><span>&#xBB; </span> <span> {f}</span></p>)}
        </div>
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