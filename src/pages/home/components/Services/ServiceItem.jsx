import React from 'react'
import styles from '../../HomePage.module.css'

const ServiceItem = ({icons, title, desc}) => {
  return (
    <div className={styles.services_item}>
        <div className={styles.iconbox}>{icons.map((icon , idx)=>{return(<span key={icon.id}>{icon.icon}</span>)})}</div>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceItem

