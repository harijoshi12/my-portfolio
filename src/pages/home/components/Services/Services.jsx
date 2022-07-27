import React from 'react'
import {MdDesignServices} from 'react-icons/md'
import {RiReactjsLine} from 'react-icons/ri'
import {SiWordpress} from 'react-icons/si'
import {SiHiveBlockchain} from 'react-icons/si'
import {GrAndroid} from 'react-icons/gr'
import {BsApple} from 'react-icons/bs'
import {SiDjango} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import styles from '../../HomePage.module.css'
import {ServiceItem} from '../Common/Card'

const servicesData = [
  {
    id:1,
    icons: [{id:1,icon:<MdDesignServices/>}],
    title: "UI/UX",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus."
  },
  {
    id:2,
    icons: [{id:1,icon:<RiReactjsLine/>}],
    title: "Frontend Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus."
  },
  {
    id:3,
    icons: [{id:1, icon:<SiDjango/>},{id:2,icon: `/`}, {id:3, icon:<GrNode/>}],
    title: "Backend Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus."
  },
  {
    id:4,
    icons: [{id:1,icon:<SiWordpress/>}],
    title: "Wordpress Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus."
  },
  {
    id:5,
    icons: [{id:1, icon:<SiHiveBlockchain/>}],
    title: "Blockchain Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem?  Sed dolorum tempora illo consequuntur cumque, esse minus."
  },
  {
    id:6,
    icons: [{id:1, icon: <GrAndroid/>}, {id:2,icon: `/`}, {id:3, icon:<BsApple/>}],
    title: "App Development",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem? Sed dolorum tempora illo consequuntur cumque, esse minus."
  },
  
]

const Services = () => {
  return (
    <section id='services' className={`${styles.sec} ${styles.services} ${styles.common}`}>
        <h1 className={styles.title}>My Services</h1>
       <div className={styles.content_wrapper}>
        <div className={styles.content}>
          {servicesData.map(data=>{
            return(
              <ServiceItem key={data.id} {...data} />
              )
            })}
          </div>
       </div>
    </section>
  )
}

export default Services