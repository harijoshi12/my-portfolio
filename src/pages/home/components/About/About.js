import React from 'react'
import styles from '../../HomePage.module.css'

const About = () => {
  return (
    <section className={`${styles.sec} ${styles.about}`}>
        <div className={styles.content_wrapper}>
            <div className={styles.content_left}>
                <div className={styles.imgbox}></div>
            </div>
            <div className={styles.content_right}>
                <h1>Who I am <span></span></h1>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores praesentium repellendus reprehenderit non, natus molestiae minima recusandae velit rerum explicabo nemo quisquam ratione exercitationem aliquid iste quas nesciunt vel odio.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quaerat voluptatibus temporibus sunt illum a enim accusamus totam magnam necessitatibus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci assumenda provident aspernatur deserunt magni ea suscipit dolores placeat veritatis?</p>
            </div>
        </div>
    </section >
  )
}

export default About