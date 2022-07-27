import React from 'react'
import { progLangs, techSkills } from '../../../../data'
import styles from '../../HomePage.module.css'

export const ProgLang = ({title, level})=>{

  return(
      <div className={styles.progLang}>
        <span className={styles.sm_title_wrapper}>
          <span className={styles.sm_title}>{title}</span>
        </span>
          <span className={styles.progressBarOuter}>
              <span className={styles.progressBarInner} style={{width: `${level*10}%`}} ></span>
          </span>
      </div>
  )
}

const TechSkill = ({title, level})=>{
  return(
      <div className={styles.circle_outer}>
        <div className={styles.circle_inner}>
          <span className={styles.sm_title}>{title}</span>
        </div>
      </div>
    )
}

const Skills = () => {
  return (
    <section id='skills' className={`${styles.sec} ${styles.skills} ${styles.common}`}>
        <h1 className={styles.title}>My Skills</h1>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <div className={`${styles.content_left} ${styles.card}`}>
              <h3 className={styles.sub_title}>Programming Languages</h3>
              <div className={styles.content_container}>
                {progLangs.map((data)=><ProgLang key={data.id} {...data}/>)}
              </div>
            </div>
            <div className={`${styles.content_right} ${styles.card}`}>
              <h3 className={styles.sub_title}>Tools & Frameworks</h3>
              <div className={styles.content_container}>
                {techSkills.map((data)=><TechSkill key={data.id}{...data}/>)}
              </div>
            </div>
          </div>
        </div>
    </section >
  )
}

export default Skills