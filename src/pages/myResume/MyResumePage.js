import React from 'react'
import styles from './MyResumePage.module.css'
import { projectData, myJourneyData } from './data'


function ProjectItem({title, desc}){
  return(
    <div className={styles.projectItem}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}
function MyJourneyItem(props){
  const {time, jobTitle, companyName, desc } = props.data
  return(
      <div className={styles.myJourneyItem}>
        <span className={styles.time}>{time}</span>
        <h1 className={styles.title}><span>{jobTitle}</span> | <span>{companyName}</span></h1>
        <p className={styles.desc}>{desc}</p>
      </div>
    )
}

function MyResumePage() {
  return (
    <section id={styles.myResumePage}>
        <div className={styles.myResume}>
          {/* top section */}
          <div className={styles.top}>
            <h1>Are we good fit?</h1>
            <div className={styles.imgboxOuter}>
              <div className={styles.imgboxInner}>
                <div className={styles.imagebox}></div>
                <h1>Hari Joshi</h1>
                <h2>FullStack Developer</h2>
              </div>
            </div>
            <h2>"The Best Developer on Planet"</h2>
          </div>
          {/* left section */}
          <div className={styles.left}>

          </div>
          {/* right section */}
          <div className={styles.right}>
            {/* contact details */}
            <div className={styles.contact}>
              <a href="mailto:mr.hariprasdjoshi@gmail.com" rel="noopener noreferrer" target="_blank"><span>Email:</span> mr.hariprasdjoshi@gmail.com</a>
              <a href="tel:+9634090498" rel="noopener noreferrer"><span>Phone:</span> 9634090498</a>
              <a href="https://goo.gl/maps/pvYsfgd7Kv9RYVut9" rel="noopener noreferrer" target="_blank"><span>location:</span> Dehradun, India</a>
              <a href="https://www.harijoshi.info/" rel="noopener noreferrer" target="_blank"><span>My Website:</span> www.harijoshi.info</a>
              <a href="https://www.linkedin.com/in/harijoshi123/" rel="noopener noreferrer" target="_blank"><span>Linkedin:</span> www.linkedin.com/in/harijoshi123</a>
            </div>

            {/* projects */}
            <div className={styles.projects}>
              <h1>Projects</h1>
              {projectData.map(data=>{return(<ProjectItem key={data.id} {...data}/>)})}
            </div>

            {/* my journey */}
            <div className={styles.myJourney}>
              {myJourneyData.map(data=><MyJourneyItem key={data.id} data = {data} />)}
            </div>

          </div>
        </div>
    </section>
  )
}

export default MyResumePage