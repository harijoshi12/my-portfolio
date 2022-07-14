import React, {useRef } from 'react'
import styles from './MyResumePage.module.css'
import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
// import DomToImage from 'dom-to-image'
import { contactDetails, techSkills, progLangs, projectData, langs, education, myJourneyData, interests } from './data'

import { PersonalInfo, ContactDetail, TechnicalSkill, ProgLang, Lang, Edu, ProjectItem, MyJourneyItem, Interest,  } from './components'


function MyResumePage() {
  const myResume = useRef()
  const resume = myResume.current
  const doc = new jsPDF(
    {
      orientation: 'p',
      unit: 'pt',
      format: 'a3',
      hotfixes: ["px_scaling"]
     }
  )
  function resumeHandler(){
    doc.html(resume, {
      callback: function (doc) {
        let pageCount = doc.internal.getNumberOfPages()
        doc.deletePage(pageCount)
        doc.save("resume.pdf");
      },
      x: 0,
      y: 0,
    });
  }
  // const [sbWidth, setSbwidth] = useState(window.innerWidth - document.documentElement.clientWidth)

  // useEffect(() => {
  //   setSbwidth(window.innerWidth - document.documentElement.clientWidth);
  //   window.addEventListener("resize", ()=>{
  //     setSbwidth(window.innerWidth - document.documentElement.clientWidth);
  //     console.log(resume.scrollWidth, resume.scrollHeight)
  //   })
  // },[resume])


  // function resumeHandler (){

  //   console.log(sbWidth)
  //   DomToImage.toJpeg(resume, {
  //       // windowWidth: resume.scrollWidth,
  //       // windowHeight: resume.scrollHeight,
  //       // scrollY: -window.pageYOffset,
  //       // scrollX: -window.pageXOffset - sbWidth/2,
  //       quality: 1,
  //       height: resume.scrollHeight,
  //       width: resume.scrollWidth
  //   }).then(function(canvas){
  //       // const imgdata = canvas.toDataURL('image/png')
  //       const pdf = new jsPDF("p", "mm", "a4")
  //       let width = pdf.internal.pageSize.getWidth()
  //       let height = pdf.internal.pageSize.getHeight()
  //       pdf.addImage(canvas, 'JPEG', 0, 0, width, height)
  //       pdf.save("mycv.pdf")
  //   }).catch(function(error){
  //       console.log(error)
  //   })
  // }
  
  
  
  return (
    <section id={styles.myResumePage}>
      <div className={styles.resumeWrapper}>
        <div id='myResume' ref={myResume} className={styles.myResume}>
          {/* left section */}
          <div className={styles.left}>

            {/* top section */}
            <div className={styles.personalInfo}>
              <PersonalInfo/>
            </div>

            {/* technical skills */}
            <div className={`${styles.technicalSkills} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Technical Skills</h1>
              {techSkills.map(data => <TechnicalSkill key={data.id} {...data}/>)}
            </div>

            {/* programming languages */}
            <div className={`${styles.progLangs} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Programming Languages</h1>
              {progLangs.map(data => <ProgLang key={data.id} {...data}/>)}
            </div>

            {/* my journey */}
            <div className={`${styles.myJourney} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>My Journey</h1>
              {myJourneyData.map(data=><MyJourneyItem key={data.id} data = {data} />)}
            </div>

          </div>

          {/* right section */}
          <div className={styles.right}>

            {/* contact details */}
            <div className={styles.contactDetails}>
              {contactDetails.map(data =><ContactDetail key={data.id} {...data}/>)}
              <div className={styles.bottomBorder}></div>
            </div>

            {/* projects */}
            <div className={`${styles.projects} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Projects</h1>
              {projectData.map(data=>{return(<ProjectItem key={data.id} {...data}/>)})}
            </div>

            {/* languages */}
            <div className={`${styles.langs} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Languages</h1>
              {langs.map(data => <Lang key={data.id} {...data}/>)}
            </div>

            {/* education */}
            <div className={`${styles.edus} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Education</h1>
              {education.map(data => <Edu key={data.id} {...data}/>)}
            </div>

            {/* interests */}
            <div className={`${styles.interests} ${styles.resumeSec}`}>
              <h1 className={styles.secTitle}>Interests</h1>
              {interests.map(data => <Interest key={data.id} {...data}/>)}
            </div>
          </div>
        </div>
      </div>
      <button onClick={resumeHandler} style={{background:"blue", padidng:"15px", color:"white", fontSize:"25px"}}>Download Resume</button>
    </section>
  )
}

export default MyResumePage