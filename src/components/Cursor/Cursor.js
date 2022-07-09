import React, {useEffect, useRef} from 'react'
import './Cursor.css'

function Cursor({isMousein}) {
    
  const cursor = useRef()
  const cursorPoint = useRef()

  useEffect(() => {

    
    let scrollHeight = window.scrollY
    window.addEventListener("scroll", () => {
      scrollHeight = window.scrollY;
      console.log(scrollHeight);
    });
    window.addEventListener('mousemove', cursorfun)
    window.addEventListener('scroll', cursorfun)

    // cursor animation on link hover 
    if(isMousein){
        cursor.current.classList.add('link-grow')
        cursorPoint.current.classList.add('cp-toggle')
    } else{
      cursor.current.classList.remove('link-grow')
      cursorPoint.current.classList.remove('cp-toggle')
    }
    function cursorfun(e){
      cursor.current.style.top = e.clientY + scrollHeight+ 'px'
      cursor.current.style.left = e.clientX + 'px'
      cursorPoint.current.style.top = e.clientY + scrollHeight + 'px'
      cursorPoint.current.style.left = e.clientX + 'px'
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