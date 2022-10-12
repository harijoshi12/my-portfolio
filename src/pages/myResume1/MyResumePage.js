import React from 'react'
import { saveAs } from 'file-saver'

import styles from './MyResumePage.module.css'
// import CV from "../../media/pdfs/Hari's_resume.pdf"
import { contactDetails, techSkills, progLangs, projectData, langs, education, myJourneyData, interests } from './data'

import { PersonalInfo, ContactDetail, TechnicalSkill, ProgLang, Lang, Edu, ProjectItem, MyJourneyItem, Interest, } from './components'


function MyResumePage() {

  // const url1 = "http://harijoshi.tech/static/media/Hari's_resume.12daf6d4eda4e5bd952f.pdf"
  // const url2 = "http://localhost:3000/static/media/Hari's_resume.12daf6d4eda4e5bd952f.pdf"
  const url3 = "https://drive.google.com/file/d/10KjMNqfvt0f4r4QxKPcYDStJ8gxGnWrR/view?usp=sharing"

  return (
    <section id={styles.myResumePage}>
      <div className={styles.resumeWrapper}>
        <div id='myResume' className={styles.myResume}>
          {/* left section */}
          <div className={styles.left}>

            {/* top section */}
            <div className={styles.personalInfo}>
              <PersonalInfo />
            </div>

            {/* technical skills */}
            <div className={`${styles.technicalSkills} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Technical Skills</h1>
              {techSkills.map(data => <TechnicalSkill key={data.id} {...data} />)}
            </div>

            {/* programming languages */}
            <div className={`${styles.progLangs} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Programming Languages</h1>
              {progLangs.map(data => <ProgLang key={data.id} {...data} />)}
            </div>

            {/* my journey */}
            <div className={`${styles.myJourney} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>My Journey</h1>
              {myJourneyData.map(data => <MyJourneyItem key={data.id} data={data} />)}
            </div>

          </div>

          {/* right section */}
          <div className={styles.right}>

            {/* contact details */}
            <div className={styles.contactDetails}>
              {contactDetails.map(data => <ContactDetail key={data.id} {...data} />)}
              <div className={styles.bottomBorder}></div>
            </div>

            {/* projects */}
            <div className={`${styles.projects} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Projects</h1>
              {projectData.map(data => { return (<ProjectItem key={data.id} {...data} />) })}
            </div>

            {/* languages */}
            <div className={`${styles.langs} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Languages</h1>
              {langs.map(data => <Lang key={data.id} {...data} />)}
            </div>

            {/* education */}
            <div className={`${styles.edus} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Education</h1>
              {education.map(data => <Edu key={data.id} {...data} />)}
            </div>

            {/* interests */}
            <div className={`${styles.interests} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Interests</h1>
              {interests.map(data => <Interest key={data.id} {...data} />)}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => { saveAs(url3, "Hari's resume.pdf") }} className={styles.downloadResumeBtn}>
        Download Resume
      </button>
    </section>
  )
}

export default MyResumePage