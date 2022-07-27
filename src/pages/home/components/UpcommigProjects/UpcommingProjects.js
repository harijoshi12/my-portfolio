import React from 'react'
import {UpcommingProjectItem} from '../Common/Card'
import styles from '../../HomePage.module.css'

import physics from '../../../../media/images/projects/physics.png'
import dating from '../../../../media/images/projects/dating.png'
import social_media from '../../../../media/images/projects/social_media.png'
import blockchain from '../../../../media/images/projects/blockchain.png'

const UpcommingProjects = () => {
  console.log(physics)
  const UpcommingProjecsData = [
    {
      id:1,
      img:physics, 
      title:"Physics Simultion App",
      desc: "Helping Students and Teachers understand better physics concepts", 
      tech: ['Unity', 'Canvas', 'Three.js', 'React', 'React Native', 'Firebase',  'Node.js', 'MongoDb']
    },
    {
      id:2,
      img:dating, 
      title:"Personality based match making App", 
      desc: "App that will help us find like minded but complimentory to each other  people", 
      tech: ['A.I/M.L', 'React', 'Next.js', 'React Native', 'Firebase',  'Node.js', 'MongoDb']
    },
    {
      id:3,
      img: social_media, 
      title:"Social media app for rational minded people", 
      desc: "I feel an strong need to unite all the rational people for the betterment of the society", 
      tech: ['A.I/M.L', 'React', 'Next.js', 'React Native', 'Firebase',  'Node.js', 'MongoDb']
    },
    {
      id:4,
      img: blockchain, 
      title:"Blockchain based Polling & voting app", 
      desc: "for resolving different social issues I believe a decentralized polling and voting technogy is neccesory", 
      tech: ['Blockchian', 'Solidity' ,'React', 'Next.js', 'React Native', 'Firebase',  'Node.js', 'MongoDb']
    },
  ]
  return (
    <section id='upCommingProjects' className={`${styles.sec} ${styles.upCommingProjects} ${styles.common}`}>
     <h1 className={styles.title}>My Upcomming Projects </h1>
    <div className={styles.content_wrapper}>
     <div className={styles.content}>
       {UpcommingProjecsData.map(data=>{
         return(
           <UpcommingProjectItem key={data.id} {...data}/>
           )
         })}
       </div>
    </div>
 </section>
  )
}


export default UpcommingProjects