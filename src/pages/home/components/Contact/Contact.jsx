import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "../../HomePage.module.css";

const Contact = () => {
  const fnameRef =  useRef(null)
  const lnameRef =  useRef(null)
  const emailRef =  useRef(null)
  const messageRef =  useRef(null)

  useEffect(()=>{
    const inputs = [fnameRef, lnameRef, emailRef, messageRef]
    inputs.forEach(input=>{
      const label = input.current.nextElementSibling.firstElementChild
      input.current.addEventListener('focus',()=>{
        label.style.transform = `translateY(-30px)`
        label.style.fontSize = `13px`
        label.style.color = `blue`
      })
      input.current.addEventListener('blur',()=>{
        if(input.current.value !== ""){
          label.style.transform = `translateY(-30px)`
          label.style.fontSize = `13px`
          label.style.color = `blue`
        } else{
          label.style.transform = `translateY(-50%)`
          label.style.fontSize = `16px`
          label.style.color = `rgb(76, 76, 76)`
        }
      })
    })
  })

  return (
    <section id="contact" className={` ${styles.sec} ${styles.contact}`}>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <div className={styles.imgbox}></div>
          </div>

          <div className={styles.content_right}>
            <h1 className={styles.title}>Contact Me</h1>
            <form action="" autoComplete="off">

              <div className={styles.row}>
                <div className={styles.input_field}>
                  <input ref={fnameRef} type="text" name="fname" id="id_fname" />
                  <label htmlFor="id_fname"><span >First Name</span></label>
                </div>
                <div className={styles.input_field}>
                  <input ref={lnameRef} type="text" name="lname" id="id_fname" />
                  <label htmlFor="id_lname"><span >Last Name</span></label>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.input_field}>
                  <input ref={emailRef} type="email" name="email" id="id_email" />
                  <label htmlFor="id_email"><span >E-mail</span></label>
                </div>
              </div>

              <div className={styles.row}>
                <div className={`${styles.input_field} ${styles.textarea}`}>
                  <textarea ref={messageRef} name="message" id="id_message" rows="10"></textarea>
                  <label htmlFor="id_message"><span >Message</span></label>
                </div>
              </div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
