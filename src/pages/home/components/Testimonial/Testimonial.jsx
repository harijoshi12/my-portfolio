import React, {forwardRef} from 'react'
import styles from '../../HomePage.module.css'

const Testimonial = (props, ref) => {
  return (
    <section id='testimonial' ref={ref} className={styles.sec}>
        <div className={styles.content_wrapper}>Testimonials</div>
    </section >
  )
}

export default forwardRef(Testimonial)