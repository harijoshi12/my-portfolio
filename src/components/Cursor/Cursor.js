import React, {useEffect, useRef} from 'react'
import './Cursor.css'

function Cursor({isMousein}) {
    
  const cursor = useRef()
  const cursorPoint = useRef()

  useEffect(() => {
    window.addEventListener('mousemove', cursorfun)
    if(isMousein){
        cursor.current.classList.add('link-grow')
        cursorPoint.current.classList.add('cp-toggle')
    } else{
      cursor.current.classList.remove('link-grow')
      cursorPoint.current.classList.remove('cp-toggle')
    }
})

  function cursorfun(e){
      cursor.current.style.top = e.pageY + 'px'
      cursor.current.style.left = e.pageX + 'px'
      cursorPoint.current.style.top = e.pageY + 'px'
      cursorPoint.current.style.left = e.pageX + 'px'
  }
  
  
  return (
    <>
        <div ref={cursor} className="cursor"></div>
        <div ref={cursorPoint} className="cursor-point"></div>
    </>
  )
}

export default Cursor