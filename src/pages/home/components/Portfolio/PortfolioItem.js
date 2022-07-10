import React from 'react'
import styles from '../../HomePage.module.css'

function PortfolioItem(props) {
    const {img, title, git_link, live_demo_link} = props
  return (
    <div className={styles.portfolio_item}>
        <div className={styles.imgbox}>
            <img src={img} alt="" />
        </div>
        <h2>{title}</h2>
        <div className={styles.btn_ontainer}>
            <a href={git_link}>Github</a>
            <a href={live_demo_link}>Live Demo</a>
        </div>
    </div>
  )
}

export default PortfolioItem