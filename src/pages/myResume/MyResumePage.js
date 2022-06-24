import React from 'react'
import styles from './MyResumePage.module.css'
import { contactDetails, techSkills, progLangs, projectData, langs, myJourneyData, interests } from './data'

import { PersonalInfo, ContactDetail, TechnicalSkill, ProgLang, Lang, ProjectItem, MyJourneyItem, Interest,  } from './components'


function MyResumePage() {
  return (
    <section id={styles.myResumePage}>
        <div className={styles.myResume}>
          {/* top section */}
          <div className={styles.top}>
            <PersonalInfo/>
          </div>

          {/* left section */}
          <div className={styles.left}>

            {/* technical skills */}
            <div className={styles.technicalSkills}>
              <h1 className={styles.secTitle}>Technical Skills</h1>
              {techSkills.map(data => <TechnicalSkill key={data.id} {...data}/>)}
            </div>

            {/* programming languages */}
            <div className={styles.progLangs}>
              <h1 className={styles.secTitle}>Programming Languages</h1>
              {progLangs.map(data => <ProgLang key={data.id} {...data}/>)}
            </div>

            {/* languages */}
            <div className={styles.langs}>
            <h1 className={styles.secTitle}>Languages</h1>
              {langs.map(data => <Lang key={data.id} {...data}/>)}
            </div>
          </div>

          {/* right section */}
          <div className={styles.right}>

            {/* contact details */}
            <div className={styles.contactDetails}>
              {contactDetails.map(data =><ContactDetail key={data.id} {...data}/>)}
            </div>

            {/* projects */}
            <div className={styles.projects}>
              <h1 className={styles.secTitle}>Projects</h1>
              {projectData.map(data=>{return(<ProjectItem key={data.id} {...data}/>)})}
            </div>

            {/* my journey */}
            <div className={styles.myJourney}>
              <h1 className={styles.secTitle}>My Journey</h1>
              {myJourneyData.map(data=><MyJourneyItem key={data.id} data = {data} />)}
            </div>

            {/* interests */}
            <div className={styles.interests}>
              <h1 className={styles.secTitle}>Interests</h1>
              {interests.map(data => <Interest key={data.id} {...data}/>)}
            </div>
          </div>
        </div>
    </section>
  )
}

export default MyResumePage