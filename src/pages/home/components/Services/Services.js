import React from 'react'
import styles from '../../HomePage.module.css'

const services = [
  {id:1},
  {id:2},
  {id:3},
  {id:4}
]
const Service = ()=>{
  return(
    <div id='services' className={styles.service}>
      <div className={styles.imgbox}>
      </div>
      <h2>Web Development</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla animi modi, atque blanditiis ratione doloribus.</p>
    </div>
  )
}
const Services = () => {
  return (
    <section className={`${styles.sec} ${styles.services}`}>
      <h1 className={styles.title}>My services</h1>
      <div className={styles.content_wrapper}>
        {services.map((service)=>{
          return(<Service key={service.id}/>)
        })}
      </div>
    </section >
  )
}

export default Services