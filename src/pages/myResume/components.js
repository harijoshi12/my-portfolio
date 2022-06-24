import styles from './MyResumePage.module.css'

export const PersonalInfo = () => {
    return (
        <>
            <h1>Are we good fit?</h1>
            <div className={styles.imgboxOuter}>
                <div className={styles.imgboxInner}>
                    <div className={styles.imagebox}></div>
                    <h1>Hari Joshi</h1>
                    <h2>FullStack Developer</h2>
                </div>
            </div>
            <h2>"The Best Developer on Planet"</h2>
        </>
    )
}

export const ContactDetail = (props) =>{
    return(
        <a href={props.link} rel="noopener noreferrer" target="_blank"><span>{props.icon}</span> {props.info}</a>
    )
}

export const TechnicalSkill = ({title}) => {
    return(
        <span className={styles.technicalSkill}>
            {title}
        </span>
    )
}

export const ProgLang = ({title, level})=>{
    return(
        <div className={styles.progLang}>
            <span className={styles.title}>{title}</span>
            <span className={styles.progressBarOuter}>
                <span className={styles.progressBarInner}></span>
            </span>
        </div>
    )
}

export const Lang = ({title, level}) => {
    return(
        <div className={styles.lang}>
            <span className={styles.title}>{title}</span>
            <span className={styles.level}>{level}</span>
        </div>
    )
}

export function ProjectItem({ title, desc }) {
    return (
        <div className={styles.projectItem}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export function MyJourneyItem(props) {
    const { time, jobTitle, companyName, desc } = props.data
    return (
        <div className={styles.myJourneyItem}>
            <span className={styles.time}>{time}</span>
            <h1 className={styles.title}><span>{jobTitle}</span> | <span>{companyName}</span></h1>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export const Interest = ({ title }) => {
    return (
        <span className={styles.interest}>{title}</span>
    )
}