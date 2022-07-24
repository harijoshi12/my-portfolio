import React from 'react'
import styles from '../../HomePage.module.css'

function PortfolioItem(props) {
    const {img, title, desc, git_link, live_demo_link, style} = props
  return (
    <div className={styles.portfolio_item} style={style}>
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

export default PortfolioItem