import React, {useEffect, useRef} from 'react'
import './Cursor.css'

function Cursor({isMousein}) {
    
  const cursor = useRef()
  const cursorPoint = useRef()

  useEffect(() => {
    
    let scrollHeight = window.scrollY
    let cursorY = 0
 
    window.addEventListener("mousemove", (e)=>{
      cursorY = e.clientY
      cursor.current.style.top = e.pageY + 'px'
      cursor.current.style.left = e.clientX + 'px'
      cursorPoint.current.style.top = e.pageY + 'px'
      cursorPoint.current.style.left = e.clientX + 'px'
    })
    window.addEventListener("scroll", () => {
      scrollHeight = window.scrollY;
      cursor.current.style.top = cursorY + scrollHeight+ 'px'
      cursorPoint.current.style.top = cursorY + scrollHeight+'px'
    });

    // cursor animation on link hover 
    if(isMousein){
        cursor.current.classList.add('link-grow')
        cursorPoint.current.classList.add('cp-toggle')
    } else{
      cursor.current.classList.remove('link-grow')
      cursorPoint.current.classList.remove('cp-toggle')
    }
  })
  
  return (
    <>
        <div ref={cursor} className="cursor"></div>
        <div ref={cursorPoint} className="cursor-point"></div>
    </>
  )
}

export default Cursor