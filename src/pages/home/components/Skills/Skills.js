import React from 'react'
import styles from '../../HomePage.module.css'

const ProgLangs = ()=>{
  return(
    <h1>prog langs</h1>
  )
}

const TechSkills = ()=>{
  return(
      <h1>Technical Skill</h1>
    )
}

const Skills = () => {
  return (
    <section id='skills' className={`${styles.sec} ${styles.skills}`}>
          <h1 className={styles.title}>My Skills</h1>
        <div className={styles.content_wrapper}>
          <div className={styles.content_left}>
            <ProgLangs/>
          </div>
          <div className={styles.content_right}>
            <TechSkills/>
          </div>
        </div>
    </section >
  )
}

export default Skills