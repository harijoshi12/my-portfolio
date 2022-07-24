import React from 'react'
import styles from '../../HomePage.module.css'

const ServiceItem = ({icon, title, desc}) => {
  return (
    <div className={styles.services_item}>
        <div className={styles.iconbox}>{icon.map((ic , idx)=>{
        return(<>
            {idx >0 ? <span className={styles.separator}>/</span>: null}
            <span>{ic}</span>
            </>)
        })}</div>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceItem